import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import thunkMiddleware from 'redux-thunk';
import TagReducer from './reducers/TagReducer/TagReducer';
let reducers=combineReducers({
    TagReducer: TagReducer
});

export const store = createStore(reducers, applyMiddleware(thunkMiddleware));

