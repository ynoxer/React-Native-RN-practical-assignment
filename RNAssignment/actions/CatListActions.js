import axios from 'axios';
import generateName from '../helpers/NameGenerator';

export const generateCatList = (ammount) => dispath => {
  let list = [];
  for (i=0; i < ammount; i++){
    let h = Math.floor(Math.random() * 400) + 200;
    let w = Math.floor(Math.random() * 400) + 200;
    let uri = 'https://placekitten.com/' + w + '/' + h;
    let name = generateName();
    list.push({uri: uri, name: name, loading: true});
  }
  dispath({
    type: 'GENERATE_CAT_LIST',
    list: list
  })
}

export const setListLength = (length) => dispath => {
  dispath({
    type: 'SET_LIST_LENGTH',
    length: length
  })
}

