/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';

import {
  Header,
  SearchPage
} from './components'

export default class App extends Component {
  render() {
    const {
      appStyle
    } = styles;
    return (
      <View style={appStyle}>
        <Header />
        <SearchPage />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  appStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  }
});
