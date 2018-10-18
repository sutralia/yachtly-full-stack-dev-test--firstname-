import * as types from '../actions/actionTypes';  
import initialState from './initialState';

export default function userReducer(state = initialState.users, action) {
  console.log('xxxxx', action)  
  switch(action.type) {
    case types.LOAD_USER_SUCCESS:
      console.log('oke')
      return action.users
    default: 
      console.log('not')
      return state;
  }
}