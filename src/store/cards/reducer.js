import * as types from './actionTypes';

const initialState = {
  items: [],
  loading: false,
  error: null,
  num_obj: 10
};

export default function cardsReducer(state = initialState, action) {
  switch(action.type) {
    case types.LOAD_MORE:
      return {
        ...state,
        num_obj: state.num_obj+10
      };

    case types.FETCH_CARDS_SUCCESS:
      return {
        ...state,
        items: action.payload.data
      };

    default:
      return state;
  }
}

//selectors

export const LoadMoreData = num_obj => ({
  type: types.LOAD_MORE,
  payload: { num_obj }
});

export const fetchCardsSuccess = data => ({
  type: types.FETCH_CARDS_SUCCESS,
  payload: { data }
});
