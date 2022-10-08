import { SET_CORRECT } from '../actions/actionTypes';

const initialValue = 0;

export default function correctReducer(state = initialValue, action) {
  switch (action.type) {
    case SET_CORRECT: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}
