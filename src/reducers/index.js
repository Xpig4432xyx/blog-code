import {combineReducers} from 'redux';

import common from './common';


const combinedReducer = combineReducers({
  common
});

const rootReducer = (state, action) => {
  const intermediateState = combinedReducer(state, action);
  console.log(state, action, intermediateState);

  return intermediateState;
};

export default rootReducer;

