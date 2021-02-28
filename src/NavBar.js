import NavigationItem from './NavigationItem'

const NavBar = () => {
  return (
    <div className='nav-bar'>
      <NavigationItem to_id='' title='WHO WE ARE'/>
      <NavigationItem to_id='' title='WHAT WE OFFER'/>
      <NavigationItem to_id='' title='WHO WE SERVE'/>
      <NavigationItem to_id='' title='CONTACT'/>
    </div>
  )
}

export default NavBar