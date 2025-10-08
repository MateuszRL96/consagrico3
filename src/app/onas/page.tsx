'use client';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import the map component to avoid SSR issues
const WorldMap = dynamic(() => import('../components/WorldMap'), { ssr: false });

export default function AboutUs() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const values = [
    {
      title: 'Jakość',
      subtitle: 'Jakość w laboratorium',
      description: 'Stawiamy na najwyższą jakość produktów i usług, potwierdzoną certyfikatami i zadowoleniem klientów.',
      icon: '🔬',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Innowacyjność',
      subtitle: 'Innowacyjne rozwiązania',
      description: 'Ciągle rozwijamy nasze produkty i procesy, aby sprostać zmieniającym się potrzebom rynku.',
      icon: '💡',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'Bezpieczeństwo',
      subtitle: 'Bezpieczeństwo procesów',
      description: 'Dbamy o bezpieczeństwo naszych produktów i procesów produkcyjnych, chroniąc środowisko i ludzi.',
      icon: '🛡️',
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Partnerstwo',
      subtitle: 'Współpraca z klientami',
      description: 'Budujemy długotrwałe relacje z klientami i partnerami biznesowymi, oparte na zaufaniu i wzajemnym szacunku.',
      icon: '🤝',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Zrównoważony Rozwój',
      subtitle: 'Odpowiedzialność ekologiczna',
      description: 'Działamy z poszanowaniem środowiska naturalnego, wprowadzając ekologiczne rozwiązania w naszych procesach.',
      icon: '🌱',
      color: 'from-green-600 to-teal-500'
    },
    {
      title: 'Ekspertyza',
      subtitle: 'Wiedza i doświadczenie',
      description: 'Nasz zespół składa się z wykwalifikowanych specjalistów z wieloletnim doświadczeniem w branży chemicznej.',
      icon: '📚',
      color: 'from-indigo-500 to-blue-500'
    }
  ];

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
        {/* Distribution Map Section */}
        <section className="pt-18 pb-16 bg-transparent">
             
        <WorldMap />
      </section>

        {/* Stats Section */}
        <section className="py-20 bg-transparent">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: '15+', label: 'Lat doświadczenia' },
                { number: '500+', label: 'Zadowolonych klientów' },
                { number: '50+', label: 'Produktów w ofercie' },
                { number: '24/7', label: 'Wsparcie techniczne' }
              ].map((stat, index) => (
                <div 
                  key={index}
                  className={`text-center transform transition-all duration-1000 delay-${index * 200} ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                  }`}
                >
                  <div className="text-4xl md:text-5xl font-bold text-[#0066b3] mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section ref={sectionRef} className="py-24 bg-transparent">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className={`text-4xl font-bold text-white mb-6 transform transition-all duration-1000 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}>
                Nasze Wartości
              </h2>
              <div className="w-24 h-1 bg-[#0066b3] mx-auto rounded-full"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div 
                  key={value.title} 
                  className={`group transform transition-all duration-700 delay-${index * 100} ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                  }`}
                >
                  <div className="bg-gray-800/60 backdrop-blur-md rounded-xl shadow-lg p-8 h-full border-2 border-gray-700/50 hover:border-[#0066b3] hover:shadow-xl hover:shadow-[#0066b3]/20 transition-all duration-300 group-hover:-translate-y-1">
                    <div className="text-4xl mb-6">
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">
                      {value.title}
                    </h3>
                    <h4 className="text-lg font-semibold text-gray-300 mb-4">
                      {value.subtitle}
                    </h4>
                    <p className="text-gray-400 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-24 bg-transparent">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className={`transform transition-all duration-1000 ${
                isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
              }`}>
                <h2 className="text-4xl font-bold text-white mb-8">
                  Nasza Misja
                </h2>
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  Dążymy do zapewnienia rolnikom najwyższej jakości środków ochrony roślin, 
                  które są skuteczne, bezpieczne dla środowiska i opłacalne ekonomicznie.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Nasze produkty pomagają zwiększyć plony przy jednoczesnym zachowaniu 
                  zasad zrównoważonego rolnictwa.
                </p>
              </div>
              <div className={`relative transform transition-all duration-1000 delay-300 ${
                isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
              }`}>
                <div className="relative h-96 rounded-xl overflow-hidden shadow-xl border-2 border-gray-700/50">
                  <Image
                    src="/laborator.jpeg"
                    alt="Nasza misja"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-24 bg-transparent">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Nasz Zespół</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Doświadczeni specjaliści, którzy każdego dnia pracują nad doskonaleniem naszych produktów
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { name: 'Zespół Badawczy', role: 'Laboratorium', image: '/lab1 (2).jpg' },
                { name: 'Zespół Produkcyjny', role: 'Fabryka', image: '/kombajn.jpeg' },
                { name: 'Zespół Wsparcia', role: 'Biuro', image: '/jedenpiec (1).jpg' }
              ].map((team, index) => (
                <div 
                  key={index}
                  className={`group transform transition-all duration-700 delay-${index * 200} ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                  }`}
                >
                  <div className="relative h-80 rounded-xl overflow-hidden shadow-lg border-2 border-gray-700/50 hover:border-[#0066b3] group-hover:shadow-xl group-hover:shadow-[#0066b3]/20 transition-all duration-300">
                    <Image
                      src={team.image}
                      alt={team.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 right-6 text-white">
                      <h3 className="text-2xl font-bold mb-2">{team.name}</h3>
                      <p className="text-lg opacity-90">{team.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
} 