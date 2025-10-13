'use client';
import { useState } from 'react';
import Image from 'next/image';

const countries = [
  { code: 'GB', name: 'Wielka Brytania', flag: '🇬🇧', position: { top: '32%', left: '49%' } },
  { code: 'ES', name: 'Hiszpania', flag: '🇪🇸', position: { top: '40%', left: '48%' } },
  { code: 'US', name: 'USA', flag: '🇺🇸', position: { top: '38%', left: '18%' } },
  { code: 'UA', name: 'Ukraina', flag: '🇺🇦', position: { top: '33%', left: '58%' } },
  { code: 'DE', name: 'Niemcy', flag: '🇩🇪', position: { top: '32%', left: '52%' } },
  { code: 'FR', name: 'Francja', flag: '🇫🇷', position: { top: '36%', left: '50%' } },
  { code: 'HU', name: 'Węgry', flag: '🇭🇺', position: { top: '36%', left: '55%' } },
  { code: 'MD', name: 'Mołdawia', flag: '🇲🇩', position: { top: '36%', left: '58%' } },
  { code: 'RS', name: 'Serbia', flag: '🇷🇸', position: { top: '39%', left: '55%' } },
  { code: 'RO', name: 'Rumunia', flag: '🇷🇴', position: { top: '37%', left: '57%' } },
  { code: 'KZ', name: 'Kazachstan', flag: '🇰🇿', position: { top: '37%', left: '70%' } },
  { code: 'RU', name: 'Rosja', flag: '🇷🇺', position: { top: '28%', left: '65%' } },
  { code: 'UZ', name: 'Uzbekistan', flag: '🇺🇿', position: { top: '40%', left: '68%' } },
  { code: 'IE', name: 'Irlandia', flag: '🇮🇪', position: { top: '32%', left: '47%' } },
  { code: 'TR', name: 'Turcja', flag: '🇹🇷', position: { top: '42%', left: '59%' } },
  { code: 'LT', name: 'Litwa', flag: '🇱🇹', position: { top: '30%', left: '56%' } }
];

export default function WorldMap() {
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const [hoveredCountry, setHoveredCountry] = useState<string | null>(null);

  const handleCountryClick = (code: string) => {
    setSelectedCountry(code === selectedCountry ? null : code);
  };

  return (
    <div className="w-full">
      {/* World Map with Overlay */}
      <div className="relative w-full bg-white overflow-hidden">
        {/* Map Image - full width */}
        <div className="relative w-full h-[600px]">
          <Image 
            src="/obrazy/MapChart_Map (1).png" 
            alt="World Map"
            fill
            className="object-cover"
          />
          
          {/* Dark overlay for better text visibility */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50"></div>

          {/* Country Markers on Map */}
          {countries.map((country) => {
            // Calculate adjusted position with special handling for Lithuania and Ireland
            const topOffset = (country.code === 'LT' || country.code === 'IE') ? '75px' : '70px';
            const adjustedTop = `calc(${country.position.top} - ${topOffset})`;
            const adjustedLeft = `calc(${country.position.left} + 15px)`;
            
            return (
              <div
                key={`marker-${country.code}`}
                className={`absolute transition-all duration-500 ${
                  selectedCountry === country.code ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
                }`}
                style={{
                  top: adjustedTop,
                  left: adjustedLeft,
                  transform: 'translate(-50%, -50%)'
                }}
              >
                {/* Pulsing outer ring */}
                <div className="absolute inset-0 w-16 h-16 bg-[#2dbd6e] rounded-full animate-ping opacity-75"></div>
                
                {/* Main marker */}
                <div className="relative w-16 h-16 bg-gradient-to-br from-[#2dbd6e] to-[#27a561] rounded-full shadow-2xl flex items-center justify-center border-4 border-white">
                  <span className="text-3xl">{country.flag}</span>
                </div>
                
                {/* Country name tooltip */}
                <div className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 bg-black/90 text-white px-3 py-1.5 rounded-lg text-sm font-bold whitespace-nowrap shadow-xl">
                  {country.name}
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-b-4 border-transparent border-b-black/90"></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Countries Grid Overlay - positioned at bottom of map */}
        <div className="absolute bottom-0 left-0 right-0 p-6 pb-8">
          <h3 className="text-xl font-bold text-white mb-4 text-center flex items-center justify-center gap-2">
            <span>🌍</span>
            Kraje Współpracy
          </h3>
          <div className="grid grid-cols-4 md:grid-cols-8 gap-2">
            {countries.map((country) => (
              <button
                key={country.code}
                onClick={() => handleCountryClick(country.code)}
                onMouseEnter={() => setHoveredCountry(country.code)}
                onMouseLeave={() => setHoveredCountry(null)}
                className={`
                  relative p-2 rounded-lg border-2 transition-all duration-200
                  ${selectedCountry === country.code 
                    ? 'bg-[#2dbd6e] border-[#2dbd6e] scale-105' 
                    : hoveredCountry === country.code
                    ? 'bg-[#0066b3]/80 border-[#0066b3] scale-105'
                    : 'bg-white/10 border-white/30 hover:border-[#0066b3] hover:bg-white/20'
                  }
                `}
              >
                <div className="text-center">
                  <div className="text-xl mb-1">{country.flag}</div>
                  <div className={`text-[9px] font-medium leading-tight ${
                    selectedCountry === country.code ? 'text-white' : 'text-white/90'
                  }`}>
                    {country.name}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Stats - below the map */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-3 gap-4 mt-6">
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg p-4 text-white text-center shadow-lg">
            <div className="text-2xl font-bold">{countries.length}</div>
            <div className="text-xs opacity-90">Krajów</div>
          </div>
          <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-lg p-4 text-white text-center shadow-lg">
            <div className="text-2xl font-bold">3</div>
            <div className="text-xs opacity-90">Kontynenty</div>
          </div>
          <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg p-4 text-white text-center shadow-lg">
            <div className="text-2xl font-bold">100+</div>
            <div className="text-xs opacity-90">Partnerów</div>
          </div>
        </div>
      </div>
    </div>
  );
}