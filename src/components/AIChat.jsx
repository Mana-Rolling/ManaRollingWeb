import React, { useState, useEffect, useRef } from 'react';
import './AIChat.css';
import { FaPaperPlane, FaTimes, FaRobot } from 'react-icons/fa';

function AIChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: 'ai', text: 'Olá! Sou seu assistente de mestre. Como posso te ajudar hoje?' }
  ]);
  const [input, setInput] = useState('');
  const chatBodyRef = useRef(null);

  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { sender: 'user', text: input }];
    setMessages(newMessages);
    setInput('');

    setTimeout(() => {
      const aiResponse = "Desculpe, não posso responder no momento.";
      setMessages(prev => [...prev, { sender: 'ai', text: aiResponse }]);
    }, 1500);
  };

  if (!isOpen) {
    return (
      <button className="chat-fab" onClick={() => setIsOpen(true)}>
        <FaRobot />
      </button>
    );
  }

  return (
    <div className="chat-window">
      <div className="chat-header">
        <h3>Assistente do Mestre</h3>
        <button className="close-button" onClick={() => setIsOpen(false)}><FaTimes /></button>
      </div>
      <div className="chat-body" ref={chatBodyRef}>
        {messages.map((msg, index) => (
          <div key={index} className={`message-wrapper ${msg.sender}`}>
            <div className="message">
              <p>{msg.text}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="chat-input-area">
        <input 
          type="text" 
          placeholder="Crie um NPC para mim..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
        />
        <button className="send-button" onClick={handleSend}><FaPaperPlane /></button>
      </div>
    </div>
  );
}

export default AIChat;