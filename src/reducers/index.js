import {combineReducers} from 'redux';

import common from './common';

const combinedReducer = combineReducers({
  common
});

const rootReducer = (state, action) => {
  const intermediateState = combinedReducer(state, action);
  return intermediateState;
};

export default rootReducer;

