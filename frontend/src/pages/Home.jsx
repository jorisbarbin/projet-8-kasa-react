import { useEffect, useState } from "react"
import Banner from "../components/Banner"
import Card from "../components/Card"
import "../styles/Home.css"


function Home() {

const [properties, setProperties] = useState([])

useEffect(() => {
  fetch("http://localhost:8080/api/properties")
    .then((response) => response.json())

    .then((data) => { setProperties(data)
    console.log(data)
    })
}, [])

  return (
  <>
  <section className="home">
    <Banner image="/FalaiseSource1.png" title="Chez vous, partout et ailleurs" />
  </section>

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