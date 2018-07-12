import React, { Component } from 'react'
import { View, TouchableHighlight, Image } from 'react-native'
import style from './styles'

export default class Header extends Component {
    _onPress() {
        // alert('OpnPress')
        console.log('open')
        this.props.navigation.openDrawer()
    }
    render() {
        return (
            <View style={style.containers}>
                <TouchableHighlight underlayColor='gray' style={style.drawerButton} onPress={() => this._onPress()}>
                    <Image source={require('./../../assets/images/icons/baseline_menu_white_24dp.png')} style={style.drawerButtonIcon} />
                </TouchableHighlight>
            </View>
        )
    }
}

