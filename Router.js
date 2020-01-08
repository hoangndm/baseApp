import Home from './screens/Home';
import Login from './screens/Login';
import Splash from './screens/Splash';

import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const AppRoutes = createStackNavigator({
    Home: {
        screen: Home,
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
    createSwitchNavigator(
        {
            Splash: Splash,
            App: AppRoutes,
            Auth: AuthRoutes,
        },
        {
            initialRouteName: 'Splash',
        }
    )
);

export default Router;