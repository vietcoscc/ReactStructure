import React, { Component } from 'react'
import { FlatList, Text, View, Image, Alert } from 'react-native'
import Swipeout from 'react-native-swipeout'
import style from './styles'
export default class FlatListItem extends Component {
    render() {
        swipeoutBtns = [
            {
                text: 'Delete',
                onPress: this.props.onDelete
            }
        ]
        return (
            <Swipeout right={swipeoutBtns}>
                <View style={style.flatListItem}>
                    <Image source={this.props.data.image} style={style.image} />
                    <View style={style.content}>
                        <Text numberOfLines={1} style={style.title}>{this.props.data.title}</Text>
                        <Text numberOfLines={3} style={style.desciption}>{this.props.data.desciption}</Text>
                        <View style={style.others}>
                            <Text numberOfLines={1} style={style.type}>{this.props.data.type}</Text>
                            <Text numberOfLines={1} style={style.timeStamp}> / by </Text>
                            <Text numberOfLines={1} style={style.author}> {this.props.data.author}</Text>
                            <Text numberOfLines={1} style={style.timeStamp}> / </Text>
                            <Text numberOfLines={1} style={style.timeStamp}>{this.props.data.timeStamp}</Text>
                        </View>

                    </View>
                </View>
            </Swipeout>
        )
    }
}