import React, { Component } from 'react';
import {
    Text,
    ScrollView,
    View,
    Image
} from 'react-native';
import {styles} from "../styles/Styles";
import EvolutionLine from "./EvolutionLine";
import Types from "./Types";
import PokeAPIRequest from "../modules/PokeAPIRequest";
import Appearance from "./Appearance";

let par = new PokeAPIRequest();

class PokemonScreen extends React.Component {
    static navigationOptions = ({navigation}) => {
        return {
            title: navigation.state.params.pokemon.formattedId + ' ' + navigation.state.params.pokemon.name,
            headerTitleStyle: styles.pokemonHeader,
            headerRight: <View/>
        };
    };

    constructor(props){
        super(props);
        this.state = {
            id: this.props.navigation.state.params.pokemon.id,
            name: this.props.navigation.state.params.pokemon.name,
            sprite: this.props.navigation.state.params.pokemon.sprite,
            types: this.props.navigation.state.params.pokemon.types,
            evolutionImages: [],
            height: null,
            weight: null,
            shape: null
        }
    }

    componentWillMount() {
        par.getPokemonSpeciesDetails(this.state.id, (pokemonSpeciesDetails) => {
            this.setState ({
                generation: pokemonSpeciesDetails.generation,
                textEntry: pokemonSpeciesDetails.textEntry,
                evolutionImages: pokemonSpeciesDetails.evolutionImages,
                shape: pokemonSpeciesDetails.shape
            });
        });
        par.getPokemon(this.state.id, (pokemonDetails) => {
            this.setState ({
                height: pokemonDetails.height,
                weight: pokemonDetails.weight
            })
        })
    }

    _getAppearanceData() {
        return [
            {meta: "Height", data: `${this.state.height} m`},
            {meta: "Weight", data: `${this.state.weight} kg`},
            {meta: "Shape", data: this.state.shape}
        ]
    }

    render() {
        return (
            <ScrollView style={styles.defaultScreens}>
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
                <View style={styles.textEntryContainer}>
                    <Text style={styles.textEntry}>{this.state.textEntry}</Text>
                </View>
                <EvolutionLine images={this.state.evolutionImages} />
                <View style={styles.pokemonScreenColContainer}>
                    <View style={styles.pokemonScreenCol}>
                        <Types types={this.state.types}/>
                    </View>
                    <View style={styles.pokemonScreenCol}>
                        <Appearance data={this._getAppearanceData()}/>
                    </View>
                </View>
                <View style={{height: 10}}/>
            </ScrollView>
        );
    }
}

export default PokemonScreen