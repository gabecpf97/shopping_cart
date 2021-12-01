import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div className="navBar">
            <h2>logo</h2>
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