import React, { useState } from 'react';
import '../../css/calculator.css';

const PriceCalculator = () => {
  const [width, setWidth] = useState(2);
  const [length, setLength] = useState(2);
  const [selectedPrice, setSelectedPrice] = useState(9.9);
  const [impraegnierung, setImpraegnierung] = useState(false);
  const [geruchsbehandlung, setGeruchsbehandlung] = useState(false);

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

  const handleGeruchsbehandlungChange = () => {
    setGeruchsbehandlung(!geruchsbehandlung);
  };

  const calculateTotal = () => {
    let area = width * length;
    let total = area * selectedPrice;

    if (geruchsbehandlung) {
      total += area * 5;
    }

    if (impraegnierung) {
      total += area * 3;
    }

    return total.toFixed(2);
  };

  return (
    <div className="calculator">
          
      <h2 className="title">
        Teppichreinigung Kostenrechner
      </h2>

      <div className="slider-container">
        <label>Breite: {width.toFixed(1)} m</label>
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
        <label>Länge: {length.toFixed(1)} m</label>
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
        <div className="option">
          <label className="tooltip">
            <input
              type="checkbox"
              checked={geruchsbehandlung}
              onChange={handleGeruchsbehandlungChange}
            />
            Geruchsbehandlung/Desinfizierung (+5,00€ /m²)
            <span className="tooltiptext">
              Optional buchbar, pro m² 5€. Sehr empfehlenswert bei
              Milbenentfernung und Geruchsbeseitigung wie zum Beispiel Urin oder
              sonstige bakterielle Verunreinigungen.
            </span>
          </label>
        </div>
        <div className="option">
          <label className="tooltip">
            <input
              type="checkbox"
              checked={impraegnierung}
              onChange={handleImpraegnierungChange}
            />
            Imprägnierung/Rückfetten (+3,00€ /m²)
            <span className="tooltiptext">
              Allgemein schutzabweisende Wirkung. Rückfetten für Wollteppiche,
              sehr empfehlenswert, da Wollteppiche generell Wollfett enthalten.
              Diese geht durch Abnutzung und auch durch die Wäsche verloren. Dies
              führt dazu, dass die Wolle brüchig wird und anfängt zu stauben. Wir
              behandeln den Teppich nach der Wäsche mit natürlichem Wollwachs und
              arbeiten das in den Teppich ein. Der Teppich bekommt neuen Glanz und
              die Wolle wird dadurch gepflegt.
            </span>
          </label>
        </div>
      </div>

      <div id="total">Gesamtpreis: {calculateTotal()} €</div>

      <button className="button send-request" id="sendRequest">
        Anfrage senden
      </button>
    </div>
  );
};

export default PriceCalculator;
