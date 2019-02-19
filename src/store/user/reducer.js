import * as types from './actionTypes';

const initialState = {
  items: [],
  loading: false,
  error: null,
  isAuth: false
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
    
    case types.FETCH_USER_STATE_AUTH:
      return {
        ...state,
        isAuth: true
      };

    default:
      return state;
  }
}

//selectors

export const fetchUserSuccess = data => ({
    type: types.FETCH_USER_STATE_SUCCESS,
    payload: {
      data
    }
  });
  
export const fetchUserFailure = err => ({
  type: types.FETCH_USER_STATE_FAILURE,
  payload: {
    err
  }
});

export const fetchUserStart = () => ({
  type: types.FETCH_USER_STATE_START
});

export const UserUnAuth = isAuth => ({
  type: types.FETCH_USER_STATE_AUTH,
  payload: {
    isAuth
  }
})