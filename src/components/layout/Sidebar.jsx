import React from 'react';
import './Sidebar.css';
import { NavLink } from 'react-router-dom';
import { FaHome, FaUser, FaGlobe, FaBook, FaCog, FaTimes } from 'react-icons/fa';

function Sidebar({ isOpen, toggleMenu }) {
  return (
    <nav className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="sidebar-header">
        <h2>ManaRolling</h2>
        <button className="close-menu" onClick={toggleMenu}>
          <FaTimes />
        </button>
      </div>
      <ul className="sidebar-menu">
        <li onClick={toggleMenu}><NavLink to="/"><FaHome /> Início</NavLink></li>
        <li onClick={toggleMenu}><NavLink to="/character/new"><FaUser /> Personagem</NavLink></li>
        <li onClick={toggleMenu}><NavLink to="/world"><FaGlobe /> Mundo</NavLink></li>
        <li onClick={toggleMenu}><NavLink to="/history"><FaBook /> História</NavLink></li>
        <li onClick={toggleMenu}><NavLink to="/settings"><FaCog /> Configurações</NavLink></li>
      </ul>
    </nav>
  );
}

export default Sidebar;