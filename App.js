import React, { Component } from 'react';
import {
  StatusBar,
  TouchableHighlight,
  Text,
  View,
  Image
} from 'react-native';
import styles from './styles/Styles'
import colours from './styles/Colours'

export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
            backgroundColor={colours.darkRed}
            barStyle="light-content"
        />
        <Image source={require('./img/HomeImage.png')}/>
        <Text style={styles.appTitleText}>
          Pokédex
        </Text>
        <TouchableHighlight style={styles.button}>
          <Text style={styles.buttonText}>
            OPEN
          </Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.button}>
          <Text style={styles.buttonText}>
            SEARCH
          </Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.button}>
          <Text style={styles.buttonText}>
            FILTER
          </Text>
        </TouchableHighlight>
      </View>
    );
  }
}
