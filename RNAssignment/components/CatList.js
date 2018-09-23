import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Platform, StyleSheet, Text, View, ScrollView, Button, Image, FlatList, TouchableHighlight } from 'react-native';
import * as actionCreators from '../actions/CatListActions';
import CatListCard from './CatListCard';
import AmmountPicker from './AmmountPicker';


class CatList extends Component{

  static navigationOptions = {
    title: 'Cat List',
    headerTitleStyle: {
      textAlign: 'center',
      flex: 1
    }
  };

  componentDidMount() {
    this.props.setListLength(30);
    this.props.generateCatList(100);
  };

  render() {
    const { generateCatList, setListLength, list, length, navigation } = this.props;

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
      <ScrollView>
        <AmmountPicker setLength={(length) => setListLength(length)}/>
        { renderList() }
      </ScrollView>
    );
  }
}


const mapStateToProps = (state) => ({
  list: state.catList.list,
  length: state.catList.length
})

const mapDispatchToProps = {
  ...actionCreators
}

export default connect(mapStateToProps, mapDispatchToProps)(CatList);
