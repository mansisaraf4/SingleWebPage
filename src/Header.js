// import React from 'react'
import NavBar from './NavBar'
import Logo from './formation-logo.svg'
const Header = () => {
  return (
    <div className='header'>
      <img src={Logo} alt='Formation Logo' />
      <NavBar />
    </div>
  )
}
export default Header