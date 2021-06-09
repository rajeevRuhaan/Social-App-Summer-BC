import {
  AUTH_ERROR,
  LOAD_USER,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  UPDATE_USER,
} from '../actions/types';

const initialState = {
  token: null,
  isAuthenticated: false,
  user: null,
  loading: true,
};

const userReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOAD_USER:
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false,
      };

    case UPDATE_USER:
      return {
        ...state,
        user: payload,
        loading: false,
      };

    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
      return {
        ...state,
        token: payload,
        isAuthenticated: true,
        loading: false,
      };

    case AUTH_ERROR:
    case LOGIN_FAIL:
    case REGISTER_FAIL:
    case LOGOUT:
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        user: null,
        loading: false,
      };

    default:
      return state;
  }
};

export default userReducer;
