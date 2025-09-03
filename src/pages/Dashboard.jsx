import React from 'react';
import './Dashboard.css';
import { FaBookOpen, FaDiceD20, FaUserPlus, FaMapMarkedAlt } from 'react-icons/fa';

const nextSession = {
  date: '2025-09-06T19:00:00',
  title: 'A Invasão das Catacumbas'
};

const recentEvents = [
  { id: 4, title: 'Morte do Dragão Skarix', description: 'Elyndor, o humano, desfere o golpe final no dragão...' },
  { id: 3, title: 'O Sábio da Montanha', description: 'O grupo busca a ajuda de Elara, uma maga reclusa...' },
];

const playerCharacters = [
  { id: 1, name: 'Elyndor', class: 'Humano', level: 5, portrait: '/portraits/elyndor.png'},
  { id: 2, name: 'Thistle', class: 'Ladina', level: 5, portrait: '/portraits/thistle.png' },
  { id: 3, name: 'Bram', class: 'Mago', level: 5, portrait: '/portraits/bram.png' },
  { id: 4, name: 'Lyra', class: 'Anã', level: 5, portrait: '/portraits/lyra.png' },
];

function Dashboard() {
  // Lógica para o countdown pode ser adicionada aqui com useState e useEffect
  
  return (
    <div className="dashboard">
      <div className="welcome-header">
        <h1>Bem-vindo de volta, Mestre!</h1>
        <p>Sua campanha em <strong>Eldoria</strong> te aguarda.</p>
      </div>

      <div className="dashboard-grid">
        <div className="widget next-session-widget">
          <h3>Próxima Sessão</h3>
          <h2>{nextSession.title}</h2>
          <p>Sábado, 06 de Setembro de 2025, às 19:00</p>
          <div className="countdown">
            <span>3d</span> : <span>08h</span> : <span>15m</span>
          </div>
        </div>

        <div className="widget quick-access-widget">
           <h3>Acesso Rápido</h3>
           <div className="quick-access-buttons">
              <button><FaDiceD20 /> Rolar Dados</button>
              <button><FaUserPlus /> Criar NPC</button>
              <button><FaMapMarkedAlt /> Ver Mapa</button>
              <button><FaBookOpen /> Consultar Regras</button>
           </div>
        </div>

        <div className="widget history-widget">
          <h3>Últimos Acontecimentos</h3>
          <ul className="event-list">
            {recentEvents.map(event => (
              <li key={event.id}>
                <strong>{event.title}</strong>
                <p>{event.description}</p>
              </li>
            ))}
          </ul>
          <a href="/history" className="see-more-link">Ver história completa →</a>
        </div>
        
        <div className="widget notes-widget">
            <h3>Notas Rápidas</h3>
            <textarea placeholder="Anote aqui suas ideias, ganchos para a próxima aventura, ou o nome daquele taverneiro suspeito..."></textarea>
        </div>

        <div className="widget characters-widget">
          <h3>Personagens dos Jogadores</h3>
          <div className="character-cards">
            {playerCharacters.map(char => (
              <div className="character-card" key={char.id}>
                <div className="character-portrait-wrapper">
                    <img src={char.portrait} alt={char.name} />
                </div>
                <div className="character-info">
                    <strong>{char.name}</strong>
                    <span>{char.class} - Nível {char.level}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;