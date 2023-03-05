

export const changeItem = (props,e) => (dispatch, state) => {
    const {todos} = state();
    const id = Number(e.target.closest('.todo-item').dataset.id);
    const text = todos.items.find(todo => todo.id === id).text;
    console.log(text);


}