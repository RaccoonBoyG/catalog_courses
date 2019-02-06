import * as types from './actionTypes';

const initialState = {
  items: [],
  loading: false,
  error: null
};

export default function organizationsReducer(state = initialState, action) {
  switch(action.type) {

    case types.FETCH_ORG_SUCCESS:
      return {
        ...state,
        items: action.payload.data
      };

    default:
      return state;
  }
}

//selectors

export const fetchOrgSuccess = data => ({
  type: types.FETCH_ORG_SUCCESS,
  payload: { data }
});
