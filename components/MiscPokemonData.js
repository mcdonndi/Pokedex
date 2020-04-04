import React, { Component } from 'react';
import {
    Text,
} from 'react-native';
import {Card} from 'react-native-elements'
import {styles} from "../styles/Styles"

class MiscPokemonData extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <Card containerStyle={styles.pokemonCardsContainer} titleStyle={styles.pokemonCardsTitleHalf} title={this.props.title}>
                <Text style={styles.miscPokemonData}>{this.props.data}</Text>
            </Card>
        );
    }
}

export default MiscPokemonData