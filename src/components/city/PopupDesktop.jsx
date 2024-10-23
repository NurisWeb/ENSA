// src/components/Popup.jsx

import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import './popup.css';

const Popup = ({ onClose }) => {
  // State für Formulardaten
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    consent: false,
  });

  // State für Erfolgsmeldung und Fehler
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  // EmailJS initialisieren
  emailjs.init('sNn4zdWLbh96L9n8j');

  // Schließen bei Klick außerhalb des Popups
  useEffect(() => {
    const handleClickOutside = (event) => {
      const popupElement = document.getElementById('pop');
      if (popupElement && !popupElement.contains(event.target)) {
        // Popup schließen, wenn außerhalb geklickt wird
        const pop = document.getElementById('pop');
        const over = document.getElementById('over');
        pop.classList.toggle('newsletter-pop-up');
        pop.classList.toggle('newsletter-pop-down');
        over.classList.toggle('popup-overlay');
        setTimeout(() => {
          onClose();
        }, 291);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  // Formulardaten aktualisieren
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  // Formular absenden
  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: formData.name,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
    };

    emailjs
      .send('service_3hd38t9', 'template_9x86hjn', templateParams)
      .then((response) => {
        console.log('E-Mail erfolgreich gesendet', response.status, response.text);
        setSubmitted(true);
      })
      .catch((err) => {
        console.error('Fehler beim Senden der E-Mail', err);
        setError(true);
      });
  };

  // Popup für Fehlermeldung
  const ErrorPopup = () => (
    <div className="error-popup">
      <div className="error-content">
        <p>Fehler beim Senden der E-Mail. Bitte versuchen Sie es erneut.</p>
        <button onClick={() => setError(false)}>Schließen</button>
      </div>
    </div>
  );

  return (
    <div id="over" className="popup-overlay">
      <div
        id="pop"
        className="fixed bottom-0 z-50 p-4 mx-4 bg-white rounded-lg border border-gray-200 shadow md:p-6 pos newsletter-pop-up"
      >
        <div className="flex items-start pos">
          <div>
            {!submitted ? (
              <>
                <h3 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                  Vereinbaren Sie eine Teppichabholung
                </h3>
                <p className="mb-4 text-base leading-relaxed text-gray-500 dark:text-gray-400">
                  Füllen Sie das Formular aus, um eine Abholung zu vereinbaren.
                </p>
              </>
            ) : (
              <>
                <h3 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                  Vielen Dank!
                </h3>
                <p className="mb-4 text-base leading-relaxed text-gray-500 dark:text-gray-400">
                  Ihre Anfrage wurde erfolgreich gesendet. Wir werden uns in Kürze bei Ihnen melden.
                </p>
              </>
            )}
          </div>
          <button
            type="button"
            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
            onClick={onClose}
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        {!submitted ? (
          <form onSubmit={handleSubmit}>
            <div className="relative z-0 mb-4 text-left">
              <input
                type="text"
                id="vollstaendiger_name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="vollstaendiger_name"
                className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500"
              >
                Vollständiger Name
              </label>
            </div>
            <div className="relative z-0 mb-4 text-left">
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="email"
                className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500"
              >
                E-Mail
              </label>
            </div>
            <div className="relative z-0 mb-4 text-left">
              <input
                type="tel"
                id="telefon"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="telefon"
                className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500"
              >
                Telefon
              </label>
            </div>
            <div className="relative z-0 mb-4 text-left">
              <textarea
                id="nachricht"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                rows="3"
                required
              ></textarea>
              <label
                htmlFor="nachricht"
                className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500"
              >
                Nachricht
              </label>
            </div>
            <div className="relative z-0 mb-4 flex items-start text-left">
              <input
                type="checkbox"
                id="consent"
                name="consent"
                checked={formData.consent}
                onChange={handleChange}
                className="mt-1 mr-2"
                required
              />
              <label
                htmlFor="consent"
                className="text-sm text-gray-500 dark:text-gray-400"
              >
                Ich erlaube Ihnen, mich zu kontaktieren für eine Auftragsbestätigung, Angebote und Bewertungsfragen.
              </label>
            </div>
            <div>
              <button
                type="submit"
                className="py-3 px-5 w-full text-sm font-medium text-center text-white rounded-lg cursor-pointer bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700"
              >
                Anfrage senden
              </button>
            </div>
          </form>
        ) : null}
        {error && <ErrorPopup />}
      </div>
    </div>
  );
};

export default Popup;
