import React, { Component } from 'react';
import {
    View,
    Text,
} from 'react-native';
import {Card} from 'react-native-elements'
import {styles, types} from "../styles/Styles"

class Types extends React.Component {
    constructor(props){
        super(props);
    }

    _capitalise(str){
        return str.slice(0,1).toUpperCase() + str.slice(1, str.length);
    }

    render() {
        return (
            <Card containerStyle={styles.pokemonCardsContainer} titleStyle={styles.pokemonCardsTitle} title="Types">
                {this.props.types.map((type, i) => {
                    return (
                        <View key={i} style={types(type).pokemonTypeContainer}>
                            <Text style={types(type).pokemonTypeText}>{this._capitalise(type)}</Text>
                        </View>
                    )
                })}
            </Card>
        );
    }
}

export default Types