import {createAction} from "@reduxjs/toolkit";

const asyncActions = Object.freeze({
    getHotelsAsync: createAction('GET_HOTELS_ASYNC')
})
export const {
    getHotelsAsync
} = asyncActions;