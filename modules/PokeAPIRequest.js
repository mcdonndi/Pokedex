import React from 'react'

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

    _get_types(types){
        type_names = [];
        for (t of types) {
            type_names.push(t.type.name)
        }
        return type_names;
    }

    _capitalise(str){
        return str.slice(0,1).toUpperCase() + str.slice(1, str.length);
    }
};