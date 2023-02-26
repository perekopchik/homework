import React from 'react';
import ReactDOM from 'react-dom/client';


const root = ReactDOM.createRoot(document.getElementById('root'));

const name = 'Kyrylo';
const surname = 'Perekopaiko';
const BaseApp = function (){
    return <div>
        <h2>{name}</h2>
        <h2>{surname}</h2>
        <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
        </ul>
        <h3>email: kirilperekopayko@gmail.com</h3>
        <h3>phone: +380506878645</h3>
    </div>
}
root.render(<BaseApp/>);

