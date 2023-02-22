import React from 'react'
import img from './logo192.png'
import NavBar from './Nav';
import './style.css'
function Header() {
    return ( 
        <>
        <div className='Df'>
        <img src={img}/>
        <h1>Reasons I'm excited to learn React</h1>
        </div>
        <NavBar/>
        </>
        );
}

export default Header;