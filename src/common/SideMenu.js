import React, { Component } from 'react';
import {
  ScrollView,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  Alert,
  ToastAndroid,
  Linking
} from 'react-native';

import { Icon } from 'react-native-elements';

import Styles from './sidemenuStyles';

const { width } = Dimensions.get('window');

class SideMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={Styles.container}>
        <ScrollView>
          <View>
            <Image
              resizeMode="contain"
              source={require('../assets/gokada.png')}
              style={{ width: '100%', height: width * 0.15,margin:10 }}
            />
          </View>
          
          <View style={Styles.horizontalLine} />

          <View>
            <View style={Styles.navSectionStyle}>
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate('Home');
                }}
              >
                <View style={Styles.navItemStyle}>
                  <Icon name="home" type="entypo" size={23} />
                  <Text style={[Styles.navTextStyle]}>Home</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate('WithRedux');
                }}
              >
                <View style={Styles.navItemStyle}>
                  <Icon name="home" type="entypo" size={23} />
                  <Text style={[Styles.navTextStyle]}>WithRedux</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate('User');
                }}
              >
                <View style={Styles.navItemStyle}>
                  <Icon name="home" type="entypo" size={23} />
                  <Text style={[Styles.navTextStyle]}>User</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}


export default SideMenu;
