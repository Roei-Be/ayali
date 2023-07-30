import { NavLink } from 'react-router-dom';

import '../CSS/Navbar.css';

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="logo"><img src="https://static.wixstatic.com/media/56112d_1efe4d20db6249f1a5876256376aabbc~mv2.gif" alt="" /></div>
            <div className="links">
                <NavLink to={"/"}><span>Home</span></NavLink>
                <NavLink to={"/reserch"}><span>Reserch</span></NavLink>
                <span>Publications</span>
                <NavLink to={"/members"}><span>Lab members</span></NavLink>
                <NavLink to={"/contact"}><span>Contact</span></NavLink>
            </div>
        </div>
    )
}

export default Navbar;