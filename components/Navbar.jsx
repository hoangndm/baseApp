/**
 * rollcall App
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
        const { routeName } = this.props.navigation.state;
        return (
            <View style={[ bg.main, base.p10, base.positionRelative, base.zIndex10, base.justifyContentCenter, { minHeight: 45 } ]}>
            </View>
        )
    }
}