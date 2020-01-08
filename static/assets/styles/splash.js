import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    bgAuth: {
        position: 'absolute',
        height: '100%',
        width: '100%',
        resizeMode: 'stretch',
        zIndex: 1
    },
    title: {
        paddingHorizontal: 10,
        fontWeight: 'bold',
        fontSize: 18,
        color: '#f7c744',
        textAlign: 'center',
    },
    spinnerTextStyle: {
        color: '#fff'
    },
});