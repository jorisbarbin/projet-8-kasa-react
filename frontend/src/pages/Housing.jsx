import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Error from './Error'
import Slideshow from '../components/Slideshow'
import Collapse from '../components/Collapse'
import '../styles/Housing.css'

function Housing() {
  const { id } = useParams()
  const [property, setProperty] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [apiError, setApiError] = useState(false)

useEffect(() => {
  setIsLoading(true)
  setApiError(false)

  fetch("http://localhost:8080/api/properties")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Erreur lors de la récupération du logement")
      }
      return response.json()
    })
    .then((data) => {
      const selectedProperty = data.find((property) => property.id === id)
      setProperty(selectedProperty)
    })
    .catch((error) => {
      console.error(error)
      setApiError(true)
      setProperty(null)
    })
    .finally(() => {
      setIsLoading(false)
    })
}, [id])

  if (isLoading) {
    return <p className='housing-loading'>Chargement en cours...</p>
  }
  if (apiError) {
  return <p className='housing-error'>Les informations du logement ne sont pas disponibles pour le moment.</p>
  }
  if (!property) {
    return <Error />
  }
  return (
    <>
      <div className='housing'>
        <Slideshow pictures={property.pictures} />
        <section className="housing-main">
          <div className="housing-info">
            <h1 className='housing-title'>{property.title}</h1>
            <p className='housing-location'>{property.location}</p>
            <div className='housing-all-tags'>
              {property.tags.map((tag) => (
                <span key={tag} className="housing-tag">{tag}</span>
              ))}
            </div>
          </div>
          <div className='housing-host-rating'>
            <div className='housing-host'>
              <p className='housing-host-name'>{property.host.name}</p>
              <img className='housing-host-picture' src={property.host.picture} alt={property.host.name} />
            </div>
            <div className='housing-rating'>
              {[1, 2, 3, 4, 5].map((index) => (
                <img className="housing-star"
                  key={index}
                  src={index <= Number(property.rating) ? "/star-active.png" : "/star-inactive.png"}
                  alt={index <= Number(property.rating) ? "Icône d'étoile pleine" : "Icône d'étoile vide"}
                />))}
            </div>
          </div>
        </section>
        <section className="housing-collapse">
          <Collapse title="Description" content={<p>{property.description}</p>} />
          <Collapse 
            title="Équipements" 
            content={
              <ul>{property.equipments.map((equipment) => (
              <li key={equipment}>{equipment}</li>
              ))}
              </ul>
            } 
          />
        </section>
      </div>
    </>
  )
}

export default Housing