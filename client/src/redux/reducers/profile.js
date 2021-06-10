import {
  ADD_PROFILE,
  ADD_EXPERIENCE,
  CLEAR_PROFILE,
  CLEAR_PROFILE_BY_ID,
  GET_PROFILE,
  GET_PROFILE_BY_ID,
  GET_REPOS,
  PROFILE_ERROR,
  GET_PROFILES,
  ADD_EDUCATION,
} from '../actions/types';

const initialState = {
  profile: null,
  profiles: null,
  profileById: null,
  repos: [],
  loading: true,
  error: {},
};

const profileReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_PROFILES:
      return {
        ...state,
        profiles: payload,
        loading: false,
      };

    case ADD_PROFILE:
    case GET_PROFILE:
    case ADD_EXPERIENCE:
    case ADD_EDUCATION:
      return {
        ...state,
        profile: payload,
        loading: false,
      };

    case GET_PROFILE_BY_ID:
      return {
        ...state,
        profileById: payload,
        loading: false,
      };

    case GET_REPOS:
      return {
        ...state,
        repos: payload,
        loading: false,
      };

    case CLEAR_PROFILE:
      return {
        ...state,
        profile: null,
        repos: [],
        loading: false,
      };

    case CLEAR_PROFILE_BY_ID:
      return {
        ...state,
        profileById: null,
        repos: [],
        loading: false,
      };

    case PROFILE_ERROR:
      return {
        ...state,
        error: payload,
      };

    default:
      return state;
  }
};

export default profileReducer;
