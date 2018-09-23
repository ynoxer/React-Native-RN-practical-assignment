export default (state = {}, action) => {
 switch (action.type) {
  case 'GENERATE_CAT_LIST':
    return {
      ...state,
      list: action.list
    }

  case 'SET_LIST_LENGTH':
    return {
      ...state,
      length: action.length
    }

  default:
   return state
 }
}