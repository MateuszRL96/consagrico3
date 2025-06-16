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
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative h-[400px] -mt-40">
        <div className="absolute inset-0 z-0">
          <Image
            src="/lab1 (1).jpg"
            alt="Laboratorium Consagrico"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-[#0066b3]/80 z-10"></div>
        <div className="absolute inset-0 z-20 flex items-center justify-center text-center text-white" style={{ marginTop: '160px' }}>
          <div>
            <h1 className="text-5xl font-bold mb-4">Kontakt</h1>
            <p className="text-xl opacity-90">
              Jesteśmy tutaj, aby odpowiedzieć na Twoje pytania
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-12 space-y-12">
        {/* Info and Map Section */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Company Information */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-[#0066b3] to-[#0080e0] p-6">
              <h2 className="text-2xl font-bold text-white">Dane firmowe</h2>
            </div>
            <div className="p-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Adres</h3>
                  <p className="text-gray-600">
                    Zabłocie 23 / 24<br />
                    30-701 Kraków<br />
                    Polska
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Kontakt</h3>
                  <p className="text-gray-600">
                    <strong>Email:</strong>{" "}
                    <a href="mailto:kontakt@consagrico.pl" className="text-[#0066b3] hover:underline">
                      kontakt@consagrico.pl
                    </a>
                    <br />
                    <strong>Telefon:</strong> +48 123 456 789<br />
                    <strong>Fax:</strong> +48 123 456 788
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Godziny pracy</h3>
                  <p className="text-gray-600">
                    Poniedziałek - Piątek: 8:00 - 16:00<br />
                    Sobota - Niedziela: Zamknięte
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Dane rejestrowe</h3>
                  <p className="text-gray-600">
                    NIP: 6793245781<br />
                    REGON: 384571924<br />
                    KRS: 0000812345
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-[#0066b3] to-[#0080e0] p-6">
              <h2 className="text-2xl font-bold text-white">Lokalizacja</h2>
            </div>
            <div className="p-8">
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
        </div>

        {/* Contact Form - Full Width */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-[#0066b3] to-[#0080e0] p-6">
            <h2 className="text-2xl font-bold text-white">Formularz kontaktowy</h2>
          </div>
          <form onSubmit={handleSubmit} className="p-8 max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
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
                  className="w-full px-6 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0066b3] focus:border-transparent transition-all"
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
                  className="w-full px-6 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0066b3] focus:border-transparent transition-all"
                />
              </div>
            </div>

            <div className="mb-8">
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
                className="w-full px-6 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0066b3] focus:border-transparent transition-all"
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
                rows={8}
                className="w-full px-6 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0066b3] focus:border-transparent transition-all"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#0066b3] to-[#0080e0] text-white px-8 py-5 rounded-lg hover:from-[#0080e0] hover:to-[#0066b3] transition-all duration-300 font-medium text-xl"
            >
              Wyślij wiadomość
            </button>
          </form>
        </div>
      </div>
    </div>
  );
} 