import { Link } from 'react-router-dom'

function Header() {
  return (
    <header>
        <img src="public/logo.png" alt="Logo Kasa" />
        <h1>Kasa</h1>
        <nav>
          <Link to="/">Accueil</Link>
          <Link to="/about">À propos</Link>
          <Link to="/housing">Logements</Link>
        </nav>
    </header>
  )
}

export default Header