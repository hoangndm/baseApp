import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity, FlatList } from 'react-native';

//  Add Style
import styles from '../static/assets/styles/components/menu';
import base from '../static/assets/styles/base';

export default class Menu extends Component<Props> {
    render() {
        return (
            <View style={[ base.w100, styles.container, base.row, base.py5, base.zIndex10 ]}>
                <View style={{ flex: 1, padding: 5, width: '25%' }}>
                    <TouchableOpacity>
                        <View style={ styles.img }>
                            <Image style={{ resizeMode: 'contain', width: 20, height: 20 }}
                                source={ require('../static/images/icon-home.png') }/>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={{ flex: 1, padding: 5, width: '25%' }}>
                    <TouchableOpacity>
                        <View style={ styles.img }>
                            <Image style={{ resizeMode: 'contain',width: 20, height: 20  }}
                                source={ require('../static/images/icon-search-inac.png') }/>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={{ flex: 1, padding: 5, width: '25%' }}>
                    <TouchableOpacity>
                        <View style={ styles.img }>
                            <Image style={{ resizeMode: 'contain', width: 20, height: 20  }}
                                source={ require('../static/images/icon-noti-inac.png') }/>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={{ flex: 1, padding: 5, width: '25%' }}>
                    <TouchableOpacity>
                        <View style={ styles.img }>
                            <Image style={{ resizeMode: 'contain', width: 20, height: 20 }}
                                source={ require('../static/images/icon-user-inac.png') }/>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}