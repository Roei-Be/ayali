import { NavLink } from 'react-router-dom';

import '../CSS/Navbar.css';

const Navbar = () => {
    return (
        <div className="navbar">
            <NavLink to={"/"}><span>Home</span></NavLink>
            <NavLink to={"/reserch"}><span>Reserch</span></NavLink>
            <span>Publications</span>
            <NavLink to={"/members"}><span>Lab members</span></NavLink>
            <span>Contact</span>
        </div>
    )
}

export default Navbar;