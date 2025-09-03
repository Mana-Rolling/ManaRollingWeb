import React, { useState } from 'react';
import './CharacterCreator.css';
import AttributeWidget from '../components/AttributeWidget';

// A lista de retratos que acabamos de definir
const portraitOptions = [
  { id: 'human_warrior_m', name: 'Guerreiro Humano', imageUrl: '/portraits/human_warrior_m.png' },
  { id: 'human_wizard_m', name: 'Mago Humano', imageUrl: '/portraits/human_wizard_m.png' },
  { id: 'human_rogue_m', name: 'Ladino Humano', imageUrl: '/portraits/human_rogue_m.png' },
  
  // Elfos
  { id: 'elf_ranger_m', name: 'Arqueiro Elfo', imageUrl: '/portraits/elf_ranger_m.png' },
  { id: 'elf_wizard_m', name: 'Mago Elfo', imageUrl: '/portraits/elf_wizard_m.png' }, 
  
  // Anões
  { id: 'dwarf_warrior_m', name: 'Guerreiro Anão', imageUrl: '/portraits/dwarf_warrior_m.png' },
  { id: 'dwarf_cleric_m', name: 'Clérigo Anão', imageUrl: '/portraits/dwarf_cleric_m.png' },

  // Meio-Orcs
  { id: 'orc_m', name: 'Orc', imageUrl: '/portraits/orc_m.png' },

  // Halflings
  { id: 'halfling_rogue_m', name: 'Ladino Halfling', imageUrl: '/portraits/halfling_rogue_m.png' },
  
  // Tieflings
  { id: 'tiefling_bard_m', name: 'Bardo Tiefling', imageUrl: '/portraits/tiefling_bard_m.png' },

  // Outro
  { id: 'other', name: 'Crie o seu', imageUrl: '/portraits/other.png' },
];


function CharacterCreator() {
  const [availablePoints, setAvailablePoints] = useState(27);
  const [attributes, setAttributes] = useState({
    forca: 8, destreza: 8, vigor: 8, inteligencia: 8, sabedoria: 8, carisma: 8,
  });


  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPortrait, setSelectedPortrait] = useState(portraitOptions[0].imageUrl); 

  const cost = (currentValue) => {
    if (currentValue < 13) return 1;
    if (currentValue < 15) return 2;
    return 999;
  };
  const handleAttributeChange = (attribute, amount) => {
    const currentValue = attributes[attribute];
    if (amount > 0) {
      const pointCost = cost(currentValue);
      if (availablePoints >= pointCost && currentValue < 15) {
        setAttributes(prev => ({ ...prev, [attribute]: prev[attribute] + amount }));
        setAvailablePoints(prev => prev - pointCost);
      }
    } else {
      if (currentValue > 8) {
        const pointRefund = cost(currentValue - 1);
        setAttributes(prev => ({ ...prev, [attribute]: prev[attribute] + amount }));
        setAvailablePoints(prev => prev + pointRefund);
      }
    }
  };

  const handleSelectPortrait = (imageUrl) => {
    setSelectedPortrait(imageUrl);
    setIsModalOpen(false); 
  };

  return (
    <div className="character-creator-container">
      <h1>Criação de Personagem</h1>
      <div className="creator-layout">
        <div className="info-panel">
          <h3>Informações Básicas</h3>
          <input type="text" placeholder="Nome do Personagem" className="form-input"/>
          <input type="number" placeholder="Idade" className="form-input"/>
          <input type="text" placeholder="Região Natal" className="form-input"/>
          <input type="text" placeholder="Classe" className="form-input"/>
        </div>
        
        <div className="portrait-panel">
          <div className="portrait-container">
            <img src={selectedPortrait} alt="Retrato do Personagem" />
          </div>
          <button className="submit-button" onClick={() => setIsModalOpen(true)}>
            Escolher Personagem
          </button>
        </div>

        <div className="attributes-panel">
          <h3>Pontos de Atributo: <span className="points">{availablePoints}</span></h3>
          <p className="points-info">Valores base 8. Custa mais caro aumentar atributos altos.</p>
          <AttributeWidget name="Força" attribute="forca" value={attributes.forca} onChange={handleAttributeChange} />
          <AttributeWidget name="Destreza" attribute="destreza" value={attributes.destreza} onChange={handleAttributeChange} />
          <AttributeWidget name="Vigor" attribute="vigor" value={attributes.vigor} onChange={handleAttributeChange} />
          <AttributeWidget name="Inteligência" attribute="inteligencia" value={attributes.inteligencia} onChange={handleAttributeChange} />
          <AttributeWidget name="Sabedoria" attribute="sabedoria" value={attributes.sabedoria} onChange={handleAttributeChange} />
          <AttributeWidget name="Carisma" attribute="carisma" value={attributes.carisma} onChange={handleAttributeChange} />
        </div>
      </div>
      <button className="submit-button main-submit">Salvar Personagem</button>

      {isModalOpen && (
        <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>Escolha uma Espécie</h2>
            <div className="portrait-grid">
              {portraitOptions.map((portrait) => (
                <div 
                  key={portrait.id} 
                  className="portrait-option"
                  onClick={() => handleSelectPortrait(portrait.imageUrl)}
                >
                  <img src={portrait.imageUrl} alt={portrait.name} />
                  <span>{portrait.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

export default CharacterCreator;