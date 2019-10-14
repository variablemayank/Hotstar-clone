import {applyMiddleWare,createStore,compose} from 'redux';
import createSageMiddleware from 'redux-saga';
import rootReducer from './rootReducer';
import rootSaga from './rootSaga';
import logger from 'redux-logger';
import configureStore from '../store';

const bindMiddleware = middleware => {
    return applyMiddleWare(...middleware);
}

function configureStore(initialState ={}){
    const sagaMiddleware = createSageMiddleware();
    const middleware = [sagaMiddleware];
    middleware.push(logger);
    const store = createStore(
        rootReducer,
        initialState,
        bindMiddleware(middleware)
    );
    store.sagaTask = sagaMiddleware.run(rootSaga);
    console.log("store in global -->",store);
    return store;
}
export default configureStore;