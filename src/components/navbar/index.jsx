import React from 'react';
import './styles.css'

function Navbar() {

  return (
    <header>
        <h1 className='logo'><a href="#">Gentium</a></h1>
        <nav>            
            <ul className='menu'>
                <li><a href="#" className='nav-link'>Home</a></li>
                <li><a href="#" className='nav-link'>Services</a></li>
                <li><a href="#" className='nav-link'>Works</a></li>
                <li><a href="#" className='nav-link'>About</a></li>
                <li><a href="#" className='nav-link'>Client</a></li>
                <li><a href="#" className='nav-link'>Blog</a></li>
                <li><a href="#" className='nav-link'>Contact</a></li>
            </ul>
        </nav>
    </header>
  );
}

export default Navbar;