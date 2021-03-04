const OfferItem = ({img, title, detail}) => {
  return (
    <div className='offer-item'>
      <img src={img} alt={title} width='100px' height='100px' />
      <h3>{title}</h3>
      <p>{detail}</p>
    </div>
  )
}

export default OfferItem