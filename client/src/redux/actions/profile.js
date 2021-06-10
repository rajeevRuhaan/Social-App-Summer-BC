import axios from 'axios';
import { setAlert } from './alert';
import {
  CLEAR_PROFILE,
  CLEAR_PROFILE_BY_ID,
  ADD_EXPERIENCE,
  GET_PROFILE,
  GET_PROFILES,
  GET_PROFILE_BY_ID,
  GET_REPOS,
  PROFILE_ERROR,
  ADD_PROFILE,
  ADD_EDUCATION,
} from './types';

//get all users
export const getAllProfiles = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/profile');

    dispatch({ type: GET_PROFILES, payload: res.data });
  } catch (error) {
    dispatch({
      type: PROFILE_ERROR,
      payload: {
        msg: error.response.statusText,
        status: error.response.status,
      },
    });
  }
};

//get current user profile
export const getCurrentProfile = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/profile/me');

    dispatch({ type: GET_PROFILE, payload: res.data });
  } catch (error) {
    dispatch({
      type: PROFILE_ERROR,
      payload: {
        msg: error.response.statusText,
        status: error.response.status,
      },
    });
  }
};

//get user profile by user id
export const getUserProfileById = (userId) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/profile/user/${userId}`);

    await dispatch({ type: GET_PROFILE_BY_ID, payload: res.data });

    if (res.data.githubusername) {
      dispatch(getGithubRepos(res.data.githubusername));
    }
  } catch (error) {
    dispatch({
      type: PROFILE_ERROR,
      payload: {
        msg: error.response.statusText,
        status: error.response.status,
      },
    });
  }
};

//create or update profile
export const createAndUpdateProfile =
  (formData = {}) =>
  async (dispatch) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const res = await axios.post('/api/profile', formData, config);

      //fetch current user profile
      dispatch({
        type: ADD_PROFILE,
        payload: res.data,
      });

      //set alert
      dispatch(setAlert('Profile updated', 'success'));
    } catch (error) {
      dispatch({
        type: PROFILE_ERROR,
        payload: {
          msg: error.response.statusText,
          status: error.response.status,
        },
      });
    }
  };

//Create experience
export const createExperience = (formData) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const res = await axios.put('/api/profile/experience', formData, config);

    //fetch current user profile
    dispatch({
      type: ADD_EXPERIENCE,
      payload: res.data,
    });

    //set alert
    dispatch(setAlert('Profile updated', 'success'));
  } catch (error) {
    dispatch({
      type: PROFILE_ERROR,
      payload: {
        msg: error.response.statusText,
        status: error.response.status,
      },
    });
  }
};

//Create experience
export const createEducation = (formData) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const res = await axios.put('/api/profile/education', formData, config);

    //fetch current user profile
    dispatch({
      type: ADD_EDUCATION,
      payload: res.data,
    });

    //set alert
    dispatch(setAlert('Profile updated', 'success'));
  } catch (error) {
    dispatch({
      type: PROFILE_ERROR,
      payload: {
        msg: error.response.statusText,
        status: error.response.status,
      },
    });
  }
};

//Get Github repos
export const getGithubRepos = (username) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/profile/github/${username}`);
    dispatch({
      type: GET_REPOS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: PROFILE_ERROR,
      payload: {
        msg: error.response.statusText,
        status: error.response.status,
      },
    });
  }
};

//clear log-in user profile
export const clearProfile = () => ({
  type: CLEAR_PROFILE,
});

//clear user profile by id
export const clearUserProfileById = () => ({
  type: CLEAR_PROFILE_BY_ID,
});
