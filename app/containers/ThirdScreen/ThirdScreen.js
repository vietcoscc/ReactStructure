/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import style from './styles'
import { Header, AlertModal } from './../../components'
export default class ThirdScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            modalVisible: false
        }
    }
    static navigationOptions = {
        title: 'Third screen'
    }

    _onShowModal(isVisible) {
        this.refs.alertModal._showModal(true)
    }

    render() {
        return (
            <View style={style.container}>
                <Header navigation={this.props.navigation} />
                <View style={style.body}>
                    <Text style={style.content}>Third screen</Text>
                    <View style={style.btnShowModal}>
                        <Button title={'Click me!'} onPress={() => this._onShowModal(true)} />
                    </View>
                </View>
                <AlertModal ref={'alertModal'} />
            </View>
        );
    }
}

