import React from 'react'
import slide from '../image/Slideshow1.jpg'
import slidetwo from '../image/Slideshow2.jpg'
import slidethree from '../image/Slideshow3.jpg'
import slidefour from '../image/Slideshow4.jpg'
const HeroSection = () => {
  return (
    <>
      <section class="hero-section">
    <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src={slide} class="d-block w-100" alt="..."/>
        </div>
        <div class="carousel-item">
          <img src={slidetwo} class="d-block w-100" alt="..."/>
        </div>
        <div class="carousel-item">
          <img src={slidethree} class="d-block w-100" alt="..."/>
        </div>
        <div class="carousel-item">
          <img src={slidefour} class="d-block w-100" alt="..."/>
        </div>
      </div>
    </div>
  </section>
      
    </>
  )
}

export default HeroSection
