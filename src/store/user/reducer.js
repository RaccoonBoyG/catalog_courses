import * as types from "./actionTypes";

const initialState = {
  items_user: [],
  loading: false,
  error: null,
  isAuth: true,
  course_enroll_user: false
};

export default function usersReducer(state = initialState, { type, payload }) {
  switch (type) {
    case types.FETCH_USER_STATE_SUCCESS:
      return {
        ...state,
        items_user: payload.data
      };

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
        isAuth: false
      };

    case types.FETCH_USER_COURSE_ENROLL:
      return {
        ...state,
        course_enroll_user: payload.course
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
});

export const fetchCourseEnroll = course => ({
  type: types.FETCH_USER_COURSE_ENROLL,
  payload: {
    course
  }
});
