import {useDispatch, useSelector} from "react-redux";
import {todosSelectors} from "../../engine/todos/selectors";
import {deleteItems} from "../../engine/todos/thunk/deleteItems";
export function Footer (){
    const todos = useSelector(todosSelectors.items);
    const DeleteButton = function (){
        const dispatch = useDispatch();

        const deleteTodos = () => {
            dispatch(deleteItems())
        }
        return (
            <button className="form__button" onClick={deleteTodos}>Удалить все записи</button>
        )
    }

    return (
        <footer>
            <DeleteButton/>
            <br/>
            <h3>У вас {todos.length} записей</h3>
        </footer>
    )
}