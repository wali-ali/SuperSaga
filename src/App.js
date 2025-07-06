import React, { useState } from 'react';
import CharacterGrid from './components/CharacterGrid';
import CharacterPage from './components/CharacterPage';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';

function App() {
  const [selectedChar, setSelectedChar] = useState(null);

  return (
    <div>
      {/* 🔝 Navbar with simple anchor links and reset logic */}
      <Navbar setSelectedChar={setSelectedChar} />

      {/* 💥 Hero Section */}
      <section id="hero">
        <HeroSection />
      </section>

      {/* 🧠 Character Section: Either grid or detail */}
      <section id="characters">
        {!selectedChar ? (
          <CharacterGrid onCharacterClick={setSelectedChar} />
        ) : (
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
