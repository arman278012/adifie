import { useRef } from 'react';
import "./slider.css";
import useSlider from '../../Hooks/useSlider';

const Slider = ({images}) => {
  
  const slideImage = useRef(null)
  const { goToPreviousSlide, goToNextSlide } = useSlider(slideImage, images )

    return (
          <div className="slider" ref={slideImage}>
            <div className="slider--content">
              <button onClick={goToPreviousSlide} className="slider__btn-left">
                <i className="fas fa-angle-left"></i>
              </button>
              <button onClick={goToNextSlide} className="slider__btn-right">
                <i className="fas fa-angle-right"></i>
              </button>
            </div>
        </div>
    );
}

export default Slider;