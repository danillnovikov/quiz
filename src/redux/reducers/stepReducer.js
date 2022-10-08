import { SET_STEP } from '../actions/actionTypes';

const initialValue = 0;

export default function stepReducer(state = initialValue, action) {
  switch (action.type) {
    case SET_STEP: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}
