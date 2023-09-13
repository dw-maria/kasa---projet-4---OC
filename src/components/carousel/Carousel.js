import './carousel.css'
import { useState } from 'react'
import RightArrow from '../../assets/right_arrow.png'
import LeftArrow from '../../assets/left_arrow.png'

export default function Slider({ imageSlider }) {
    // Initialisation de la variable d'index de l'image actuelle et de la fonction pour la mettre à jour
    const [currentIndex, setCurrentIndex] = useState(0);

    // Afficher la diapositive suivante
    const nextSlide = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === imageSlider.length - 1 ? 0 : prevIndex + 1
      );
    };
    // Afficher la diapositive précédente
    const prevSlide = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? imageSlider.length - 1 : prevIndex - 1
      );
    };
    const countImage = imageSlider.length;
  
    return (
      
        <section
          className="carousel content_size"
          style={{ backgroundImage: `url(${imageSlider[currentIndex]})` }}
        >
          {/* Affiche les flèches de navigation uniquement s'il y a plus d'une image */}
          {imageSlider.length > 1 && (
            <>
            <div className="slider_nav">
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
              </div>
            </>
          )}
          <p className="count_img">{`${currentIndex+1}/${countImage}`}</p>
        </section>
      
    );
  }
  