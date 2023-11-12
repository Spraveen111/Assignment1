import React from 'react';
import { NavLink } from 'react-router-dom';
import "./index.css"; // Make sure the path is correct for your index.css file

function Header() {
  return (
    <div className="main-container">
      <Nav<h1 className="logo">E-Buy</h1>
      <nav className="navbar">
        <ul className="listContainer">
          <li className="listParts">
            <NavLink to="/" activeClassName="active">Home</NavLink>
          </li>
          <li className="listParts">
            <NavLink to="/products" activeClassName="active">Products</NavLink>
          </li>
          <li className="listParts">
            <NavLink to="/contact" activeClassName="active">Contact</NavLink>
          </li>
        </ul>
      </nav>
      <div className="login-container">
        <NavLink to="/login" className="login-link" activeClassName="activeLink">Login</NavLink>
        <NavLink to="/cart" className="cart-link" activeClassName="activeLink">Cart</NavLink>
      </div>
    </div>
  );
}

export default Header;
