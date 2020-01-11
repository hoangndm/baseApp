import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 100,
        backgroundColor: '#04a5fa',
        borderBottomLeftRadius: 50,
        alignItems: "center",
    },

    navBar: {
        flexDirection: 'row',
        width: '100%',
        top: 30
    },

    navBarItem: {
        flexDirection: 'row',
        width: '60%',
        alignItems: 'center'
    },

    titleScreen: {
        fontSize: 15,
        fontWeight: 'bold',
    }

});