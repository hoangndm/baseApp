/**
 * Index File for Register App
 */
import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import App from './App';

// Redux
import { Provider } from 'react-redux';
import store from './redux/store';

class Main extends Component {
    render() {
        return (
            <Provider store={ store }>
                <App />
            </Provider>
        );
    }
}

AppRegistry.registerComponent(appName, () => Main);
