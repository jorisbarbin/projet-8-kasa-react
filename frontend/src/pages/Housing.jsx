import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Error from './Error'
import Slideshow from '../components/Slideshow'

function Housing() {
  const { id } = useParams()
  const [property, setProperty] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch("http://localhost:8080/api/properties")
      .then((response) => response.json())
      .then((data) => {
        const selectedProperty = data.find((property) => property.id === id)
        setProperty(selectedProperty)
        setIsLoading(false)
      })
  }, [id])

  if (isLoading) {
    return <p>Chargement en cours...</p>
  }

  if (!property) {
    return <Error />
  }

  return (
    <section className="housing">
      <Slideshow pictures={property.pictures} />
      <h1>{property.title}</h1>
      <p>{property.location}</p>
      <p>{property.description}</p>
      <p>{property.host.name}</p>
      <img src={property.host.picture} alt={property.host.name} />
      {property.tags.map((tag) => (
        <span key={tag} className="tagHousing">{tag}</span>
      ))}
      {[1, 2, 3, 4, 5].map((index) => (
        <img className="star-icon"
          key={index}
          src={index <= Number(property.rating) ? "/star-active.png" : "/star-inactive.png"}
          alt={index <= Number(property.rating) ? "Icône d'étoile pleine" : "Icône d'étoile vide"}
        />
      ))}

    </section>
  )
}

export default Housing