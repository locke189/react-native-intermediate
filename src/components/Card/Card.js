import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

export default class Card extends Component {
  render(){
    const {
      cardStyles,
      textStyles
    } = styles;
    return (
      <View style={cardStyles}>
        <Text style={textStyles}> CAAAARD! </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cardStyles: {
    backgroundColor: '#ddd',
    margin: 10,
    width: '100%'
  },
  textStyles:{
    color: '#000',
    fontFamily: 'Marvel-Bold',
    fontSize: 24,
  }
});
