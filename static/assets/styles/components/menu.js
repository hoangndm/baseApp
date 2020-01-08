import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
    },
    img: {
        alignSelf: 'center',
        width: 40,
        height: 40,
        position: 'relative'
    },
    note: {
        position: 'absolute',
        right: -5,
        top: 0,
        width: 17,
        height: 17,
        backgroundColor: '#f15e22',
        borderRadius: 10,
        justifyContent: 'center'
    },
    noteText: {
        fontSize: 10,
        color: '#fff',
        textAlign: 'center'
    },
    content: {
        color: '#726c6c',
        textAlign: 'center',
        fontSize: 8,
        padding: 5,
        paddingBottom: 0
    }
});