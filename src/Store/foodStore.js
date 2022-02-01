import {applyMiddleware, createStore, compose} from "redux";
import thunk from 'redux-thunk'


const initFood = {
    food: [],
    error: null,
    loading: false,
}


import foodFetchReducer from './foodFetchReducer'




export const store = createStore(foodFetchReducer, initFood, compose(applyMiddleware(thunk),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))