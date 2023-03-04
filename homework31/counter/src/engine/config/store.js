import {configureStore} from "@reduxjs/toolkit";
import {counter} from "../core/counter/slice";


export const store = configureStore({
    reducer: {
        counter,
    }
})