import React, { Component } from 'react';
import {
    Text,
} from 'react-native';
import {Card} from 'react-native-elements'
import {styles} from "../styles/Styles"

class Abilities extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <Card containerStyle={styles.pokemonCardsContainer} titleStyle={styles.pokemonCardsTitleHalf} title="Abilities">
                {this.props.abilities.map((ability, i) => {
                    return (
                        <Text key={i} style={styles.abilitiesData}>{'\u2022'} {ability}</Text>
                    )
                })}
            </Card>
        );
    }
}

export default Abilities