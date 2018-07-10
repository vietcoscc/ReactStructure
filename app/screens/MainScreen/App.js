/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Dimensions, FlatList } from 'react-native';
import { MainFlatList } from './../../components'
import style from './styles'
const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
        'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});

export default class App extends Component {
    render() {
        return (
            <View style={style.container}>
                <MainFlatList data={flatListData}/>
            </View>
        );
    }
}

const flatListData = [
    {
        key: 1,
        image: require('./../../assets/images/apple-macbook-pro-with-touch-bar-13-inch-2016-35.jpg'),
        title: 'How to deal with a loud MacBook fan',
        desciption: 'Here are some noisy fan fixes.',
        type: 'Article',
        author: 'Sean Hollister',
        timeStamp: 'July 9, 2018 9:48 AM PDT'
    },
    {
        key: 2,
        image: require('./../../assets/images/ar-cancer-00-00-21-15-still001.jpg'),
        title: 'AR app lets kids with cancer escape into an imaginary world',
        desciption: 'Declare your independence... from paying too much for phones, laptops and more!',
        type: 'Article',
        author: 'Sean Hollister',
        timeStamp: 'July 9, 2018 9:48 AM PDT'
    },
    {
        key: 3,
        image: require('./../../assets/images/automator-quick-action-workflow.jpg'),
        title: 'How to create custom Quick Actions in MacOS Mojave',
        desciption: 'Custom Quick Actions in Finder are your friends.',
        type: 'Article',
        author: 'Sean Hollister',
        timeStamp: 'July 9, 2018 9:48 AM PDT'
    },
    {
        key: 4,
        image: require('./../../assets/images/dhroghnwsaersqi.jpg'),
        title: 'Microsoft teases new Surface for tomorrow, July 10',
        desciption: 'Cheaper Windows slates, here we come?',
        type: 'Article',
        author: 'Sean Hollister',
        timeStamp: 'July 9, 2018 9:48 AM PDT'
    },
    {
        key: 5,
        image: require('./../../assets/images/gaminglaptops-01.jpg'),
        title: 'The best gaming laptops, ranked',
        desciption: 'There are the best gaming laptops we\'ve tested in the CNET Labs. from dual-GPU big-screen monsters to slim mainstream laptops that sneak in discrete Nvidia graphics.',
        type: 'Article',
        author: 'Sean Hollister',
        timeStamp: 'July 9, 2018 9:48 AM PDT'
    },
    {
        key: 6,
        image: require('./../../assets/images/gettyimages-808746388.jpg'),
        title: 'Best tech deals for 4th of July 2018',
        desciption: 'Declare your independence... from paying too much for phones, laptops and more!',
        type: 'Article',
        author: 'Sean Hollister',
        timeStamp: 'July 9, 2018 9:48 AM PDT'
    },
    {
        key: 7,
        image: require('./../../assets/images/iphone-x-google-pixel-2-comp-correct-social.jpg'),
        title: 'Most anticipated tech products of 2018 (and beyond)',
        desciption: 'New iPhones and Pixels, a new Nintendo Switch service and lots more are coming this year (and next).',
        type: 'Article',
        author: 'Sean Hollister',
        timeStamp: 'July 9, 2018 9:48 AM PDT'
    },
    {
        key: 8,
        image: require('./../../assets/images/lenovo-legion-y330-y530-y7000-55.jpg'),
        title: 'Lenovo Legion gaming laptops and desktops march into E3 2018',
        desciption: 'The Legion Y7000 (left) retains a more traditional budget-gaming-laptop design, while the Y730 and Y530 (middle and right), get a sleek makeover, new thermals an upgraded components. ',
        type: 'Article',
        author: 'Sean Hollister',
        timeStamp: 'July 9, 2018 9:48 AM PDT'
    },
    {
        key: 9,
        image: require('./../../assets/images/mac-os-mojave-cnet.png'),
        title: 'Continuity Camera can be a continual time saver.',
        desciption: 'Continuity Camera can be a continual time saver.',
        type: 'Article',
        author: 'Sean Hollister',
        timeStamp: 'July 9, 2018 9:48 AM PDT'
    }
]