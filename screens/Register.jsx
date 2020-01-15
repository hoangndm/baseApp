/**
 * rollcall App
 * @author: Hoang
 * @description: class Home (Home page)
 */

import React, { Component } from 'react';
import { Text, View, Image, Dimensions,
    TouchableOpacity, ScrollView, TextInput } from 'react-native';
import ModalDropdown from "react-native-modal-dropdown";

// Import styles
import base from '../static/assets/styles/base';
import styles from '../static/assets/styles/register';
import btn from '../static/assets/styles/button';
import bg from '../static/assets/styles/background';

//  Import Menu
import Menu from '../components/Menu';
import Navbar from '../components/Navbar';

const { width } = Dimensions.get("window");
const fullHeight = width/2;

export default class Home extends Component<Props> {
  initialState = {
    name: '',
    password: '',
    errors: {},
  };

  constructor(props) {
      super(props);

      this.state = this.initialState;
  }

  submitForm = () => {
      this.props.navigation.push('Login');
  }

  render() {
      return (
        <View style={[ base.flex1, base.positionRelative, base.w100 ]}>
            <ScrollView>
                <View style={base.container}>
                    <View style ={styles.logo}>
                        <View style={{ flexDirection: 'row', width: '90%', alignItems: 'center'}}>
                            <TouchableOpacity style={{ width: '50%', marginTop: 15, marginLeft: 15,}}>
                                <Image style={{ height: 20, width: 20 }} source={ require('../static/images/back.png')}/>
                            </TouchableOpacity>
                            <TouchableOpacity style = {styles.iconRight}>
                                <Image style={{ height: 20, width: 20}} source={ require('../static/images/menu.png')}/>
                            </TouchableOpacity>
                        </View>
                        <View style = {styles.infoLogo}>
                            <Text style= {styles.titleLogo}>Đăng ký</Text>
                            <Text style= {styles.titleLogo}>thiết bị </Text>
                        </View>
                    </View>
                    <View style = {styles.formContainer}>
                        <View style = {[styles.formContent]}>
                            <Text style = {styles.textFormContent}>Id thiết bị của bạn</Text>
                            <TextInput 
                                style = {styles.formControl}
                                returnKeyType="next"
                                autoCorrect={ false }
                                autoCapitalize="none"
                            />
                            <Text style = {styles.textFormContent}>Id user của bạn</Text>
                            <TextInput 
                                style = {styles.formControl}
                                returnKeyType="next"
                                autoCorrect={ false }
                                autoCapitalize="none"
                                keyboardType="numeric"
                            />
                            <Text style = {styles.textFormContent}>Họ tên của bạn</Text>
                            <TextInput 
                                style = {styles.formControl}
                                returnKeyType="next"
                                autoCorrect={ false }
                                autoCapitalize="none"
                            />
                            <Text style = {styles.textFormContent}>Nhập số ĐT của bạn</Text>
                            <TextInput 
                                style = {styles.formControl}
                                returnKeyType="next"
                                autoCorrect={ false }
                                autoCapitalize="none"
                                keyboardType="numeric"
                            />
                            <View style = {{width: '100%',alignItems: 'center'}}>
                                <TouchableOpacity style = {styles.btnRegister} onPress = {this.submitForm}>
                                    <Text style = {styles.textBtnRegister}>ĐĂNG KÝ</Text>
                                </TouchableOpacity>
                            </View>

                            <View style = {styles.imageHeader}>
                            <Image style={{width: 350, height: 100, borderRadius: 10}} source={ require('../static/images/test.jpg')}/>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
      )
  }
}