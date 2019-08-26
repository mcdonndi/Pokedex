import React, { Component } from 'react';
import {
    View,
    Text,
} from 'react-native';
import {Card} from 'react-native-elements'
import {styles} from "../styles/Styles"

class Appearance extends React.Component {
    constructor(props){
        super(props);
    }

    renderRow(id, meta, data) {
        return (
            <View key = {id} style={styles.tableRow}>
                <View style={styles.tableLeftCol} >
                    <Text style={styles.tableLeftColText} >{meta}</Text>
                </View>
                <View style={styles.tableRightCol} >
                    <Text style={styles.tableRightColText} >{data}</Text>
                </View>
            </View>
        )
    }

    render() {
        return (
            <Card containerStyle={styles.pokemonCardsContainer} titleStyle={styles.pokemonCardsTitleHalf} title="Appearance">
                {this.props.data.map((d, i) => {
                    return (
                        this.renderRow(i, d.meta, d.data)
                    )
                })}
            </Card>
        );
    }
}

export default Appearance