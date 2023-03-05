import {useDispatch} from "react-redux";
import {addItem} from "../../engine/todos/thunk/addItem";
export function AddTodo () {
    const dispatch = useDispatch();
    const onSubmit = (event) => {
        dispatch(addItem(event));
    }
        return (
            <form className="form js--form" action="homework31/todo/src/ui/pages#" onSubmit={onSubmit}>
                <input className="form__input" type="text"  />
                <button className="form__button" type="submit" >Добавить</button>
            </form>
        )
}