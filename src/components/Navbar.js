import React from 'react'
import '../css/NavbarCSS.css'

// this component displays the navbar at the top of title image 
const Navbar = () => {
    return (
        <nav className='navbar' style={{backgroundColor: "transparent", fontFamily: "Open Sans", fontSize: "14px", alignItems: "center", justifyContent:"space-between", boxSizing: "border-box", margin: "0px", padding: "0px", display: "flex", position: "absolute", width: "100%",height: "56px",left: "-6px",top: "-2px",zIndex: "1"}}>

            <img className="brand-title" src="homejam.png" alt="" />

            {/* this button will be displayed when the width of the screen is decreased */}
            <a href="/" className='toggle-button'>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </a>

            {/* these are the links present right side of the navbar  */}
            <div className="navbar-links">
                <ul>
                    <li > <a href="/"> <img id='searchicon' src="searchicon.png" alt="" /></a></li>
                    <li id='searchtext'> <a href="/" style={{marginLeft:"20px"}}> Search</a></li>
                    <li id='help'> <a href="/" style={{marginLeft:"10px"}}> Help</a></li>
                    <li id='account'> <a href="/"> Account</a></li>
                    <li id='bucketicon'> <a href="/"> <img src="bucketicon.png" alt="" /></a></li>
                </ul>
            </div>
            
        </nav>

    )
}

export default Navbar