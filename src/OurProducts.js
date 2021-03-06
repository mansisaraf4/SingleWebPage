import Granite from './images/granite.jfif'
import Marbel from './images/marble.jfif'
import Quartzite from './images/Quartzite.jpg'
import Sapienstone from './images/Sapienstone.jpg'
import TilesMosaic from './images/TilesMosaic.jpg'
import Limestone from './images/Limestone.jpg'
import Caeserstone from './images/CaeserStone.jpg'
import Vetrazzo from './images/Bistro.jpg'
import Tile from './Tile'

const OurProducts = () => {
  return(
    <div className='our-products' id='about'>
      <h2 > <span>WHAT WE OFFER </span> </h2>
      <h1> OUR PRODUCTS</h1>
      <p>Contemporary, rustic, elegant, or whimsical—whatever your artistic vision may be, we have the medium to bring it to life. We carry only the finest natural stone and tile lines, each with a character all its own.</p>
      <div className='flex-container'>
        <Tile imgUrl={Granite} name='Granite' />
        <Tile imgUrl={Marbel} name='Marbel' />
        <Tile imgUrl={Quartzite} name='Quartizite and Natural Stone' />
        <Tile imgUrl={Caeserstone} name='Caeserstone' />
        <Tile imgUrl={Limestone} name='Limestone, Travertine and Onyx' />
        <Tile imgUrl={Sapienstone} name='Sapienstone' />
        <Tile imgUrl={Vetrazzo} name='Vetrazzo' />
        <Tile imgUrl={TilesMosaic} name='Tiles and Mosaic' />
      </div>
    </div>
  )
}

export default OurProducts