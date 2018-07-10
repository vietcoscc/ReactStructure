import React, { Component } from 'react'
import { FlatList, Text, View, Image } from 'react-native'
import style from './styles'

export default class MainFlatList extends Component {
    render() {
        return (
            <FlatList style={style.flatList} renderItem={({ item }) => {
                return (
                    <FlatListItem data={item} />
                )
            }} data={this.props.data} />
        )
    }
}

class FlatListItem extends Component {
    render() {
        return (
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
                <Text>{this.props.data.key}</Text>
            </View>
        )
    }
}