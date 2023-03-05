import {Provider} from "react-redux";
import {TodosLists} from "../components/TodosLists";
import {store} from "../../engine/init/redux";

import {AddTodo} from "../components/AddTodo";
import {Footer} from "../components/Footer";


export function Main() {
    return (
        <Provider store={store}>
            <div className="container">
                <h1>TODO</h1>
                <AddTodo/>
                <br/>
                <h2>TODOS</h2>
                <br/>
                <hr/>
                <TodosLists/>
                <Footer/>
            </div>
        </Provider>
    )
}