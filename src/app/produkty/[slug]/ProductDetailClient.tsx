'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export type ProductMeta = {
  title: string;
  image: string;
  image1L: string;
  image5L: string;
  image20L: string;
};

type Props = {
  initialSize: string;
  meta: ProductMeta;
  slug: string;
};

export function ProductDetailClient({ initialSize, meta, slug }: Props) {
  const [selectedSize, setSelectedSize] = useState(initialSize);

  const getCurrentImage = () => {
    if (selectedSize === '1l') return meta.image1L;
    if (selectedSize === '5l') return meta.image5L;
    if (selectedSize === '20l') return meta.image20L;
    return meta.image;
  };

  const getSizeText = () => {
    if (selectedSize === '1l') return '1 L';
    if (selectedSize === '5l') return '5 L';
    if (selectedSize === '20l') return '20 L';
    return '1 L';
  };

  const getSizeInfo = () => {
    const sizeInfo = {
      '1l': {
        capacity: '1 L',
        description: 'Idealny do małych zastosowań i testów',
        price: 'Cena za 1L'
      },
      '5l': {
        capacity: '5 L',
        description: 'Ekonomiczny dla średnich zastosowań',
        price: 'Cena za 5L'
      },
      '20l': {
        capacity: '20 L',
        description: 'Najlepszy stosunek ceny do ilości',
        price: 'Cena za 20L'
      }
    };
    return sizeInfo[selectedSize as keyof typeof sizeInfo] || sizeInfo['1l'];
  };

  const getPdfLinks = () => {
    const productPdfs: Record<string, { etykieta: string; karta: string }> = {
      'olecon-84-ec': {
        etykieta: '/pedeefy/OLECON 84 EC_etykieta.pdf',
        karta: '/pedeefy/SDS_OLECON 84 EC.pdf'
      },
      'ricarion-95-ec': {
        etykieta: '/pedeefy/RICARION 95 EC_etykieta.pdf',
        karta: '/pedeefy/RICARION 95 EC _SDS.pdf'
      },
      'agrileon-96-ec': {
        etykieta: '/pedeefy/AGRILEON 96 EC_etykieta.pdf',
        karta: '/pedeefy/MSDS_ AGRILEON 96 EC_PL.pdf'
      },
      'agricon-max': {
        etykieta: '/pedeefy/OLECON 84 EC_etykieta.pdf',
        karta: '/pedeefy/SDS_OLECON 84 EC.pdf'
      },
      'agrileus-turbo': {
        etykieta: '/pedeefy/OLECON 84 EC_etykieta.pdf',
        karta: '/pedeefy/SDS_OLECON 84 EC.pdf'
      },
      'agrileus-power': {
        etykieta: '/pedeefy/OLECON 84 EC_etykieta.pdf',
        karta: '/pedeefy/SDS_OLECON 84 EC.pdf'
      },
      'polimery-silikonowe': {
        etykieta: '/pedeefy/OLECON 84 EC_etykieta.pdf',
        karta: '/pedeefy/SDS_OLECON 84 EC.pdf'
      },
      'roztwr-soli-sodowej': {
        etykieta: '/pedeefy/OLECON 84 EC_etykieta.pdf',
        karta: '/pedeefy/SDS_OLECON 84 EC.pdf'
      },
      'trojsiloksan-75': {
        etykieta: '/pedeefy/OLECON 84 EC_etykieta.pdf',
        karta: '/pedeefy/SDS_OLECON 84 EC.pdf'
      },
      'etoksylowany-alkohol-90': {
        etykieta: '/pedeefy/OLECON 84 EC_etykieta.pdf',
        karta: '/pedeefy/SDS_OLECON 84 EC.pdf'
      },
      'estry-metylowe-825': {
        etykieta: '/pedeefy/OLECON 84 EC_etykieta.pdf',
        karta: '/pedeefy/SDS_OLECON 84 EC.pdf'
      },
      'trisiloksan-modyfikowany': {
        etykieta: '/pedeefy/OLECON 84 EC_etykieta.pdf',
        karta: '/pedeefy/SDS_OLECON 84 EC.pdf'
      },
      'adiuwant-do-upraw-rolniczych': {
        etykieta: '/pedeefy/OLECON 84 EC_etykieta.pdf',
        karta: '/pedeefy/SDS_OLECON 84 EC.pdf'
      },
      'koncentrat-emulsyjny': {
        etykieta: '/pedeefy/OLECON 84 EC_etykieta.pdf',
        karta: '/pedeefy/SDS_OLECON 84 EC.pdf'
      },
      'adiuwant-do-fungicydow-miedziowych': {
        etykieta: '/pedeefy/OLECON 84 EC_etykieta.pdf',
        karta: '/pedeefy/SDS_OLECON 84 EC.pdf'
      },
      'produkt1': {
        etykieta: '/pedeefy/OLECON 84 EC_etykieta.pdf',
        karta: '/pedeefy/SDS_OLECON 84 EC.pdf'
      },
      'produkt2': {
        etykieta: '/pedeefy/OLECON 84 EC_etykieta.pdf',
        karta: '/pedeefy/SDS_OLECON 84 EC.pdf'
      },
      'produkt3': {
        etykieta: '/pedeefy/OLECON 84 EC_etykieta.pdf',
        karta: '/pedeefy/SDS_OLECON 84 EC.pdf'
      },
      'produkt4': {
        etykieta: '/pedeefy/OLECON 84 EC_etykieta.pdf',
        karta: '/pedeefy/SDS_OLECON 84 EC.pdf'
      }
    };
    
    return productPdfs[slug] ?? {
      etykieta: '/pedeefy/OLECON 84 EC_etykieta.pdf',
      karta: '/pedeefy/SDS_OLECON 84 EC.pdf'
    };
  };

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Animated Hexagon Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l25.98 15v30L30 60 4.02 45V15z' fill='none' stroke='%230066b3' stroke-width='1'/%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      {/* Floating Shapes */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-[#0066b3]/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#2dbd6e]/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>

      {/* Main Content */}
      <section className="max-w-6xl mx-auto px-4 py-12 pt-24 relative z-10">
        {/* Back Button */}
        <Link 
          href="/produkty" 
          className="inline-flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors mb-8 group"
        >
          <svg 
            className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <span className="font-medium">Powrót do produktów</span>
        </Link>

        <div className="grid lg:grid-cols-[35%_65%] gap-16">
          {/* Product Image */}
          <div className="flex flex-col items-start justify-center -ml-6">
            <div className="relative w-96 h-96 mb-6">
              <Image
                src={getCurrentImage()}
                alt={meta.title}
                fill
                className="object-contain"
                quality={90}
              />
        </div>

            {/* Size Selection */}
                  <div style={{ marginLeft: '20px' }}>
              <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">Wybierz wariant:</h3>
              <div className="flex gap-4 justify-center">
                <button 
                  onClick={() => setSelectedSize('1l')} 
                  className={`px-4 py-2 rounded-lg border-2 transition-colors ${selectedSize === '1l' ? 'bg-[#0066b3] text-white border-[#0066b3]' : 'border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400'}`}
                >
                  1L
                </button>
                <button 
                  onClick={() => setSelectedSize('5l')} 
                  className={`px-4 py-2 rounded-lg border-2 transition-colors ${selectedSize === '5l' ? 'bg-[#0066b3] text-white border-[#0066b3]' : 'border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400'}`}
                >
                  5L
                </button>
                <button 
                  onClick={() => setSelectedSize('20l')} 
                  className={`px-4 py-2 rounded-lg border-2 transition-colors ${selectedSize === '20l' ? 'bg-[#0066b3] text-white border-[#0066b3]' : 'border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400'}`}
                >
                  20L
                </button>
        </div>
                
              {/* PDF Downloads */}
              <div className="mt-6">
                <div className="flex gap-4 justify-center">
            <a 
              href={getPdfLinks().etykieta}
              target="_blank"
              rel="noopener noreferrer"
                    className="inline-flex items-center bg-blue-500 text-white px-3 py-2 rounded-lg hover:bg-blue-600 transition-colors text-xs font-semibold"
                  >
                    <span className="mr-1">📄</span>
                    Etykieta
            </a>
            <a 
              href={getPdfLinks().karta}
              target="_blank"
              rel="noopener noreferrer"
                    className="inline-flex items-center bg-green-500 text-white px-3 py-2 rounded-lg hover:bg-green-600 transition-colors text-xs font-semibold"
                  >
                    <span className="mr-1">📋</span>
                    Karta Charakterystyki
            </a>
          </div>
        </div>
              </div>
              </div>
            
          {/* Product Info */}
          <div className="space-y-6 ml-12 mt-10">
          <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">{meta.title}</h2>
              <p className="text-sm text-gray-700 leading-relaxed">
                Wysokiej jakości produkt chemiczny do zastosowań profesjonalnych w rolnictwie.
              </p>
                </div>
                
            {/* Product Details */}
                <div className="space-y-6">
                    <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Podstawowe informacje</h3>
                <div className="space-y-2 text-sm text-gray-700">
                  <div><span className="font-medium text-[#0066b3]">UFI:</span> TH00-Y0W5-D00X-SY0S</div>
                  <div><span className="font-medium text-[#0066b3]">Wybrany wariant:</span> {getSizeText()}</div>
                  <div><span className="font-medium text-[#0066b3]">Typ produktu:</span> Adiuwant olejowy</div>
                  <div><span className="font-medium text-[#0066b3]">Opis wariantu:</span> {getSizeInfo().description}</div>
          </div>
              </div>
                  
                <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Właściwości</h3>
                <ul className="list-disc list-inside text-sm text-gray-700 space-y-2">
                  <li>Zwiększa przyczepność cieczy użytkowej</li>
                  <li>Poprawia zwilżenie powierzchni roślin</li>
                  <li>Redukuje znoszenie cieczy</li>
                  <li>Zwiększa penetrację środków ochrony roślin</li>
                </ul>
                    </div>
                  
                <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Bezpieczeństwo</h3>
                <p className="text-sm text-gray-700 mb-2">Stosować rękawice ochronne i odzież ochronną. Unikać kontaktu ze skórą i oczami.</p>
                <p className="text-xs text-gray-600">W przypadku kontaktu ze skórą przemyć dużą ilością wody. W przypadku kontaktu z oczami płukać przez 15 minut.</p>
          </div>
              </div>

            {/* Contact Button */}
            <div className="pt-6">
              <Link href="/kontakt" className="inline-block bg-[#2dbd6e] text-white px-8 py-3 rounded-lg hover:bg-[#27a561] transition-colors font-semibold">
                Zapytaj o ofertę
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Karta Charakterystyki - Menu */}
      <section className="bg-gray-50 py-16 mt-12 relative z-10">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-12">
            Karta Charakterystyki - Najważniejsze Informacje
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Sekcja 1: Identyfikacja */}
            <div className="bg-white backdrop-blur-md rounded-lg p-6 shadow-xl hover:shadow-2xl hover:shadow-[#0066b3]/20 transition-shadow border border-gray-200">
              <div className="text-center mb-5">
                <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">🔍</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Identyfikacja</h3>
              </div>
              <div className="space-y-2.5 text-sm text-gray-700">
                <div><span className="font-medium text-[#0066b3]">Nazwa:</span> {meta.title}</div>
                <div><span className="font-medium text-[#0066b3]">UFI:</span> TH00-Y0W5-D00X-SY0S</div>
                <div><span className="font-medium text-[#0066b3]">Typ:</span> Adiuwant olejowy</div>
                <div><span className="font-medium text-[#0066b3]">Producent:</span> Consagrico</div>
              </div>
            </div>

            {/* Sekcja 2: Skład */}
            <div className="bg-white backdrop-blur-md rounded-lg p-6 shadow-xl hover:shadow-2xl hover:shadow-[#2dbd6e]/20 transition-shadow border border-gray-200">
              <div className="text-center mb-5">
                <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">🧪</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Skład</h3>
              </div>
              <div className="space-y-2.5 text-sm text-gray-700">
                <div><span className="font-medium text-[#2dbd6e]">Substancja czynna:</span> Olej roślinny</div>
                <div><span className="font-medium text-[#2dbd6e]">Stężenie:</span> 84%</div>
                <div><span className="font-medium text-[#2dbd6e]">Forma:</span> Emulsja koncentrat</div>
                <div><span className="font-medium text-[#2dbd6e]">Dodatki:</span> Emulgatory</div>
              </div>
            </div>

            {/* Sekcja 3: Zastosowanie */}
            <div className="bg-white backdrop-blur-md rounded-lg p-6 shadow-xl hover:shadow-2xl hover:shadow-yellow-500/20 transition-shadow border border-gray-200">
              <div className="text-center mb-5">
                <div className="w-12 h-12 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">🌾</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Zastosowanie</h3>
              </div>
              <div className="space-y-2.5 text-sm text-gray-700">
                <div><span className="font-medium text-yellow-600">Dawkowanie:</span> 0,5-1 L/ha</div>
                <div><span className="font-medium text-yellow-600">Uprawy:</span> Wszystkie</div>
                <div><span className="font-medium text-yellow-600">Termin:</span> Cały sezon</div>
                <div><span className="font-medium text-yellow-600">Metoda:</span> Oprysk</div>
              </div>
            </div>

            {/* Sekcja 4: Bezpieczeństwo */}
            <div className="bg-white backdrop-blur-md rounded-lg p-6 shadow-xl hover:shadow-2xl hover:shadow-red-500/20 transition-shadow border border-gray-200">
              <div className="text-center mb-5">
                <div className="w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">⚠️</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Bezpieczeństwo</h3>
              </div>
              <div className="space-y-2.5 text-sm text-gray-700">
                <div><span className="font-medium text-red-600">Klasa:</span> Nieszkodliwy</div>
                <div><span className="font-medium text-red-600">Ochrona:</span> Rękawice</div>
                <div><span className="font-medium text-red-600">Przechowywanie:</span> Suche miejsce</div>
                <div><span className="font-medium text-red-600">Temperatura:</span> 5-30°C</div>
              </div>
            </div>

            {/* Sekcja 5: Transport */}
            <div className="bg-white backdrop-blur-md rounded-lg p-6 shadow-xl hover:shadow-2xl hover:shadow-purple-500/20 transition-shadow border border-gray-200">
              <div className="text-center mb-5">
                <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">🚚</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Transport</h3>
              </div>
              <div className="space-y-2.5 text-sm text-gray-700">
                <div><span className="font-medium text-purple-600">Klasa ADR:</span> Nie dotyczy</div>
                <div><span className="font-medium text-purple-600">UN:</span> Nie dotyczy</div>
                <div><span className="font-medium text-purple-600">Pakowanie:</span> Standardowe</div>
                <div><span className="font-medium text-purple-600">Etykiety:</span> Brak</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}