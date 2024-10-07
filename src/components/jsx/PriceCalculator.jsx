// src/components/PriceCalculator.jsx
import React, { useState } from 'react';
import '../css/calculator.css'

const PriceCalculator = () => {
  const [width, setWidth] = useState(5);
  const [length, setLength] = useState(5);
  const [selectedPrice, setSelectedPrice] = useState(9.9);
  const [impraegnierung, setImpraegnierung] = useState(false);
  const [antiAllergie, setAntiAllergie] = useState(false);

  const handleWidthChange = (e) => {
    setWidth(parseFloat(e.target.value));
  };

  const handleLengthChange = (e) => {
    setLength(parseFloat(e.target.value));
  };

  const handlePriceChange = (price) => {
    setSelectedPrice(price);
  };

  const handleImpraegnierungChange = () => {
    setImpraegnierung(!impraegnierung);
  };

  const handleAntiAllergieChange = () => {
    setAntiAllergie(!antiAllergie);
  };

  const calculateTotal = () => {
    let area = width * length;
    let total = area * selectedPrice;

    if (impraegnierung) {
      total += area * 3;
    }

    if (antiAllergie) {
      total += area * 2;
    }

    return total.toFixed(2);
  };

  return (
    <div className="calculator">
      <h2 className="title">Teppichreinigung Kostenrechner</h2>

      <div className="slider-container">
        <label>Breite: {width} m</label>
        <input
          type="range"
          min="0"
          max="10"
          step="0.1"
          value={width}
          onChange={handleWidthChange}
        />
      </div>

      <div className="slider-container">
        <label>Länge: {length} m</label>
        <input
          type="range"
          min="0"
          max="10"
          step="0.1"
          value={length}
          onChange={handleLengthChange}
        />
      </div>

      <div className="price-buttons">
        <button
          className={`price-button ${selectedPrice === 9.9 ? 'active' : ''}`}
          onClick={() => handlePriceChange(9.9)}
        >
          Synthetische Teppiche 9,90€ /m²
        </button>
        <button
          className={`price-button ${selectedPrice === 12.9 ? 'active' : ''}`}
          onClick={() => handlePriceChange(12.9)}
        >
          Langflorteppiche 12,90€ /m²
        </button>
        <button
          className={`price-button ${selectedPrice === 19.9 ? 'active' : ''}`}
          onClick={() => handlePriceChange(19.9)}
        >
          Traditionelle Teppiche 19,90€ /m²
        </button>
        <button
          className={`price-button ${selectedPrice === 6.9 ? 'active' : ''}`}
          onClick={() => handlePriceChange(6.9)}
        >
          Teppichboden 6,90€ /m²
        </button>
      </div>

      <div className="additional-options">
        <label>
          <input
            type="checkbox"
            checked={impraegnierung}
            onChange={handleImpraegnierungChange}
          />
          Imprägnierung (+3,00€ /m²)
        </label>
        <label>
          <input
            type="checkbox"
            checked={antiAllergie}
            onChange={handleAntiAllergieChange}
          />
          Anti-Allergie-Behandlung (+2,00€ /m²)
        </label>
      </div>

      <div id="total">Gesamtpreis: {calculateTotal()} €</div>

      <button className="send-request" id="sendRequest">
        Anfrage senden
      </button>
    </div>
  );
};

export default PriceCalculator;
