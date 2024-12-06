import React from 'react';
import logo from '../assets/logo.png';
import './Header.css';

function Header() {

    
    return (
       <> 
        <header>
            <nav className="navbar navbar-dark bg-dark fixed-top">
                <div className="container-fluid">
                <a className="navbar-brand" href="#"><img className="logo" src={logo} alt="Logo"></img>Welcome on my web site</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="offcanvas offcanvas-end text-bg-dark" tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                    <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Navigation</h5>
                    <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                    <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                        <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#features">Features</a>
                        </li>
                        <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            See more
                        </a>
                        <ul className="dropdown-menu dropdown-menu-dark">
                            <li><a className="dropdown-item" href="#">About us</a></li>
                            <li><a className="dropdown-item" href="#">Service</a></li>
                            <li><a className="dropdown-item" href="#">Gallery</a></li>
                            <li>
                            <hr className="dropdown-divider" />
                            </li>
                            <li><a className="dropdown-item" href="#">Contact</a></li>
                        </ul>
                        </li>
                    </ul>
                    <form className="d-flex mt-3" role="search">
                        <input className="form-control me-2" type="search" placeholder="search" aria-label="search" />
                        <button className="btn btn-success" type="submit">search</button>
                    </form>
                    </div>
                </div>
                </div>
        </nav>
        </header>
      </> 
    )
    
}

export default Header;