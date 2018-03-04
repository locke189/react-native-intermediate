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

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { rootReducer } from './reducers';
import thunk from 'redux-thunk';

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

export default class App extends Component {
  render() {
    const {
      appStyle
    } = styles;
    return (
      <Provider store={store}>
        <View style={appStyle}>
          <Header />
          <SearchPage />
        </View>
      </Provider>
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
