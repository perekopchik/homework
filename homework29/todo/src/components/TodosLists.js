export function TodosLists(props) {
    return (
        <div className="todos-wrapper js--todos-wrapper">
            {props.values.map(item => {
                return (
                    <label className="todo-item" data-id={item.id}>
                        <input className="todo-item__input" checked={item.checked} type="checkbox"/>
                        <div className="todo-item__desc">{item.text}</div>
                        <button className="todo-item__delete">Удалить</button>
                    </label>
                )
            })}
        </div>
    )
}