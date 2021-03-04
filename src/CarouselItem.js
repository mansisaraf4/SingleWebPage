const CarouselItem = ({imgUrl, imgTitle, details}) => {
  return (
    <div className='carousel-item'>
      <div className='carousel-img'>
        <img src={imgUrl} alt={imgTitle} height='200px' width='200px'/>
      </div>
      <div className='carousel-item-detail'>
        <h3>{imgTitle}</h3>
        <p>{details}</p>
      </div>
    </div>
  )
}
export default CarouselItem