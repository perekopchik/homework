import {configureStore} from "@reduxjs/toolkit";
import {createBrowserHistory} from "history";
import {createReduxHistoryContext} from "redux-first-history";
import destination from "../core/destination/slice"
import createSagaMiddleware from 'redux-saga'
import hotels from '../core/hotels/slice'
import rootSaga from "./rootSaga";

const {
    createReduxHistory,
    routerMiddleware,
    routerReducer
} = createReduxHistoryContext({
    history: createBrowserHistory()
})

const sagaMiddleWare = createSagaMiddleware();

const store = configureStore({
    reducer: {
        router: routerReducer,
        hotels,
        destination
    },
    middleware: () => [sagaMiddleWare,routerMiddleware]
});

sagaMiddleWare.run(rootSaga);
export const history = createReduxHistory(store);
export default store;