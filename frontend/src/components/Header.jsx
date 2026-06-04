import { NavLink } from 'react-router-dom'
import '/src/styles/Header.css'

function Header() {
  return (
    <header className="header">
      <img src="/logo.png" alt="Logo Kasa" />
      <nav className="header-nav">
        <NavLink to="/" end>Accueil</NavLink>
        <NavLink to="/about">À propos</NavLink>
      </nav>
    </header>
  )
}

export default Header