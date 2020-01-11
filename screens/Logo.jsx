/**
 * rollcall App
 * @author: Hoang
 * @description: class Home (Home page)
 */

import React, { Component } from 'react';
import { Text, View, Image, Dimensions,
    TouchableOpacity, ScrollView, TextInput, FlatList } from 'react-native';
import ModalDropdown from "react-native-modal-dropdown";
import Carousel,{ Pagination } from 'react-native-snap-carousel';

// Import styles
import styles from '../static/assets/styles/logo';
import base from '../static/assets/styles/base';
import btn from '../static/assets/styles/button';
import bg from '../static/assets/styles/background';

//  Import Menu
import Menu from '../components/Menu';
import Navbar from '../components/Navbar';

const { width } = Dimensions.get("window");
const fullHeight = width/2;

export default class Logo extends Component<Props> {
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
          <View style = {styles.container}>
              <View style = {styles.content}>
                <Image style = {styles.imageContent} source = {require('../static/images/logo.png')}/>
                <Text style = {styles.textContent}>
                TRƯỜNG ĐẠI HỌC NGÂN HÀNG TP.HCM
                </Text>
              </View>
          </View>
        )
    }
}