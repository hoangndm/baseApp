import { StyleSheet } from 'react-native';

export default base = StyleSheet.create({
  bgHeader: {
    width: '100%',
    height: 200,
    borderBottomLeftRadius: 50,
  },

  navBarHeader: {
    flexDirection: 'row',
    alignItems:'center',
    top: 80,
    marginLeft:20
  },

  textHeader: {
    fontSize: 26,
    fontWeight: '500',
    color: '#fff',
    marginLeft: 20 
  },
  carouselContainer: {
    width: '100%',
    height: 500,
    alignItems: 'center',
    marginTop: 30
  },

  carouselInfo: {
    width: '100%',
    height: 300,
  },
  carouselImg: {
    width:'100%',
    height: 359,
    alignSelf: 'center',
    borderRadius: 10,
    resizeMode: 'contain'
  },

  btnLogin: {
    width: '90%',
    alignItems: 'center',
    backgroundColor: '#1b90d1',
    position: 'relative',
    top: -50,
    height: 50,
    borderRadius: 35,
  },

  textBtnLogin: {
    lineHeight: 50,
    fontSize:16,
    fontWeight: 'bold',
    color: '#fff',
  },

  helpBtn: {
    width: '50%', 
    height: 20, 
    alignItems: 'flex-end', 
    borderRightWidth: 1, 
    borderRightColor: '#484747'
  },

  contactBtn: {
    width: '50%', 
    height: 20, 
    alignItems: 'flex-start',
  },
  textBtnHelp: {
    marginLeft: 25,
    marginRight: 25,
    color: '#484747',
    fontSize: 14,
    fontWeight: '300',

  }
});