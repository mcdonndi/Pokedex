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
    defaultScreens: {
        backgroundColor: colours.whiteRed,
        flex: 1,
        paddingVertical: 10
    },
    pokedexSeparator: {
        height: 10
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
        justifyContent: 'center',
        height: 220
    },
    pokemonName: {
        fontSize: 16,
        color: colours.black
    },
    typesContainer: {
        flexDirection: 'row'
    },
    pokemonHeader: {
        textAlign: 'center',
        flex: 1,
        fontSize: 28
    },
    pokemonImageContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    textEntryContainer: {
        borderColor: colours.grey,
        borderWidth: 2,
        borderRadius: 10,
        backgroundColor: colours.white,
        padding: 10,
        margin: 10
    },
    textEntry: {
        fontSize: 20
    },
    pokemonCardsContainer: {
        borderRadius: 10,
        borderWidth: 2,
        borderColor: colours.grey,
        margin: 10,
        marginBottom: 10,
        elevation: 0
    },
    pokemonCardsTitle: {
        fontSize: 30,
    },
    evolutionImagesContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    evolutionImageAndArrowContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    arrowText: {
        fontSize:20
    },
    pokemonScreenColContainer: {
        flexDirection: 'row'
    },
    pokemonScreenCol: {
        flex: 0.5
    }
});

const types = (type) => StyleSheet.create({
    pokedexEntryTypeContainer: {
        backgroundColor: colours[type],
        paddingHorizontal: 5,
        paddingVertical: 2,
        marginHorizontal: 2,
        borderRadius: 5,
        overflow: 'hidden'
    },
    pokemonTypeContainer: {
        backgroundColor: colours[type],
        paddingHorizontal: 5,
        paddingVertical: 2,
        margin: 5,
        borderRadius: 5,
        alignSelf: 'center',
        width: "70%",
    },
    pokemonTypeText: {
        color: colours.white,
        fontSize: 20,
        textAlign: 'center'
    },
    typeBorder: {
        borderColor: colours[type],
    }
});

export { styles, types }