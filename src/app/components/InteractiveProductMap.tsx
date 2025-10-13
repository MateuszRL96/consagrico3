'use client';
import { useState } from 'react';
import Image from 'next/image';

const regions = [
  {
    id: 'europe',
    name: 'Europa',
    countries: 12,
    products: ['Herbicydy', 'Fungicydy', 'Insektycydy'],
    color: 'from-blue-500 to-cyan-500',
    icon: '🇪🇺',
    position: { top: '25%', left: '48%' }
  },
  {
    id: 'asia',
    name: 'Azja',
    countries: 3,
    products: ['Regulatory wzrostu', 'Nawozy'],
    color: 'from-green-500 to-emerald-500',
    icon: '🌏',
    position: { top: '35%', left: '70%' }
  },
  {
    id: 'americas',
    name: 'Ameryki',
    countries: 1,
    products: ['Herbicydy', 'Fungicydy'],
    color: 'from-purple-500 to-pink-500',
    icon: '🌎',
    position: { top: '40%', left: '20%' }
  }
];

export default function InteractiveProductMap() {
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
  const [hoveredRegion, setHoveredRegion] = useState<string | null>(null);

  const activeRegion = regions.find(r => r.id === (selectedRegion || hoveredRegion));

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-800 text-white relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-500 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">Globalna obecność</h2>
          <p className="text-xl text-gray-400">
            Nasze produkty docierają do rolników na całym świecie
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Map */}
          <div className="relative">
            <div className="relative aspect-video bg-gray-800 rounded-2xl overflow-hidden border border-gray-700">
              {/* World map image */}
              <Image
                src="/obrazy/MapChart_Map (1).png"
                alt="Mapa świata"
                fill
                className="object-contain opacity-40"
              />

              {/* Interactive regions */}
              {regions.map((region) => (
                <div
                  key={region.id}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer z-10"
                  style={region.position}
                  onMouseEnter={() => setHoveredRegion(region.id)}
                  onMouseLeave={() => setHoveredRegion(null)}
                  onClick={() => setSelectedRegion(region.id === selectedRegion ? null : region.id)}
                >
                  {/* Pulse effect - only when not selected */}
                  {selectedRegion !== region.id && (
                    <div className={`absolute inset-0 w-16 h-16 -left-8 -top-8 rounded-full bg-gradient-to-r ${region.color} opacity-30 animate-pulse`} />
                  )}
                  
                  {/* Marker */}
                  <div className={`relative w-16 h-16 rounded-full bg-gradient-to-r ${region.color} flex items-center justify-center text-3xl transform transition-all duration-300 ${
                    (hoveredRegion === region.id || selectedRegion === region.id)
                      ? 'scale-125 shadow-2xl ring-4 ring-white/30'
                      : 'scale-100'
                  }`}>
                    {region.icon}
                  </div>

                  {/* Tooltip */}
                  {hoveredRegion === region.id && selectedRegion !== region.id && (
                    <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 bg-gray-900 px-4 py-2 rounded-lg whitespace-nowrap text-sm font-semibold border border-gray-700 z-20">
                      {region.name}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Info Panel */}
          <div className="flex flex-col h-full">
            {/* Main info card with fixed height */}
            <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700 flex-grow h-[420px] flex flex-col justify-between overflow-y-auto">
              {activeRegion ? (
                <div key={activeRegion.id} className="animate-fade-in flex flex-col h-full justify-center">
                  <div className={`inline-block bg-gradient-to-r ${activeRegion.color} px-4 py-2 rounded-lg text-2xl mb-4 w-fit`}>
                    {activeRegion.icon}
                  </div>
                  <h3 className="text-4xl font-bold mb-4">{activeRegion.name}</h3>
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center gap-3">
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${activeRegion.color} flex items-center justify-center font-bold text-xl`}>
                        {activeRegion.countries}
                      </div>
                      <div>
                        <div className="text-sm text-gray-400">Kraje</div>
                        <div className="font-semibold">Aktywna dystrybucja</div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-3 text-gray-300">Dostępne produkty:</h4>
                    <div className="flex flex-wrap gap-2">
                      {activeRegion.products.map((product, index) => (
                        <span
                          key={index}
                          className="bg-gray-700 px-4 py-2 rounded-lg text-sm font-medium"
                        >
                          {product}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center flex flex-col justify-center h-full">
                  <div className="text-6xl mb-4">🌍</div>
                  <h3 className="text-2xl font-bold mb-4">Wybierz region</h3>
                  <p className="text-gray-400">
                    Kliknij na marker na mapie, aby zobaczyć szczegóły dystrybucji w danym regionie
                  </p>
                </div>
              )}
            </div>

            {/* Stats - always at the bottom */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="bg-gray-800 rounded-xl p-6 text-center border border-gray-700">
                <div className="text-3xl font-bold text-[#0066b3] mb-1">16</div>
                <div className="text-sm text-gray-400">Krajów</div>
              </div>
              <div className="bg-gray-800 rounded-xl p-6 text-center border border-gray-700">
                <div className="text-3xl font-bold text-[#2dbd6e] mb-1">3</div>
                <div className="text-sm text-gray-400">Kontynenty</div>
              </div>
              <div className="bg-gray-800 rounded-xl p-6 text-center border border-gray-700">
                <div className="text-3xl font-bold text-purple-500 mb-1">100+</div>
                <div className="text-sm text-gray-400">Partnerzy</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}