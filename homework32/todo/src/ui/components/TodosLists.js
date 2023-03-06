import {useDispatch, useSelector} from "react-redux";
import {todosSelectors} from "../../engine/todos/selectors";
import {useEffect} from "react";
import {getItems} from "../../engine/todos/thunk/getItems";
import {DeleteButton} from "./DeleteButton";
import {ChangeButton} from "./ChangeButton";

export function TodosLists() {
    const dispatch = useDispatch();
    const todos = useSelector(todosSelectors.items);
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