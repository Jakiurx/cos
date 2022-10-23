import "../style/Header.css";
import { Link } from "react-router-dom";

export default function Header() {
    const logo = require('../img/logo.png')
    const img = require('./waveHeader.png')
    return(
        <>
            <header>
                <Link className="link logo"  to='/'><img src={logo} alt="Logo" /></Link>
                <div className="menu">
                    <Link className="link" to='/about'>Coś o mnie</Link>
                    <Link className="link" to='/projects'>Projekty</Link>
                    <Link className="link" to='/contact'>Kontakt</Link>
                </div>
            </header>
            <img className="waveHeader" src={img} />
        </>
    )
}