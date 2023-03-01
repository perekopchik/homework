import React from "react";

function  BaseApp() {
    let textInput = React.createRef();
    let ul = React.createRef();

    function showInput() {
        ul.current.insertAdjacentHTML('beforeend', `<li>${textInput.current.value}</li>`)
        textInput.current.value = '';
    }

    const name = 'Kyrylo';
    const surname = 'Perekopaiko';

    return <div>
        <h2>{name}</h2>
        <h2>{surname}</h2>
        <ul ref={ul}>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
        </ul>
        <h3>email: kirilperekopayko@gmail.com</h3>
        <h3>phone: +380506878645</h3>
        <form action="#">
            <input type="text" ref={textInput}/>
            <button onClick={showInput}>Добавить технологию</button>
        </form>
    </div>
}
export default BaseApp;