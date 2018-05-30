import { StyleSheet } from 'react-native';
import colours from './Colours'

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colours.mainRed,
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
        alignItems: 'center',
        justifyContent: 'center'
    }
});