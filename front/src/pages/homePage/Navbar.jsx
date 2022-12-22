import React from "react";
import Logo from './../../img/logo.png';
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg ">
            <div className="container">
                <a href="/" className="navbar-brand"><img src={Logo} alt="Logo" /></a>
                <button className="navbar-toggler" data-bs-toggle='collapse' data-bs-target='#menu'>
                    <i className="fa fa-bars" style={{ color: 'white' }}></i>
                </button>
                <div className="collapse navbar-collapse" id="menu">
                    <ul className="navbar-nav ijtimoiy me-auto mb-2 mb-lg-0">

                    </ul>
                    <ul className="navbar-nav linklar">
                        <li className="nav-item">
                            <a href="/" className="nav-link">HOME</a>
                        </li>
                        <li className="nav-item">
                            <a href="/" className="nav-link">PROPERTIES</a>
                        </li>
                        <li className="nav-item">
                            <a href="/" className="nav-link">GALLERY</a>
                        </li>   
                        <li className="nav-item">
                            <a href="/" className="nav-link">BLOG</a>
                        </li>
                        <li className="nav-item">
                            <a href="/" className="nav-link">SEARCH</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;