import { LOAD_USER } from './types';

export const loadUser = () => (dispatch) => {
  dispatch({ type: LOAD_USER, payload: 1 });
};
