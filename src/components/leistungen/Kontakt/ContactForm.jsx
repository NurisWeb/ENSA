import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import './style.css';

emailjs.init('sNn4zdWLbh96L9n8j');

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    biography: '',
  });

  const [showNotification, setShowNotification] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const showSuccessNotification = () => {
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 5000);
  };

const handleSubmit = (e) => {
  e.preventDefault();

  const params = {
    from_name: formData.firstName + ' ' + formData.lastName,
    email: formData.email, // Hier 'email_id' zu 'email' geändert
    message: formData.biography,
  };
    console.log('Sende folgende Parameter an EmailJS:', params);

    emailjs
      .send('service_3hd38t9', 'template_9x86hjn', params)
      .then((response) => {
        console.log('EmailJS Antwort:', response);
        showSuccessNotification();
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          biography: '',
        });
      })
      .catch((error) => {
        console.error('FEHLER beim Senden der E-Mail:', error);
        alert('Fehler beim Senden der E-Mail');
      });
  };

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-2xl lg:py-4">
        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
          Kontaktieren Sie uns
        </h2>
        {/* Erfolgsmeldung */}
        {showNotification && (
          <div
            id="success-notification"
            className="fixed top-4 right-4 z-50 max-w-sm w-full bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded transition-transform duration-[371ms] transform scale-100"
          >
            <strong className="font-bold">Erfolg!</strong>
            <span className="block sm:inline">
              Ihre E-Mail wurde erfolgreich gesendet. Wir melden uns bei Ihnen.
            </span>
          </div>
        )}

        <form id="contact-form" onSubmit={handleSubmit}>
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <div>
              <label
                htmlFor="firstName"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Vorname
              </label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                placeholder="Vorname"
                required
                value={formData.firstName}
                onChange={handleChange}
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="lastName"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Nachname
              </label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                placeholder="Nachname"
                required
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
            <div class="sm:col-span-2">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                E-Mail
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                placeholder="E-Mail-Adresse"
                required
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="hidden">
              <label
                htmlFor="hidden-field"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Verstecktes Feld
              </label>
              <input
                type="text"
                name="hidden-field"
                id="hidden-field"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="biography"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Nachricht
              </label>
              <textarea
                id="biography"
                name="biography"
                rows="8"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
                placeholder="Ihre Nachricht"
                required
                value={formData.biography}
                onChange={handleChange}
              ></textarea>
            </div>
          </div>
          <button
            type="submit"
            className="buttonz"
          >
            Absenden
          </button>
        </form>
      </div>
    </section>
  );
};


export default ContactForm;
