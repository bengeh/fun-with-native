import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export class Settings extends Component {
  constructor(props){
    super(props)
  }

  goToHome(){
    this.props.navigation.navigate('HomeScreen')
  }
  render() {
    return (
      <View>
        <Text>This is the Settings screen</Text>
        <Button onPress={this.goToHome.bind(this)} title="Home"/> 
      </View>
    )
  }
};

export default Settings;