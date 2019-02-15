import * as types from './actionTypes';

const initialState = {
  items: {},
  loading: false,
  error: null
};

export default function aboutsReducer(state = initialState, action) {
  switch(action.type) {

    case types.FETCH_PROGRAM_ABOUT_SUCCESS:
      return {
        ...state,
        items: action.payload.data
      };

    default:
      return state;
  }
}

//selectors

export const fetchProgramAboutSuccess = data => ({
  type: types.FETCH_PROGRAM_ABOUT_SUCCESS,
  payload: { data }
});
