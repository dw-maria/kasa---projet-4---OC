import './carousel.css'
import { useState } from 'react'
import RightArrow from '../../assets/right_arrow.png'
import LeftArrow from '../../assets/left_arrow.png'

export default function Slider({ imageSlider }) {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const nextSlide = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === imageSlider.length - 1 ? 0 : prevIndex + 1
      );
    };
  
    const prevSlide = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? imageSlider.length - 1 : prevIndex - 1
      );
    };
  
    return (
      
        <section
          className="carousel content_size"
          style={{ backgroundImage: `url(${imageSlider[currentIndex]})` }}
        >
          {imageSlider.length > 1 && (
            <>
              <img
                className="carousel_arrow carousel_left_arrow"
                src={LeftArrow}
                alt="Previous slider"
                onClick={prevSlide}
              />
              <img
                className="carousel_arrow carousel_right_arrow"
                src={RightArrow}
                alt="Next slider"
                onClick={nextSlide}
              />
            </>
          )}
        </section>
      
    );
  }
  