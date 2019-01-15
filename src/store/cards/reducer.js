import * as types from './actionTypes';

const initialState = {
  items: [],
  loading: false,
  pages: 0,
  error: null
};

export default function productReducer(state = initialState, action) {
  switch(action.type) {
    case types.FETCH_PRODUCTS_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      };

    case types.FETCH_PRODUCTS_SUCCESS:
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

    case types.FETCH_PRODUCTS_PAGINATE:
    return{
      ...state,
      pages: 0
    }

    default:
      return state;
  }
}

export const fetchProductsBegin = () => ({
  type: types.FETCH_PRODUCTS_BEGIN
});

export const fetchProductsSuccess = data => ({
  type: types.FETCH_PRODUCTS_SUCCESS,
  payload: { data }
});

export const fetchProductsFailure = error => ({
  type: types.FETCH_PRODUCTS_FAILURE,
  payload: { error }
});

export const fetchProductsPages = page => ({
  type: types.FETCH_PRODUCTS_PAGINATE,
  payload: { page }
})