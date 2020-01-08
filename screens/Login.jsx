/**
 * rollcall App
 * @author: Hoang
 * @description: class Login (Login page)
 */

import React, { Component } from 'react';
import { Text, View, Image, ImageBackground, 
    TextInput, TouchableOpacity,
    ScrollView } from 'react-native';
import ModalDropdown from "react-native-modal-dropdown";
import { SITE_NAME, VER } from 'react-native-dotenv';
import http from '../plugins/http';

// Import styles
import styles from '../static/assets/styles/login';
import base from '../static/assets/styles/base';
import bg from '../static/assets/styles/background';

export default class Login extends Component<Props> {
    initialState = {
        email: '',
        password: '',
        errors: {},
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
                <Text>Login</Text>
            </View>
        );
    }
}
