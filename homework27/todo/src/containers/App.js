import React, {useState} from "react";
import {TodosLists} from "../components/TodosLists";

export function App (){

    const [todos, setTodos] = useState([]);
    const addItem = (event) => {
        event.preventDefault();
        setTodos({
            todos: [...todos,{
                id: Math.floor(Math.random() * 100),
                text: event.target[0].value,
                checked: false
            }]
        },() => event.target[0].value = '')

    }
    return (
        <div className="container">
            <h1>TODO</h1>
            <form className="form js--form" action="#" onSubmit={addItem.bind(this)}>
                <input className="form__input" type="text" name="text"/>
                <button className="form_button" type="submit">Добавить</button>
            </form>
            <br/>
            <h2>TODOS</h2>
            <br/>
            <hr/>
            <TodosLists values = {todos} />
        </div>

    )
}