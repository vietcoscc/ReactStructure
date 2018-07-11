import React, { Component } from 'react'
import { FlatList, Text, View, Image, Alert } from 'react-native'
import style from './styles'
import {FlatListItem} from './FlatListItem'

export default class MainFlatList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: props.data,
            flatListStyle: props.style
        }
    }

    _onDelete = (index)=>{
        Alert.alert('', 'Are you sure want to delete ?',
        [{
            text: 'cancel'
        }, {
            text: 'ok', onPress:()=> this._onDeleteConfirm(index)
        }])
    }

    _onDeleteConfirm = (index) => {
        this.state.data.splice(index, 1)
        if (this.state.data.length != 0) {
            this.setState({
                data: this.state.data
            })
        } else {
            this.setState({
                flatListStyle: {
                    height: 0
                }
            })
        }
    }
    
    render() {
        flatListStyle = this.state.flatListStyle != null ? this.state.flatListStyle : style.containers;
        return (
            <FlatList style={flatListStyle} renderItem={({ item, index }) => {
                return (
                    <FlatListItem data={item} onDelete={() => this._onDelete(index)} />
                )
            }} data={this.props.data} />
        )
    }
}

