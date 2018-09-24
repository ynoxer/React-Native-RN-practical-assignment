import axios from 'axios';
import generateName from '../helpers/NameGenerator';
import { Image } from 'react-native';

export const generateCatList = (ammount) => dispatch => {
  let list = [];
  for (i=0; i < ammount; i++){
    let h = Math.floor(Math.random() * 400) + 200;
    let w = Math.floor(Math.random() * 400) + 200;
    let uri = 'https://placekitten.com/' + w + '/' + h;
    Image.prefetch(uri);
    let name = generateName();
    list.push({uri: uri, name: name});
  }
  dispatch({
    type: 'GENERATE_CAT_LIST',
    list: list
  })
}

export const handleConnectivityChange = (isConnected) => dispatch => {
  dispatch({
    type: 'HANDLE_CONNECTIVITY_CHANGE',
    isConnected: isConnected
  })
}

export const setListLength = (length) => dispatch => {
  dispatch({
    type: 'SET_LIST_LENGTH',
    length: length
  })
}

