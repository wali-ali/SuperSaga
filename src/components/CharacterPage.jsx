import React, { useState } from 'react';
import '../styles/Layout.css'; // Styles for character detail layout and animations

// Skill stats for each Marvel character shown as glowing bars
const characterSkills = {
  'Iron Man': {
    Intelligence: 95,
    Strength: 75,
    Speed: 70,
    Durability: 80
  },
  'Spider-Man': {
    Intelligence: 85,
    Strength: 70,
    Speed: 90,
    Durability: 75
  },
  'Thor': {
    Intelligence: 80,
    Strength: 95,
    Speed: 80,
    Durability: 95
  },
  'Captain America': {
    Intelligence: 75,
    Strength: 80,
    Speed: 70,
    Durability: 85
  },
  'Hulk': {
    Intelligence: 60,
    Strength: 100,
    Speed: 65,
    Durability: 100
  },
  'Black Widow': {
    Intelligence: 80,
    Strength: 60,
    Speed: 75,
    Durability: 70
  },
  'Black Panther': {
    Intelligence: 85,
    Strength: 80,
    Speed: 85,
    Durability: 80
  },
  'Hawkeye': {
    Intelligence: 70,
    Strength: 60,
    Speed: 70,
    Durability: 65
  }
};

function CharacterPage({ character, onBack }) {
  const {
    name,
    detailImage,
    gif,
    origin,
    powers,
    weapons
  } = character;

  const [isLeaving, setIsLeaving] = useState(false);

  const handleBack = () => {
    setIsLeaving(true);
    setTimeout(() => {
      onBack();
    }, 400);
  };

  return (
    <div className={`character-detail-container ${isLeaving ? 'fade-out' : 'fade-in'}`}>
      {/* Back button to return to main character grid */}
      <button className="back-button" onClick={handleBack}>← Back</button>

      <div className="character-detail slide-up">
        {/* Left section: Full character image */}
        <div className="detail-image-section">
          <img src={detailImage} alt={`${name} Detail`} className="detail-image" />
        </div>

        {/* Center section: Character's backstory and powers */}
        <div className="detail-info-section">
          <h2>{name}</h2>
          <p><strong>Origin:</strong> {origin}</p>
          <p><strong>Powers:</strong> {powers}</p>
          <p><strong>Weapons:</strong> {weapons}</p>

          {/* Display glowing skill bars if stats exist */}
          <div className="skills-section">
            <h2>Skills</h2>
            {characterSkills[name] &&
              Object.entries(characterSkills[name]).map(([skill, value]) => (
                <div className="skill-bar" key={skill}>
                  <span>{skill}</span>
                  <div className="bar">
                    <div className="fill" style={{ width: `${value}%` }}></div>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* Right section: Character's symbol or animated GIF */}
        <div className="detail-symbol-section">
          {gif && (
            <img src={gif} alt={`${name} Symbol`} className="symbol-gif" />
          )}
        </div>
      </div>
    </div>
  );
}

export default CharacterPage;
