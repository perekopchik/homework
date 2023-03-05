import {useDispatch, useSelector} from "react-redux";
import {todosSelectors} from "../../engine/todos/selectors";
import {useEffect} from "react";
import {getItems} from "../../engine/todos/thunk/getItems";
import {DeleteButton} from "./DeleteButton";
import {changeItem} from "../../engine/todos/thunk/changeItem";

export function TodosLists() {
    const dispatch = useDispatch();
    const todos = useSelector(todosSelectors.items);
    const ChangeButton = function () {
        const dispatch = useDispatch();

        const changeTodo = (e) => {
            dispatch(changeItem(e))
        }
        return (
            <button onClick={changeTodo}>Change</button>
        )
    }

    useEffect(() => {
        dispatch(getItems)
    }, []);
    return (
        <div className="todos-wrapper js--todos-wrapper">
            {todos.map(item => {
                return (
                    <label className="todo-item" data-id={item.id} key={item.id}>
                        <div className="todo-item__desc">{item.text}</div>
                        <ChangeButton/>
                        <DeleteButton/>
                    </label>
                )
            })}
        </div>
    );
}