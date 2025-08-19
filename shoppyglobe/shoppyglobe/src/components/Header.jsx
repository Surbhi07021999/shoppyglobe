import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectCartCount } from '../store/selectors.js'

export default function Header() {
  const count = useSelector(selectCartCount)

  return (
    <header className="header">
      <div className="container header-inner">
        <Link to="/" className="logo">ShoppyGlobe</Link>
        <nav className="nav">
          <NavLink to="/" className={({isActive}) => isActive ? 'active' : ''}>Home</NavLink>
          <NavLink to="/cart" className={({isActive}) => isActive ? 'active cart-link' : 'cart-link'}>
            Cart {count > 0 && <span className="badge">{count}</span>}
          </NavLink>
        </nav>
      </div>
    </header>
  )
}
