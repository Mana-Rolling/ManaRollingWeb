import React, { useState, useRef } from 'react';
import './CharacterCreator.css';
import AttributeWidget from '../components/AttributeWidget';

const speciesOptions = [
  { id: 'human', name: 'Humano', defaultImage: '/portraits/human_warrior_m.png' },
  { id: 'wizard', name: 'Mago', defaultImage: '/portraits/human_wizard_m.png' },
  { id: 'elf', name: 'Elfo', defaultImage: '/portraits/elf_ranger_m.png' },
  { id: 'dwarf', name: 'Anão', defaultImage: '/portraits/dwarf_m.png' },
  { id: 'rogue', name: 'Ladino', defaultImage: '/portraits/rogue_m.png' },
];

const placeholderImage = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 24 24' fill='%23444'%3E%3Cpath d='M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z'/%3E%3C/svg%3E";


function CharacterCreator() {
  const [availablePoints, setAvailablePoints] = useState(27);
  const [attributes, setAttributes] = useState({
    forca: 8, destreza: 8, vigor: 8, inteligencia: 8, sabedoria: 8, carisma: 8,
  });

  const [selectedSpecies, setSelectedSpecies] = useState(null); 
  const [customImage, setCustomImage] = useState(null);
  const fileInputRef = useRef(null);

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

  const handleSpeciesChange = (event) => {
    const speciesId = event.target.value;
    if (speciesId) {
      const newSpecies = speciesOptions.find(s => s.id === speciesId);
      setSelectedSpecies(newSpecies);
      setCustomImage(null);
    }
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setCustomImage(URL.createObjectURL(file));
    }
  };
  
  const triggerFileUpload = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="character-creator-container">
      <h1>Criação de Personagem</h1>
      <div className="creator-layout">
        <div className="info-panel">
          <h3>Informações Básicas</h3>
          <input type="text" placeholder="Nome do Personagem" className="form-input"/>
          <input type="number" placeholder="Idade" className="form-input"/>
          
          <label htmlFor="species-select">Espécie</label>
          <select 
            id="species-select" 
            className="form-input" 
            value={selectedSpecies?.id || ""}
            onChange={handleSpeciesChange}
          >
            <option value="" disabled>Escolha a espécie</option>
            {speciesOptions.map(species => (
              <option key={species.id} value={species.id}>
                {species.name}
              </option>
            ))}
          </select>

          <label htmlFor="gender-select">Gênero</label>
          <select id="gender-select" className="form-input">
              <option value="" disabled selected>Escolha o gênero</option>
              <option value="masculino">Masculino</option>
              <option value="feminino">Feminino</option>
              <option value="nao-binario">Não-binário</option>
              <option value="outro">Outro</option>
          </select>

          <input type="text" placeholder="Classe" className="form-input"/>
        </div>
        
        <div className="portrait-panel">
          <div className="portrait-container">
            <img 
              src={customImage || selectedSpecies?.defaultImage || placeholderImage} 
              alt="Retrato do Personagem" 
            />
          </div>
          <button className="submit-button" onClick={triggerFileUpload}>
            Fazer Upload
          </button>
          <input 
            type="file" 
            ref={fileInputRef} 
            onChange={handleImageUpload}
            style={{ display: 'none' }} 
            accept="image/png, image/jpeg"
          />
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
    </div>
  );
}

export default CharacterCreator;