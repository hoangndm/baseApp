import { StyleSheet } from 'react-native';

export default base = StyleSheet.create({

  logo: {
    backgroundColor: '#1b7dde',
    width: '100%',
    height:375,
    position:'relative'
  },

  infoLogo: {
    top: 90,
    left: 37,
    width: '80%',
    height: 150,
  },

  titleLogo: {
    fontSize: 31,
    paddingTop: 5,
    color: '#fff',
  },

  formContainer: {
    top: -125,
    width: '100%',
    backgroundColor: '#fff',
    borderTopLeftRadius: 50,
  },

  formContent: {
    width: '100%',
    top: 30,
  },

  textFormContent: {
    fontSize: 18,
    color: '#484747',
    fontWeight: '600',
    marginTop: 10,
    left: 35,
    alignItems: 'flex-end'
  }, 

  textBtnForget: {
    fontSize: 13,
    color: '#1b90d1',
    fontWeight: '500'
    
  },

  formControl: {
    alignSelf: 'center',
    width: '80%',
    borderBottomWidth: 1,
    marginBottom: 5,
    borderBottomColor: '#e0e0e0'
  },

  btnLogin: {
    width: '90%',
    alignItems: 'center',
    backgroundColor: '#1b90d1',
    position: 'relative',
    zIndex:400,
    top: 60,
    height: 50,
    borderRadius: 35,
  },

  textBtnLogin: {
    lineHeight: 50,
    fontSize:16,
    fontWeight: 'bold',
    color: '#fff',
  },

  btnRadio: {
    width: '100%',
    left: 30,
    top: 30
  },

  iconRight: {
    alignItems: 'flex-end',
    width: '50%',
    marginTop: 15,
  },

});