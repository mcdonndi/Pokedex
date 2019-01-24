import React, { Component } from 'react';
import {
  StatusBar,
  TouchableHighlight,
  Text,
  View,
  Image
} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import PokedexScreen from './components/Pokedex'
import { styles } from './styles/Styles'
import colours from './styles/Colours'

class HomeScreen extends Component<{}> {
    static navigationOptions = {
        header: null
    };

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
        <TouchableHighlight style={styles.button}
          onPress={() => this.props.navigation.navigate('Pokedex')}>
          <Text style={styles.buttonText}>
            OPEN
          </Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.button}
           onPress={() => console.log("Hello")}>
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

const RootStack = createStackNavigator(
    {
        Home: HomeScreen,
        Pokedex: PokedexScreen,
    },
    {
        initialRouteName: 'Home',
        navigationOptions: {
        headerStyle: {
            backgroundColor: colours.mainRed,
        },
        headerTintColor: colours.whiteRed,
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    },
    }
);

export default class App extends React.Component {
    render() {
        return <RootStack />;
    }
}
