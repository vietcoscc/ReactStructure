/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { View, Text } from 'react-native';
import style from './styles'
import {Header} from './../../components'
export default class SecondScreen extends Component {
    static navigationOptions = {
        title: 'Second screen'
    }
    render() {
        return (
            <View style={style.container}>
                <Header navigation={this.props.navigation} />
                <Text style={style.content}>Second screen</Text>
            </View>
        );
    }
}

