import * as types from './actionTypes';

const initialState = {
  items: [],
  loading: false,
  error: null,
  paginates: []
};

export default function cardsReducer(state = initialState, action) {
  switch(action.type) {
    case types.FETCH_PRODUCTS_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      };

    case types.FETCH_CARDS_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.payload.data
      };

    case types.FETCH_PRODUCTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        items: []
      };

    default:
      return state;
  }
}

//selectors

export const fetchProductsBegin = () => ({
  type: types.FETCH_PRODUCTS_BEGIN
});

export const fetchCardsSuccess = data => ({
  type: types.FETCH_CARDS_SUCCESS,
  payload: { data }
});

export const fetchProductsFailure = error => ({
  type: types.FETCH_PRODUCTS_FAILURE,
  payload: { error }
});
