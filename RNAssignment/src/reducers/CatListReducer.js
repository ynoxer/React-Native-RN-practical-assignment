export default (state = {isConnected: true}, action) => {
 switch (action.type) {
  case 'GENERATE_CAT_LIST':
    return {
      ...state,
      list: action.list
    }

  case 'HANDLE_CONNECTIVITY_CHANGE':
    return {
      ...state,
      isConnected: action.isConnected
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