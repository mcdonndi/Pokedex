import React, { Component } from 'react';
import {
    Text,
    View,
    Image
} from 'react-native';
import {styles} from "../styles/Styles";

class PokemonScreen extends React.Component {
    static navigationOptions = ({navigation}) => {
        return {
            title: navigation.state.params.pokemon.id + ' ' + navigation.state.params.pokemon.name,
            headerTitleStyle: styles.pokemonHeader,
            headerRight: <View/>
        };
    };

    constructor(props){
        super(props);
        this.state = {
            id: this.props.navigation.state.params.pokemon.id,
            name: this.props.navigation.state.params.pokemon.name,
            sprite: this.props.navigation.state.params.pokemon.sprite
        }
    }

    render() {
        return (
            <View style={styles.defaultScreens}>
                <View style={styles.pokemonImageContainer}>
                    <Image
                        source={{
                            uri: this.state.sprite,
                            method: 'POST',
                            headers: {
                                Pragma: 'no-cache',
                            }
                        }}
                        style={{width: 300, height: 300}}
                    />
                </View>
            </View>
        );
    }
}

export default PokemonScreen