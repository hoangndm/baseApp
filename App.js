/**
 * smm App
 * @author: Giang Nguyen
 * @description: class App (Component Root)
 */
import React, { Component } from 'react';
import Router from './Router';
import AuthService from './services/auth.service';

// Redux
import * as actions from './redux/actions';
import { connect } from 'react-redux';

class App extends Component {
    constructor(props) {
        super(props);

        this.initAuthentication();
    }

    initAuthentication = async () => {
        const user_data = await AuthService.getUser();
        this.props.setUserData(user_data);
    }

    render() {
        return (
            <Router />
        );
    }
}

// Connect Redux actions to props
export default connect(null, actions)(App);
