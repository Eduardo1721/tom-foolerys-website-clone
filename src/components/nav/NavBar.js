import React from 'react'
import './NavBar.css'

const NavBar = () => {
  return (
    <div className='navBar'>
        <div className='navContents'>
        <img className='navLogo'
        src='https://www.tomfoolerysbar.com/wp-content/uploads/2019/10/tf-logo-2.png'
        alt=''/>
        <ul className='List'>
    
            <li className='l1'><a href="https://www.tomfoolerysbar.com/about-us/">About Us</a></li>
            <li className='l2'><a href="https://www.tomfoolerysbar.com/all-day-menu/">Menus</a></li>
            <li className='l3'><a href='https://www.ezcater.com/'>Catering</a></li>
            <li className='l4'><a href='https://www.tomfoolerysbar.com/banquets/'>Banquets</a></li>
            <li className='l5'><a href='https://www.tomfoolerysbar.com/contact-us/'>Contact Us</a></li>
            <li className='l6'><a href='https://www.tomfoolerysbar.com/employment/'>Employment</a></li>
            <li className='l7'><a href='https://tomfoolerysbar.securetree.com/'>eGift Card</a></li>
            <li className='l8'><a href='https://www.tomfoolerysbar.com/all-day-menu/'>Order Online</a></li>
            <li className='l9'><a href='https://www.tomfoolerysbar.com/events/'>Events</a></li>
        </ul>
        </div>
    </div>
  )
}

export default NavBar
