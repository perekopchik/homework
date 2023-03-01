import {Component} from "react";
import {TodosLists} from "../components/TodosLists";

export class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: []
        }

    }
    addItem(event){
        event.preventDefault();
        this.setState({
            todos: [...this.state.todos,{
                id: Math.floor(Math.random() * 100),
                text: event.target[0].value,
                checked: false
            }]
        },() => event.target[0].value = '')

    }
    render() {

        return (
            <div className="container">
                <h1>TODO</h1>
                <form className="form js--form" action="#" onSubmit={this.addItem.bind(this)}>
                    <input className="form__input" type="text" name="text"/>
                    <button className="form_button" type="submit">Добавить</button>
                </form>
                <br/>
                <h2>TODOS</h2>
                <br/>
                <hr/>
                <TodosLists values = {this.state.todos} />
            </div>

        )
    }
}