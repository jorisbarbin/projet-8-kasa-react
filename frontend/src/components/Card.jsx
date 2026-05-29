import { Link } from 'react-router-dom'
import '../styles/Card.css'

function Card({ id, title, cover }) {
  return (
    <Link to={`/housing/${id}`}>
      <article className="card">
        <img className="card-image" src={cover} alt={title} />
        <h2 className="card-title">{title}</h2>
      </article>
    </Link>
  )
}

export default Card
