import {FC} from 'react'

import gerict from 'assest/gericht.png'
import './Navbar.css'
import {GiHamburgerMenu} from "react-icons/all";

const Navbar: FC = () => {
    return (
        <nav className="app__navbar">
            <div className="app__navbar_logo">
                <img src={gerict} alt="Gerict logo"/>
            </div>
            <ul className="app__navbar_links">
                <li className="p__opensans">
                    <a href="#home">Home</a>
                </li>
                <li className="p__opensans">
                    <a href="#about">About</a>
                </li>
                <li className="p__opensans">
                    <a href="#menu">Menu</a>
                </li>
                <li className="p__opensans">
                    <a href="#awards">Awards</a>
                </li>
                <li className="p__opensans">
                    <a href="#contact">Contact</a>
                </li>
            </ul>
            <div className="app__navbar-actions p__opensans">
                <a href="#login">Login / Register</a>
                <div/>
                <a href="/">Book Table</a>
            </div>
            <div className="app__bar-smallscreen">
                <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => {}}/>
            </div>
        </nav>
    )
}

export default Navbar
