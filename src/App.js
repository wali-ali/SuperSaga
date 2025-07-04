import React, { useState } from 'react';
import CharacterGrid from './components/CharacterGrid';
import CharacterPage from './components/CharacterPage';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';

function App() {
  // 🔄 Track which character is selected (null means none)
  const [selectedChar, setSelectedChar] = useState(null);

  return (
    <div>
      {/* 🔝 Sticky Navigation Bar */}
      <Navbar />

      {/* 💥 Hero Banner Section (fullscreen intro) */}
      <section id="hero">
        <HeroSection />
      </section>

      {/* 🧠 Character Grid or Detail View (toggle based on selectedChar) */}
      <section id="characters">
        {!selectedChar ? (
          //  Show all character cards
          <CharacterGrid onCharacterClick={setSelectedChar} />
        ) : (
          // 🔍 Show expanded detail of selected character
          <CharacterPage character={selectedChar} onBack={() => setSelectedChar(null)} />
        )}
      </section>

      {/* 📜 Footer / About Section */}
      <section id="about">
        <Footer />
      </section>
    </div>
  );
}

export default App;
