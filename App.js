import React, {Component} from 'react';
import {createStackNavigator} from 'react-navigation';
import Settings from './src/pages/Settings.js';
import Home from './src/pages/Home.js';

const AppNavigator = createStackNavigator({
  SettingScreen: { screen: Settings },
  HomeScreen: { screen: Home },
});

export default class App extends Component {
  render() {
    return (
      <AppNavigator navigation={this.props.navigation}/>
    );
  }
}

