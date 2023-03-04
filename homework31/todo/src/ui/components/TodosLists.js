export function TodosLists(props) {
    return (
        <div className="todos-wrapper js--todos-wrapper">
            {props.values.map(item => {
                return (
                    <label className="todo-item" data-id={item.id}>
                        <div className="todo-item__desc">{item.text}</div>
                    </label>
                )
            })}
        </div>
    )
}