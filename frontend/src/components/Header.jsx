import { NavLink } from 'react-router-dom'
import '../styles/Header.css'

function Header() {
  return (
    <header className="header">
        <NavLink to="/" end aria-label="Retour à l'accueil">
          <img className="header-logo" src="/logo.png" alt="Logo Kasa" />
        </NavLink>
      <nav className="header-nav">
        <NavLink to="/" end>Accueil</NavLink>
        <NavLink to="/about">À propos</NavLink>
      </nav>
    </header>
  )
}

export default Header