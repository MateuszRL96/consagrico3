'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

type Props = {
  params: { slug: string };
  searchParams: { size?: string };
};

const productMeta: Record<string, { title: string; image: string; image1L: string; image5L: string; image20L: string }> = {
  'agricon-800': {
    title: 'AGRICON 800',
    image: '/produkty/ricarion1l.png',
    image1L: '/produkty/ricarion1l.png',
    image5L: '/produkty/ricarion5l.png',
    image20L: '/produkty/ricarion20l.png'
  },
  'agrieye': {
    title: 'AGRIEYE',
    image: '/produkty/ricarion1l.png',
    image1L: '/produkty/ricarion1l.png',
    image5L: '/produkty/ricarion5l.png',
    image20L: '/produkty/ricarion20l.png'
  },
  'olecon-84-ec': { 
    title: 'OLECON 84 EC', 
    image: '/produkty/ricarion1l.png',
    image1L: '/produkty/ricarion1l.png',
    image5L: '/produkty/ricarion5l.png',
    image20L: '/produkty/ricarion20l.png'
  },
  'ricarion-95-ec': { 
    title: 'RICARION 95 EC', 
    image: '/produkty/ricarion1l.png',
    image1L: '/produkty/ricarion1l.png',
    image5L: '/produkty/ricarion5l.png',
    image20L: '/produkty/ricarion20l.png'
  },
  'agrileon-96-ec': { 
    title: 'AGRILEON 96 EC', 
    image: '/produkty/ricarion1l.png',
    image1L: '/produkty/ricarion1l.png',
    image5L: '/produkty/ricarion5l.png',
    image20L: '/produkty/ricarion20l.png'
  },
  'agricon-max': {
    title: 'AGRICON MAX',
    image: '/produkty/ricarion1l.png',
    image1L: '/produkty/ricarion1l.png',
    image5L: '/produkty/ricarion5l.png',
    image20L: '/produkty/ricarion20l.png'
  },
  'agrileus-turbo': {
    title: 'AGRILEUS TURBO',
    image: '/produkty/ricarion1l.png',
    image1L: '/produkty/ricarion1l.png',
    image5L: '/produkty/ricarion5l.png',
    image20L: '/produkty/ricarion20l.png'
  }
};

export default function ProductDetailPage({ params, searchParams }: Props) {
  const [selectedSize, setSelectedSize] = useState(searchParams.size || '1l');
  
  const meta = productMeta[params.slug] ?? { 
    title: 'OLECON 84 EC', 
    image: '/produkty/ricarion1l.png',
    image1L: '/produkty/ricarion1l.png',
    image5L: '/produkty/ricarion5l.png',
    image20L: '/produkty/ricarion20l.png'
  };
  
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
      'agricon-800': {
        etykieta: '/pedeefy/OLECON 84 EC_etykieta.pdf',
        karta: '/pedeefy/SDS_OLECON 84 EC.pdf'
      },
      'agrieye': {
        etykieta: '/pedeefy/OLECON 84 EC_etykieta.pdf',
        karta: '/pedeefy/SDS_OLECON 84 EC.pdf'
      },
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
      }
    };
    
    return productPdfs[params.slug] ?? {
      etykieta: '/pedeefy/OLECON 84 EC_etykieta.pdf',
      karta: '/pedeefy/SDS_OLECON 84 EC.pdf'
    };
  };


        return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Main Content */}
      <section className="max-w-6xl mx-auto px-4 py-8 pt-20">
        <div className="grid lg:grid-cols-[35%_65%] gap-12">
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
                  <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3 text-center">Wybierz wariant:</h3>
              <div className="flex gap-3 justify-center">
                <button 
                  onClick={() => setSelectedSize('1l')} 
                  className={`px-4 py-2 rounded-lg border-2 transition-colors ${selectedSize === '1l' ? 'bg-[#2dbd6e] text-white border-[#2dbd6e]' : 'border-gray-300 text-gray-700 hover:bg-gray-50'}`}
                >
                  1L
                </button>
                <button 
                  onClick={() => setSelectedSize('5l')} 
                  className={`px-4 py-2 rounded-lg border-2 transition-colors ${selectedSize === '5l' ? 'bg-[#2dbd6e] text-white border-[#2dbd6e]' : 'border-gray-300 text-gray-700 hover:bg-gray-50'}`}
                >
                  5L
                </button>
                <button 
                  onClick={() => setSelectedSize('20l')} 
                  className={`px-4 py-2 rounded-lg border-2 transition-colors ${selectedSize === '20l' ? 'bg-[#2dbd6e] text-white border-[#2dbd6e]' : 'border-gray-300 text-gray-700 hover:bg-gray-50'}`}
                >
                  20L
                </button>
        </div>
                
              {/* PDF Downloads */}
              <div className="mt-4">
                <div className="flex gap-3 justify-center">
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
          <div className="space-y-4 ml-12 mt-10">
          <div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">{meta.title}</h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                Wysokiej jakości produkt chemiczny do zastosowań profesjonalnych w rolnictwie.
              </p>
                </div>
                
            {/* Product Details */}
                <div className="space-y-4">
                    <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Podstawowe informacje</h3>
                <div className="space-y-1 text-sm text-gray-600">
                  <div><span className="font-medium">UFI:</span> TH00-Y0W5-D00X-SY0S</div>
                  <div><span className="font-medium">Wybrany wariant:</span> {getSizeText()}</div>
                  <div><span className="font-medium">Typ produktu:</span> Adiuwant olejowy</div>
                  <div><span className="font-medium">Opis wariantu:</span> {getSizeInfo().description}</div>
          </div>
              </div>
                  
                <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Właściwości</h3>
                <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                  <li>Zwiększa przyczepność cieczy użytkowej</li>
                  <li>Poprawia zwilżenie powierzchni roślin</li>
                  <li>Redukuje znoszenie cieczy</li>
                  <li>Zwiększa penetrację środków ochrony roślin</li>
                </ul>
                    </div>
                  
                <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Bezpieczeństwo</h3>
                <p className="text-sm text-gray-600 mb-1">Stosować rękawice ochronne i odzież ochronną. Unikać kontaktu ze skórą i oczami.</p>
                <p className="text-xs text-gray-500">W przypadku kontaktu ze skórą przemyć dużą ilością wody. W przypadku kontaktu z oczami płukać przez 15 minut.</p>
          </div>
              </div>

            {/* Contact Button */}
            <div className="pt-4">
              <Link href="/kontakt" className="inline-block bg-[#2dbd6e] text-white px-8 py-3 rounded-lg hover:bg-[#27a561] transition-colors font-semibold">
                Zapytaj o ofertę
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}