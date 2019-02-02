import React, { Component } from 'react';
import {
    Text,
    View,
    Image
} from 'react-native';
import { styles, types } from '../styles/Styles'
import colours from '../styles/Colours'
import PokeAPIRequest from "../modules/PokeAPIRequest";

let par = new PokeAPIRequest();

class PokedexEntry extends React.Component {

    constructor (props) {
        super(props);
        console.log(this.props.id);
        this.state = {
            pokemon: null
        }
    }

    componentWillMount() {
        console.log("will mount");
        par.getPokemon(this.props.id, (pokemon) => {
            console.log("Debug message");
            console.log(pokemon);
            this.setState ({
                id: this.formatId(this.props.id),
                name: this.Capitalise(pokemon.name),
                sprite: pokemon.frontSprite,
                types: pokemon.types,
                typesCapitalised: this.Capitalise(pokemon.types)
            });
        });

    }

    Capitalise(str){
        return str.slice(0,1).toUpperCase() + str.slice(1, str.length);
    }

    formatId(id) {
        idStr = "" + id;
        pad = "#000";
        return pad.substring(0, pad.length - idStr.length) + idStr
    }

    render() {
        return (
            <View style={styles.pokedexEntryContainer}>
                <View style={styles.pokedexEntry}>
                    <Text style={styles.pokemonName}>{this.state.id} {this.state.name}</Text>
                    <Image
                        source={{
                            uri: this.state.sprite,
                            method: 'POST',
                            headers: {
                                Pragma: 'no-cache',
                            }
                        }}
                        style={{width: 150, height: 150}}
                    />
                    <View style={types(this.state.types).typeContainer}>
                        <Text style={{color: colours.white}}>{this.state.typesCapitalised}</Text>
                    </View>
                </View>
            </View>
        );
    }
}

export default PokedexEntry