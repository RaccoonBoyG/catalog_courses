import * as types from "./actionTypes";

const initialState = {
  items: [],
  items_about: {},
  items_card_about: {},
  loading: false,
  error: null
};

export default function programsReducer(
  state = initialState,
  { type, payload }
) {
  switch (type) {
    case types.FETCH_PROGRAMS_SUCCESS:
      return {
        ...state,
        items: payload.data
      };

    case types.FETCH_PROGRAM_ABOUT_SUCCESS:
      return {
        ...state,
        items_about: payload.data
      };

    case types.FETCH_PROGRAM_ABOUT_LIST_SUCCESS:
      return {
        ...state,
        items_card_about: payload.data_list
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

export const fetchProgramAboutSuccess = data => ({
  type: types.FETCH_PROGRAM_ABOUT_SUCCESS,
  payload: { data }
});

export const fetchProgramAboutListSuccess = data_list => ({
  type: types.FETCH_PROGRAM_ABOUT_LIST_SUCCESS,
  payload: { data_list }
});
