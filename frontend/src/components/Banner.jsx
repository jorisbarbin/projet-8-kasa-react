import '../styles/Banner.css'

function Banner({ image, title }) {
  return (
    <section className="banner">
      <img className='banner-image' src={image} alt="Bannière Kasa" />
      {title && <h1 className='banner-title'>{title}</h1>}
    </section>
  )
}

export default Banner