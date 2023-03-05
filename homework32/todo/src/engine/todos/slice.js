
import {createSlice} from "@reduxjs/toolkit";

const todos = createSlice({
    name: 'todos',
    initialState: {
        items: [],
    },
    reducers: {
        setItem: (state,action)=>{
            const { payload } = action;
            state.items = payload;
        }
    }
})
export const {setItem}= todos.actions;
export const todosReducer= todos.reducer;