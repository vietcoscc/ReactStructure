/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, View, Dimensions, Text, FlatList, Button } from 'react-native';
import { MainFlatList, Header } from './../../components'
import style from './styles'
import data from './../../constants/data'
export default class App extends Component {
    constructor(props) {
        super(props)
    }
    static navigationOptions =
        {
            title: 'Main screen',
        };
    render() {
        return (
            <View style={style.container}>
                <Header navigation={this.props.navigation} title={'MainScreen'}/>
                <View style={style.body}>
                    <MainFlatList data={data} />
                </View>
            </View>
        );
    }
}

