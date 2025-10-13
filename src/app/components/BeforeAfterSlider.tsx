'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const comparisons = [
  {
    id: 1,
    title: 'Ochrona przed chwastami',
    before: '/laborator.jpeg', // Zastąp właściwymi zdjęciami
    after: '/kombajn.jpeg',
    description: 'Efekt zastosowania herbicydów po 2 tygodniach'
  },
  {
    id: 2,
    title: 'Zdrowe plony',
    before: '/laborator.jpeg',
    after: '/jedenpiec (1).jpg',
    description: 'Porównanie plonów z ochroną i bez'
  }
];

export default function BeforeAfterSlider() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [currentComparison, setCurrentComparison] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging && e.type !== 'click') return;

    const container = e.currentTarget;
    const rect = container.getBoundingClientRect();
    const x = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const position = ((x - rect.left) / rect.width) * 100;
    
    setSliderPosition(Math.min(Math.max(position, 0), 100));
  };

  const comparison = comparisons[currentComparison];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Zobacz efekty</h2>
          <p className="text-xl text-gray-600">
            Porównaj wyniki przed i po zastosowaniu naszych produktów
          </p>
        </div>

        {/* Comparison Slider */}
        <div className="relative">
          <div
            className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl cursor-ew-resize select-none"
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            onMouseMove={handleMove}
            onTouchStart={() => setIsDragging(true)}
            onTouchEnd={() => setIsDragging(false)}
            onTouchMove={handleMove}
            onClick={handleMove}
          >
            {/* Before Image */}
            <div className="absolute inset-0">
              <Image
                src={comparison.before}
                alt="Przed"
                fill
                className="object-cover"
              />
              <div className="absolute top-4 left-4 bg-red-500 text-white px-4 py-2 rounded-lg font-bold">
                PRZED
              </div>
            </div>

            {/* After Image */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              <Image
                src={comparison.after}
                alt="Po"
                fill
                className="object-cover"
              />
              <div className="absolute top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg font-bold">
                PO
              </div>
            </div>

            {/* Slider Handle */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                </svg>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="text-center mt-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">{comparison.title}</h3>
            <p className="text-gray-600">{comparison.description}</p>
          </div>

          {/* Navigation */}
          {comparisons.length > 1 && (
            <div className="flex justify-center gap-3 mt-8">
              {comparisons.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentComparison(index);
                    setSliderPosition(50);
                  }}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentComparison
                      ? 'bg-[#0066b3] w-12'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            href="/produkty"
            className="inline-block bg-gradient-to-r from-[#0066b3] to-[#2dbd6e] text-white px-8 py-4 rounded-xl font-bold hover:shadow-xl hover:scale-105 transition-all"
          >
            Zobacz nasze produkty
          </Link>
        </div>
      </div>
    </section>
  );
}