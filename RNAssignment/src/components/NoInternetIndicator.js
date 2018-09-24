import React from 'react';
import { View, Text, NetInfo, StyleSheet } from 'react-native';


const NoInternetIndicator = ({isConnected}) => {
  if (!isConnected) {
    return(
      <View style={styles.offlineContainer}>
        <Text style={styles.offlineText}>No Internet Connection</Text>
      </View>
    )
  } else {
    return null
  }
};


const styles = StyleSheet.create({
  offlineContainer: {
    backgroundColor: '#b52424',
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  offlineText: { 
    color: '#fff'
  }
});

export default NoInternetIndicator;