'use client';
import Image from 'next/image';

export default function Products() {
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
            <h1 className="text-5xl font-bold mb-4">Produkty</h1>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-7xl mx-auto px-4 py-24 ">
        <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-[#0066b3] mb-6">Produkty wkrótce dostępne</h2>
            <p className="text-xl text-gray-600 mb-8">
              Jesteśmy w trakcie przygotowywania naszej oferty produktowej. Już wkrótce przedstawimy Państwu pełną gamę innowacyjnych rozwiązań chemicznych.
            </p>
            <p className="text-lg text-gray-600">
              Zachęcamy do śledzenia naszej strony. W przypadku pytań prosimy o{' '}
              <a href="/kontakt" className="text-[#0066b3] hover:underline">kontakt</a>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
} 