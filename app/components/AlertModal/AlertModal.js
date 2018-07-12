import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import style from './styles'
import Modal from "react-native-modal";
export default class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isVisible: props.visible
        }
    }

    render() {
       
        return (
            <Modal isVisible={this.state.isVisible} onBackdropPress={() => {
                console.log('back drop')
                this.setState({
                    isVisible:false
                })
            }}>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ flex: 1, backgroundColor: 'white' }}>
                        <Text>Hello!</Text>
                    </View>

                </View>
            </Modal>
        )
    }
}

