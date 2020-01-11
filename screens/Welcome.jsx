import React, {
  Component
} from 'react';
import {
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  TextInput
} from 'react-native';
import ModalDropdown from "react-native-modal-dropdown";

// Import styles
import base from '../static/assets/styles/base';
import styles from '../static/assets/styles/welcome';
import btn from '../static/assets/styles/button';
import Carousel,{ Pagination } from 'react-native-snap-carousel';
import bg from '../static/assets/styles/background';

//  Import Menu
import Menu from '../components/Menu';
import Navbar from '../components/Navbar';

const {
  width
} = Dimensions.get("window");
const fullHeight = width / 2;

export default class Welcome extends Component < Props > {
  initialState = {
    activeSlide :1,
    width,
    fullHeight,
  };

  constructor(props) {
    super(props);

    this.state = this.initialState;
  }

  get pagination () {
    const { activeSlide } = this.state;
    return (
        <Pagination
          dotsLength={3}
          activeDotIndex={activeSlide}
          containerStyle={{ backgroundColor: '#fff', width:'50%', zIndex: 5, top: -70 }}
          dotStyle={{
              width: 10,
              height: 10,
              borderRadius: 5,
              backgroundColor: '#088bc6',
              margin: -1
          }}
          inactiveDotStyle={{
              // Define styles for inactive dots here
          }}
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
        />
    );
}

_renderItem ({item, index}) {
    return (
        <TouchableOpacity style={ styles.carouselInfo }>
            <Image style={ styles.carouselImg } source={ require('../static/images/bg-object.png') }/>
        </TouchableOpacity>
    );
}

  submitForm = () => {
    this.props.navigation.push('Login');
  }

  render() {
    return ( 
      <View style={[ base.flex1, base.positionRelative, base.w100 ]}>
        <ScrollView>
          <View style={base.container}>
            <View style = {[styles.bgHeader , base.bgBlue]}>
              <View style={styles.navBarHeader}>
                <View style = {{width: '70%'}}>
                  <Text style= {styles.textHeader}>Welcome back to BUH APP</Text>
                </View>
                <View style = {{ alignItems: 'flex-end', width: '25%'}}>
                  <Image style ={{width: 60, height: 60}} source = {require('../static/images/logo.png')}/>
                </View>
              </View>
            </View>

            <View>
              <View style={ styles.carouselContainer }>
                <Carousel
                    ref={ (c) => { this._carousel = c; } }
                    data={ [1, 2, 3] }
                    renderItem={ this._renderItem }
                    sliderWidth={ this.state.width }
                    itemWidth={ this.state.width }
                    onSnapToItem={(index) => this.setState({ activeSlide: index }) }
                />
                { this.pagination }
              </View>

              <View style = {{width: '100%', alignItems: 'center'}}>
                  <TouchableOpacity style = {styles.btnLogin} onPress = {this.submitForm}>
                      <Text style = {styles.textBtnLogin}>ĐĂNG NHẬP</Text>
                  </TouchableOpacity>
              </View>
              <View style = {{flexDirection: 'row', top: -30}}>
                <TouchableOpacity style ={styles.helpBtn}>
                  <Text style = {styles.textBtnHelp}>Trợ giúp</Text>
                </TouchableOpacity>
                <TouchableOpacity style ={styles.contactBtn}>
                  <Text style = {styles.textBtnHelp}>Liên hệ</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>       
        </ScrollView>
      </View>
    )
  }
}