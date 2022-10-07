const SET_STEP = 'SET_STEP';

export const setStep = (data) => {
  return {
    type: SET_STEP,
    payload: data,
  };
};
