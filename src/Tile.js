const Tile = ({imgUrl, name}) => {
  return (
    <a > 
      <div className='img-container'>
        <img src={imgUrl} alt = {name} width='275px' height='275px'/>
        {/* <div>{name}</div> */}
      </div>
    </a>
  )
}

export default Tile