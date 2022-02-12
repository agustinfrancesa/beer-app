import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'
import { authReducer } from '../Reducers/authReducer';
import { beerReducer } from '../Reducers/beerReducer';
import { drinksReducer } from '../Reducers/drinksReducer';
import { uiReducer } from '../Reducers/guiReducer';



const reducers = combineReducers({
    auth: authReducer,
    ui: uiReducer,
    beers: beerReducer,
    drinks: drinksReducer,
});

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;


export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunk)
    )
);