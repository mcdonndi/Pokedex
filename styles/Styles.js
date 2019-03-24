import { StyleSheet } from 'react-native';
import colours from './Colours'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colours.mainRed
    },
    appTitleText: {
        fontFamily: 'Courier New',
        fontSize: 48,
        fontStyle: 'italic',
        color: colours.whiteRed
    },
    button: {
        backgroundColor: colours.mainBlue,
        width: '60%',
        padding: 10,
        margin: 5,
        alignItems: 'center',
        borderRadius: 10
    },
    buttonText: {
        fontSize: 20,
        color: colours.whiteBlue
    },
    pokedex: {
        backgroundColor: colours.whiteRed,
        flex: 1,
        paddingBottom: 10
    },
    pokedexRow: {
        flexDirection: 'column',
        paddingTop: 10
    },
    pokedexColumn: {
        flexDirection: 'row',
        paddingHorizontal: 5,
        flex: 1
    },
    pokedexEntryContainer: {
        width: '50%',
    },
    pokedexEntry: {
        backgroundColor: colours.white,
        marginHorizontal: 5,
        padding: 10,
        borderWidth: 2,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center'
    },
    pokemonName: {
        fontSize: 16,
        color: colours.black
    },
    typesContainer: {
        flexDirection: 'row'
    }
});

const types = (type) => StyleSheet.create({
    typeContainer: {
        backgroundColor: colours[type],
        paddingHorizontal: 5,
        paddingVertical: 2,
        marginHorizontal: 2,
        borderRadius: 5,
        overflow: 'hidden'
    }
});

export { styles, types }