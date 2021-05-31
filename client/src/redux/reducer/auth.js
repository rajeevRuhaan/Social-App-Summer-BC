import { LOAD_USER } from '../actions/types';

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
        token: payload,
        isAuthenticated: true,
        loading: false,
      };

    default:
      return state;
  }
};

export default userReducer;
