import { useEffect, useState } from "react"
import Banner from "../components/Banner"
import Card from "../components/Card"
import "../styles/Home.css"

function Home() {
  const [properties, setProperties] = useState([])
  const [error, setError] = useState(false)

  useEffect(() => {
    fetch("http://localhost:8080/api/properties")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erreur serveur")
        }
        return response.json()
      })
      .then((data) => {
        setProperties(data)
        setError(false)
      })
      .catch((error) => {
        console.error(error)
        setError(true)
        setProperties([])
      })
  }, [])

  return (
    <>
      <section className="home">
        <Banner
          image="/FalaiseSource1.png"
          title="Chez vous, partout et ailleurs"
        />
      </section>

      {error && (
        <p className="home-error">
          Les logements ne sont pas disponibles pour le moment. Veuillez réessayer plus tard.
        </p>
      )}

      <section className="card-section">
        {properties.map((property) => (
          <Card
            key={property.id}
            id={property.id}
            title={property.title}
            cover={property.cover}
          />
        ))}
      </section>
    </>
  )
}

export default Home