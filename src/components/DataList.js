import React, { Component } from 'react'
import {View,Text,TouchableOpacity,Image} from 'react-native';
import {Styles} from '../assets/HomeStyles';
class DataList extends Component {
    constructor(props) {
        super(props)

        this.state = {
        }
    }

    render() {
        const {item}=this.props
        return (
            <View style={Styles.card}>
                <View style={Styles.cardContainer}>
                    <Image
                    source = {{uri:item.urls.raw}}                         
                    style={Styles.ThumbNailCard}      
                    />
                    <View style={Styles.cardTitle}>
                        <Text style={Styles.cardTextTitle}>{item.user.name}</Text>
                        <Text> {item.user.username}</Text>
                    </View>

                    <TouchableOpacity style={Styles.viewUser}>
                        <View style={Styles.viewUserContainer}>
                            <Text style={Styles.viewUserText}>View</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

export default DataList