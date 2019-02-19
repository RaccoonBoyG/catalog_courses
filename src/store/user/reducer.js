import * as types from './actionTypes';

const initialState = {
  items: [],
  loading: false,
  error: null
};

export default function usersReducer(state = initialState, {type, payload}) {
  switch(type) {

    case types.FETCH_USER_STATE_SUCCESS:
      return {
        ...state,
        items: payload.data
      }

    case types.FETCH_USER_STATE_START:
      return {
        ...state
      };

    case types.FETCH_USER_STATE_FAILURE:
      return {
        ...state,
        payload: payload.err,
        error: true
      };

    default:
      return state;
  }
}

//selectors

export const fetchUserSuccess = data => ({
    type: types.FETCH_CARDS_SUCCESS,
    payload: {
      data
    }
  });
  
  export const fetchUserFailure = err => ({
    type: types.FETCH_CARDS_FAILURE,
    payload: {
      err
    }
  });
  
  export const fetchUserStart = () => ({
    type: types.FETCH_CARDS_START
  });