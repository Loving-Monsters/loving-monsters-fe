import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducers/userReducer';

const store = createStore(reducer, composeWithDevTools());

export default store;
