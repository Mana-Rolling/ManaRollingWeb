import React from 'react';
import './HistoryTimeline.css';

const events = [
  { id: 1, title: 'A jornada começa', description: 'Os aventureiros encontram-se na taverna Pônei Saltitante, em Ravengard.', date: '25 de maio', location: 'Ravengard', type: 'Evento' },
  { id: 2, title: 'Invasão de Orcs', description: 'Orcs atacam a vila de Grimwood durante a noite, com planos de avançar para Ravengard.', date: '26 de maio', location: 'Grimwood', type: 'Batalha' },
  { id: 3, title: 'O Sábio da Montanha', description: 'O grupo busca a ajuda de Elara, uma maga reclusa, para decifrar o mapa dos orcs.', date: '28 de maio', location: 'Montanhas Sibilantes', type: 'Missão' },
  { id: 4, title: 'Morte do Dragão Skarix', description: 'Elyndor, o paladino, desfere o golpe final no dragão Skarix, que aterrorizava a região.', date: '02 de junho', location: 'Pico do Dragão', type: 'Conquista' },
];

function HistoryTimeline() {
  return (
    <div className="history-container">
      <div className="history-header">
        <h1>História da Campanha</h1>
        <button className="submit-button">Adicionar Evento</button>
      </div>
      <div className="timeline">
        {events.map((event, index) => (
          <div key={event.id} className="timeline-item">
            <div className="timeline-number">{index + 1}</div>
            <div className="timeline-content">
              <h3>{event.title}</h3>
              <p>{event.description}</p>
              <div className="tags">
                <span className="tag date">{event.date}</span>
                <span className="tag location">{event.location}</span>
                <span className={`tag type type-${event.type.toLowerCase()}`}>{event.type}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HistoryTimeline;