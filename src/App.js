import './App.css';
import '@brainhubeu/react-carousel/lib/style.css';
import Header from './Header'
import Banner from './Banner'
import About from './About'
import OurProducts from './OurProducts'
import ProdServices from './ProdServices'
import WhatWeOffer from './WhatWeOffer'
import StoneCarousel from './StoneCarousel'
import ContactUs from './ContactUs'
import Footer from './Footer';
import CarouselFB from './CarouselFB';

function App() {
//   window.onscroll = function() {myFunction()};
//   var header1 = document.getElementById('header');
//   var sticky = header1.offsetTop;

// function myFunction() {
//   if (window.pageYOffset > sticky) {
//     header1.classList.add("sticky");
//   } else {
//     header1.classList.remove("sticky");
//   }
// }
  return (
    <div className="App">
      <Header />
      <Banner />
      <About />
      <OurProducts />
      <ProdServices />
      <WhatWeOffer />
      <StoneCarousel />
      <CarouselFB />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
