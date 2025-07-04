import React, { useEffect, useState } from 'react';
import './mainImages.css'; // Styling for the full-screen hero section

// Array of image paths to cycle through in the hero background
const images = [
  '/images/mainHead1.jpg',
  '/images/mainHead2.jpg',
  '/images/mainHead3.jpg',
  '/images/mainHead4.jpg',
  '/images/mainHead5.jpg',
];

const HeroSection = () => {
  // State to track which image is currently shown
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically change background image every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % images.length);
    }, 4000);

    // Clean up interval when component unmounts
    return () => clearInterval(interval);
  }, []);

  return (
    <div id="hero" className="hero-container">
      {/* Render all images as slides, but only the active one is visible */}
      {images.map((img, idx) => (
        <div
          key={idx}
          className={`hero-slide ${idx === currentIndex ? 'active' : ''}`}
          style={{ backgroundImage: `url(${img})` }}
        >
          {/* Dark overlay for better text visibility */}
          <div className="hero-overlay"></div>
        </div>
      ))}

      {/* Text content over the background image */}
      <div className="hero-text">
        <h1>Welcome to SuperSaga</h1>
        <p>Uncover the origin and powers of Marvel's most iconic heroes.</p>
      </div>
    </div>
  );
};

export default HeroSection;
