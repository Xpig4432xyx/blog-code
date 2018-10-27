import {combineReducers} from 'redux';

import crossSliceReducer from './cross';

function token(state = null, action) {

  switch(action.type){

    default:
      return state
  }

}

const combinedReducer = combineReducers({
  token
});

const rootReducer = (state, action) => {
  const intermediateState = combinedReducer(state, action);
  const finalState = crossSliceReducer(intermediateState, action);
  return finalState;
};

export default rootReducer;

