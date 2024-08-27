import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar shadow-lg fixed-top">
            <div className="container-fluid">
                <div className="nav-content">
                    {/* Brand on the left */}
                    <div className="nav-brand">
                        <Link to="/" className="navbar-brand">Ceci<span>Farm</span></Link>
                    </div>

                    {/* Links on the right */}
                    <div className="nav-link">
                        <ul className="navbar-menu">
                            <li>
                                <Link to="/product" className="navbar-link">Products</Link>
                            </li>
                            <li>
                                <Link to="/mission" className="navbar-link">Mission</Link>
                            </li>
                            <li>
                                <Link to="/contact" className="navbar-link">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
