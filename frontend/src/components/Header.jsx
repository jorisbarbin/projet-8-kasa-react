import { Link } from 'react-router-dom'
import '/src/styles/Header.css'

function Header() {
  return (
    <header className="header">
        <img src="/logo.png" alt="Logo Kasa" />
        <nav className="header-nav">
          <Link to="/">Accueil</Link>
          <Link to="/about">À propos</Link>

        </nav>
    </header>
  )
}

export default Header