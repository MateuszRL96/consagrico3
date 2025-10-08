'use client';
import { useState, useEffect, useRef } from 'react';

const features = [
  {
    id: 1,
    icon: '🔬',
    title: 'Badania i rozwój',
    description: 'Własne laboratorium i zespół naukowców pracujących nad nowymi rozwiązaniami',
    color: 'from-blue-500 to-cyan-500',
    stats: 'Ponad 100 testów rocznie'
  },
  {
    id: 2,
    icon: '🌍',
    title: 'Globalna sieć',
    description: 'Współpraca z partnerami w 16 krajach na 3 kontynentach',
    color: 'from-green-500 to-emerald-500',
    stats: '16 krajów, 3 kontynenty'
  },
  {
    id: 3,
    icon: '✅',
    title: 'Certyfikaty jakości',
    description: 'Wszystkie produkty posiadają certyfikaty i są zgodne z normami UE',
    color: 'from-purple-500 to-pink-500',
    stats: 'ISO 9001, ISO 14001'
  },
  {
    id: 4,
    icon: '🚀',
    title: 'Szybka dostawa',
    description: 'Własna logistyka zapewniająca dostawę w 24-48h na terenie Polski',
    color: 'from-orange-500 to-red-500',
    stats: 'Dostawa 24-48h'
  }
];

export default function WhyUsSection() {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate cards one by one
            features.forEach((_, index) => {
              setTimeout(() => {
                setVisibleCards((prev) => [...prev, index]);
              }, index * 200);
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-gray-800 text-white relative overflow-hidden">
      {/* Dekoracyjne tło - hexagony */}
      <div className="absolute inset-0 opacity-10 z-0">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l25.98 15v30L30 60 4.02 45V15z' fill='none' stroke='%230066b3' stroke-width='2'/%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      {/* Floating Shapes */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-[#2dbd6e]/10 rounded-full blur-3xl animate-pulse z-0"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#0066b3]/10 rounded-full blur-3xl animate-pulse z-0" style={{animationDelay: '1s'}}></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">Dlaczego Consagrico?</h2>
          <p className="text-xl text-gray-300">
            Cztery powody, dla których warto nam zaufać
          </p>
          <div className="w-24 h-1 bg-[#0066b3] mx-auto rounded-full mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className={`transform transition-all duration-700 ${
                visibleCards.includes(index)
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-20 opacity-0'
              }`}
            >
              <div className="group relative h-full">
                {/* Card */}
                <div className="relative bg-gray-800 rounded-2xl p-8 h-full border border-gray-700 hover:border-transparent transition-all duration-300 overflow-hidden">
                  {/* Gradient overlay on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <div className="text-6xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                    <h3 className="text-2xl font-bold mb-4 group-hover:text-white transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 group-hover:text-white/90 mb-6 transition-colors">
                      {feature.description}
                    </p>
                    <div className="inline-block bg-gray-700 group-hover:bg-white/20 px-4 py-2 rounded-lg text-sm font-semibold transition-colors">
                      {feature.stats}
                    </div>
                  </div>

                  {/* Corner decoration */}
                  <div className="absolute top-0 right-0 w-32 h-32 transform translate-x-16 -translate-y-16">
                    <div className={`w-full h-full rounded-full bg-gradient-to-br ${feature.color} opacity-20 group-hover:opacity-40 transition-opacity`} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <a
            href="/kontakt"
            className="inline-block bg-gradient-to-r from-[#0066b3] to-[#2dbd6e] px-10 py-4 rounded-xl font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all"
          >
            Rozpocznij współpracę
          </a>
        </div>
      </div>
    </section>
  );
}