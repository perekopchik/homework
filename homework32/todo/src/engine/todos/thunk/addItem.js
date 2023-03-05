import {setItem} from "../slice";


export const addItem = (event) => (dispatch ,state) =>{
    event.preventDefault();
    const {todos} = state();
        dispatch(setItem([...todos.items, {
            id: Math.floor(Math.random() * 100),
            text: event.target[0].value,
        }]))
        event.target[0].value = '';
}

