'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

const productImages = [
  {
    id: 1,
    name: 'Herbicydy',
    image: '/obrazy/herbicydy.jpg',
  },
  {
    id: 2,
    name: 'Fungicydy',
    image: '/obrazy/fungicydy.jpg',
  },
  {
    id: 3,
    name: 'Insektycydy',
    image: '/obrazy/insektycydy.jpg',
  },
  {
    id: 4,
    name: 'Regulatory wzrostu',
    image: '/obrazy/regulatory.jpg',
  },
  {
    id: 5,
    name: 'Nawozy',
    image: '/obrazy/nawozy.jpg',
  }
];

export default function ProductCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % productImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % productImages.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + productImages.length) % productImages.length);
    setIsAutoPlaying(false);
  };

  return (
    <section className="pt-32 pb-20 bg-white relative overflow-hidden">
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

      <div className="max-w-[95%] mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Nasze produkty</h2>
          <p className="text-xl text-gray-700">
            Kompleksowa ochrona roślin na każdym etapie uprawy
          </p>
          <div className="w-24 h-1 bg-[#0066b3] mx-auto rounded-full mt-4"></div>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Main Slide - Full Width Images */}
          <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl">
            {productImages.map((product, index) => (
              <div
                key={product.id}
                className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                  index === currentIndex
                    ? 'opacity-100 translate-x-0'
                    : index < currentIndex
                    ? 'opacity-0 -translate-x-full'
                    : 'opacity-0 translate-x-full'
                }`}
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
                {/* Optional: Dark overlay for better text visibility if needed */}
                <div className="absolute inset-0 bg-black/20" />
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-5 rounded-full shadow-xl transition-all z-20 group hover:scale-110"
            aria-label="Poprzedni slajd"
          >
            <svg className="w-7 h-7 text-gray-900 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-5 rounded-full shadow-xl transition-all z-20 group hover:scale-110"
            aria-label="Następny slajd"
          >
            <svg className="w-7 h-7 text-gray-900 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}