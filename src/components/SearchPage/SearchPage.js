import React, { Component } from 'react';
import {
  View,
  ScrollView,
  Text,
  Image,
  StyleSheet,
} from 'react-native';

import {
  Card,
  CardItem
} from '../../components';

export default class SearchPage extends Component {

  //for some reason this doesn't look good here... :P
  componentDidMount(){
    const { fetchData } = this.props;
    if (fetchData) {
      console.log(this.props);
      fetchData();
    }
  }

  renderCards(){
    const { heroList } = this.props;

    if(!heroList){
      return null;
    }

    return heroList.map((hero) => {
      const {
        id,
        name,
        description,
        thumbnail
      } = hero;
      const {
        ImageStyles,
        textStyles
      } = styles;
      const thumbURL = `${thumbnail.path}.${thumbnail.extension}`;
      return (
      <Card key={id}>
        <CardItem>
          <Text style={textStyles}>{name}</Text>
        </CardItem>
        <CardItem>
          <Image style={ImageStyles} source={{uri: thumbURL.replace('http','https')}}></Image>
        </CardItem>
        <CardItem>
          <Text style={textStyles}>{description}</Text>
        </CardItem>
    </Card>
    )});
  }

  render(){
    const {
      searchPageStyles,
      textStyles
    } = styles;
    return (
      <ScrollView style={searchPageStyles}>
      {this.renderCards()}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  searchPageStyles: {
    flex: 1,
    width: '100%',
    padding: 30,
  },
  textStyles: {
    fontFamily: 'Marvel-Regular',
    padding: 15,
    fontSize: 18,
    color: '#000'
  },
  ImageStyles: {
    width: '100%',
    height: 100,
  }
});
