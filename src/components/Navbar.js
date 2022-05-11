import React from 'react'
import './Navbarcss.css'
const Navbar = () => {
    return (
        <nav className='navbar' style={{ backgroundColor: "transparent", fontFamily: "Open Sans", fontSize: "14px", alignItems: "center", justifyContent: "space-between", boxSizing: "border-box", margin: "0px", padding: "0px", display: "flex",position:"absolute",width:"100%",
        height: "56px",
        left: "-6px",
        top: "-2px",
        border:"2px solid green",
        zIndex:"1"
         }}>
                <img className="brand-title" src="homejam.png" alt="" />
            <a href="/" className='toggle-button'>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </a>
            <div className="navbar-links">
                <ul>
                    <li > <a href="/"> <img  id='searchicon' src="searchicon.png" alt="" /></a></li>
                    <li id='searchtext'> <a href="/"> Search</a></li>
                    <li id='help'> <a href="/"> Help</a></li>
                    <li id='account'> <a href="/"> Account</a></li>
                    <li id='bucketicon'> <a href="/"> <img src="bucketicon.png" alt="" /></a></li>
                </ul>
            </div>
        </nav>

    )
}

export default Navbar