import React, { Component } from 'react';
import {
    View,
    FlatList
} from 'react-native';
import PokedexEntry from './PokedexEntry'
import { styles } from '../styles/Styles'

const ITEM_LAYOUT_HEIGHT = styles.pokedexEntry.height + styles.pokedexSeparator.height;
const NUM_POKEMON = 807

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
        for (let i = 1; i <= NUM_POKEMON + 2; i++){
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
                renderItem={({item}) => {
                    if (item.key >= NUM_POKEMON + 1) {
                        return <View style={{height: 10}}/>
                    } else {
                        return <PokedexEntry id={item.key} navigation={this.props.navigation}/>
                    }
                }}
            />
        );
    }
}

export default PokedexScreen