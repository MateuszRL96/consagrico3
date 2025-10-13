'use client';
import VideoWheel from './components/VideoWheel';
import ProductCarousel from './components/ProductCarousel';
import WhyUsSection from './components/WhyUsSection';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Video Wheel z mapą */}
      <VideoWheel />

      {/* Sekcja Produktów */}
      <ProductCarousel />

      {/* Dlaczego My? */}
      <WhyUsSection />

      {/* Statystyki - Nowa sekcja */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Dekoracyjne tło - hexagony */}
        <div className="absolute inset-0 opacity-10 z-0">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l25.98 15v30L30 60 4.02 45V15z' fill='none' stroke='%230066b3' stroke-width='2'/%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>

        {/* Floating Shapes */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-[#0066b3]/10 rounded-full blur-3xl animate-pulse z-0"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#2dbd6e]/10 rounded-full blur-3xl animate-pulse z-0" style={{animationDelay: '1s'}}></div>

        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Zaufali Nam Liderzy Rynku
            </h2>
            <div className="w-24 h-1 bg-[#0066b3] mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '15+', label: 'Lat doświadczenia', icon: '📅' },
              { number: '500+', label: 'Zadowolonych klientów', icon: '🤝' },
              { number: '50+', label: 'Produktów w ofercie', icon: '🧪' },
              { number: '24/7', label: 'Wsparcie techniczne', icon: '💬' }
            ].map((stat, index) => (
              <div 
                key={index}
                className="text-center group hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="text-5xl mb-4 group-hover:animate-bounce">
                  {stat.icon}
                </div>
                <div className="text-4xl md:text-5xl font-bold text-[#0066b3] mb-2 group-hover:text-[#2dbd6e] transition-colors">
                  {stat.number}
                </div>
                <div className="text-gray-700 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action - Nowa sekcja */}
      <section className="py-24 bg-gradient-to-br from-[#0066b3] to-[#2dbd6e] relative overflow-hidden">
        {/* Dekoracyjne tło - hexagony */}
        <div className="absolute inset-0 opacity-10 z-0">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l25.98 15v30L30 60 4.02 45V15z' fill='none' stroke='%23ffffff' stroke-width='2'/%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>

        {/* Animowane tło - floating shapes */}
        <div className="absolute inset-0 opacity-10 z-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Gotowy na Współpracę?
          </h2>
          <p className="text-xl text-white/90 mb-10 leading-relaxed">
            Skontaktuj się z nami już dziś i dowiedz się, jak możemy pomóc Twojemu gospodarstwu osiągnąć lepsze plony
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="/kontakt"
              className="px-8 py-4 bg-white text-[#0066b3] rounded-lg font-bold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl"
            >
              Skontaktuj się z nami
            </Link>
            <Link 
              href="/produkty"
              className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-bold text-lg hover:bg-white hover:text-[#0066b3] transform hover:scale-105 transition-all duration-300"
            >
              Zobacz produkty
            </Link>
          </div>

          {/* Dodatkowe informacje kontaktowe */}
          <div className="mt-16 grid md:grid-cols-3 gap-8 text-white">
            <div className="flex flex-col items-center">
              <div className="text-4xl mb-3">📞</div>
              <h3 className="font-bold mb-2">Zadzwoń</h3>
              <p className="text-white/80">+48 123 456 789</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-4xl mb-3">✉️</div>
              <h3 className="font-bold mb-2">Napisz</h3>
              <p className="text-white/80">kontakt@conagrico.pl</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-4xl mb-3">📍</div>
              <h3 className="font-bold mb-2">Odwiedź</h3>
              <p className="text-white/80">Warszawa, Polska</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
