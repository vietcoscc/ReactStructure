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
export default class ThirdScreen extends Component {
    static navigationOptions = {
        title: 'Third screen'
    }
    render() {
        return (
            <View style={style.container}>
                <Header navigation={this.props.navigation} />
                <Text style={style.content}>Third screen</Text>
            </View>
        );
    }
}

