import React from 'react'
import './header.css'
import HeaderSocials from './HeaderSocials'


const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Kfir Raphael Eliyahu</h1>
        <h5 className="text-light">Mobile App Developer</h5>
        <HeaderSocials/>
      </div>
    </header>
  )
}

export default Header