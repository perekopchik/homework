import {useDispatch} from "react-redux";
import {deleteItem} from "../../engine/todos/thunk/deleteItem";

export const DeleteButton = function () {
    const dispatch = useDispatch();

    const deleteTodos = (e) => {
        dispatch(deleteItem(e))
    }
    return (
        <button onClick={deleteTodos}>Delete</button>
    )
}