import {Provider, useDispatch, useSelector} from "react-redux";
import {TodosLists} from "../components/TodosLists";
import {store} from "../../engine/config/store";
import {counterSelector} from "../../engine/core/counter/selector";
import {increment} from "../../engine/core/counter/slice";
import {useState} from "react";


export function Main() {
    const [text, setText] = useState('');
    const [todos, setTodos] = useState([]);
    const handleChangeText = (e) => {
        setText(e.target.value)
    };

    function ButtonInc() {
        const dispatch = useDispatch();
        const handleClick = () => dispatch(increment())
        return (
            <button onClick={handleClick} className="form_button" type="submit" id="increment" disabled={text.length < 5}>Добавить</button>
        )

    }
    function Footer () {
        const value = useSelector(counterSelector.value)
        return (
            <footer>
                <h3 id="value">Всего: {value} </h3>
            </footer>
        )
    }

    const addItem = (event) => {
        event.preventDefault();
        setTodos([...todos, {
                id: Math.floor(Math.random() * 100),
                text: event.target[0].value,
            }]
        )
        setText('');
    }
    return (
        <Provider store={store}>
            <div className="container">
                <h1>TODO</h1>
                <form className="form js--form" action="homework31/todo/src/ui/pages#" onSubmit={addItem.bind(this)}>
                    <input className="form__input" type="text" name="text" value={text} onChange={handleChangeText}/>
                    <ButtonInc/>
                </form>
                <br/>
                <h2>TODOS</h2>
                <br/>
                <hr/>
                <TodosLists values={todos}/>
                <Footer/>
            </div>
        </Provider>
    )
}