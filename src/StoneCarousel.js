import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import img1 from './images/Fact-1.png'
import img2 from './images/Fact-2.png'
import img3 from './images/Fact-3.png'
import img4 from './images/Fact-4.png'
import CarouselItem from './CarouselItem'

const StoneCarousel = () => {
  return(
    <div className='carousel-container'>
      <h1>The Story Behind the Stone</h1>
      <div className='carousel-content'>
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={20}
        totalSlides={4}
        isPlaying={true}
        // infinite={true}
        interval={5000}
      >
        <Slider className='slider'>
          <Slide index={0}><CarouselItem imgUrl={img1} imgTitle='Recycling Tips' details='Recycling one plastic shampoo bottle can save enough energy to power a computer for 25 minutes!' /> </Slide>
          <Slide index={1}><CarouselItem imgUrl={img2} imgTitle='DIY' details='Recycling 1 ton of plastic bottles saves the equivalent energy usage of a two-person household for one year.' /></Slide>
          <Slide index={2}><CarouselItem imgUrl={img3} imgTitle='Family Fun' details='The amount of plastic we throw away each year is enough to circle the earth four times.' /></Slide>          
          <Slide index={3}><CarouselItem imgUrl={img4} imgTitle='Recycling Facts' details='60% of American moms say they’d be more likely to recycle bathroom products if they had a recycling bin in their bathroom.' /></Slide>
        </Slider>
        <ButtonBack className='btn-back'>Back</ButtonBack>
        <ButtonNext className='btn-next'>Next</ButtonNext>
      </CarouselProvider>
      </div>
    </div>
  )
}
export default StoneCarousel