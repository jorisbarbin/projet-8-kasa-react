import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Error from './Error'

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
      <img src={property.cover} alt={property.title} />
      <h1>{property.title}</h1>
      <p>{property.location}</p>
      <p>{property.description}</p>
    </section>
  )
}

export default Housing