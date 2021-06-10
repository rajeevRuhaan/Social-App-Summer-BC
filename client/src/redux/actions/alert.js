import { v4 as uuidv4 } from 'uuid';
import { REMOVE_ALERT, SET_ALERT } from './types';

export const setAlert =
  (msg, alertType, timeout = 3000) =>
  async (dispatch) => {
    const id = uuidv4();
    await dispatch({
      type: SET_ALERT,
      payload: {
        msg,
        alertType,
        id,
      },
    });

    setTimeout(() => {
      dispatch({ type: REMOVE_ALERT, payload: id });
    }, timeout);
  };
