import { Link } from 'react-router-dom'
import '../styles/Card.css'

function Card({ id , title, cover }) {
  return (
    
    <Link to={`/housing/${id}`}>
      <article className="card">
        <img src={cover} alt={title} />
        <h2>{title}</h2>
      </article>
    </Link>
  )
}

export default Card
