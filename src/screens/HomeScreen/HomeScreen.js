/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default class HomeScreen extends Component {
  render() {
    return (
      <View style={myStyle.wrapper}>
        <Text>HomeScreen</Text>
        <TouchableOpacity
          style={{backgroundColor: 'green'}}
          onPress={() => {
            this.props.navigation.navigate('Profile');
          }}>
          <Text>Click to go to Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{backgroundColor: 'darkturquoise'}}
          onPress={() => {
            this.props.navigation.navigate('MyAuthLoading');
          }}>
          <Text>Click to go to AuthLoadingScreen</Text>
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
    backgroundColor: 'gray',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
