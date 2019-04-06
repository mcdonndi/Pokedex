import React, { Component } from 'react';
import {
    ScrollView,
    View,
    FlatList
} from 'react-native';
import PokedexEntry from './PokedexEntry'
import { styles } from '../styles/Styles'

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
            <ScrollView>
                <FlatList style={styles.pokedex}
                    initialNumToRender={6}
                    numColumns={2}
                    maxToRenderPerBatch={2}
                    onEndReachedThreshold={0.1}
                    data={this.state.data}
                    ItemSeparatorComponent={this.renderSeparator}
                    renderItem={({item}) => <PokedexEntry id={item.key}/>}
                />
            </ScrollView>
        );
    }
}

export default PokedexScreen