import React, { useState } from 'react';
import './WorldCreation.css'; 

function WorldCreation() {
  
  const [worldName, setWorldName] = useState('');
  const [description, setDescription] = useState('');

  return (
    <div className="world-creation-container">
      <h1>Criação de Mundo</h1>
      <p>Dê vida a um novo reino para suas aventuras.</p>
      
      <form className="world-form">
        <div className="form-section">
          <label htmlFor="worldName">Nome</label>
          <input 
            id="worldName" 
            type="text" 
            placeholder="Ex: Eldoria, a Terra dos Dragões"
            value={worldName}
            onChange={(e) => setWorldName(e.target.value)}
          />
        </div>

        <div className="form-section">
          <label htmlFor="description">Descrição geral/Lore introdutória</label>
          <textarea 
            id="description" 
            rows="5"
            placeholder="Uma breve introdução sobre a história, conflitos e magia do seu mundo..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>

        <div className="form-columns">
          <div className="form-column">
            <h3>Tipo de Mundo</h3>
            {['Alta Fantasia', 'Baixa Fantasia', 'Pós-apocalíptico', 'Medieval', 'Sci-fi'].map(type => (
              <div key={type} className="radio-option">
                <input type="radio" id={type} name="worldType" value={type} />
                <label htmlFor={type}>{type}</label>
              </div>
            ))}
          </div>

          <div className="form-column">
            <h3>Estilo do Mapa</h3>
             {['Realista', 'Pixel', 'Estilizado', 'Sem mapa'].map(style => (
              <div key={style} className="radio-option">
                <input type="radio" id={style} name="mapStyle" value={style} />
                <label htmlFor={style}>{style}</label>
              </div>
            ))}
          </div>
        </div>
        
        <button type="submit" className="submit-button">Criar Mundo</button>
      </form>
    </div>
  );
}

export default WorldCreation;