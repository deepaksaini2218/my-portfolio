import React, { useState } from 'react'
import * as Scroll from 'react-scroll';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import { FaBars, FaTimes } from 'react-icons/fa'
// import logo from './images/logo.png'

import './Navbar.css'

const Navbar = () => {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const closeMenu = () => setClick(false)

    return (
        <div className='header'>
            <nav className='navbar'>
                <Link to="test1" spy={true} smooth={true} offset={50} duration={500}  className='logo'>
                    {/* <img src={logo} alt='logo' /> */}
                    Deepak Saini
                </Link>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={30} style={{ color: '#ffffff' }} />)
                        : (<FaBars size={30} style={{ color: '#ffffff' }} />)}

                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className='nav-item'>
                        <Link to="home" spy={true} smooth={true} offset={-100} duration={500}  onClick={closeMenu}>Home</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="about" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>About</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="contact" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>Contact</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="service" spy={true} smooth={true} offset={-80} duration={500} onClick={closeMenu}>Service</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="projects" spy={true} smooth={true} offset={-80} duration={500} onClick={closeMenu}>Project</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar