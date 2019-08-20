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
            evolutionImages: []
        }
    }

    componentWillMount() {
        par.getPokemonSpeciesDetails(this.state.id, (pokemonEntryDetails) => {
            this.setState ({
                generation: pokemonEntryDetails.generation,
                textEntry: pokemonEntryDetails.textEntry,
                evolutionImages: pokemonEntryDetails.evolutionImages//["https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png","https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png","https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png"]
            });
        });

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

                    </View>
                </View>
            </ScrollView>
        );
    }
}

export default PokemonScreen