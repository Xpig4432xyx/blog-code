import {combineReducers} from 'redux';

import blog from './blog';
import common from './common';

function token(state = null, action) {

  switch (action.type) {

    default:
      return state;
  }

}

const combinedReducer = combineReducers({
  token, blog, common
});

const rootReducer = (state, action) => {
  const intermediateState = combinedReducer(state, action);
  return intermediateState;
};

export default rootReducer;

