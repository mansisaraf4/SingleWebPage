const ContactItem = ({title, imgUrl, address}) => {
  return(
    <div className='contact-item-container'>
      <h3>{title}</h3>
      <img src={imgUrl} alt={title} width='100%'/>
      <p>{address[0]}<br /> {address[1]} <br /> {address[2]}</p>
    </div>
  )
}
export default ContactItem