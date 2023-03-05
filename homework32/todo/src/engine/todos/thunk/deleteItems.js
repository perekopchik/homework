import {setItem} from "../slice";

export const deleteItems = () => (dispatch, state) => {
    const {todos} = state();
    dispatch(setItem([todos.items].slice(0, -1)))
}