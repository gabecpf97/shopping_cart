import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div className="navBar">
            <Link to="/">
                <h2>DFS</h2>
            </Link>
            <ul className="nav_tabs">
                <Link to="/">
                    <li>Home</li>
                </Link>
                <Link to="/store">
                    <li>Store</li>
                </Link>
                <Link to="/cart">
                    <li>cart</li>
                </Link>
            </ul>
        </div>
    );
}

export default NavBar;