import React from 'react'

export default class PokeAPIRequest{
    getPokemon = (pokeID, cb) => {
        fetch('https://pokeapi.co/api/v2/pokemon/' + pokeID)
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson);
                let pokemon = {
                    id: responseJson.id,
                    name: responseJson.name,
                    frontSprite: responseJson.sprites.front_default,//frontSprite,
                    types: responseJson.types[0].type.name};
                console.log(pokemon);
                cb(pokemon);
            })
            .catch((error) => {
                cb(error.message.toString());
            });
    };
};