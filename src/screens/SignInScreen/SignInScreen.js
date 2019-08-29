/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default class SignInScreen extends Component {
  render() {
    return (
      <View style={myStyle.wrapper}>
        <Text>SignInScreen</Text>
        <TouchableOpacity
          style={{backgroundColor: 'green'}}
          onPress={() => {
            this.props.navigation.navigate('MyApp');
          }}>
          <Text>Click to go to Home Screen</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{backgroundColor: 'gray'}}
          onPress={() => {
            this.props.navigation.goBack();
          }}>
          <Text style={{color: 'white'}}>Back to reprevious</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

var myStyle = StyleSheet.create({
  wrapper: {
    backgroundColor: 'saddlebrown',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
