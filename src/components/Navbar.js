import React from 'react'
import "./Navbar.css";



function Navbar() {


  return (
    
    <nav className="navbar">
        <div className="nav-icon" >
            <i className="fa-solid fa-bars"></i>
        </div> 
        <ul className='nav-menu'>
            <li className="nav">Home</li>
            <li className="nav">Features</li>
            <li className="nav"> Portfolio</li>
            <li className="nav">About Us</li>
            <li className="nav">Contact Us</li>
        </ul>
        <div className="searchBar">
            <input type="text" className='searchInput'/>
            <span className="material-symbols-outlined">
                search
            </span>
        </div>
    </nav>
   
  )
}

export default Navbar;
