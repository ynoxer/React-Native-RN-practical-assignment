import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';


const CatListCard = ({uri, name}) => (
  <View style={styles.container}>
    <Image
      style={styles.image}
      source={{uri: uri}}
    />
    <Text style={styles.name}>{name}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    margin: 10,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EEEEEE',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'black'
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 20
  },
  name: {
    marginTop: 5,
    fontSize: 20
  }
});

export default CatListCard;