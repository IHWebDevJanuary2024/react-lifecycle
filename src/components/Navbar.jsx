import { NavLink } from "react-router-dom";
import './Navbar.css'


function Navbar() {
    return (
        <ul className="nav-links">
            <li>
                <NavLink className={({ isActive }) => isActive ? "selected" : ""} to="/example1">
                    Example1
                </NavLink>
            </li>
            <li>
                <NavLink className={({ isActive }) => isActive ? "selected" : ""} to="/example2">
                    Example2
                </NavLink>
            </li>
            <li>
                <NavLink className={({ isActive }) => isActive ? "selected" : ""} to="/example3">
                    Example3
                </NavLink>

            </li>
            <li>
                <NavLink className={({ isActive }) => isActive ? "selected" : ""} to="/example4">
                    Example4
                </NavLink>
            </li>
            <li>
                <NavLink className={({ isActive }) => isActive ? "selected" : ""} to="/example5">
                    Example5
                </NavLink>
            </li>
        </ul>
    )
}

export default Navbar;