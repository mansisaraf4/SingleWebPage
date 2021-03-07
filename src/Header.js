import {useState} from 'react'
import NavBar from './NavBar'
import Logo from './images/formation-logo.svg'
import {ReactComponent as CloseMenu} from './images/x.svg'
import {ReactComponent as MenuIcon} from './images/menu.svg'
const Header = () => {
  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)
  return (
    <div className='header' id='header'>
      <div className="logo-nav">
        <div className='logo-container'>
          <img src={Logo} alt='Formation Logo' />
        </div>
        <div className='nav-bar'>
          <NavBar click={click}/>
        </div>
      </div>
      
      <div className="mobile-menu" onClick={handleClick}>
        {click ? (
          <CloseMenu className="menu-icon" />
        ) : (
          <MenuIcon className="menu-icon" />
        )}
      </div>
    </div>
    // <div className='header' id='header'>
    //   <div className='logo-div'>
    //     <img src={Logo} alt='Formation Logo' />
    //   </div>
    //   <NavBar />
    //   <div className="mobile-menu" onClick={handleClick}>
    //     {click ? (
    //       <CloseMenu className="menu-icon" />
    //     ) : (
    //       <MenuIcon className="menu-icon" />
    //     )}
    //   </div>
    // </div>
  )
}
export default Header