// src/components/PopupWrapper.jsx

import React, { useState } from 'react';
import Popup from './PopupDesktop.jsx';

const PopupWrapper = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openPopup = () => setIsOpen(true);
  const closePopup = () => setIsOpen(false);

  return (
    <>
      <div className="btnbox">
        <button
          className="btn px-5 py-3 text-base font-bold text-center text-white bg-blue-700 rounded-lg
          hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300
          dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 buttons"
          onClick={openPopup}
        >
          Teppich Abholung vereinbaren
        </button>
      </div>
      {isOpen && <Popup onClose={closePopup} />}
    </>
  );
};

export default PopupWrapper;
