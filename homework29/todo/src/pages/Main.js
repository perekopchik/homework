import {TodosLists} from "../components/TodosLists";
import React, {useState} from "react";

export function Main(){
    const [text, setText] = useState('Помыть полы');
    const [todos, setTodos] = useState([]);
    const handleChangeText = (e) => {
        setText(e.target.value)
    };
    const addItem = (event) => {
        event.preventDefault();
        setTodos([...todos, {
                id: Math.floor(Math.random() * 100),
                text: event.target[0].value,
                checked: false
            }]
        )
        setText('');
    }
    return(
        <div className="container">
            <h1>TODO</h1>
            <form className="form js--form" action="#" onSubmit={addItem.bind(this)}>
                <input className="form__input" type="text" name="text" value={text} onChange={handleChangeText}/>
                <button className="form_button" type="submit" disabled={text.length < 5}>Добавить</button>
            </form>
            <br/>
            <h2>TODOS</h2>
            <br/>
            <hr/>
            <TodosLists values={todos}/>
        </div>
    )
}