import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default class SearchPage extends Component {
  render(){
    const {
      searchPageStyles,
      textStyles
    } = styles;
    return (
      <View style={searchPageStyles}>
        <Text style={textStyles}>SearchPage Component</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  searchPageStyles: {
    backgroundColor: '#000',
    flex: 1,
    width: '100%',
  },
  textStyles: {
    fontFamily: 'Marvel-Regular',
    padding: 15,
    fontSize: 18,
    color: '#fff'
  }
});
