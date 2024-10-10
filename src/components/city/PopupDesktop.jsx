// src/components/Popup.jsx

import React, { useEffect } from 'react';
import './popup.css'


const Popup = ({ onClose }) => {
  // Schließen bei Klick außerhalb des Popups
  useEffect(() => {
    const handleClickOutside = (event) => {
      const popupElement = document.getElementById('pop');
      if (popupElement && !popupElement.contains(event.target)) {
        // Popup schließen, wenn außerhalb geklickt wird
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  // Verhindert das Schließen bei Klick innerhalb des Popups
  const handlePopupClick = (event) => {
    event.stopPropagation();
  };


  return (
    <div id="over" className="popup-overlay">
  <div id="pop" className="fixed bottom-0 z-50 p-4 mx-4 bg-white rounded-lg border border-gray-200 shadow sm:bottom-6 md:p-6 pos newsletter-pop-up">
    <div className="flex items-start pos">
      <div>
        <h3 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
          Vereinbaren Sie eine Teppichabholung
        </h3>
        <p className="mb-4 text-base leading-relaxed text-gray-500 dark:text-gray-400">
          Füllen Sie das Formular aus, um eine Abholung zu vereinbaren.
        </p>
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
    <form action="#">
      <div className="relative z-0 mb-4">
        <input
          type="text"
          id="vollstaendiger_name"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          required
        />
        <label
          htmlFor="vollstaendiger_name"
          className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Vollständiger Name
        </label>
      </div>
      <div className="relative z-0 mb-4">
        <input
          type="email"
          id="email"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          required
        />
        <label
          htmlFor="email"
          className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          E-Mail
        </label>
      </div>
      <div className="relative z-0 mb-4">
        <input
          type="tel"
          id="telefon"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          required
        />
        <label
          htmlFor="telefon"
          className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Telefon
        </label>
      </div>
      <div className="relative z-0 mb-4">
        <textarea
          id="nachricht"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          rows="3"
          required
        ></textarea>
        <label
          htmlFor="nachricht"
          className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Nachricht
        </label>
      </div>
      <div className="relative z-0 mb-4 flex items-start">
        <input
          type="checkbox"
          id="consent"
          className="mt-1 mr-2"
          required
        />
        <label
          htmlFor="consent"
          className="text-sm text-gray-500 dark:text-gray-400"
        >
          Ich erlaube Ihnen, mich zu kontaktieren für eine Auftragsbestätigung und für Angebote oder Bewertungsfragen.
        </label>
      </div>
      <div>
        <button
          type="submit"
          className="py-3 px-5 w-full text-sm font-medium text-center text-white rounded-lg cursor-pointer bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Anfrage senden
        </button>
      </div>
    </form>
  </div>
</div>

  );
};

export default Popup;
