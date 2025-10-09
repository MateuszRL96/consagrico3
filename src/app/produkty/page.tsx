'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

type Product = {
  name: string;
  slug: string;
  description: string;
  image: string;
  category: string;
};

const products: Product[] = [
  {
    name: 'OLECON 84 EC',
    slug: 'olecon-84-ec',
    description: 'Olej mineralny 84EC - adiuwant olejowy poprawiający przyczepność.',
    image: '/produkty/ricarion1l.png',
    category: 'aduiwanty'
  },
  {
    name: 'RICARION 95 EC',
    slug: 'ricarion-95-ec',
    description: 'Olej mineralny 96EC - adiuwant zwiększający skuteczność środków ochrony roślin.',
    image: '/produkty/ricarion1l.png',
    category: 'aduiwanty'
  },
  {
    name: 'AGRILEON 96 EC',
    slug: 'agrileon-96-ec',
    description: 'Olej parafinowy - adiuwant o wysokiej czystości do zastosowań profesjonalnych.',
    image: '/produkty/ricarion1l.png',
    category: 'aduiwanty'
  },
  {
    name: 'AGRICON MAX',
    slug: 'agricon-max',
    description: 'Sklejacz do roślin - zwiększa przyczepność środków ochrony roślin do powierzchni liści.',
    image: '/produkty/ricarion1l.png',
    category: 'aduiwanty'
  },
  {
    name: 'AGRILEUS TURBO',
    slug: 'agrileus-turbo',
    description: 'Adiuwant wielofunkcyjny do agrochemikaliów - poprawia skuteczność oprysku.',
    image: '/produkty/ricarion1l.png',
    category: 'aduiwanty'
  },
  {
    name: 'AGRILEUS POWER',
    slug: 'agrileus-power',
    description: 'Silvergold - adiuwant premium do profesjonalnych zastosowań w rolnictwie.',
    image: '/produkty/ricarion1l.png',
    category: 'aduiwanty'
  },
  {
    name: 'Polimery silikonowe',
    slug: 'polimery-silikonowe',
    description: 'Adiuwant na bazie polimerów silikonowych - redukuje napięcie powierzchniowe.',
    image: '/produkty/ricarion1l.png',
    category: 'aduiwanty'
  },
  {
    name: 'Roztwór soli sodowej',
    slug: 'roztwr-soli-sodowej',
    description: '10% roztwór soli sodowej kwasu alkilobenzenosulfonowego - środek zwilżający.',
    image: '/produkty/ricarion1l.png',
    category: 'aduiwanty'
  },
  {
    name: 'Trójsiloksan 75%',
    slug: 'trojsiloksan-75',
    description: '75% trójsiloksan - super zwilżacz do zastosowań specjalistycznych.',
    image: '/produkty/ricarion1l.png',
    category: 'aduiwanty'
  },
  {
    name: 'Etoksylowany alkohol 90%',
    slug: 'etoksylowany-alkohol-90',
    description: '90% etoksylowany alkohol - adiuwant emulgujący i zwilżający.',
    image: '/produkty/ricarion1l.png',
    category: 'aduiwanty'
  },
  {
    name: 'Estry metylowe 82,5%',
    slug: 'estry-metylowe-825',
    description: '82,5% estrów metylowych kwasów tłuszczowych - adiuwant olejowy pochodzenia roślinnego.',
    image: '/produkty/ricarion1l.png',
    category: 'aduiwanty'
  },
  {
    name: 'Trisiloksan modyfikowany',
    slug: 'trisiloksan-modyfikowany',
    description: 'Modyfikowany polieterem trisiloksan - zaawansowany adiuwant silikonowy.',
    image: '/produkty/ricarion1l.png',
    category: 'aduiwanty'
  },
  {
    name: 'Adiuwant do upraw rolniczych',
    slug: 'adiuwant-do-upraw-rolniczych',
    description: 'Adiuwant stosowany do upraw rolniczych - uniwersalne zastosowanie.',
    image: '/produkty/ricarion1l.png',
    category: 'aduiwanty'
  },
  {
    name: 'Koncentrat emulsyjny',
    slug: 'koncentrat-emulsyjny',
    description: 'Adiuwant wielofunkcyjny w formie koncentratu do sporządzania emulsji.',
    image: '/produkty/ricarion1l.png',
    category: 'aduiwanty'
  },
  {
    name: 'Adiuwant do fungicydów miedziowych',
    slug: 'adiuwant-do-fungicydow-miedziowych',
    description: 'Adiuwant stosowany do stosowania z fungicydami opartymi o miedź.',
    image: '/produkty/ricarion1l.png',
    category: 'aduiwanty'
  },
  {
    name: 'Produkt1',
    slug: 'produkt1',
    description: 'Herbicyd nowej generacji do zwalczania chwastów dwuliściennych i jednoliściennych.',
    image: '/produkty/ricarion1l.png',
    category: 'herbicydy'
  },
  {
    name: 'Produkt2',
    slug: 'produkt2',
    description: 'Fungicyd systemiczny do ochrony przed chorobami grzybowymi roślin uprawnych.',
    image: '/produkty/ricarion1l.png',
    category: 'fungicydy'
  },
  {
    name: 'Produkt3',
    slug: 'produkt3',
    description: 'Insektycyd kontaktowo-żołądkowy do zwalczania szkodników roślin.',
    image: '/produkty/ricarion1l.png',
    category: 'insektycydy'
  },
  {
    name: 'Produkt4',
    slug: 'produkt4',
    description: 'Specjalistyczny preparat do zastosowań w ochronie roślin.',
    image: '/produkty/ricarion1l.png',
    category: 'inne'
  }
];

export default function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('wszystkie');

  const categories = [
    { id: 'wszystkie', name: 'Wszystkie', color: 'bg-gray-500' },
    { id: 'herbicydy', name: 'Herbicydy', color: 'bg-blue-500' },
    { id: 'fungicydy', name: 'Fungicydy', color: 'bg-green-500' },
    { id: 'insektycydy', name: 'Insektycydy', color: 'bg-yellow-500' },
    { id: 'aduiwanty', name: 'Adiuwanty', color: 'bg-purple-500' },
    { id: 'inne', name: 'Inne', color: 'bg-red-500' }
  ];

  // Function to get category display info
  const getCategoryInfo = (categoryId: string) => {
    const categoryMap: Record<string, { name: string; bgColor: string; textColor: string; borderColor: string }> = {
      'herbicydy': { 
        name: 'Herbicyd', 
        bgColor: 'bg-blue-500/20', 
        textColor: 'text-blue-400', 
        borderColor: 'border-blue-500/50' 
      },
      'fungicydy': { 
        name: 'Fungicyd', 
        bgColor: 'bg-green-500/20', 
        textColor: 'text-green-400', 
        borderColor: 'border-green-500/50' 
      },
      'insektycydy': { 
        name: 'Insektycyd', 
        bgColor: 'bg-red-500/20', 
        textColor: 'text-red-400', 
        borderColor: 'border-red-500/50' 
      },
      'aduiwanty': { 
        name: 'Adiuwant', 
        bgColor: 'bg-yellow-500/20', 
        textColor: 'text-yellow-400', 
        borderColor: 'border-yellow-500/50' 
      },
      'inne': { 
        name: 'Inne', 
        bgColor: 'bg-purple-500/20', 
        textColor: 'text-purple-400', 
        borderColor: 'border-purple-500/50' 
      }
    };
    return categoryMap[categoryId] || { 
      name: 'Produkt', 
      bgColor: 'bg-gray-500/20', 
      textColor: 'text-gray-400', 
      borderColor: 'border-gray-500/50' 
    };
  };

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'wszystkie' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Determine grid columns based on number of products
  const getGridColumns = () => {
    const count = filteredProducts.length;
    if (count <= 8) {
      return 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4';
    } else if (count <= 16) {
      return 'grid-cols-1 md:grid-cols-2';
    } else {
      return 'grid-cols-1 md:grid-cols-3';
    }
  };

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
        {/* Search and Filter Section */}
        <section className="py-8 mt-16 backdrop-blur-sm bg-gray-800/30">
        <div className="max-w-6xl mx-auto px-4">
          {/* Search Bar */}
          <div className="text-center mb-6">
            <div className="relative max-w-xl mx-auto">
              <input
                type="text"
                placeholder="Wyszukaj produkty..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-5 py-3 text-base border border-gray-600 rounded-full focus:border-[#0066b3] focus:outline-none focus:ring-2 focus:ring-[#0066b3]/50 shadow-lg bg-gray-800/80 backdrop-blur-sm text-white placeholder-gray-400"
              />
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg">
                🔍
              </div>
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                  selectedCategory === category.id 
                    ? `${category.color} text-white shadow-lg shadow-${category.color}/50` 
                    : `bg-gray-800/80 backdrop-blur-sm text-gray-300 border border-gray-600 hover:border-gray-400 hover:bg-gray-700/80`
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Results Count */}
          <div className="text-center">
            <p className="text-sm text-gray-300">
              Znaleziono <span className="font-semibold text-[#0066b3]">{filteredProducts.length}</span> produktów
              {searchTerm && (
                <span> dla &quot;<span className="font-medium text-[#2dbd6e]">{searchTerm}</span>&quot;</span>
              )}
            </p>
          </div>
        </div>
      </section>

        {/* Products Section */}
        <section className="max-w-6xl mx-auto px-4 py-20">
          <div className={`grid ${getGridColumns()} gap-6`}>
            {filteredProducts.map((product) => (
              <div key={product.slug} className="w-full">
                <div className="group bg-gray-800/60 backdrop-blur-md rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#0066b3]/20 border border-gray-700/50 hover:border-[#0066b3]/50">
                  {/* Product Image - No background, just the PNG */}
                  <div className="relative h-[280px] overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center p-3 pl-[43px]">
                      <div className="relative w-full h-full transform group-hover:scale-110 transition-transform duration-300">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-contain drop-shadow-[0_10px_30px_rgba(0,102,179,0.3)]"
                          quality={90}
                        />
                      </div>
                    </div>
                    
                    {/* Category Badge - positioned at bottom of image */}
                    <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 z-10">
                      <span className={`inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border ${getCategoryInfo(product.category).bgColor} ${getCategoryInfo(product.category).textColor} ${getCategoryInfo(product.category).borderColor} backdrop-blur-sm shadow-lg`}>
                        {getCategoryInfo(product.category).name}
                      </span>
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="p-4">
                    <div className="text-center mb-3">
                      <Link 
                        href={{ pathname: `/produkty/${product.slug}`, query: { size: '1l' } }}
                        className="text-sm font-bold text-white mb-2 hover:text-[#0066b3] transition-colors cursor-pointer block"
                      >
                        {product.name}
                      </Link>
                      <p className="text-xs text-gray-300 leading-relaxed">
                        {product.description}
                      </p>
                    </div>

                    {/* Available Sizes */}
                    <div className="mb-3">
                      <div className="text-center text-xs font-semibold text-gray-400 mb-2">Warianty:</div>
                      <div className="flex justify-center gap-1">
                        <span className="bg-[#0066b3]/20 text-[#0066b3] border border-[#0066b3]/30 px-2 py-1 rounded-full text-xs font-semibold">1L</span>
                        <span className="bg-[#0066b3]/20 text-[#0066b3] border border-[#0066b3]/30 px-2 py-1 rounded-full text-xs font-semibold">5L</span>
                        <span className="bg-[#0066b3]/20 text-[#0066b3] border border-[#0066b3]/30 px-2 py-1 rounded-full text-xs font-semibold">20L</span>
                      </div>
                    </div>

                    {/* Action Button */}
                    <div className="text-center">
                      <Link
                        href={{ pathname: `/produkty/${product.slug}`, query: { size: '1l' } }}
                        className="inline-block bg-gradient-to-r from-[#0066b3] to-[#2dbd6e] text-white px-4 py-2 rounded-lg hover:from-[#0052a3] hover:to-[#27a561] transition-all duration-300 transform hover:scale-105 font-semibold text-sm shadow-lg hover:shadow-xl hover:shadow-[#0066b3]/30"
                      >
                        Zobacz szczegóły
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Additional Info Section */}
      <section className="relative bg-gradient-to-r from-[#0066b3] via-[#1a75d1] to-[#2dbd6e] py-12 overflow-hidden">
        {/* Hexagon pattern overlay */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M40 0l34.64 20v40L40 80 5.36 60V20z' fill='none' stroke='%23ffffff' stroke-width='1'/%3E%3C/svg%3E")`,
          backgroundSize: '80px 80px'
        }}></div>
        <div className="max-w-6xl mx-auto px-2 text-center text-white relative z-10">
          <h2 className="text-2xl font-bold mb-4">Potrzebujesz więcej informacji?</h2>
          <p className="text-base mb-6 opacity-90">
            Nasi eksperci pomogą dobrać odpowiednie rozwiązanie dla Twoich potrzeb
          </p>
          <Link 
            href="/kontakt" 
            className="inline-block bg-white text-[#0066b3] px-6 py-3 rounded-lg text-base font-semibold hover:bg-gray-100 hover:text-[#2dbd6e] transition-all duration-300 transform hover:scale-105 shadow-xl"
          >
            Skontaktuj się z nami
          </Link>
        </div>
      </section>
    </div>
  );
}
