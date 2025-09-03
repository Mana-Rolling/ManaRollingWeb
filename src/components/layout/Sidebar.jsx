import React from 'react';
import './Sidebar.css';
import { NavLink } from 'react-router-dom';
import { FaHome, FaUser, FaGlobe, FaBook, FaCog } from 'react-icons/fa';

function Sidebar() {
  return (
    <nav className="sidebar">
      <div className="sidebar-header">
        <h2>ManaRolling</h2>
      </div>
      <ul className="sidebar-menu">
        <li><NavLink to="/"><FaHome /> Início</NavLink></li>
        <li><NavLink to="/character/new"><FaUser /> Personagem</NavLink></li>
        <li><NavLink to="/world"><FaGlobe /> Mundo</NavLink></li>
        <li><NavLink to="/history"><FaBook /> História</NavLink></li>
        <li><NavLink to="/settings"><FaCog /> Configurações</NavLink></li>
      </ul>
    </nav>
  );
}

export default Sidebar;