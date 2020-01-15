import {
  StyleSheet
} from 'react-native';

export default base = StyleSheet.create({
  headerHome: {
    flex: 2,
    backgroundColor: '#04a5fa',
    height: 300,
    alignItems: 'center',
    position: 'relative',
  },

  navBarHome: {
    flexDirection: 'row',
    width: '90%',
    alignItems: 'center',
    marginTop: 20,
  },

  iconLeft: {
    width: '33%',
    marginTop: 15,
  },

  icon: {
    height: 30,
    width: 30,
  },

  userName: {
    width: '34%',
    alignItems: 'center',
    marginTop: 30,
  },

  iconRight: {
    alignItems: 'flex-end',
    width: '33%',
    marginTop: 15,
    right: 0
  },

  carouselContainer: {
    flex: 2,
    zIndex: 5,
    width: '100%',
    height: 400,
    position: 'absolute',
    top: 150,
    alignItems: 'center'
  },

  radiusBtn: {
    width: '100%',
    height: 30,
    backgroundColor: '#fff',
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    top: 180,
  },

  carouselInfo: {
    width: '100%',
    height: 300,
    paddingLeft: 5,
    paddingRight: 5,
  },
  carouselImg: {
    width: '95%',
    alignSelf: 'center',
    height: 150,
    borderRadius: 10,
    top: 20,
  },

  infoContainer: {
    position: 'relative',
    width: '100%',
    height: 400,
    top: 100,
  },

  btnIcon: {
    width: 90,
    height: 90,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: '#088bc6',
    alignItems: 'center',
  }
});