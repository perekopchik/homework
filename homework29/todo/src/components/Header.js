import {Link} from "react-router-dom";

export function Header (){
    return (
        <header className="header">
            <ul className="list">
                <li><Link to="/">Главная</Link></li>
                <li><Link to="/contacts">Контакты</Link></li>
            </ul>
        </header>
    )
}