/** @format */

import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import { DrawerNavigator,StackNavigator } from 'react-navigation'
import {MainScreen} from './app/containers/MainScreen'
import {SecondScreen} from './app/containers/SecondScreen'
import {ThirdScreen} from './app/containers/ThirdScreen'
const drawer = DrawerNavigator(
    {
        first: {
            screen: MainScreen
        },
        second: {
            screen: SecondScreen
        },
        third: {
            screen: ThirdScreen
        }
    },
    {
       initialRouteName:'first'
    }
)

AppRegistry.registerComponent(appName, () => drawer);