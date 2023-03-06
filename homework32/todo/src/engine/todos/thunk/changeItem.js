import {changeItems} from "../slice";


export const changeItem = (e) => (dispatch) => {
    e.preventDefault();
    const id = Number(e.target.closest('.todo-item').dataset.id);
    dispatch(changeItems({id: id,text: e.target[0].value}))

}