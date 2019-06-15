import React, { Component } from 'react';
import {
    Text,
    View,
    Image,
    TouchableHighlight
} from 'react-native';
import { styles, types } from '../styles/Styles'
import colours from '../styles/Colours'
import PokeAPIRequest from "../modules/PokeAPIRequest";

let par = new PokeAPIRequest();

class PokedexEntry extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            id: null,
            name: null,
            sprite: null,
            types: []
        }
    }

    componentWillMount() {
        par.getPokemon(this.props.id, (pokemon) => {
            this.setState ({
                id: this.props.id,
                formattedId: this._formatId(this.props.id),
                name: pokemon.name,
                sprite: pokemon.frontSprite,
                types: pokemon.types.reverse(),
            });
        });

    }

    _capitalise(str){
        return str.slice(0,1).toUpperCase() + str.slice(1, str.length);
    }

    _formatId(id) {
        idStr = "" + id;
        pad = "#000";
        return pad.substring(0, pad.length - idStr.length) + idStr
    }

    _onPress() {
        this.props.navigation.navigate(
            'Pokemon',
            {pokemon: this.state}
        )
    }

    render() {
        return (
            <TouchableHighlight style={styles.pokedexEntryContainer}
                onPress={() => this._onPress()}>
                <View style={[styles.pokedexEntry, types(this.state.types[0]).typeBorder]}>
                    <Text style={styles.pokemonName}>{this.state.formattedId} {this.state.name}</Text>
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
                    <View style={styles.typesContainer}>
                        {this.state.types.map((type, i) => {
                            return (
                                <View key={i} style={types(type).typeContainer}>
                                    <Text style={{color: colours.white}}>{this._capitalise(type)}</Text>
                                </View>
                            )
                        })}
                    </View>
                </View>
            </TouchableHighlight>
        );
    }
}

export default PokedexEntry