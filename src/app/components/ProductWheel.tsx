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
    name: 'HERBICYDY',
    color: 'transparent',
    textColor: 'white',
    products: [
      'AGRICON 800', 'AGRILEON 96 EC', 'AGRICON MAX', 'AGRILEUS TURBO', 'AGRIEYE',
      'OLECON 84 EC', 'RICARION 95 EC', 'HERBICYD ALFA', 'HERBICYD BETA', 'HERBICYD GAMMA',
      'HERBICYD DELTA', 'HERBICYD EPSILON', 'HERBICYD ZETA', 'HERBICYD ETA', 'HERBICYD THETA',
      'HERBICYD IOTA', 'HERBICYD KAPPA', 'HERBICYD LAMBDA', 'HERBICYD MU', 'HERBICYD NU'
    ],
    icon: ''
  },
  {
    id: 'fungicydy',
    name: 'FUNGICYDY',
    color: 'transparent',
    textColor: 'white',
    products: [
      'FUNGICYD ALFA', 'FUNGICYD BETA', 'FUNGICYD GAMMA', 'FUNGICYD DELTA', 'FUNGICYD EPSILON',
      'FUNGICYD ZETA', 'FUNGICYD ETA', 'FUNGICYD THETA', 'FUNGICYD IOTA', 'FUNGICYD KAPPA',
      'FUNGICYD LAMBDA', 'FUNGICYD MU', 'FUNGICYD NU', 'FUNGICYD XI', 'FUNGICYD OMICRON',
      'FUNGICYD PI', 'FUNGICYD RHO', 'FUNGICYD SIGMA', 'FUNGICYD TAU', 'FUNGICYD UPSILON'
    ],
    icon: ''
  },
  {
    id: 'insektycydy',
    name: 'INSEKTYCYDY',
    color: 'transparent',
    textColor: 'white',
    products: [
      'INSEKTYCYD ALFA', 'INSEKTYCYD BETA', 'INSEKTYCYD GAMMA', 'INSEKTYCYD DELTA', 'INSEKTYCYD EPSILON',
      'INSEKTYCYD ZETA', 'INSEKTYCYD ETA', 'INSEKTYCYD THETA', 'INSEKTYCYD IOTA', 'INSEKTYCYD KAPPA',
      'INSEKTYCYD LAMBDA', 'INSEKTYCYD MU', 'INSEKTYCYD NU', 'INSEKTYCYD XI', 'INSEKTYCYD OMICRON',
      'INSEKTYCYD PI', 'INSEKTYCYD RHO', 'INSEKTYCYD SIGMA', 'INSEKTYCYD TAU', 'INSEKTYCYD UPSILON'
    ],
    icon: ''
  },
  {
    id: 'aduiwanty',
    name: 'ADIUWANTY',
    color: 'transparent',
    textColor: 'white',
    products: [
      'OLECON 84 EC', 'ADIUWANT ALFA', 'ADIUWANT BETA', 'ADIUWANT GAMMA', 'ADIUWANT DELTA',
      'ADIUWANT EPSILON', 'ADIUWANT ZETA', 'ADIUWANT ETA', 'ADIUWANT THETA', 'ADIUWANT IOTA',
      'ADIUWANT KAPPA', 'ADIUWANT LAMBDA', 'ADIUWANT MU', 'ADIUWANT NU', 'ADIUWANT XI',
      'ADIUWANT OMICRON', 'ADIUWANT PI', 'ADIUWANT RHO', 'ADIUWANT SIGMA', 'ADIUWANT TAU'
    ],
    icon: ''
  },
  {
    id: 'inne',
    name: 'INNE',
    color: 'transparent',
    textColor: 'white',
    products: [
      'NAWÓZ ALFA', 'NAWÓZ BETA', 'STYMULATOR GAMMA', 'STYMULATOR DELTA', 'PREPARAT EPSILON',
      'PREPARAT ZETA', 'DODATEK ETA', 'DODATEK THETA', 'DODATEK IOTA', 'DODATEK KAPPA',
      'DODATEK LAMBDA', 'DODATEK MU', 'DODATEK NU', 'DODATEK XI', 'DODATEK OMICRON',
      'DODATEK PI', 'DODATEK RHO', 'DODATEK SIGMA', 'DODATEK TAU', 'DODATEK UPSILON'
    ],
    icon: ''
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
 

  const getCategoryBackground = (categoryId: string) => {
    const backgrounds = {
      'herbicydy': '/tloetykiety/niebieski.jpeg',
      'fungicydy': '/tloetykiety/zielony.jpeg',
      'insektycydy': '/tloetykiety/czerowny.jpeg',
      'aduiwanty': '/tloetykiety/zolty.jpeg',
      'inne': '/tloetykiety/fioletowy.jpeg'
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
    const radius = 176; // Zmniejszony promień proporcjonalnie do nowego rozmiaru
    const centerX = 260; // Zmniejszone centrum proporcjonalnie
    const centerY = 260; // Zmniejszone centrum proporcjonalnie
    
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
        
        {/* Wheel Container */}
        <div className="flex flex-col lg:flex-row items-center ml-50 min-h-[800px] py-20 pr-20 -mt-[110px]">
          
          {/* Interactive Wheel */}
          <div className="relative w-[520px] h-[520px] mb-8 lg:mb-0 -ml-[140px] pr-[50px]">

            {/* Background Image */}
            <div 
              className="absolute inset-0 rounded-full overflow-hidden"
              style={{
                backgroundImage: `url('/aaa11.jpeg')`,
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
                      left: `${position.x - 80 + 12 - 20 + 8}px`,
                      top: `${position.y - 80 + 8 - 10}px`,
                      zIndex: 20
                    }}
                    onClick={() => handleCategoryClick(index)}
                  >
                    <div className="flex flex-col items-center justify-center h-full p-4 relative overflow-hidden rounded-full">
                      {/* Background Image */}
                      <div 
                        className="absolute inset-0 bg-cover bg-center opacity-80"
                        style={{
                          backgroundImage: `url(${getCategoryBackground(category.id)})`
                        }}
                      />
                      {/* Content */}
                      <div className="relative z-10">
                        <h3 className={`text-base font-bold text-center ${
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
          <div className="w-full lg:w-[600px] lg:ml-8" style={{ marginLeft: '120px', marginTop: '-20px' }}>
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
                <h4 className="text-sm font-semibold text-gray-800 mb-4 flex items-center">
                  <span className="mr-2">📦</span>
                  Nasze produkty:
                </h4>
                <div className="grid grid-cols-2 gap-2 max-h-80 overflow-y-auto">
                  {categories[activeCategory].products.map((product, index) => (
                    <div 
                      key={index}
                      className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-50 transition-all duration-300 cursor-pointer border border-gray-200 bg-white"
                      onClick={() => {
                        // Przejście do strony produktu
                        const productSlug = product.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
                        window.location.href = `/produkty/${productSlug}`;
                      }}
                    >
                      <div className="w-6 h-6 rounded bg-gray-100 flex items-center justify-center text-xs">
                        {index + 1}
                      </div>
                      <span className="text-gray-700 text-xs font-medium flex-1 truncate">{product}</span>
                      <div className="text-gray-400 text-xs">→</div>
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
