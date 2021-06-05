import axios from 'axios';
import { ADD_POST, POST_ERROR } from './types';
import { setAlert } from './alert';

export const addPost = (formData) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const body = JSON.stringify(formData);
    const res = await axios.post('/api/posts/', body, config);

    dispatch({ type: ADD_POST, payload: res.data });
  } catch (error) {
    const errors = error.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }
    dispatch({
      type: POST_ERROR,
    });
  }
};
