import { createStore, combineReducers } from 'redux';
import headerReducer from './header-reducer';



const reducers = combineReducers({
    headerElement: headerReducer
});
const store = createStore(reducers);
export default store;

