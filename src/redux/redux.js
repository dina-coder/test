import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import thunkMiddleware from 'redux-thunk';
import TagReducer from './reducers/TagReducer/TagReducer';
let reducers=combineReducers({
    TagReducer: TagReducer
});

const saveState = (state) => {
    let initialState = {TagReducer:state.TagReducer}
    try {

        const serialisedState = JSON.stringify(initialState);
        window.sessionStorage.setItem('app_state', serialisedState);
    } catch (err) {
    }
};
const loadState = () => {
    try {
        const serialisedState = window.sessionStorage.getItem('app_state');
        if (!serialisedState) return undefined;
        return JSON.parse(serialisedState);
    } catch (err) {
        return undefined;
    }
};

const oldState = loadState();
const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        }) : compose;


export const store = createStore(reducers, oldState, applyMiddleware(thunkMiddleware));
store.subscribe(() => {
    saveState(store.getState());
});
