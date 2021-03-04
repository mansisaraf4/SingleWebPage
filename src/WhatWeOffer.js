import OfferItem from './OfferItem'
import serviceIcon from './icon-service.svg'
import settingIcon from './icon-setting.svg'
import inventoryIcon from './icon-inventory.svg'
import teamIcon from './icon-team.svg'
import loc1 from './formationslab-location-v1.jpg'
import loc2 from './formationslab-showroom-v2.jpg'
import loc3 from './formationslab-location-v3.jpg'
import map1 from './map-dots.svg'
import map2 from './map-base.svg'

const WhatWeOffer = () => {
  const settingDetail = 'In addition to a sprawling slab yard stocked with the finest natural stone, we offer a unique retail setting in which to consult with our specialists about your design and architecture needs.'
  const inventoryDetail = 'Drawing on over 40 years of relationships with quarries around the world, we import exotic and specialty natural stone from the hills of Brazil, Turkey, Italy, France, and more.'
  const teamDetail = 'The Formation team prides itself on being experts in our trade. Our highly skilled staff knows everything about natural stone and surfaces, and is eager to assist with your design.'
  const serviceDetail = 'We’ve been serving California and Oregon for over four decades. Our loyal clientele is like family—a family we hope you’ll join! If we don’t have the product you need, we will find it.'

  return (
  <div className='offer-container'>
    <div className='offer-item-container' id='what-we-offer'>
      <OfferItem img={settingIcon} title='Unique Setting' detail={settingDetail}/>
      <OfferItem img={inventoryIcon} title='Unrivaled Inventory' detail={inventoryDetail}/>
      <OfferItem img={teamIcon} title='An Expert Team' detail={teamDetail}/>
      <OfferItem img={serviceIcon} title='A History of Service' detail={serviceDetail}/>
    </div>
    <a href='#contact-us' className='contact-link-yellow'> Visit us today to see for yourself!</a>
    <div className='location-images'>
      <img src={loc1} alt='location-1'className='loc-img first' />
      <img src={loc2} alt='location-2'className='loc-img second' />
      <img src={loc3} alt='location-3'className='loc-img third' />
    </div>
    <div className='background-grey'>
      <div className='world-map'>
        <h2 > <span>What we offer </span> </h2>
        <h1> Discovering design in every corner of the globe</h1>
        <p >Formation offers over 1,000 different natural stone and tile products from locations around the world.</p>
        <div className='map-img'>
          <div>
            {/* <img className='first-map' src={map1} alt='first-map'/> */}
            <img className='second-map' src={map2} alt='second-map'/>
          </div>
        </div>
        <a href='#contact-us' className='contact-link-white'> Bring a world of design to your next project. Contact us today.</a>
      </div>
    </div>
  </div>

  )
}

export default WhatWeOffer