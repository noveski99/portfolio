import React, { useState } from 'react'
import '../style/Carousel.css'
import { TfiArrowCircleLeft } from "react-icons/tfi";
import { TfiArrowCircleRight } from "react-icons/tfi";
const Carousel = (props) => {
  const { icons } = props;
  const [slide, setSlide] = useState(0);
  const handleNextItem = () => {
    setSlide(slide === icons.length - 1 ? 0 : slide + 1)
    console.log(slide)
  }
  const handlePreviosItem = () => {
    setSlide(slide === 0 ? icons.length - 1 : slide - 1)
  }
  return (
    <div className='carousel'>
      <div className='left-arrow'><TfiArrowCircleLeft size={30} style={{ opacity: '0.6' }} onClick={handlePreviosItem} /></div>
      <div className='skills-container'>
        {icons.map((item, index) =>
          <img src={item.src} alt={item.alt} key={index} className={slide === index ? 'slide' : 'slide hidden '} />
        )}
      </div>
      <div className='right-arrow'><TfiArrowCircleRight size={30} style={{ opacity: '0.6' }} onClick={handleNextItem} /></div>
    </div>
  )
}
export default Carousel