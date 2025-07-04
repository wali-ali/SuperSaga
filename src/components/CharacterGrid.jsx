import React from 'react';
import './CharacterGrid.css'; // Styles for the character grid layout
import characters from '../data/CharacterData'; // Array of all Marvel characters

function CharacterGrid({ onCharacterClick }) {
  return (
    <div id="characters" className="character-grid">
      {characters.map((char, index) => {
        // Create a unique CSS class for each character based on their name
        const themeClass = `${char.name.replace(/\s+/g, '-').toLowerCase()}-glow`;

        return (
          <div
            key={index}
            className={`character-card ${themeClass}`} // Apply glowing color theme
            onClick={() => onCharacterClick(char)} // Send clicked character to parent
          >
            {/* Character image */}
            <img src={char.image} alt={char.name} className="character-image" />
            
            {/* Character name below the image */}
            <div className="character-label">
              <h3>{char.name}</h3>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default CharacterGrid;
