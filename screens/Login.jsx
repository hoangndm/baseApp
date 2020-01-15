/**
 * smm App
 * @author: Hoang
 * @description: class Login (Login page)
 */

import React, { Component } from 'react';
import { Text, View, Image, ImageBackground, 
    TextInput, TouchableOpacity,
    ScrollView } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import ModalDropdown from "react-native-modal-dropdown";
import { SITE_NAME, VER } from 'react-native-dotenv';
import http from '../plugins/http';

// Import styles
import styles from '../static/assets/styles/login';
import base from '../static/assets/styles/base';
import bg from '../static/assets/styles/background';

export default class Login extends Component<Props> {
    initialState = {
        name: '',
        password: '',
        errors: {},
        role: [
            { label: "Giảng viên", value: 0},
            { label: 'Sinh viên', value: 1},
            { label: 'Nhân viên', value: 2} 
        ]
    };

    constructor(props) {
        super(props);

        this.state = this.initialState;
    }

    submitForm = () => {
        this.props.navigation.push('Home');
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
                                <Text style= {styles.titleLogo}>Đăng nhập</Text>
                            </View>
                        </View>
                        <View style = {styles.formContainer}>
                            <View style = {[styles.formContent]}>
                                <Text style = {styles.textFormContent}>Tên đăng nhập</Text>
                                <TextInput 
                                    style = {styles.formControl}
                                    returnKeyType="next"
                                    autoCorrect={ false }
                                    autoCapitalize="none"
                                />
                                <Text style = {styles.textFormContent}>Mật khẩu</Text>
                                <TextInput 
                                    style = {styles.formControl}
                                    returnKeyType="next"
                                    autoCorrect={ false }
                                    secureTextEntry
                                    autoCapitalize="none"
                                />

                                <View style={{ flexDirection: 'column', width:'100%', alignItems: 'center'}}>
                                    <View style={{ flexDirection: 'row', width: '90%' }}>
                                        <View style={{ flexDirection: 'column', width: '70%'}}>
                                            <View style={{ flexDirection: 'row' }}>
                                                <CheckBox
                                                    value={this.state.checked}
                                                    tintColors = {true ? '#1b90d1' : '#fff'}
                                                />
                                                <Text style = {base.mt5}> Ghi nhớ</Text>
                                            </View>
                                        </View>
                                        <TouchableOpacity style={{width: '30%'}}>
                                            <Text style={[base.mt5, base.textCenter, styles.textBtnForget]}>Quên mật khẩu?</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>

                                <View style = {[base.ml5, styles.btnRadio ]}>
                                    <RadioForm
                                        radio_props={this.state.role}
                                        buttonSize={17}
                                        buttonOuterSize={18}
                                        borderWidth={0.2}
                                        selectedButtonColor= {'#1b90d1'}
                                        buttonColor={'#e0e0e0'}
                                        buttonWrapStyle={{marginHorizontal: 10,}}
                                        borderColor = {'#e0e0e0'}
                                        labelStyle={{fontSize: 16, color: '#484747'}}
                                        initial={0}
                                        onPress={(value) => {this.setState({value:value})}}
                                    />
                                </View>
                                <View style = {{width: '100%', alignItems: 'center', height: 200}}>
                                    <TouchableOpacity style = {styles.btnLogin} onPress = {this.submitForm}>
                                        <Text style = {styles.textBtnLogin}>ĐĂNG NHẬP</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
}
