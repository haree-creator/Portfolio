import React, { useState } from 'react';
import './navbar.css';
import logo from '../../NewPort/letter-h.png';
import contactForm from '../../NewPort/contact-form.png'
import {Link} from 'react-scroll';
import menu from '../../NewPort/menu.png';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false)
    return(
        <nav className='navbar'>
            <img src={logo} alt='Logo' className='logo' />
            <div className='menuNav'>
                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-50} duration={500} className='menuListItem'>Home</Link>
                <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className='menuListItem'>About</Link>
                <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className='menuListItem'>Portfolio</Link>
            </div>
            <button className='menuBtn' onClick={() =>
            {document.getElementById('contact').scrollIntoView({behavior: 'smooth'})}}>
                <img src={contactForm} alt='' className='menuImg' />Contact Me
            </button>

            <img src={menu} alt='menu' className='bmenu' onClick={() => setShowMenu(!showMenu)} />
            <div className='navMenu' style={{display:showMenu? 'flex':'none'}}>
                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={() => setShowMenu(false)}>Home</Link>
                <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={() => setShowMenu(false)}>About</Link>
                <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={() => setShowMenu(false)}>Portfolio</Link>
                <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={() => setShowMenu(false)}>Contact</Link>
            </div>
        </nav>
    )
}

export default Navbar;

