import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const activeClass = 'active-link';
  const defaultClass = 'default-link';

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <div className="nav-header">
        <h1 className="logo">My Portfolio</h1>

        {/* Mobile Burger */}
        <button className="burger" onClick={toggleMenu}>
          ☰
        </button>

        {/* Desktop Links */}
        <div className="desktop-links">
          <NavLink to="/" className={({ isActive }) => isActive ? activeClass : defaultClass}>Home</NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? activeClass : defaultClass}>About</NavLink>
          <NavLink to="/projects" className={({ isActive }) => isActive ? activeClass : defaultClass}>Projects</NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? activeClass : defaultClass}>Contact</NavLink>
        </div>
      </div>

      {/* Overlay when menu is open */}
      {isOpen && <div className="overlay" onClick={toggleMenu}></div>}

      {/* Sidebar for Mobile */}
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <ul className="nav-links">
          <li><NavLink to="/" className={({ isActive }) => isActive ? activeClass : defaultClass}>Home</NavLink></li>
          <li><NavLink to="/about" className={({ isActive }) => isActive ? activeClass : defaultClass}>About</NavLink></li>
          <li><NavLink to="/projects" className={({ isActive }) => isActive ? activeClass : defaultClass}>Projects</NavLink></li>
          <li><NavLink to="/contact" className={({ isActive }) => isActive ? activeClass : defaultClass}>Contact</NavLink></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
