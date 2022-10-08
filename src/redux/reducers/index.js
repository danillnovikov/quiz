import { combineReducers } from 'redux';
import stepReducer from './stepReducer';
import correctReducer from './correctReducer';

export default combineReducers({
  step: stepReducer,
  correct: correctReducer,
});
