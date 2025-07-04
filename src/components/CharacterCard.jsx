import React from 'react';
import './CharacterCard.css';

function CharacterCard({ name, image, color, onClick }) {
  return (
    <div className="character-card" style={{ borderColor: color }} onClick={onClick}>
      <div className="card-image" style={{ backgroundImage: `url(${image})` }} />
      <div className="card-name" style={{ backgroundColor: color }}>
        {name}
      </div>
    </div>
  );
}

export default CharacterCard;