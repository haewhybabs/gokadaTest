import React, { Component } from 'react'
import { Text, View } from 'react-native'
import HeaderBar from './Header';
export default class User extends Component {
    render() {
        return (
            <View>
                <HeaderBar 
                navigation={this.props.navigation}
                title="User"
                icon="person"
                />
            </View>
        )
    }
}
