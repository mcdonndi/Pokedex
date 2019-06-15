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

    getPokemonEntryDetails = (pokeID, cb) => {
        fetch('https://pokeapi.co/api/v2/pokemon-species/' + pokeID)
            .then((response) => response.json())
            .then((responseJson) => {
                let pokemonEntryDetails = {
                    generation: this._convertGenIntToText(responseJson.generation.name),
                    textEntry: this._getTextEntry(responseJson.generation.name, responseJson.flavor_text_entries)};
                cb(pokemonEntryDetails);
            })
            .catch((error) => {
                cb(error.message.toString());
            });
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