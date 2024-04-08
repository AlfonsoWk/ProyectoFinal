import Carousel from 'react-bootstrap/Carousel';

import img1 from  "../images/principal.jpg" 
import img2 from "../images/megatlonplay.jpg"
import img3 from "../images/funcional.webp"
import img4 from "../images/personalT.jpg"

import "../css/carrusel.css"

const Carrusel = () => {
  return (
    <>
     <Carousel className='container' >
      <Carousel.Item  className='item'>
        {/*<ExampleCarouselImage text="First slide" /> */}
        <img src={img1} alt="" />
        <Carousel.Caption>
        
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='item'>
         {/*<ExampleCarouselImage text="Second slide" /> */}
         <img src={img2} alt="" />
        <Carousel.Caption>
          <h3>SPINNING</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='item'>
         {/*<ExampleCarouselImage text="Third slide" /> */}
         <img src={img3} alt="" />
        <Carousel.Caption>
          <h3>FUNCIONAL</h3>
         
        </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item className='item' >
         {/*<ExampleCarouselImage text="Third slide" /> */}
         <img src={img4} alt="" />
        <Carousel.Caption>
          <h3>CLASES PERSONALIZADAS</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </>
  )
}

export default Carrusel