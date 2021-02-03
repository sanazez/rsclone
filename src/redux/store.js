import {createStore, combineReducers} from 'redux';
import headerReducer from './header-reducer';
import sidebarReducer from "./sidebar-reducer";
import {authReducer} from "./auth-reducer";

const reducers = combineReducers({
    headerElement: headerReducer,
    sidebarState: sidebarReducer,
    authState: authReducer,
});
let store = createStore(reducers);
export default store;
