import NavigationItem from './NavigationItem'

const NavBar = ({click}) => {
  return (
    <ul className= {click ? "nav-options active" : 'nav-options'}>
      <NavigationItem to_id='about' title='WHO WE ARE'/>
      <NavigationItem to_id='what-we-offer' title='WHAT WE OFFER'/>    
      <NavigationItem to_id='clients-say' title='WHO WE SERVE'/>
      <NavigationItem to_id='contact-us' title='CONTACT'/>    
    </ul>
  )
}

export default NavBar