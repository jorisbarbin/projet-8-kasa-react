import Banner from "../components/Banner"
import Card from "../components/Card"

const properties = [
  {
    id: "c67ab8a7",
    title: "Appartement cosy",
    cover: "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg"
  },
  {
    id: "b9123946",
    title: "Magnifique appartement proche Canal Saint Martin",
    cover: "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-1-1.jpg"
  }
]

function Home() {

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