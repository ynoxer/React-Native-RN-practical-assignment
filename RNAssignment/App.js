import React, {Component} from 'react';
import { Provider, connect } from 'react-redux';
import configureStore from "./store";
import Test from './components/Test';

export default class App extends Component{
  render() {
    return (
      <Provider store={configureStore()}>
        <Test/>
      </Provider>
    );
  }
}
