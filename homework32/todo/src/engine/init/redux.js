import {configureStore} from "@reduxjs/toolkit";
import {todosReducer} from "../todos/slice";
import thunk from "redux-thunk";
export const store = configureStore({
    reducer: {
        todos: todosReducer,
    },
    middleware: (getDefaultMiddleware) => [
        ...getDefaultMiddleware(),
        thunk
    ]
})