import { useState } from 'react'
import '../styles/Slideshow.css'

function Slideshow({ pictures }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === pictures.length - 1 ? 0 : prevIndex + 1))
  }
  const previousSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? pictures.length - 1 : prevIndex - 1))
  }



  return (
    <div className="slideshow">
      <img className="Picture-slide" src={pictures[currentIndex]} alt="Logement" />
      {pictures.length > 1 && (
        <img src="/left-arrow.png" alt="Flèche gauche" className="arrow-left" onClick={previousSlide} />
      )}
      {pictures.length > 1 && (
        <img src="/right-arrow.png" alt="Flèche suivante" className="arrow arrow-right" onClick={nextSlide} />
      )}
      {pictures.length > 1 && (
        <p className="slideshow-counter">
          {currentIndex + 1} / {pictures.length}
        </p>
      )}
    </div>
  )

}

export default Slideshow