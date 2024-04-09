import React, { useState } from 'react';
import './FlipCard.css'; // Make sure to create a corresponding CSS file for styling

const FlipCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  // Random texts for the back of the card
  const backTexts = [
    'Hello World!',
    'React is awesome!',
    'Flip again?',
    'Random text here!',
    'Try clicking one more time!'
  ];

  // Function to flip the card and change the text
  const flipCard = () => {
    setIsFlipped(!isFlipped);
  };

  // Function to get a random text
  

  return (
    <div className={`card ${isFlipped ? 'flipped' : ''}`} onClick={flipCard}>
      <div className="card-front">
        Ali Sami
      </div>
      <div className="card-back">
        Hi, My Name is Ali Sami I am a student of cyber security and Digital Forensic in the Islamia University of Bahawalpur
      </div>
    </div>
  );
};

export default FlipCard;
