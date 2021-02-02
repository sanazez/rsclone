import {createStore, combineReducers} from 'redux';
import headerReducer from './header-reducer';
import sidebarReducer from "./sidebar-reducer";

const reducers = combineReducers({
    headerElement: headerReducer,
    sidebarState: sidebarReducer,
});
let store = createStore(reducers);
export default store;
