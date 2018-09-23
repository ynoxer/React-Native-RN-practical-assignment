import React, {Component} from 'react';
import { Provider, connect } from 'react-redux';
import { View, AppRegistry } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import configureStore from "./store";
import CatList from './components/CatList';
import CatDetails from './components/CatDetails';

export default class App extends Component{
  render() {
    return (
      <Provider store={configureStore()}>
          <RootStack/>
      </Provider>
    );
  }
}

const RootStack = createStackNavigator(
  { 
    List: CatList,
    Details: CatDetails
  },
  {
    initialRouteName: 'List'
  }
);
