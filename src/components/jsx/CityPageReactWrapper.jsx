// src/components/CityPageReactWrapper.jsx

import React, { useState } from 'react';
import ContactForm from './ContactForm.jsx';
import ContactButton from './ContactButton.jsx';

const CityPageReactWrapper = ({ cityData }) => {
  const [showContactForm, setShowContactForm] = useState(false);

  const openPopup = () => {
    setShowContactForm(true);
  };

  const closePopup = () => {
    setShowContactForm(false);
  };

  return (
    <section className="bg-cover bg-center bg-gray-200 py-24">
      <div className="top-overlay flex max-w-screen-xl m-auto">
        <div className="top text-left">
          <div className="overlay">
            <div className="gap-8 items-center px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 lg:px-6">
              <div className="mt-4 md:mt-0">
                <h3 className="mb-4 text-3xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                  Teppichreinigung mit Abhol-<br /> und Bringservice in <strong>{cityData.name}</strong>
                </h3>
                <p className="mb-6 font-light text-black-500 md:text-base dark:text-gray-400">
                  <span className="font-bold">
                    Man schiebt die Teppichreinigung immer weiter auf, weil der Alltag einfach zu hektisch ist.
                  </span>
                  Aber gerade dann, wenn der Teppich seinen Glanz verliert oder Flecken sich hartnäckig festsetzen, wird es Zeit zu handeln.
                  Keine Sorge, bei uns müssen Sie sich um nichts kümmern – wir machen es Ihnen so einfach wie möglich.
                  Sie rufen uns an, und wir kümmern uns um den Rest. Ob Abholung, Beratung oder sogar Reparatur – alles läuft reibungslos ab,
                  und Sie haben wieder Zeit für die wichtigen Dinge. Machen Sie es sich einfach und gönnen Sie Ihrem Teppich die Pflege,
                  die er verdient. Ein Anruf, und der saubere Teppich ist schon fast bei Ihnen.
                </p>
              </div>
              <img
                className="shw w-full dark:hidden rounded"
                src={cityData.image2}
                alt="dashboard image"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="btnbox">
        <ContactButton onOpenPopup={openPopup} />
      </div>

      {showContactForm && (
        <ContactForm onClose={closePopup} />
      )}
    </section>
  );
};

export default CityPageReactWrapper;
