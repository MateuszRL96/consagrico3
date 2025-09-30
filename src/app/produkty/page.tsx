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
    name: 'AGRICON 800',
    slug: 'agricon-800',
    description: 'Zaawansowany herbicyd do zwalczania chwastów w uprawach rolnych.',
    image: '/produkty/ricarion1l.png',
    category: 'herbicydy'
  },
  {
    name: 'AGRIEYE',
    slug: 'agrieye',
    description: 'Innowacyjny fungicyd do ochrony roślin przed chorobami grzybowymi.',
    image: '/produkty/ricarion1l.png',
    category: 'fungicydy'
  },
  {
    name: 'OLECON 84 EC',
    slug: 'olecon-84-ec',
    description: 'Adiuwant olejowy poprawiający przyczepność i zwilżenie cieczy użytkowej.',
    image: '/produkty/ricarion1l.png',
    category: 'aduiwanty'
  },
  {
    name: 'RICARION 95 EC',
    slug: 'ricarion-95-ec',
    description: 'Skuteczny insektycyd do zwalczania szkodliwych owadów w uprawach.',
    image: '/produkty/ricarion1l.png',
    category: 'insektycydy'
  },
  {
    name: 'AGRILEON 96 EC',
    slug: 'agrileon-96-ec',
    description: 'Profesjonalny herbicyd o wysokiej skuteczności działania.',
    image: '/produkty/ricarion1l.png',
    category: 'herbicydy'
  },
  {
    name: 'AGRICON MAX',
    slug: 'agricon-max',
    description: 'Maksymalna ochrona roślin przed chwastami i szkodnikami.',
    image: '/produkty/ricarion1l.png',
    category: 'herbicydy'
  },
  {
    name: 'AGRILEUS TURBO',
    slug: 'agrileus-turbo',
    description: 'Turbo działający środek do szybkiej eliminacji problemów.',
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

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'wszystkie' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">

      {/* Search and Filter Section */}
      <section className="py-8 bg-gradient-to-r from-gray-50 to-blue-50 mt-16">
        <div className="max-w-6xl mx-auto px-4">
          {/* Search Bar */}
          <div className="text-center mb-6">
            <div className="relative max-w-xl mx-auto">
              <input
                type="text"
                placeholder="Wyszukaj produkty..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-5 py-3 text-base border border-gray-200 rounded-full focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-100 shadow-sm bg-white"
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
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedCategory === category.id 
                    ? `${category.color} text-white shadow-md` 
                    : `bg-white text-gray-600 border border-gray-200 hover:${category.color} hover:text-white`
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Results Count */}
          <div className="text-center">
            <p className="text-sm text-gray-500">
              Znaleziono <span className="font-semibold text-blue-600">{filteredProducts.length}</span> produktów
              {searchTerm && (
                <span> dla &quot;<span className="font-medium">{searchTerm}</span>&quot;</span>
              )}
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div key={product.slug} className="w-full">
              <div className="group bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                {/* Product Image */}
                <div className="relative h-[175px] bg-gradient-to-br from-blue-50 to-blue-100">
                  <div className="absolute inset-0 flex items-center justify-center p-4">
                    <div className="relative w-56 h-56">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-contain drop-shadow-lg"
                        quality={90}
                      />
                    </div>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-4">
                  <div className="text-center mb-3">
                    <Link 
                      href={{ pathname: `/produkty/${product.slug}`, query: { size: '1l' } }}
                      className="text-lg font-bold text-gray-900 mb-2 hover:text-[#0066b3] transition-colors cursor-pointer"
                    >
                      {product.name}
                    </Link>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {product.description}
                    </p>
                  </div>

                  {/* Available Sizes */}
                  <div className="mb-3">
                    <div className="text-center text-xs font-semibold text-gray-700 mb-2">Warianty:</div>
                    <div className="flex justify-center gap-1">
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-semibold">1L</span>
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-semibold">5L</span>
                      <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs font-semibold">20L</span>
                    </div>
                  </div>

                  {/* Action Button */}
                  <div className="text-center">
                    <Link
                      href={{ pathname: `/produkty/${product.slug}`, query: { size: '1l' } }}
                      className="inline-block bg-gradient-to-r from-[#0066b3] to-[#2dbd6e] text-white px-4 py-2 rounded-lg hover:from-[#0052a3] hover:to-[#27a561] transition-all duration-300 transform hover:scale-105 font-semibold text-sm shadow-md hover:shadow-lg"
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
