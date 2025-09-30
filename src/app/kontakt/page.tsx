'use client';
import { useState } from 'react';
import Image from 'next/image';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Kontakt</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Jesteśmy tutaj, aby odpowiedzieć na Twoje pytania i pomóc w wyborze odpowiednich produktów
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-12 space-y-16">
        {/* Contact Info Section */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Card 1 */}
          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#0066b3] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Adres</h3>
              <p className="text-gray-600 leading-relaxed">
                Zabłocie 23 / 24<br />
                30-701 Kraków<br />
                Polska
              </p>
            </div>
          </div>

          {/* Contact Card 2 */}
          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#0066b3] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Kontakt</h3>
              <p className="text-gray-600 leading-relaxed">
                <a href="mailto:kontakt@consagrico.pl" className="text-[#0066b3] hover:underline">
                  kontakt@consagrico.pl
                </a><br />
                +48 123 456 789<br />
                +48 123 456 788
              </p>
            </div>
          </div>

          {/* Contact Card 3 */}
          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#0066b3] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Godziny pracy</h3>
              <p className="text-gray-600 leading-relaxed">
                Poniedziałek - Piątek<br />
                8:00 - 16:00<br />
                <span className="text-sm text-gray-500">Sobota - Niedziela: Zamknięte</span>
              </p>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
          <div className="p-6 border-b border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900">Lokalizacja</h2>
          </div>
          <div className="p-6">
            <div className="relative w-full h-[400px] rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2561.9711969965707!2d19.961525776676736!3d50.04661041904654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47165b6a8f6c9d15%3A0x3d0c7b7fa2f13c9b!2sZab%C5%82ocie%2023%2C%2030-701%20Krak%C3%B3w!5e0!3m2!1spl!2spl!4v1709925555387!5m2!1spl!2spl"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
          <div className="p-6 border-b border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900">Formularz kontaktowy</h2>
            <p className="text-gray-600 mt-2">Napisz do nas, a odpowiemy w ciągu 24 godzin</p>
          </div>
          <form onSubmit={handleSubmit} className="p-8">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Imię i nazwisko *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0066b3] focus:border-transparent transition-all"
                  placeholder="Wprowadź swoje imię i nazwisko"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0066b3] focus:border-transparent transition-all"
                  placeholder="Wprowadź swój email"
                />
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                Temat wiadomości *
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0066b3] focus:border-transparent transition-all"
                placeholder="Wprowadź temat wiadomości"
              />
            </div>

            <div className="mb-8">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Wiadomość *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0066b3] focus:border-transparent transition-all"
                placeholder="Opisz szczegółowo swoje zapytanie..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-[#0066b3] text-white px-8 py-4 rounded-lg hover:bg-[#0052a3] transition-colors duration-300 font-semibold text-lg"
            >
              Wyślij wiadomość
            </button>
          </form>
        </div>
      </div>
    </div>
  );
} 