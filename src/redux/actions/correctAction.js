import { SET_CORRECT } from './actionTypes';

export const setCorrect = (data) => {
  return {
    type: SET_CORRECT,
    payload: data,
  };
};
