import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Platform, StyleSheet, Text, View, ScrollView, Button, Image, FlatList, TouchableHighlight, NetInfo } from 'react-native';
import * as actionCreators from '../actions/CatListActions';
import CatListCard from './CatListCard';
import AmmountPicker from './AmmountPicker';
import NoInternetIndicator from './NoInternetIndicator';

class CatList extends Component{

  static navigationOptions = {
    title: 'Cat List',
    headerTitleStyle: {
      textAlign: 'center',
      flex: 1
    }
  };

  handleConnectivityChange = isConnected => {
    this.props.handleConnectivityChange(isConnected);
  };

  componentDidMount() {
    this.props.setListLength(30);
    this.props.generateCatList(100);
    NetInfo.isConnected.addEventListener('connectionChange', this.handleConnectivityChange);
  };

  componentWillUnmount() {
    NetInfo.isConnected.removeEventListener('connectionChange', this.handleConnectivityChange);
  };

  render() {
    const { generateCatList, setListLength, list, length, navigation, isConnected } = this.props;

    const renderList = () => {
      if (list) {
        return (
          <FlatList
            underlayColor={'rgba(45,103,173,0.2)'}
            style={{backgroundColor: 'white'}}
            data={list.slice(0, length)}
            renderItem={
              ({item}) => {
                return(
                  <TouchableHighlight 
                    onPress={() => navigation.push(
                      'Details',
                      {
                      uri: item.uri,
                      name: item.name
                      }
                    )
                  }>
                    <CatListCard
                      uri={item.uri}
                      name={item.name}
                    />
                  </TouchableHighlight>
                )
              }
            }
          />
        )
      }
    }

    return (
      <View>
        <NoInternetIndicator isConnected={isConnected}/>
        <ScrollView>
          <AmmountPicker currentLength={length} setLength={(length) => setListLength(length)}/>
          { renderList() }
        </ScrollView>
      </View>
    );
  }
}


const mapStateToProps = (state) => ({
  list: state.catList.list,
  length: state.catList.length,
  isConnected: state.catList.isConnected
})

const mapDispatchToProps = {
  ...actionCreators
}

export default connect(mapStateToProps, mapDispatchToProps)(CatList);
