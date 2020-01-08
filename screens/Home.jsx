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
import btn from '../static/assets/styles/button';
import bg from '../static/assets/styles/background';

//  Import Menu
import Menu from '../components/Menu';
import Navbar from '../components/Navbar';

const { width } = Dimensions.get("window");
const fullHeight = width/2;

export default class Home extends Component<Props> {
    state = {
        width,
        fullHeight,
    };

    initComponent = () => {
        const { width } = Dimensions.get("window");
        const fullHeight = width/2;
        this.setState({ 
            width,
            fullHeight,
        });
    }

    render() {
        return (
            <View style={ base.container } onLayout={ this.initComponent }>
                <Text>Homepage</Text>
            </View>
        )
    }
}