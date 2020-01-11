/**
 * rollcall App
 * @author: Giang Nguyen
 * @description: class Splash (Splash page)
 */
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';

// Import styles
import styles from '../static/assets/styles/splash';

export default class Splash extends Component<Props> { 
    constructor(props) {
        super(props);

        this.state = {
            spinner: true
        };
        this.initApp();
    }

    initApp = async () => {
        setTimeout(() => {
            this.props.navigation.navigate('Welcome');
        }, 1000);
    }

    render() {
        return (
            <View style={ styles.container }>
                <Spinner
                    visible={ this.state.spinner }
                    textContent={ 'Loading...' }
                    textStyle={ styles.spinnerTextStyle }
                />
            </View>
        );
    }
}

