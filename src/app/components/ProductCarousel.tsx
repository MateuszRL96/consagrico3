'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const products = [
  {
    id: 1,
    name: 'Herbicydy',
    description: 'Skuteczna ochrona przed chwastami',
    image: '/obrazy/herbicydy.jpg',
    icon: '🌿',
    color: 'from-green-500 to-emerald-600'
  },
  {
    id: 2,
    name: 'Fungicydy',
    description: 'Ochrona przed chorobami grzybowymi',
    image: '/obrazy/fungicydy.jpg',
    icon: '🍄',
    color: 'from-blue-500 to-cyan-600'
  },
  {
    id: 3,
    name: 'Insektycydy',
    description: 'Skuteczna walka ze szkodnikami',
    image: '/obrazy/insektycydy.jpg',
    icon: '🦗',
    color: 'from-red-500 to-orange-600'
  },
  {
    id: 4,
    name: 'Regulatory wzrostu',
    description: 'Optymalizacja rozwoju roślin',
    image: '/obrazy/regulatory.jpg',
    icon: '📈',
    color: 'from-purple-500 to-pink-600'
  },
  {
    id: 5,
    name: 'Nawozy',
    description: 'Kompleksowe odżywianie roślin',
    image: '/obrazy/nawozy.jpg',
    icon: '💧',
    color: 'from-yellow-500 to-amber-600'
  }
];

export default function ProductCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Determine grid columns based on number of products
  const getGridColumns = () => {
    const count = products.length;
    if (count <= 8) {
      return 'grid-cols-2 md:grid-cols-4';
    } else if (count <= 16) {
      return 'grid-cols-1 md:grid-cols-2';
    } else {
      return 'grid-cols-2 md:grid-cols-3';
    }
  };

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % products.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % products.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);
    setIsAutoPlaying(false);
  };

  return (
    <section className="pt-32 pb-20 bg-gray-900 relative overflow-hidden">
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

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Nasze produkty</h2>
          <p className="text-xl text-gray-300">
            Kompleksowa ochrona roślin na każdym etapie uprawy
          </p>
          <div className="w-24 h-1 bg-[#0066b3] mx-auto rounded-full mt-4"></div>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Main Slide */}
          <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
            {products.map((product, index) => (
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
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-r ${product.color} opacity-90`} />
                
                {/* Content */}
                <div className="relative h-full flex items-center justify-between px-16">
                  <div className="text-white max-w-xl z-10">
                    <div className="text-7xl mb-6">{product.icon}</div>
                    <h3 className="text-5xl font-bold mb-4">{product.name}</h3>
                    <p className="text-2xl mb-8 opacity-90">{product.description}</p>
                    <Link
                      href="/produkty"
                      className="inline-block bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
                    >
                      Zobacz produkty
                    </Link>
                  </div>

                  {/* Decorative circles */}
                  <div className="relative w-96 h-96 hidden lg:block">
                    <div className="absolute inset-0 bg-white/10 rounded-full animate-pulse" />
                    <div className="absolute inset-8 bg-white/10 rounded-full animate-pulse delay-75" />
                    <div className="absolute inset-16 bg-white/20 rounded-full flex items-center justify-center">
                      <span className="text-9xl">{product.icon}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-4 rounded-full shadow-lg transition-all z-10 group"
          >
            <svg className="w-6 h-6 text-gray-900 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-4 rounded-full shadow-lg transition-all z-10 group"
          >
            <svg className="w-6 h-6 text-gray-900 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-3 mt-8">
            {products.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all ${
                  index === currentIndex
                    ? 'w-12 h-3 bg-[#0066b3]'
                    : 'w-3 h-3 bg-gray-300 hover:bg-gray-400'
                } rounded-full`}
              />
            ))}
          </div>
        </div>

        {/* Product Cards Preview */}
        <div className={`grid ${getGridColumns()} gap-4 mt-12`}>
          {products.map((product, index) => (
            <button
              key={product.id}
              onClick={() => goToSlide(index)}
              className={`p-6 rounded-xl transition-all transform hover:scale-105 border-2 ${
                index === currentIndex
                  ? 'bg-[#0066b3] text-white shadow-lg shadow-[#0066b3]/30 border-[#0066b3]'
                  : 'bg-gray-800/60 backdrop-blur-md text-gray-300 hover:shadow-md border-gray-700/50 hover:border-[#0066b3]/50'
              }`}
            >
              <div className="text-4xl mb-2">{product.icon}</div>
              <div className="font-semibold text-xs">{product.name}</div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}