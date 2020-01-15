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
import styles from '../static/assets/styles/home';
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
        activeSlide: 1,
    };

    initComponent = () => {
        const { width } = Dimensions.get("window");
        const fullHeight = width/2;
        this.setState({ 
            width,
            fullHeight,
        });
    }

    get pagination () {
        const { activeSlide } = this.state;
        return (
            <Pagination
              dotsLength={3}
              activeDotIndex={activeSlide}
              containerStyle={{ backgroundColor: '#fff', width:'50%', zIndex: 5, top: -160 }}
              dotStyle={{
                  width: 10,
                  height: 10,
                  borderRadius: 5,
                  backgroundColor: '#088bc6',
                  margin: -1
              }}
              inactiveDotStyle={{
                  // Define styles for inactive dots here
              }}
              inactiveDotOpacity={0.4}
              inactiveDotScale={0.6}
            />
        );
    }

    _renderItem ({item, index}) {
        return (
            <TouchableOpacity style={ styles.carouselInfo }>
                <Image style={ styles.carouselImg } source={ require('../static/images/test.jpg') }/>
            </TouchableOpacity>
        );
    }

    _keyExtractor = (item, index) => index.toString();
    renderHomeItem = ({item, index}) => {
        const boxHeight = this.state.fullHeight / 3;
        return (
            <View style={{padding: 20, paddingTop: 0, paddingBottom: 10, alignItems: 'center',flex:1}}>
                <TouchableOpacity style={styles.btnIcon} onPress={() => this.props.navigation.navigate(item.screen)}>
                    <View style = {{width:'100%', height: '100%', alignItems:'center' }}>
                        <Image style={{ width: '50%', height: '50%', marginTop: 25 }}
                            source={ item.image }/>
                    </View>
                </TouchableOpacity>
                <Text style={{ color: '#1577d8', textAlign: 'center', fontSize: 15, padding: 5, width: 90, height: 50,  }}>{item.title}</Text>
            </View>
        );
    };
    render() {
        return (
            <View style={[ base.flex1, base.positionRelative, base.w100 ]} onLayout={ this.initComponent }>
                <ScrollView>
                    <View style = {[base.container]}>
                        <View style = {styles.headerHome}>
                            <View style = {styles.navBarHome}>  
                                <TouchableOpacity style={styles.iconLeft}>
                                    <Image style={styles.icon} source={ require('../static/images/menu.png')}/>
                                </TouchableOpacity>
                                
                                <View style= {styles.userName}>
                                    <Text style={[base.textWhite, {fontSize: 18, fontWeight:"600"}]}>
                                        Hi sinh vien 01
                                    </Text>

                                    <Text style={[base.textWhite,{fontSize: 14, fontWeight:"300"}] }>
                                        1200123345
                                    </Text>
                                </View>

                                <TouchableOpacity style = {styles.iconRight}>
                                    <Image style={styles.icon} source={ require('../static/images/user.png')}/>
                                </TouchableOpacity>
                            </View>
                            
                            <View style={ styles.carouselContainer }>
                                    <Carousel
                                        ref={ (c) => { this._carousel = c; } }
                                        data={ [1, 2, 3] }
                                        renderItem={ this._renderItem }
                                        sliderWidth={ this.state.width }
                                        itemWidth={ this.state.width }
                                        onSnapToItem={(index) => this.setState({ activeSlide: index }) }
                                    />
                                    { this.pagination }
                            </View>
                            <View style = {styles.radiusBtn}></View>    
                        </View>

                        <View style={[ styles.infoContainer ]}>
                            <FlatList
                                style={{ padding: 10, marginLeft: -15, marginRight: -15 }}
                                data={[
                                    { screen: 'PriceBoard', title: 'Sinh viên', image: require('../static/images/icon-student.png') },
                                    { screen: 'Service', title: 'Lớp học phần', image: require('../static/images/class.png') },
                                    { screen: 'GetQuote', title: 'Giảng viên', image: require('../static/images/icon-teacher.png') },
                                    { screen: 'Search', title: 'Lịch sử điểm danh', image: require('../static/images/icon-history.png') },
                                    { screen: 'Profile', title: 'Thông báo', image: require('../static/images/icon-noti.png') },
                                    { screen: '', title: 'Hướng dẫn', image: require('../static/images/icon-help.png') },
                                ]}
                                keyExtractor={ this._keyExtractor }
                                renderItem={ this.renderHomeItem }
                                numColumns={ 3 }
                            />
                        </View>
                    </View>
                </ScrollView>
                <Menu/>
            </View>
        )
    }
}