import {applyMiddleware, combineReducers, createStore} from "redux";
import operaReducer from "./operaReducer";
import chromeReducer from "./chromeReducer";
import thunkMiddleware from "redux-thunk";
import simpleTaskReducer from "./simpleTaskReducer";
import utilTaskReducer from "./utilTaskReducer";


let reducers = combineReducers({
    simpleTaskPage: simpleTaskReducer,
    utilTaskPage: utilTaskReducer,
    operaPage: operaReducer,
    chromePage: chromeReducer,
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;