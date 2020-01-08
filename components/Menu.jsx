import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity, FlatList } from 'react-native';

//  Add Style
import styles from '../static/assets/styles/components/menu';
import base from '../static/assets/styles/base';

export default class Menu extends Component<Props> {
    render() {
        const { routeName } = this.props.navigation.state;
        return (
            <View style={[ base.w100, styles.container, base.row, base.py5, base.zIndex10 ]}>
            </View>
        );
    }
}