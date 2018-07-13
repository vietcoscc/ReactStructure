import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import style from './styles'
import Modal from "react-native-modalbox";
export default class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isVisible: false
        }
    }
    _showModal(isVisible) {
        this.setState({
            isVisible: isVisible
        })
    }
    _onClosedModal() {
        this.setState({ isVisible: false })
    }
    render() {

        return (
            <Modal isOpen={this.state.isVisible}
                backdrop={true}
                backButtonClose={true}
                style={style.containers}
                onClosed={() => this._onClosedModal()}
                animationDuration={200}>
                <View style={style.header}>
                    <Text style={style.headerContent}>This is a modal</Text>
                </View>
                <View style={style.modalContent}>

                </View>
            </Modal>
        )
    }
}

