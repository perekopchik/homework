import {setItem} from "../slice";
const remove = (arr, ...args) => {
    return arr.filter((item) => {
        return !args.some((arg, index) => {
            return arr.indexOf(item) === arg;
        });
    });
};

export const deleteItem = (e) => (dispatch, state) => {
    const {todos} = state();
    const id = Number(e.target.closest('.todo-item').dataset.id);
    const index = todos.items.findIndex(todo => todo.id === id);
    dispatch(setItem(remove(todos.items,index)))
}