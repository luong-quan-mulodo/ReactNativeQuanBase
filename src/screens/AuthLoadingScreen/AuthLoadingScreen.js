/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default class AuthLoadingScreen extends Component {
  render() {
    return (
      <View style={myStyle.wrapper}>
        <Text>AuthLoadingScreen</Text>
        <TouchableOpacity
          style={{backgroundColor: 'green'}}
          onPress={() => {
            this.props.navigation.navigate('MyAuth');
          }}>
          <Text>Click to go to SignIn</Text>
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
    backgroundColor: 'skyblue',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
