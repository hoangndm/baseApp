import { StyleSheet } from 'react-native';

export default base = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  content: {
    width: '100%',
    alignItems: 'center'
  },

  imageContent: {
    top: -100,
    width: 150,
    height: 150
  },
  textContent: {
    color: '#00328f',
    fontSize: 15,
    fontWeight:"bold",
    top: -60
  }
})