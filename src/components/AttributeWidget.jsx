import React from 'react';
import './AttributeWidget.css';
import { FaPlus, FaMinus } from 'react-icons/fa';

function AttributeWidget({ name, attribute, value, onChange }) {
  return (
    <div className="attribute-widget">
      <span className="attribute-name">{name}</span>
      <div className="attribute-controls">
        <button onClick={() => onChange(attribute, -1)} disabled={value <= 0}>
          <FaMinus />
        </button>
        <span className="attribute-value">{value}</span>
        <button onClick={() => onChange(attribute, 1)}>
          <FaPlus />
        </button>
      </div>
    </div>
  );
}

export default AttributeWidget;