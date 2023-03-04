import {Provider,useDispatch,useSelector} from "react-redux";
import {store} from "../../engine/config/store";
import {counterSelector} from "../../engine/core/counter/selector";
import {decrement, increment} from "../../engine/core/counter/slice";

function ButtonInc() {
    const dispatch = useDispatch();
    const handleClick = () => dispatch(increment())
    return (
        <button onClick={handleClick} id="increment">+</button>
    )

}

function ButtonDec() {
    const dispatch = useDispatch();
    const handleClick = () => dispatch(decrement())
    return (
        <button onClick={handleClick} id="decrement">-</button>
    )
}

function Counter(){
    const value = useSelector(counterSelector.value)
    return(
        <span id="value">{value}</span>
    )
}
function App() {
    return (
        <Provider store={store}>
        <div className="App">
            <p>
                <h2>Value:
                <Counter/></h2>
                <br/>
                <ButtonInc/>
                <ButtonDec/>
            </p>
        </div>
        </Provider>
    );
}

export default App;
