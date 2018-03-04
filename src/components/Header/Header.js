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
    backgroundColor: '#000',
    position: 'relative',
    top: 0,
    width: '100%',
    marginTop: 20,
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 0,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
  },
  textStyles:{
    fontFamily: 'Marvel-Bold',
    fontSize: 24,
    color: '#DDD',
  }
})
