const Footer = () => {
  const addressItem = (name, add1, add2, tel) => {
    return (
      <div className='address-item'>
        <h3>{name}</h3>
        <p>{add1}<br /> {add2} <br /> {tel}</p>
      </div>
    )
  }
  return(
    <div className='footer-bck'>
      <div className='footer-container'>
        {addressItem ('PALM DESERT SHOWROOM', '74-824 42nd Avenue','Palm Desert, CA 92260','(760) 773-1001')}
        {addressItem ('SAN LEANDRO SHOWROOM','1991 Fairway Drive', 'San Leandro, CA 94577', '(510) 351-3000')}
        {addressItem ('BEND SHOWROOM', '50 SE Scott St #8', 'Bend, OR 97702', '(541) 706-9990')}
        <h3><a href='#header'>Top </a></h3>
      </div>
    </div>
  )
}
export default Footer