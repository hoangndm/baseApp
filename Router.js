import Welcome from './screens/Welcome';
import Home from './screens/Home';
import Login from './screens/Login';
import Splash from './screens/Splash';
import Register from './screens/Register';
import Logo from './screens/Logo';
import Classes from './screens/Classes';

import {
    createAppContainer,
    createSwitchNavigator
} from 'react-navigation';
import {
    createStackNavigator
} from 'react-navigation-stack';

const AppRoutes = createStackNavigator({
    Welcome: {
        screen: Welcome,
        navigationOptions: {
            header: null,
        }
    },

    Logo: {
        screen: Logo,
        navigationOptions: {
            header: null,
        }
    },

    Home: {
        screen: Home,
        navigationOptions: {
            header: null,
        }
    },

    Register: {
        screen: Register,
        navigationOptions: {
            header: null,
        }
    },
    Classes: {
        screen: Classes,
        navigationOptions: {
            header: null,
        }
    },

});
const AuthRoutes = createStackNavigator({
    Login: {
        screen: Login,
        navigationOptions: {
            header: null,
        }
    },
});
const Router = createAppContainer(
    createSwitchNavigator({
        Splash: Splash,
        App: AppRoutes,
        Auth: AuthRoutes,
    }, {
        initialRouteName: 'Splash',
    })
);

export default Router;