import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const AmmountPicker = ({setLength}) => (
   <View style={styles.container} >
    <View style={styles.button}>
      <Button
        onPress={(length) => setLength(30)}
        title='30'
      />
    </View>
    <View style={styles.button}>
      <Button
        onPress={(length) => setLength(50)}
        title='50'
      />
    </View>
    <View style={styles.button}>
      <Button
        onPress={(length) => setLength(100)}
        title='100'
      />
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  button: {
    width: '30%',
    height: 40,
    color: 'blue'
  }
});

export default AmmountPicker;