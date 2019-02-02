import React, { Component } from 'react';
import {
    Text,
    ScrollView,
    View,
} from 'react-native';
import PokedexEntry from './PokedexEntry'
import { styles } from '../styles/Styles'

class PokedexScreen extends React.Component {
    static navigationOptions = {
        title: 'Pokédex'
    };

    render() {
        return (
            <ScrollView>
                <View style={styles.pokedex}>
                    <View style={styles.pokedexRow}>
                        <View style={styles.pokedexColumn}>
                            <PokedexEntry id={1}/>
                            <PokedexEntry id={2}/>
                        </View>
                    </View>
                    <View style={styles.pokedexRow}>
                        <View style={styles.pokedexColumn}>
                            <PokedexEntry id={3}/>
                            <PokedexEntry id={4}/>
                        </View>
                    </View>
                    <View style={styles.pokedexRow}>
                        <View style={styles.pokedexColumn}>
                            <PokedexEntry id={5}/>
                            <PokedexEntry id={6}/>
                        </View>
                    </View>
                    <View style={styles.pokedexRow}>
                        <View style={styles.pokedexColumn}>
                            <PokedexEntry id={7}/>
                            <PokedexEntry id={8}/>
                        </View>
                    </View>
                    <View style={styles.pokedexRow}>
                        <View style={styles.pokedexColumn}>
                            <PokedexEntry id={9}/>
                            <PokedexEntry id={10}/>
                        </View>
                    </View>
                    <View style={styles.pokedexRow}>
                        <View style={styles.pokedexColumn}>
                            <PokedexEntry id={11}/>
                            <PokedexEntry id={12}/>
                        </View>
                    </View>
                </View>
            </ScrollView>
        );
    }
}

export default PokedexScreen