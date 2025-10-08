'use client';
import { useState, useEffect, useRef } from 'react';

const milestones = [
  {
    year: '2008',
    title: 'Założenie firmy',
    description: 'Start działalności w Polsce',
    icon: '🌱',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    year: '2012',
    title: 'Pierwsze laboratorium',
    description: 'Otwarcie własnego centrum badawczego',
    icon: '🔬',
    color: 'from-green-500 to-emerald-500'
  },
  {
    year: '2015',
    title: 'Ekspansja międzynarodowa',
    description: 'Wejście na rynki europejskie',
    icon: '🌍',
    color: 'from-purple-500 to-pink-500'
  },
  {
    year: '2018',
    title: 'Certyfikaty ISO',
    description: 'Uzyskanie certyfikatów jakości',
    icon: '✅',
    color: 'from-orange-500 to-red-500'
  },
  {
    year: '2020',
    title: 'Nowa fabryka',
    description: 'Uruchomienie nowoczesnej linii produkcyjnej',
    icon: '🏭',
    color: 'from-indigo-500 to-blue-500'
  },
  {
    year: '2024',
    title: 'Lider rynku',
    description: 'Obecność w 16 krajach na 3 kontynentach',
    icon: '🚀',
    color: 'from-pink-500 to-rose-500'
  }
];

export default function CompanyTimeline() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            milestones.forEach((_, index) => {
              setTimeout(() => {
                setVisibleItems((prev) => [...prev, index]);
              }, index * 300);
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    if (timelineRef.current) {
      observer.observe(timelineRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={timelineRef} className="py-20 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#0066b3] rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#2dbd6e] rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">Nasza historia</h2>
          <p className="text-xl text-gray-600">
            Ponad 15 lat innowacji i rozwoju
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#0066b3] via-[#2dbd6e] to-[#0066b3] transform -translate-x-1/2 hidden md:block" />

          {/* Milestones */}
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`relative transition-all duration-700 ${
                  visibleItems.includes(index)
                    ? 'opacity-100 translate-x-0'
                    : index % 2 === 0
                    ? 'opacity-0 -translate-x-20'
                    : 'opacity-0 translate-x-20'
                }`}
              >
                <div className={`flex items-center gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}>
                  {/* Content */}
                  <div className="flex-1">
                    <div
                      className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all cursor-pointer border-2 ${
                        activeIndex === index ? 'border-[#0066b3]' : 'border-transparent'
                      }`}
                      onClick={() => setActiveIndex(index)}
                    >
                      <div className={`inline-block bg-gradient-to-r ${milestone.color} text-white px-4 py-2 rounded-lg font-bold text-lg mb-4`}>
                        {milestone.year}
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3 flex items-center gap-3">
                        <span className="text-4xl">{milestone.icon}</span>
                        {milestone.title}
                      </h3>
                      <p className="text-gray-600 text-lg">{milestone.description}</p>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div className="hidden md:block relative">
                    <div className={`w-6 h-6 rounded-full bg-gradient-to-r ${milestone.color} transform transition-all ${
                      activeIndex === index ? 'scale-150' : 'scale-100'
                    }`}>
                      <div className="absolute inset-0 rounded-full bg-white animate-ping opacity-75" />
                    </div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="flex-1 hidden md:block" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation dots */}
        <div className="flex justify-center gap-3 mt-16">
          {milestones.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`transition-all ${
                index === activeIndex
                  ? 'w-12 h-3 bg-[#0066b3]'
                  : 'w-3 h-3 bg-gray-300 hover:bg-gray-400'
              } rounded-full`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}