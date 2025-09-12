'use client';
import Image from 'next/image';
import Link from 'next/link';

type Product = {
  name: string;
  slug: string;
  description: string;
  image: string;
};

const products: Product[] = [
  {
    name: 'OLECON 84 EC',
    slug: 'olecon-84-ec',
    description: 'Adiuwant olejowy poprawiający przyczepność i zwilżenie cieczy użytkowej.',
    image: '/karnister4-removebg.png'
  },
  {
    name: 'RICARION 95 EC',
    slug: 'ricarion-95-ec',
    description: 'Adiuwant olejowy poprawiający przyczepność i zwilżenie cieczy użytkowej.',
    image: '/karnister4-removebg.png'
  },
  {
    name: 'RICARION 98 EC',
    slug: 'ricarion-98-ec',
    description: 'Adiuwant olejowy poprawiający przyczepność i zwilżenie cieczy użytkowej.',
    image: '/karnister4-removebg.png'
  }
];

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative h-[160px] bg-gradient-to-r from-[#0066b3] via-[#1a75d1] to-[#2dbd6e]">
        <div className="absolute inset-0 z-10 flex items-center justify-center text-center text-white">
          <div>
            <h1 className="text-2xl font-bold mb-2">Nasze Produkty</h1>
            <p className="text-sm opacity-90 max-w-2xl mx-auto">
              Innowacyjne rozwiązania chemiczne dla różnych gałęzi przemysłu
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="max-w-7xl mx-auto px-2 py-16">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Oferta Produktowa</h2>
          <p className="text-base text-gray-600 max-w-3xl mx-auto">
            Prezentujemy nasze flagowe produkty, które wspierają efektywność i bezpieczeństwo w różnych sektorach przemysłu.
          </p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
          {products.map((product) => (
            <div key={product.slug} className="w-full">
              <div className="group bg-white rounded-3xl shadow-2xl overflow-hidden transform transition-all duration-500 hover:-translate-y-4 hover:shadow-3xl">
                {/* Product Image */}
                <div className="relative h-[350px] bg-gradient-to-br from-[#f8fafc] to-[#e2e8f0]">
                  <div className="absolute inset-0 flex items-center justify-center p-6">
                    <div className="relative w-56 h-56 lg:w-64 lg:h-64">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-contain drop-shadow-2xl"
                        quality={90}
                      />
                    </div>
                  </div>
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0066b3]/90 via-[#0066b3]/70 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end">
                    <div className="w-full p-8">
                      <div className="grid grid-cols-2 gap-6">
                        {/* 1L option */}
                        <div className="text-center">
                          <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6">
                            <div className="text-white text-2xl font-bold mb-3">1 Litr</div>
                            <div className="text-white/90 text-sm mb-4">Idealny do małych zastosowań</div>
                            <Link
                              href={{ pathname: `/produkty/${product.slug}`, query: { size: '1l' } }}
                              className="inline-block bg-[#2dbd6e] text-white px-6 py-3 rounded-xl hover:bg-[#27a561] transition-all duration-300 transform hover:scale-105 font-semibold"
                            >
                              Zobacz szczegóły
                            </Link>
                          </div>
                        </div>
                        {/* 5L option */}
                        <div className="text-center">
                          <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6">
                            <div className="text-white text-2xl font-bold mb-3">5 Litrów</div>
                            <div className="text-white/90 text-sm mb-4">Ekonomiczny dla większych zastosowań</div>
                            <Link
                              href={{ pathname: `/produkty/${product.slug}`, query: { size: '5l' } }}
                              className="inline-block bg-[#2dbd6e] text-white px-6 py-3 rounded-xl hover:bg-[#27a561] transition-all duration-300 transform hover:scale-105 font-semibold"
                            >
                              Zobacz szczegóły
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-6 lg:p-8">
                  <div className="text-center mb-6">
                    <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">{product.name}</h2>
                    <p className="text-base lg:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto mb-4">
                      {product.description}
                    </p>
                    
                    {/* Key Features */}
                    <div className="grid grid-cols-3 gap-3 lg:gap-4 mb-6">
                      <div className="text-center p-3 bg-[#f8fafc] rounded-xl">
                        <div className="text-lg lg:text-xl mb-1">🎯</div>
                        <div className="font-semibold text-gray-900 text-sm lg:text-base">Precyzyjne działanie</div>
                        <div className="text-xs lg:text-sm text-gray-600">Optymalna skuteczność</div>
                      </div>
                      <div className="text-center p-3 bg-[#f8fafc] rounded-xl">
                        <div className="text-lg lg:text-xl mb-1">🛡️</div>
                        <div className="font-semibold text-gray-900 text-sm lg:text-base">Bezpieczeństwo</div>
                        <div className="text-xs lg:text-sm text-gray-600">Certyfikowane rozwiązania</div>
                      </div>
                      <div className="text-center p-3 bg-[#f8fafc] rounded-xl">
                        <div className="text-lg lg:text-xl mb-1">⚡</div>
                        <div className="font-semibold text-gray-900 text-sm lg:text-base">Szybkie działanie</div>
                        <div className="text-xs lg:text-sm text-gray-600">Natychmiastowe efekty</div>
                      </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                      <Link
                        href={{ pathname: `/produkty/${product.slug}`, query: { size: '1l' } }}
                        className="inline-flex items-center justify-center bg-[#0066b3] text-white px-4 py-3 rounded-lg hover:bg-[#0056a3] transition-all duration-300 transform hover:scale-105 font-semibold text-sm lg:text-base"
                      >
                        <span className="mr-1">📦</span>
                        Wariant 1L
                      </Link>
                      <Link
                        href={{ pathname: `/produkty/${product.slug}`, query: { size: '5l' } }}
                        className="inline-flex items-center justify-center bg-[#2dbd6e] text-white px-4 py-3 rounded-lg hover:bg-[#27a561] transition-all duration-300 transform hover:scale-105 font-semibold text-sm lg:text-base"
                      >
                        <span className="mr-1">📦</span>
                        Wariant 5L
                      </Link>
                      <Link
                        href="/kontakt"
                        className="inline-flex items-center justify-center border-2 border-[#0066b3] text-[#0066b3] px-4 py-3 rounded-lg hover:bg-[#0066b3] hover:text-white transition-all duration-300 transform hover:scale-105 font-semibold text-sm lg:text-base"
                      >
                        <span className="mr-1">💬</span>
                        Zapytaj o ofertę
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="bg-gradient-to-r from-[#0066b3] via-[#1a75d1] to-[#2dbd6e] py-12">
        <div className="max-w-6xl mx-auto px-2 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Potrzebujesz więcej informacji?</h2>
          <p className="text-base mb-6 opacity-90">
            Nasi eksperci pomogą dobrać odpowiednie rozwiązanie dla Twoich potrzeb
          </p>
          <Link 
            href="/kontakt" 
            className="inline-block bg-white text-[#0066b3] px-6 py-3 rounded-lg text-base font-semibold hover:bg-gray-100 hover:text-[#2dbd6e] transition-all duration-300 transform hover:scale-105"
          >
            Skontaktuj się z nami
          </Link>
        </div>
      </section>
    </div>
  );
}
