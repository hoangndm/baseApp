/**
 * smm App
 * @author: Hoang
 * @description: class Navbar (Navbar components)
 */

import React, { Component } from 'react';
import { Text, View, Image, 
    TouchableOpacity, ScrollView, TextInput } from 'react-native';
import ModalDropdown from "react-native-modal-dropdown";

// Import styles
import styles from '../static/assets/styles/components/navbar';
import base from '../static/assets/styles/base';
import btn from '../static/assets/styles/button';
import avatar from '../static/assets/styles/avatar';

export default class Navbar extends Component<Props> {
    render() {
        return (
            <View style={[base.positionRelative, base.zIndex10, base.justifyContentCenter, { minHeight: 45 } ]}>
                <View style = {styles.container}>
                    <View style = {styles.navBar}>
                        <View style = {styles.navBarItem}>
                            <Image style = {{width: 20, height:20,left:10 }} source = {require('../static/images/back.png')}/>
                            <Text style = {[base.textWhite, styles.titleScreen, {width:'50%', left: 20}]}>DANH SÁCH LỚP HỌC PHẦN</Text>
                        </View>

                        <View style = {[styles.navBarItem]}>
                            <Image style = {{width: 30, height:30, left: 40}} source = {require('../static/images/user-avt.png')}/>
                            <View style = {{alignItems: 'flex-end', width: '50%',}} >
                                <Text style = {[base.textWhite, {fontSize: 12, fontWeight: '600' }]}> Sinh vien 01</Text>
                                <Text style = {[base.textWhite, {fontSize: 9, fontWeight: '300',}]}>120012334567</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}