import * as types from './actionTypes';

const initialState = {
  items: [],
  num_obj: 10,
  input: '',
  err: null,
  page: 2,
  isHideButton: true,
};

export default function cardsReducer(state = initialState, {
  type,
  payload
}) {
  switch (type) {
    case types.LOAD_MORE:
      return {
        ...state,
        num_obj: state.num_obj + 10
      };

    case types.FETCH_CARDS_SUCCESS:
      return {
        ...state,
        items: payload.data
      }

    case types.FETCH_CARDS_START:
      return {
        ...state
      };

    case types.FETCH_CARDS_FAILURE:
      return {
        ...state,
        payload: payload.err,
        error: true
      };

    case types.LOAD_MORE_SUCCESS:
      return {
        ...state,
        items: state.items.concat(payload.data),
        page: state.page + 1
      };

    case types.LOAD_MORE_START:
      return {
        ...state
      };

    case types.LOAD_MORE_HIDE_BUTTON:
      return {
        ...state,
        isHideButton: false
      };

      case types.LOAD_MORE_FAILURE:
      return {
        ...state,
        payload: payload.err,
        error: true
      };

    case types.SEARCH_INPUT:
      return {
        ...state,
        input: payload.input
      };
    default:
      return state;
  }
}

//selectors
//filter(card => card.name.includes(state.cards.myValue)),

export const LoadMoreDataPage = state => state.cards.page;

export const LoadMoreDataLength = state => state.cards.items.length;

export const searchInputDataFilter = (state,value) => state.cards.items.filter(card => card.name.includes(value));

export const LoadMoreDataHideButton = buttonState => ({
  type: types.LOAD_MORE_HIDE_BUTTON,
  payload: {
    buttonState
  }
})

export const LoadMoreDataSuccess = data => ({
  type: types.LOAD_MORE_SUCCESS,
  payload: {
    data
  }
});

export const LoadMoreDataFailure = err => ({
  type: types.LOAD_MORE_FAILURE,
  payload: {
    err
  }
});

export const LoadMoreDataStart = () => ({
  type: types.LOAD_MORE_START
});

export const fetchCardsSuccess = data => ({
  type: types.FETCH_CARDS_SUCCESS,
  payload: {
    data
  }
});

export const fetchCardsFailure = err => ({
  type: types.FETCH_CARDS_FAILURE,
  payload: {
    err
  }
});

export const fetchCardsStart = () => ({
  type: types.FETCH_CARDS_START
});

export const searchInputData = input => ({
    type: types.SEARCH_INPUT,
    payload: input
});