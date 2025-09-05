import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/layout/Sidebar';
import Dashboard from './pages/Dashboard';
import WorldCreation from './pages/WorldCreation';
import CharacterCreator from './pages/CharacterCreator';
import HistoryTimeline from './pages/HistoryTimeline';
import Settings from './pages/Settings';
import AIChat from './components/AIChat';
import { FaBars } from 'react-icons/fa';

import './App.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Router>
      <div className="app-container">
        <button className="menu-toggle" onClick={toggleMenu}>
          <FaBars />
        </button>

        <Sidebar isOpen={isMenuOpen} toggleMenu={toggleMenu} />
        
        <main className="content-area">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/world" element={<WorldCreation />} />
            <Route path="/character/new" element={<CharacterCreator />} />
            <Route path="/history" element={<HistoryTimeline />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </main>
        <AIChat />
      </div>
    </Router>
  );
}

export default App;