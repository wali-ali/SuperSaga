import React from "react";
import "./CharacterDetail.css"; // Styles for overlay card and layout

function CharacterDetail({ character, onClose }) {
  // If no character is selected, do not render anything
  if (!character) return null;

  return (
    <div className="character-detail-overlay">
      <div className="character-detail-card">

        {/* Close button to exit the detail view */}
        <button className="close-btn" onClick={onClose}>✖</button>

        <div className="character-content">
          
          {/* Left/Main Section: character info */}
          <div className="main-section">
            <h2>{character.name}</h2>

            {/* Character's main animated gif */}
            <img className="main-gif" src={character.gif} alt={character.name} />

            {/* Character's origin story */}
            <p className="origin-text">{character.origin}</p>

            {/* Optional: Show signature symbol if available */}
            {character.signatureIcon && (
              <div className="signature-section">
                <h4>Signature Element</h4>
                <img
                  className="signature-icon"
                  src={character.signatureIcon}
                  alt="signature"
                />
              </div>
            )}
          </div>

          {/* Right Side: List of supporting images or thumbnails */}
          <div className="side-images">
            {character.sideImages?.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`side-${index}`}
                className="side-thumbnail"
              />
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}

export default CharacterDetail;
