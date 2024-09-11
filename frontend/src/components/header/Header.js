import React from 'react';
import './header.css';
import Logo from './photos/KJSCE-logo.png';

export default function Header() {
    return (
        <div className="main">
            <header>
                <div className="navbar">
                    <a href="/admin">
                        <img className="somaiya-logo-main" src={Logo} alt="somaiya-logo" /> 
                    </a>
                    <button className="logoutBtn">Logout <i className="fa-solid fa-arrow-right-from-bracket"></i>     
                    </button>
                </div>
            </header> 
        </div>
    )
}