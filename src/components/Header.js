import React, { Component } from 'react'
import { Text, View,StatusBar } from 'react-native'
import {Header,Icon} from 'react-native-elements';
export default class HeaderBar extends Component {
    render() {
        const {title,icon}=this.props
        return (
            <View>
                <Header
                    leftComponent={
                        <Icon 
                            name="menu"
                            color="#fff"
                            onPress={()=>this.props.navigation.toggleDrawer()}
                        />
                        }
                    centerComponent={{ text: title, style: { color: '#fff' } }}
                    rightComponent={{ icon: icon, color: '#fff' }}
                    containerStyle={{
                        backgroundColor: '#00C190',
                        justifyContent: 'space-around',
                    }}
                />
                <StatusBar backgroundColor='#00C190' barStyle="light-content" />
            </View>
        )
    }
}
