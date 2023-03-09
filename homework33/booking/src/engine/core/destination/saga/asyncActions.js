import {createAction} from "@reduxjs/toolkit";

const asyncActions = Object.freeze({
    getDestinationAsync: createAction('GET_DESTINATION_ASYNC')
})
export const {
    getDestinationAsync
} = asyncActions;