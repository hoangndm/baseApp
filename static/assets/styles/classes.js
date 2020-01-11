import {
  StyleSheet
} from 'react-native';

export default base = StyleSheet.create({

  container: {
    width: '100%',
    alignItems: 'center'
  },

  title: {
    fontSize: 13,
    color: '#484747',
    fontWeight: '500',
    textAlign: 'center',
    marginVertical: 10,
  },
  content: {
    alignSelf: 'center',
    width: '90%',
    height: 400,
    elevation: 5,
    backgroundColor: '#fff',
    borderRadius: 10
  },
})