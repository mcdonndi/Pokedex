import React, { Component } from 'react';
import {
    Text,
    View,
} from 'react-native';
import styles from '../styles/Styles'

class PokedexScreen extends React.Component {
    static navigationOptions = {
        title: 'Pokédex'
    };

    render() {
        return (
            <View style={styles.pokedex}>
                <Text>Pokédex Screen</Text>
            </View>
        );
    }
}

export default PokedexScreen