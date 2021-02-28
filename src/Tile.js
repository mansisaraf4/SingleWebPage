const Tile = ({imgUrl, name}) => {
  return (
    <a > 
      <div className='img-container'>
        <img src={imgUrl} alt = {name} />
        {/* <div>{name}</div> */}
      </div>
    </a>
  )
}

export default Tile