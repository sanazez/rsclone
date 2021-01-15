import { createStore, combineReducers } from 'redux';
import headerReducer from './header-reducer';

const reducers = combineReducers({
    headerElement: headerReducer
});
let store = createStore(reducers);
export default store;
