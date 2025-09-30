'use client';
import { useState, useEffect } from 'react';

interface ProductCategory {
  id: string;
  name: string;
  color: string;
  textColor: string;
  products: string[];
  icon: string;
}

const categories: ProductCategory[] = [
  {
    id: 'herbicydy',
    name: 'Herbicydy',
    color: '#03A9F4',
    textColor: 'white',
    products: ['OLECON 84 EC', 'RICARION 95 EC', 'AGRILEON 96 EC', 'Herbicyd X', 'Herbicyd Y'],
    icon: '🌱'
  },
  {
    id: 'fungicydy',
    name: 'Fungicydy',
    color: '#10b981',
    textColor: 'white',
    products: ['Fungicyd A', 'Fungicyd B', 'Fungicyd C', 'Fungicyd D', 'Fungicyd E'],
    icon: '🦠'
  },
  {
    id: 'insektycydy',
    name: 'Insektycydy',
    color: '#F59E0B',
    textColor: 'white',
    products: ['Insektycyd A', 'Insektycyd B', 'Insektycyd C', 'Insektycyd D', 'Insektycyd E'],
    icon: '🐛'
  },
  {
    id: 'aduiwanty',
    name: 'Adiuwanty',
    color: '#8B5CF6',
    textColor: 'white',
    products: ['Adiuwant A', 'Adiuwant B', 'Adiuwant C', 'Adiuwant D', 'Adiuwant E'],
    icon: '💧'
  },
  {
    id: 'inne',
    name: 'Inne',
    color: '#F44336',
    textColor: 'white',
    products: ['Nawozy', 'Stymulatory', 'Preparaty', 'Dodatki', 'Inne produkty'],
    icon: '⚗️'
  }
];

export default function ProductWheel() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [continuousRotation, setContinuousRotation] = useState(0);
  const [isClient, setIsClient] = useState(false);

  // Upewnij się, że animacja działa tylko po stronie klienta
  useEffect(() => {
    setIsClient(true);
    const interval = setInterval(() => {
      setContinuousRotation(prev => prev + 0.1); // Bardzo wolny obrót - 0.1 stopnia na 16ms (60fps)
    }, 16); // 60 FPS dla płynnej animacji

    return () => clearInterval(interval);
  }, []);

  // Zapobiegaj hydratacji - renderuj tylko po stronie klienta
  if (!isClient) {
    return (
      <div className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
        <div className="w-full relative z-10">
          <div className="text-center mb-16 px-4">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Nasze Kategorie Produktów</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Kompleksowa oferta rozwiązań chemicznych dla różnych potrzeb
            </p>
          </div>
          <div className="flex justify-center">
            <div className="w-[650px] h-[650px] bg-gray-200 rounded-full flex items-center justify-center">
              <p className="text-gray-500">Ładowanie...</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const getCategoryBackground = (categoryId: string) => {
    const backgrounds = {
      'herbicydy': '/plant2.jpg',
      'fungicydy': '/plant2.jpg',
      'insektycydy': '/plant2.jpg',
      'aduiwanty': '/przykladwygladu.jpeg',
      'inne': '/plant2.jpg'
    };
    return backgrounds[categoryId as keyof typeof backgrounds] || '/plant2.jpg';
  };

  const getCategoryDescription = (categoryId: string) => {
    const descriptions = {
      'herbicydy': 'Skuteczne środki do zwalczania chwastów w uprawach rolnych. Nasze herbicydy zapewniają kompleksową ochronę przed niepożądanymi roślinami.',
      'fungicydy': 'Ochrona roślin przed chorobami grzybowymi. Nowoczesne fungicydy o wysokiej skuteczności i bezpieczeństwie stosowania.',
      'insektycydy': 'Zwalczanie szkodliwych owadów w uprawach. Skuteczne preparaty chroniące rośliny przed szkodnikami.',
      'aduiwanty': 'Substancje wspomagające zwiększające skuteczność środków ochrony roślin. Poprawiają wchłanianie i działanie preparatów.',
      'inne': 'Szeroka gama produktów chemicznych dla różnych potrzeb. Nawozy, stymulatory i specjalistyczne preparaty.'
    };
    return descriptions[categoryId as keyof typeof descriptions] || 'Wysokiej jakości produkty chemiczne dla Twoich potrzeb.';
  };

  const handleCategoryClick = (index: number) => {
    if (index === activeCategory) return;
    
    setActiveCategory(index);
  };

  const getCategoryPosition = (index: number) => {
    const angle = (index * 72) - (isClient ? continuousRotation : 0); // 360/5 = 72 stopnie
    const radius = 220;
    const centerX = 310;
    const centerY = 310;
    
    const x = centerX + radius * Math.cos((angle * Math.PI) / 180);
    const y = centerY + radius * Math.sin((angle * Math.PI) / 180);
    
    return { 
      x: Math.round(x * 100) / 100, 
      y: Math.round(y * 100) / 100 
    };
  };

  return (
    <div className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-400/20 via-purple-400/20 to-green-400/20"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-300/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-green-300/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-300/30 rounded-full blur-3xl"></div>
      </div>
      
      <div className="w-full relative z-10">
        <div className="text-center mb-16 px-4">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Nasze Kategorie Produktów</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Kompleksowa oferta rozwiązań chemicznych dla różnych potrzeb
          </p>
        </div>

        {/* Wheel Container */}
        <div className="flex flex-col lg:flex-row items-center ml-50 min-h-[800px] py-20 pr-20">
          
          {/* Interactive Wheel */}
          <div className="relative w-[650px] h-[650px] mb-8 lg:mb-0 -ml-[90px] pr-[50px]">

            {/* Background Image */}
            <div 
              className="absolute inset-0 rounded-full overflow-hidden"
              style={{
                backgroundImage: `url('/jedenpiec (1).jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            >
              {/* Category Sectors */}
              {categories.map((category, index) => {
                const position = getCategoryPosition(index);
                const isActive = index === activeCategory;
                
                return (
                  <div
                    key={category.id}
                    className={`absolute w-40 h-40 rounded-full shadow-lg cursor-pointer hover:scale-105 transition-transform duration-300 ${
                      isActive ? 'ring-4 ring-white ring-opacity-80' : ''
                    }`}
                    style={{
                      backgroundColor: category.color,
                      left: `${position.x - 80 + 15}px`,
                      top: `${position.y - 80 + 10}px`,
                      zIndex: 20
                    }}
                    onClick={() => handleCategoryClick(index)}
                  >
                    <div className="flex flex-col items-center justify-center h-full p-6 relative overflow-hidden rounded-full">
                      {/* Background Image */}
                      <div 
                        className="absolute inset-0 bg-cover bg-center opacity-20"
                        style={{
                          backgroundImage: `url(${getCategoryBackground(category.id)})`
                        }}
                      />
                      {/* Content */}
                      <div className="relative z-10">
                        <div className="text-5xl mb-3">{category.icon}</div>
                        <h3 className={`text-lg font-bold text-center ${
                          category.textColor === 'white' ? 'text-white' : 'text-gray-800'
                        }`}>
                          {category.name}
                        </h3>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

          {/* Active Category Details */}
          <div className="w-full lg:w-[600px] lg:ml-8">
            <div className="space-y-6">
              {/* SEKCJA 1: Tytuł kategorii */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div 
                    className="w-16 h-16 rounded-lg overflow-hidden shadow-lg border-2 border-gray-300"
                    style={{
                      backgroundImage: `url(${getCategoryBackground(categories[activeCategory].id)})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  >
    
                  </div>
                </div>
                
                <div className="flex-1">
                  <h2 className="text-2xl font-bold mb-2 text-gray-800">
                    {categories[activeCategory].name}
                  </h2>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {getCategoryDescription(categories[activeCategory].id)}
                  </p>
                </div>
              </div>

              {/* SEKCJA 3: Lista produktów z odnośnikami */}
              <div>
                <h4 className="text-sm font-semibold text-gray-800 mb-3 flex items-center">
                  <span className="mr-2">📦</span>
                  Nasze produkty:
                </h4>
                <div className="space-y-2">
                  {categories[activeCategory].products.map((product, index) => (
                    <div 
                      key={index}
                      className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-all duration-300 cursor-pointer border border-gray-200 bg-white"
                      onClick={() => {
                        // Przejście do strony produktu
                        const productSlug = product.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
                        window.location.href = `/produkty/${productSlug}`;
                      }}
                    >
                      <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center text-sm">
                        {index === 0 ? '🌱' : index === 1 ? '💧' : index === 2 ? '⚗️' : index === 3 ? '🔬' : '📋'}
                      </div>
                      <span className="text-gray-700 text-sm font-medium flex-1">{product}</span>
                      <div className="text-gray-400 text-sm">→</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Category Navigation Dots */}
        <div className="flex justify-center space-x-4 mt-8">
          {categories.map((category, index) => (
            <button
              key={category.id}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                index === activeCategory 
                  ? 'scale-125 shadow-lg' 
                  : 'hover:scale-110'
              }`}
              style={{ 
                backgroundColor: index === activeCategory ? category.color : '#d1d5db',
                boxShadow: index === activeCategory ? `0 0 20px ${category.color}40` : 'none'
              }}
              onClick={() => handleCategoryClick(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
