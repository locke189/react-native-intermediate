import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

export default class CardItem extends Component {
  render(){
    const {
      cardStyles,
      textStyles
    } = styles;
    return (
      <View style={cardStyles}>
        {this.props.children}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cardStyles: {
    width: '100%',
    borderRadius: 2,
    borderColor: '#AAA',
    borderBottomWidth: 1,
    shadowColor: '#AAA',
    shadowOffset: {width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
  },
  textStyles:{
    color: '#000',
    fontFamily: 'Marvel-Bold',
    fontSize: 24,
  }
});
