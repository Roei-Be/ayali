import { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import { ThemeContext } from '../context/ThemeContext';

import '../CSS/Navbar.css';
import DarkMode from '../assets/DarkMode';
import LightMode from '../assets/LightMode';

const Navbar = () => {

    const {darkMode, setDarkMode} = useContext(ThemeContext);

    const darkModeSwitch = () => {
        if (darkMode === true) {
            setDarkMode(false);
            document.cookie = "false"
        } else {
            setDarkMode(true);
            document.cookie = "true";
        }
    }

    return (
        <div className={`${darkMode ? "navbar navbarDark" : "navbar"}`}>
            <div className="logo"><img src="https://static.wixstatic.com/media/56112d_1efe4d20db6249f1a5876256376aabbc~mv2.gif" alt="" /></div>
            <div className="links">
                <NavLink to={"/"}><span>Home</span></NavLink>
                <NavLink to={"/reserch"}><span>Reserch</span></NavLink>
                <span>Publications</span>
                <NavLink to={"/members"}><span>Lab members</span></NavLink>
                <NavLink to={"/contact"}><span>Contact</span></NavLink>
            </div>

            <div className='darkModeSwitch' onClick={darkModeSwitch}>
                <span>{darkMode ? <LightMode color={"white"}/> : <DarkMode color={"black"}/>}</span>
            </div>
        </div>
    )
}

export default Navbar;