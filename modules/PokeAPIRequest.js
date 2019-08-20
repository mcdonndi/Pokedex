import React from 'react'

genIntText = require('../configs/generationTextToIntMapping.json');
textEntryVers = require('../configs/textEntryVersions.json');

export default class PokeAPIRequest{
    getPokemon = (pokeID, cb) => {
        fetch('https://pokeapi.co/api/v2/pokemon/' + pokeID)
            .then((response) => response.json())
            .then((responseJson) => {
                let pokemon = {
                    id: responseJson.id,
                    name: this._capitalise(responseJson.name),
                    frontSprite: responseJson.sprites.front_default,
                    types: this._get_types(responseJson.types)};
                cb(pokemon);
            })
            .catch((error) => {
                cb(error.message.toString());
            });
    };

    getPokemonSpeciesDetails = (pokeID, cb) => {
        fetch('https://pokeapi.co/api/v2/pokemon-species/' + pokeID)
            .then((response) => response.json())
            .then((responseJson) => {
                this._getEvolutionIds(responseJson.evolution_chain.url, (evolutionIds) => {
                    this._getEvolutionImages(evolutionIds)
                        .then((evolutionImages) => {
                            let pokemonEntryDetails = {
                                generation: this._convertGenIntToText(responseJson.generation.name),
                                textEntry: this._getTextEntry(responseJson.generation.name, responseJson.flavor_text_entries),
                                evolutionImages: evolutionImages
                            };
                            cb(pokemonEntryDetails);
                        })
                        .catch((error) => console.error(error))
                });
            })
            .catch((error) => console.error(error));
    };

    _get_types(types){
        type_names = [];
        for (t of types) {
            type_names.push(t.type.name)
        }
        return type_names;
    }

    _getTextEntry(genText, textEntries){
        generation = this._convertGenIntToText(genText);
        version = this._getTextEntryVersion(generation);
        for (textEntry of textEntries) {
            if (textEntry.language.name === 'en' && textEntry.version.name === version) {
                return this._removeEscapeCharacters(textEntry.flavor_text);
            }
        }
    }

    _removeEscapeCharacters(s) {
        return s.replace(/\n/g, ' ');
    }

    _getTextEntryVersion(generation){
        for (item of textEntryVers) {
            if (item.generation === generation) {
                return item.version;
            }
        }
    };

    _getEvolutionImages(evolutionIds){
        images = [];
        for (id of evolutionIds) {
            images.push(new Promise((resolve, reject) => {
                this._getPokemonImage(id, (image) => {
                    if (image) {
                        resolve(image);
                    }
                    else {
                        reject("No evolution images found")
                    }
                });
            }));
        }
        return Promise.all(images);
    }

    _getEvolutionIds(url, cb) {
        evolutionIds = [];
        fetch(url)
            .then((response) => response.json())
            .then((responseJson) => {
                evolutionIds.push(this._stripUrlForId(responseJson.chain.species.url));
                next = responseJson.chain.evolves_to;
                while (next.length !== 0) {
                    evolutionIds.push(this._stripUrlForId(next[0].species.url));
                    next = next[0].evolves_to;
                }
                cb(evolutionIds);
            })
            .catch((error) => {
                cb(error.message.toString());
            });
    }

    _getPokemonImage(pokeID, cb) {
        fetch('https://pokeapi.co/api/v2/pokemon/' + pokeID)
            .then((response) => response.json())
            .then((responseJson) => {
                frontSprite = responseJson.sprites.front_default;
                cb(frontSprite);
            })
            .catch((error) => {
                cb(console.error(error));
            });
    }

    _stripUrlForId(url) {
        return url.split('/').reverse()[1];
    }

    _convertGenIntToText(genText){
        for (item of genIntText) {
            if (item.text === genText) {
                return item.integer;
            }
        }
    };

    _capitalise(str){
        return str.slice(0,1).toUpperCase() + str.slice(1, str.length);
    }
};