import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import style from './styles'
import { Header } from './../../components'

export default class SecondScreen extends Component {
    static navigationOptions = {
        title: 'Second screen'
    }
    render() {
        return (
            <View style={style.container}>
                <Header navigation={this.props.navigation} title={'SecondScreen'}/>
                <ScrollView horizontal={true} pagingEnabled={true}>
                    <View style={style.screen}>
                        <Text style={style.content}>Swipe to the right</Text>
                    </View>
                    <View style={style.screen}>
                        <Text style={style.content}>Swipe to the left</Text>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

