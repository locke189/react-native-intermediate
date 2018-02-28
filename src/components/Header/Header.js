import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';


export default class Header extends Component {
  render(){
    const {
      headerStyles,
      textStyles
    } = styles;
    return (
      <View style={headerStyles}>
        <Text style={textStyles}>
          Hero List
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerStyles: {
    backgroundColor: '#DDD',
    position: 'relative',
    top: 0,
    width: '100%',
    marginTop: 20,
    padding: 15,
    flex: 0,
  },
  textStyles:{
    fontFamily: 'Marvel-Bold',
    fontSize: 24,
    color: '#000',
  }
})
