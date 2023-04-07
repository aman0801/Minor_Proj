import './home.css';
import Carousel from 'react-bootstrap/Carousel';
export default function Home(){
    return (
        <div className="home">
            <Carousel className='carousel'>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://eci.gov.in/uploads/swiperslider_images/Slider-NE-VISIT.jpg.bf53a9819fbfe68af7730bbc7c259fba.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://eci.gov.in/uploads/swiperslider_images/nvd3.jpg.793136801c3e9e074748b129ec64f8f7.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://eci.gov.in/uploads/swiperslider_images/nvd4.jpg.31a258bd9ed0d4cd3ccaa8ba6e33a590.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
        </div>
    );
}
