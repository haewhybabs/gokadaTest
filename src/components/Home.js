import React, { Component } from 'react'
import { Text, View } from 'react-native'
import HeaderBar from './Header'
export default class Home extends Component {
    render() {
        return (
            <View>
                <HeaderBar 
                navigation={this.props.navigation}
                title="Home"
                icon="home"
                />
            </View>
        )
    }
}
