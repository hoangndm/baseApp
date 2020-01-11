import { StyleSheet } from 'react-native';

export default base = StyleSheet.create({

  logo: {
    backgroundColor: '#1b7dde',
    width: '100%',
    height:375,
    position:'relative'
  },

  infoLogo: {
    top: 80,
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
    marginTop: 15,
    left: 35,
  }, 

  formControl: {
    alignSelf: 'center',
    width: '80%',
    borderBottomWidth: 1,
    marginBottom: 5,
    borderBottomColor: '#e0e0e0',
    marginTop: -15,
  },

  btnRegister: {
    width:'90%',
    alignItems: 'center',
    backgroundColor: '#1b90d1',
    top: 20,
    height: 50,
    borderRadius: 35,
  },

  textBtnRegister: {
    lineHeight: 50,
    fontSize:16,
    fontWeight: 'bold',
    color: '#fff',
  },

  iconRight: {
    alignItems: 'flex-end',
    width: '50%',
    marginTop: 15,
  },

  imageHeader: {
    width:'100%',
    margin: 0,
    top: 50,
    alignItems: 'center',
  }
});