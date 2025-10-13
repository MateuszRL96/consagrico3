'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

const slides = [
  {
    id: 1,
    image: '/laborator.jpeg',
    title: 'Nowoczesne laboratorium',
    description: 'Zaawansowane badania nad nowymi rozwiązaniami'
  },
  {
    id: 2,
    image: '/kombajn.jpeg',
    title: 'Efektywna uprawa',
    description: 'Nasze produkty w akcji na polach całej Europy'
  },
  {
    id: 3,
    image: '/jedenpiec (1).jpg',
    title: 'Profesjonalny zespół',
    description: 'Eksperci z wieloletnim doświadczeniem'
  }
];

export default function ImageSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[600px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Image */}
          <div className="relative w-full h-full">
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover"
              priority={index === 0}
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/50" />
          </div>

          {/* Content */}
          <div className="absolute inset-0 flex items-center justify-center text-center text-white px-4">
            <div className="max-w-4xl">
              <h2 className="text-6xl font-bold mb-6 animate-fade-in">
                {slide.title}
              </h2>
              <p className="text-2xl opacity-90 animate-fade-in-delay">
                {slide.description}
              </p>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`transition-all ${
              index === currentSlide
                ? 'w-12 h-3 bg-white'
                : 'w-3 h-3 bg-white/50 hover:bg-white/75'
            } rounded-full`}
          />
        ))}
      </div>

      {/* Arrow navigation */}
      <button
        onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm p-4 rounded-full transition-all z-10"
      >
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm p-4 rounded-full transition-all z-10"
      >
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </section>
  );
}