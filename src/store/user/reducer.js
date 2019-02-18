import * as types from './actionTypes';

const initialState = {
  items: [],
  loading: false,
  error: null
};

export default function usersReducer(state = initialState, action) {
  switch(action.type) {

    case types.FETCH_USER_STATE:
      return {
        ...state,
        items: action.payload.data
      };

    default:
      return state;
  }
}

//selectors

export const fetchUserSuccess = data => ({
  type: types.FETCH_USER_STATE,
  payload: { data }
});