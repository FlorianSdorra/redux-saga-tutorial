import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers/index';
import { forbiddenWordsMiddleware } from '../middleware';

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ 

const store = createStore(
    rootReducer,
    storeEnhancers(applyMiddleware(forbiddenWordsMiddleware))
    );

export default store;