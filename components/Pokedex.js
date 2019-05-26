import React, { Component } from 'react';
import {
    TouchableHighlight,
    View,
    FlatList
} from 'react-native';
import PokedexEntry from './PokedexEntry'
import { styles } from '../styles/Styles'

const ITEM_LAYOUT_HEIGHT = styles.pokedexEntry.height + styles.pokedexSeparator.height;

class PokedexScreen extends React.Component {
    static navigationOptions = {
        title: 'Pokédex'
    };

    constructor (props) {
        super(props);
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        let data = [];
        for (let i = 1; i <= 807; i++){
            data.push({key: i})
        }
        this.setState({
            data: data
        });
    }

    renderSeparator = () => {
        return <View style={styles.pokedexSeparator}/>
    };

    render() {
        return (
            <FlatList
                style={styles.defaultScreens}
                initialNumToRender={8}
                numColumns={2}
                maxRenderPerBatch={2}
                windowSize={5}
                data={this.state.data}
                getItemLayout={(data, index) => (
                    {length: ITEM_LAYOUT_HEIGHT, offset: ITEM_LAYOUT_HEIGHT * index, index}
                )}
                ItemSeparatorComponent={this.renderSeparator}
                renderItem={({item}) =>
                    <PokedexEntry id={item.key} navigation={this.props.navigation}/>
                }
            />
        );
    }
}

export default PokedexScreen