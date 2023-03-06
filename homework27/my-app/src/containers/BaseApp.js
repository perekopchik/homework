import React from "react";

const BaseApp = function () {
    let textInput = React.createRef();
    const [ul,setUl] = React.useState(['HTML','CSS','JavaScript'])

    function showInput(e) {
        e.preventDefault();
        setUl([...ul,textInput.current.value])
/*        ul.current.insertAdjacentHTML('beforeend', `<li>${textInput.current.value}</li>`)*/
        textInput.current.value = '';
    }

    const name = 'Kyrylo';
    const surname = 'Perekopaiko';

    return <div>
        <h2>{name}</h2>
        <h2>{surname}</h2>
        <ul>
            {ul.map(item=> <li key={item}>{item}</li>)}
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