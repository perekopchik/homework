import {useDispatch, useSelector} from "react-redux";
import {changeItem} from "../../engine/todos/thunk/changeItem";
import {useState} from "react";
import {todosSelectors} from "../../engine/todos/selectors";

export const ChangeButton = function () {
    const [edit, setEdit] = useState(false);
    const [button, setButton] = useState(true);
    const [value, setValue] = useState('');
    const todos = useSelector(todosSelectors.items);
    const dispatch = useDispatch();
    const changeTodo = (e) => {
        const id = Number(e.target.closest('.todo-item').dataset.id);
        const text = todos.find(todo => todo.id === id).text;
        setEdit(true);
        setButton(false);
        setValue(text);
    }
    const onSubmit = (event) => {
        setEdit(false);
        setButton(true);
        dispatch(changeItem(event));
    }

    return (
        <div>
            {button ?
                <button onClick={changeTodo}>Change</button>
            : null
            }
            {edit ?
                <form action="#" onSubmit={onSubmit}>
                    <input type="text" value={value}
                           onChange={(e) => setValue(e.target.value)}/>
                    <button type="submit" onSubmit={onSubmit}>Save</button>
                </form>
                : null
            }
        </div>
    )
}