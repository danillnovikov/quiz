import { SET_STEP } from './actionTypes';

export const setStep = (data) => {
  return {
    type: SET_STEP,
    payload: data,
  };
};
