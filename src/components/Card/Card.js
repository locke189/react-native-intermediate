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
        {this.props.children}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cardStyles: {
    backgroundColor: '#ddd',
    margin: 10,
    width: '100%',
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#ddd',
    shadowOffset: {width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
  },
  textStyles:{
    color: '#000',
    fontFamily: 'Marvel-Bold',
    fontSize: 24,
  }
});
