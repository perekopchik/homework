
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
        },
        changeItems: (state , action) =>{
            const {payload} = action ;
            const todoElement = state.items.find(todo => todo.id === payload.id);
            todoElement.text = payload.text ;
        }
    }
})

export const {setItem}= todos.actions;
export const {changeItems}= todos.actions;
export const todosReducer= todos.reducer;