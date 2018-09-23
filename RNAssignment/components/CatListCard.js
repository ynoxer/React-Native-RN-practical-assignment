import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';


const CatListCard = ({uri, name}) => (
  <View style={styles.container}>
    <Image
      style={{width: 200, height: 200, borderRadius: 20}}
      source={{uri: uri}}
    />
    <Text style={{marginTop: 5, fontSize: 20}}>{name}</Text>
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
});

export default CatListCard;