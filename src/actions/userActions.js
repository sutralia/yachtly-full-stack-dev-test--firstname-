import userApi from '../api/userApi';
import * as types from './actionTypes';  

export function loadUser() { 
  console.log('opopop') 
  return function(dispatch) {
    return userApi.getAllUsers().then(cats => {
      dispatch(loadCatsSuccess(cats));
    }).catch(error => {
      throw(error);
    });
  };
}

export function loadCatsSuccess(cats) {  
  console.log('yyyy')
  return {type: types.LOAD_USERS_SUCCESS, cats};
}