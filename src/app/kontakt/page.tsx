'use client';
import { useState } from 'react';
import Image from 'next/image';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Symulacja wysyłania
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log('Form submitted:', formData);
    setIsSubmitting(false);
    setSubmitSuccess(true);
    
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      subject: '',
      message: ''
    });

    setTimeout(() => setSubmitSuccess(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen bg-gray-900 relative overflow-hidden">
      {/* Animated Hexagon Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l25.98 15v30L30 60 4.02 45V15z' fill='none' stroke='%230066b3' stroke-width='1'/%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-[#0066b3]/20 to-[#2dbd6e]/20"></div>

      {/* Floating Shapes */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-[#0066b3]/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#2dbd6e]/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="relative py-32 mt-16 overflow-hidden">
          <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
          <div className="inline-block mb-6">
            <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 transform hover:scale-110 transition-transform duration-300">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
          </div>
          <h1 className="text-6xl font-bold text-white mb-6 drop-shadow-lg">Skontaktuj się z nami</h1>
          <p className="text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Jesteśmy tutaj, aby pomóc Ci w wyborze najlepszych rozwiązań dla Twojego gospodarstwa
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full text-white font-semibold">
              ⚡ Szybka odpowiedź
            </div>
            <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full text-white font-semibold">
              🎯 Profesjonalne doradztwo
            </div>
            <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full text-white font-semibold">
              💼 Indywidualna oferta
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 -mt-20 relative z-20">
        {/* Contact Info Cards - Elevated */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {/* Contact Card 1 - Address */}
          <div className="group bg-gray-800/60 backdrop-blur-md rounded-2xl shadow-xl p-8 border-2 border-gray-700/50 hover:border-[#0066b3] transition-all duration-300 hover:shadow-2xl hover:shadow-[#0066b3]/20 hover:-translate-y-2">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-[#0066b3] to-[#0052a3] rounded-2xl flex items-center justify-center mx-auto mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#0066b3] transition-colors">Nasza siedziba</h3>
              <p className="text-gray-300 leading-relaxed text-lg">
                <span className="font-semibold text-white">Zabłocie 23 / 24</span><br />
                30-701 Kraków<br />
                Polska
              </p>
              <div className="mt-6 pt-6 border-t border-gray-700">
                <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="text-[#0066b3] hover:text-[#0052a3] font-semibold inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                  Zobacz na mapie
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Card 2 - Contact */}
          <div className="group bg-gray-800/60 backdrop-blur-md rounded-2xl shadow-xl p-8 border-2 border-gray-700/50 hover:border-[#2dbd6e] transition-all duration-300 hover:shadow-2xl hover:shadow-[#2dbd6e]/20 hover:-translate-y-2">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-[#2dbd6e] to-[#27a561] rounded-2xl flex items-center justify-center mx-auto mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#2dbd6e] transition-colors">Zadzwoń do nas</h3>
              <div className="space-y-3">
                <a href="tel:+48123456789" className="block text-gray-300 hover:text-[#2dbd6e] text-lg font-semibold transition-colors">
                  📞 +48 123 456 789
                </a>
                <a href="tel:+48123456788" className="block text-gray-300 hover:text-[#2dbd6e] text-lg font-semibold transition-colors">
                  📞 +48 123 456 788
                </a>
                <a href="mailto:kontakt@consagrico.pl" className="block text-[#2dbd6e] hover:text-[#27a561] font-semibold text-lg transition-colors mt-4">
                  ✉️ kontakt@consagrico.pl
                </a>
              </div>
            </div>
          </div>

          {/* Contact Card 3 - Hours */}
          <div className="group bg-gray-800/60 backdrop-blur-md rounded-2xl shadow-xl p-8 border-2 border-gray-700/50 hover:border-[#0066b3] transition-all duration-300 hover:shadow-2xl hover:shadow-[#0066b3]/20 hover:-translate-y-2">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-[#0066b3] to-[#2dbd6e] rounded-2xl flex items-center justify-center mx-auto mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#0066b3] transition-colors">Godziny pracy</h3>
              <div className="space-y-3">
                <div className="bg-gradient-to-r from-[#0066b3]/20 to-[#2dbd6e]/20 rounded-lg p-4 border border-gray-700/50">
                  <p className="text-white font-bold text-lg">Poniedziałek - Piątek</p>
                  <p className="text-[#0066b3] font-bold text-2xl mt-1">8:00 - 16:00</p>
                </div>
                <div className="bg-gray-800/80 rounded-lg p-3 border border-gray-700/50">
                  <p className="text-gray-400 font-medium">Sobota - Niedziela</p>
                  <p className="text-gray-500 font-semibold">Zamknięte</p>
                </div>
              </div>
              <div className="mt-4 text-sm text-gray-400">
                ⚡ Odpowiadamy w ciągu 24h
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="bg-gray-800/60 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden border-2 border-gray-700/50">
          <div className="bg-gradient-to-r from-gray-800/80 to-gray-800/60 p-8 border-b-2 border-gray-700/50">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-gradient-to-br from-[#0066b3] to-[#2dbd6e] rounded-xl flex items-center justify-center">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-white">Znajdź nas</h2>
                <p className="text-gray-300 mt-1">Odwiedź naszą siedzibę w Krakowie</p>
              </div>
            </div>
          </div>
          <div className="p-6">
            <div className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-lg border-2 border-gray-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2561.9711969965707!2d19.961525776676736!3d50.04661041904654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47165b6a8f6c9d15%3A0x3d0c7b7fa2f13c9b!2sZab%C5%82ocie%2023%2C%2030-701%20Krak%C3%B3w!5e0!3m2!1spl!2spl!4v1709925555387!5m2!1spl!2spl"
                width="100%"
                height="500"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-2xl"
              ></iframe>
            </div>
            <div className="mt-6 grid md:grid-cols-2 gap-4">
              <a 
                href="https://maps.google.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-gradient-to-r from-[#0066b3] to-[#0052a3] text-white px-6 py-4 rounded-xl hover:shadow-lg transition-all duration-300 font-semibold transform hover:scale-[1.02]"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
                Otwórz w Google Maps
              </a>
              <a 
                href="https://maps.google.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-gradient-to-r from-[#2dbd6e] to-[#27a561] text-white px-6 py-4 rounded-xl hover:shadow-lg transition-all duration-300 font-semibold transform hover:scale-[1.02]"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
                Wyznacz trasę
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form - Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Why Contact Us */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-white mb-4">Napisz do nas</h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                Nasz zespół ekspertów jest gotowy, aby pomóc Ci w wyborze najlepszych rozwiązań dla Twojego gospodarstwa.
              </p>
            </div>

            {/* Benefits */}
            <div className="space-y-6">
              <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-[#0066b3]/10 to-transparent rounded-xl border border-gray-700/50">
                <div className="w-12 h-12 bg-[#0066b3] rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-white text-lg mb-1">Szybka odpowiedź</h4>
                  <p className="text-gray-300">Odpowiadamy na wszystkie zapytania w ciągu 24 godzin roboczych</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-[#2dbd6e]/10 to-transparent rounded-xl border border-gray-700/50">
                <div className="w-12 h-12 bg-[#2dbd6e] rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-white text-lg mb-1">Profesjonalne doradztwo</h4>
                  <p className="text-gray-300">Nasi specjaliści pomogą dobrać optymalne produkty</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-[#0066b3]/10 to-transparent rounded-xl border border-gray-700/50">
                <div className="w-12 h-12 bg-[#0066b3] rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-white text-lg mb-1">Indywidualna oferta</h4>
                  <p className="text-gray-300">Przygotujemy ofertę dostosowaną do Twoich potrzeb</p>
                </div>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="bg-gradient-to-br from-gray-800/80 to-gray-800/60 rounded-2xl p-6 border border-gray-700/50">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-3xl font-bold text-[#0066b3]">15+</div>
                  <div className="text-sm text-gray-300 mt-1">Lat doświadczenia</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#2dbd6e]">500+</div>
                  <div className="text-sm text-gray-300 mt-1">Zadowolonych klientów</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#0066b3]">24/7</div>
                  <div className="text-sm text-gray-300 mt-1">Wsparcie</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="bg-gray-800/60 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden border-2 border-gray-700/50">
            <div className="bg-gradient-to-r from-[#0066b3] to-[#2dbd6e] p-8 text-white">
              <h3 className="text-2xl font-bold mb-2">Formularz kontaktowy</h3>
              <p className="text-white/90">Wypełnij formularz, a skontaktujemy się z Tobą</p>
            </div>
            
            {submitSuccess && (
              <div className="mx-8 mt-6 p-4 bg-green-50 border-2 border-green-500 rounded-xl flex items-center gap-3">
                <svg className="w-6 h-6 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <p className="font-bold text-green-800">Wiadomość wysłana!</p>
                  <p className="text-sm text-green-600">Odpowiemy w ciągu 24 godzin</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="p-8 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-white mb-2">
                    Imię i nazwisko *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-600 bg-gray-700/50 text-white rounded-xl focus:ring-2 focus:ring-[#0066b3] focus:border-[#0066b3] transition-all placeholder-gray-400"
                    placeholder="Jan Kowalski"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-white mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-600 bg-gray-700/50 text-white rounded-xl focus:ring-2 focus:ring-[#0066b3] focus:border-[#0066b3] transition-all placeholder-gray-400"
                    placeholder="jan@example.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-bold text-white mb-2">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-600 bg-gray-700/50 text-white rounded-xl focus:ring-2 focus:ring-[#0066b3] focus:border-[#0066b3] transition-all placeholder-gray-400"
                    placeholder="+48 123 456 789"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-bold text-white mb-2">
                    Nazwa gospodarstwa
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-600 bg-gray-700/50 text-white rounded-xl focus:ring-2 focus:ring-[#0066b3] focus:border-[#0066b3] transition-all placeholder-gray-400"
                    placeholder="Gospodarstwo Kowalskich"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-bold text-white mb-2">
                  Temat zapytania *
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-600 bg-gray-700/50 text-white rounded-xl focus:ring-2 focus:ring-[#0066b3] focus:border-[#0066b3] transition-all"
                >
                  <option value="">Wybierz temat...</option>
                  <option value="oferta">Zapytanie o ofertę</option>
                  <option value="produkt">Pytanie o produkt</option>
                  <option value="wspolpraca">Współpraca</option>
                  <option value="reklamacja">Reklamacja</option>
                  <option value="inne">Inne</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-bold text-white mb-2">
                  Wiadomość *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border-2 border-gray-600 bg-gray-700/50 text-white rounded-xl focus:ring-2 focus:ring-[#0066b3] focus:border-[#0066b3] transition-all resize-none placeholder-gray-400"
                  placeholder="Opisz szczegółowo swoje zapytanie..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-[#0066b3] to-[#2dbd6e] text-white px-8 py-4 rounded-xl hover:shadow-xl transition-all duration-300 font-bold text-lg disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-[1.02] active:scale-[0.98]"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-3">
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Wysyłanie...
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    Wyślij wiadomość
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                )}
              </button>

              <p className="text-sm text-gray-400 text-center">
                * Pola wymagane. Twoje dane są bezpieczne i nie będą udostępniane osobom trzecim.
              </p>
            </form>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Często zadawane pytania</h2>
            <p className="text-xl text-gray-300">Znajdź odpowiedzi na najczęściej zadawane pytania</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-800/60 backdrop-blur-md rounded-2xl shadow-lg p-6 border-2 border-gray-700/50 hover:border-[#0066b3] transition-all duration-300 hover:shadow-[#0066b3]/20">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#0066b3]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-[#0066b3] font-bold text-lg">?</span>
                </div>
                <div>
                  <h4 className="font-bold text-white text-lg mb-2">Jak szybko otrzymam odpowiedź?</h4>
                  <p className="text-gray-300">Odpowiadamy na wszystkie zapytania w ciągu 24 godzin roboczych. W pilnych sprawach prosimy o kontakt telefoniczny.</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/60 backdrop-blur-md rounded-2xl shadow-lg p-6 border-2 border-gray-700/50 hover:border-[#2dbd6e] transition-all duration-300 hover:shadow-[#2dbd6e]/20">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#2dbd6e]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-[#2dbd6e] font-bold text-lg">?</span>
                </div>
                <div>
                  <h4 className="font-bold text-white text-lg mb-2">Czy mogę zamówić próbki produktów?</h4>
                  <p className="text-gray-300">Tak, oferujemy próbki wybranych produktów. Skontaktuj się z nami, aby omówić szczegóły.</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/60 backdrop-blur-md rounded-2xl shadow-lg p-6 border-2 border-gray-700/50 hover:border-[#0066b3] transition-all duration-300 hover:shadow-[#0066b3]/20">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#0066b3]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-[#0066b3] font-bold text-lg">?</span>
                </div>
                <div>
                  <h4 className="font-bold text-white text-lg mb-2">Jakie formy płatności akceptujecie?</h4>
                  <p className="text-gray-300">Akceptujemy przelewy bankowe, płatności online oraz dla stałych klientów oferujemy płatność odroczoną.</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/60 backdrop-blur-md rounded-2xl shadow-lg p-6 border-2 border-gray-700/50 hover:border-[#2dbd6e] transition-all duration-300 hover:shadow-[#2dbd6e]/20">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#2dbd6e]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-[#2dbd6e] font-bold text-lg">?</span>
                </div>
                <div>
                  <h4 className="font-bold text-white text-lg mb-2">Czy oferujecie doradztwo techniczne?</h4>
                  <p className="text-gray-300">Tak, nasz zespół ekspertów służy pomocą w doborze produktów i doradztwie technicznym. Usługa jest bezpłatna.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 bg-gradient-to-br from-[#0066b3] via-[#0052a3] to-[#2dbd6e] rounded-3xl p-12 text-center text-white shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          </div>
          <div className="relative z-10">
            <h3 className="text-4xl font-bold mb-4">Masz pytania? Jesteśmy tu dla Ciebie!</h3>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Nasz zespół ekspertów jest gotowy, aby pomóc Ci w każdej sprawie. Skontaktuj się z nami już dziś!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="tel:+48123456789"
                className="inline-flex items-center gap-3 bg-white text-[#0066b3] px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg transform hover:scale-105"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Zadzwoń teraz
              </a>
              <a 
                href="mailto:kontakt@consagrico.pl"
                className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-sm text-white border-2 border-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-[#0066b3] transition-all duration-300 shadow-lg transform hover:scale-105"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Napisz email
              </a>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
} 