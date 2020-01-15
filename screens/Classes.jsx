/**
 * smm App
 * @author: Hoang
 * @description: class Home (Home page)
 */

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
    TextInput,
    FlatList
} from 'react-native';
import ModalDropdown from "react-native-modal-dropdown";
import Carousel, {
    Pagination
} from 'react-native-snap-carousel';

// Import styles
import styles from '../static/assets/styles/classes';
import base from '../static/assets/styles/base';
import btn from '../static/assets/styles/button';
import bg from '../static/assets/styles/background';

//  Import Menu
import Menu from '../components/Menu';
import Navbar from '../components/Navbar';

const {
    width
} = Dimensions.get("window");
const fullHeight = width / 2;

export default class Classes extends Component < Props > {
    state = {
        width,
        fullHeight,
    };

    initComponent = () => {
        const {
            width
        } = Dimensions.get("window");
        const fullHeight = width / 2;
        this.setState({
            width,
            fullHeight,
        });
    }

    render() {
        return ( 
            <View style = {[base.flex1, base.positionRelative, base.w100]} onLayout = {this.initComponent}>
            <Navbar/>
            <View style = {
                styles.container
            }>
            <Text style = {
                styles.title
            } > NĂM HỌC 2018 - 2019 HỌC KỲ 1 </Text> 
            </View> 
            <View style = {
                styles.content
            }>
            </View>

            </View> 
        )
    }
}