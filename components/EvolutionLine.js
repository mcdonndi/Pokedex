import React, { Component } from 'react';
import {
    View,
    Text,
    Image
} from 'react-native';
import {Card} from 'react-native-elements'
import {styles} from "../styles/Styles";

class EvolutionLine extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <Card containerStyle={styles.pokemonCardsContainer} titleStyle={styles.pokemonCardsTitleFull} title="Evolution Line">
                <View style={styles.evolutionImagesContainer}>
                {this.props.images.map((image, key) =>
                    <View key={key} style={styles.evolutionImageAndArrowContainer}>
                        <Image
                        source={{
                            uri: image,
                            method: 'POST',
                            headers: {
                                Pragma: 'no-cache',
                            }
                        }}
                        style={{width: 100, height: 100}}
                        />
                        {(key < this.props.images.length - 1) ? <Text style={styles.arrowText}>&#10140;</Text> : <Text/>}
                    </View>
                )}
                </View>
            </Card>
        );
    }
}

export default EvolutionLine