import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';
import persistState, {mergePersistedState} from 'redux-localstorage';
import adapter from 'redux-localstorage/lib/adapters/sessionStorage';
import rootReducer from './reducers/index';
import initialState from './state';

const storage = compose(
)(adapter(window.sessionStorage));

const loggerMiddleware = createLogger();

const reducer = compose(mergePersistedState())(rootReducer);

let middleWare = [thunk];
if (process.env.isDebug) {
  middleWare.push(loggerMiddleware);
}

const store = createStore(reducer, {common: {isLoading: false}}, compose(
  persistState(storage, 'redux'),
  applyMiddleware(...middleWare),
  window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
));


export default store;
