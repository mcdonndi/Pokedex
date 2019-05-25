import React, { Component } from 'react';
import {
    Text
} from 'react-native';

class PokemonScreen extends React.Component {
    static navigationOptions = {
        title: 'Pokémon'
    };

    render() {
        return (
            <Text>Pokémon Screen</Text>
        );
    }
}

export default PokemonScreen