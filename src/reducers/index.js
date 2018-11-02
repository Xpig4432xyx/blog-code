import {combineReducers} from 'redux';

function token(state = null, action) {

  switch (action.type) {

    default:
      return state;
  }

}

const combinedReducer = combineReducers({
  token
});

const rootReducer = (state, action) => {
  const intermediateState = combinedReducer(state, action);
  return intermediateState;
};

export default rootReducer;

