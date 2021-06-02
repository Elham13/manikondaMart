import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { productReducer } from "../reducers/reducers";

const reducer = combineReducers({ 
    product: productReducer
});

const initialState = {};

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducer,
    initialState, 
    composeEnhancer(applyMiddleware(thunk))
)

export default store; 