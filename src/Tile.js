const Tile = ({imgUrl, name}) => {
  return (
    
      <div className='img-container'>
        <img src={imgUrl} alt = {name} width='275px' height='275px'/>
        {/* <div>{name}</div> */}
      </div>
  )
}

export default Tile