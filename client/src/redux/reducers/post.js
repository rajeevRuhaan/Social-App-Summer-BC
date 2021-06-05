import { ADD_POST, POST_ERROR } from '../actions/types';

const intialState = {
  posts: [],
  post: null,
  loading: true,
  error: {},
};

const postReducer = (state = intialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_POST:
      return {
        ...state,
        post: payload,
        posts: [payload, ...state.posts],
        loading: false,
      };

    case POST_ERROR:
      return {
        ...state,
        post: null,
        loading: false,
      };

    default:
      return state;
  }
};

export default postReducer;
