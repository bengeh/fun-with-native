import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export class Home extends Component {
constructor(props){
    super(props)
}

goToSettings(){
    this.props.navigation.navigate('SettingScreen')
}


  render() {
    return (
      <View>
        <Text>This is the home screen</Text>
        <Button onPress={this.goToSettings.bind(this)} title="Settings"/> 
      </View>
    )
  }
}

export default Home;