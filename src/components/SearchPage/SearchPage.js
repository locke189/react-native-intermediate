import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import {
  Card,
  CardItem
} from '../../components';

export default class SearchPage extends Component {
  render(){
    const {
      searchPageStyles,
      textStyles
    } = styles;
    return (
      <View style={searchPageStyles}>
        <Card>
          <CardItem>
            <Text style={textStyles}>Card Component</Text>
          </CardItem>
          <CardItem>
            <Text style={textStyles}>Card Component 2</Text>
          </CardItem>
        </Card>
        <Text style={textStyles}>SearchPage Component</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  searchPageStyles: {

    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
  },
  textStyles: {
    fontFamily: 'Marvel-Regular',
    padding: 15,
    fontSize: 18,
    color: '#fff'
  }
});
