import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, DotGroup, Dot } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

const CarouselFB = () => {
  const slide1 = [`“As an interior designer in the Coachella Valley, I love having everything I need for my projects all in one place. Formation has by far the best selection of unique and exotic slabs that you just can’t find anywhere else.”`,`KIM BRADLEY, KIM BRADLEY DESIGN GROUP`]
  const slide2 = [`“I have used Formation when remodeling several of my own homes and they always help me find just what I am looking for. The people are friendly and have a lot of knowledge of all the different products they offer.”`, `ELIZABETH BENTON – HOMEOWNER, THE VINTAGE COUNTRY CLUB`]
  const slide3 = [`“Formation makes sure the material for my project shows up on time and they stay within my budget. My clients love how clean and organized their slab yard is. They have a great selection of everything you need to complete your project.”`, `JERRY SANTUCCI, SANTUCCI BUILDERS`]
  const slideItem = (slide) => {
    return (
      <div>
        <p>{slide[0]}</p>
        <h3>{slide[1]}</h3>
      </div>
    )
  }
  return (
    <div className='carousel-feedback' id='clients-say'>
      <div className='carouselfb-container'>
      <h2>Hear what our local clients have to say</h2>
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={20}
        totalSlides={3}
        isPlaying={true}
        // infinite={true}
        interval={5000}
      >
        <Slider className='slider-main'>
          <Slide index={0}>{slideItem(slide1)}</Slide>
          <Slide index={1}>{slideItem(slide2)}</Slide>
          <Slide index={2}>{slideItem(slide3)}</Slide>
        </Slider>
        <DotGroup className='dot-group'/>
      </CarouselProvider>
      </div>
    </div>
  )
}
export default CarouselFB