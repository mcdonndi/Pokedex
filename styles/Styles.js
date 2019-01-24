import { StyleSheet } from 'react-native';
import colours from './Colours'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colours.mainRed,
        paddingBottom: 10
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
        flex: 1
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
        alignItems: 'center',
        justifyContent: 'center'
    },
    pokemonName: {
        fontSize: 16,
        color: colours.black
    }
});

const types = (type) => StyleSheet.create({
    typeContainer: {
        backgroundColor: colours[type],
        paddingHorizontal: 5,
        borderRadius: 5
    }
});

export { styles, types }