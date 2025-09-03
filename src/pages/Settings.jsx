import React from 'react';
import './Settings.css';

function Settings() {
  return (
    <div className="settings-container">
      <h1>Configurações</h1>

      <div className="settings-section">
        <h2>Configurações gerais</h2>
        <ul>
          <li>Tema</li>
          <li>Idioma</li>
          <li>Som e vibração</li>
          <li>Layout</li>
          <li>Acessibilidade</li>
          <li>Animações</li>
        </ul>
      </div>

      <div className="settings-section">
        <h2>Gerenciar Dados</h2>
        <ul>
          <li>Importar/exportar campanha</li>
          <li>Histórico de sessões participadas</li>
          <li>Fazer backup manual</li>
        </ul>
      </div>

       <div className="settings-section">
        <h2>Privacidade e Segurança</h2>
        <ul>
          <li>Preferências de visibilidade</li>
          <li>Trocar senha ou redefinir PIN do app</li>
          <li>Autenticação de duas etapas (para mestres)</li>
        </ul>
      </div>

      <div className="settings-section">
        <h2>Suporte e Feedback</h2>
        <ul>
          <li>Enviar sugestão de melhoria</li>
          <li>Reportar bug</li>
        </ul>
      </div>
    </div>
  );
}

export default Settings;