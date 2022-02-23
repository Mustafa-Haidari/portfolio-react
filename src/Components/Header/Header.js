import React from 'react'
import HeaderIntro from './HeaderIntro'
import Socials from './Socials'
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
        <HeaderIntro />
        <Socials />
    </div>
  )
}

export default Header