import { createStore, combineReducers } from 'redux';
import mainReducer from './main-reducer';

const reducers = combineReducers({
    mainElement: mainReducer
});

const store = createStore(reducers);

export default store;
