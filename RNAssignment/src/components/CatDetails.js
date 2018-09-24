import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, ScrollView, View, Image } from 'react-native';


export default class CatDetails extends Component {

  static navigationOptions = {
    title: 'Cat View',
    headerTitleStyle: {
      textAlign: 'center',
      flex: 1
    },
    headerRight: (<View></View>)
  };

  render(){
    const { navigation } = this.props;
    const uri = navigation.getParam('uri');
    const name = navigation.getParam('name');

    return(
      <ScrollView style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={{uri: uri}}
          />
        </View>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Phasellus in nisl euismod felis malesuada ultricies ut ac lacus. 
          Curabitur dignissim, magna vitae malesuada sodales, tortor eros lobortis quam, 
          vitae rutrum purus orci in massa. Nullam odio sem, lobortis quis metus quis, 
          rutrum fermentum turpis. Sed in lacus eros. Curabitur orci ante, 
          vulputate sit amet tincidunt sed, dignissim nec nisi. 
          Nullam ultrices ante et ex scelerisque viverra. Mauris eget ipsum quis 
          enim condimentum blandit in ut sapien.
        </Text>
      </ScrollView>
    );
  }

};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white'
  },
  imageContainer: {
    borderWidth: 1,
    borderColor: 'black'
  },
  image: {
    width: '100%',
    height: 300 
  },
  name: {
    margin: 10,
    fontSize: 30,
    color: 'black'
  },
  description: {
    fontSize: 20,
    margin: 10
  }
});
