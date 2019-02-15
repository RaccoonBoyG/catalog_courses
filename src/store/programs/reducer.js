import * as types from './actionTypes';

const initialState = {
  items: []
};

export default function programsReducer(state = initialState, action) {
  switch(action.type) {

    case types.FETCH_PROGRAMS_SUCCESS:
      return {
        ...state,
        items: action.payload.data
      };

    default:
      return state;
  }
}

//selectors

export const fetchProgramSuccess = data => ({
  type: types.FETCH_PROGRAMS_SUCCESS,
  payload: { data }
});
