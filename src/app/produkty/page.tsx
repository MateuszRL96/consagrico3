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
  const hexagonBackground = "url(\"data:image/svg+xml,%3Csvg%20width%3D%2760%27%20height%3D%2760%27%20viewBox%3D%270%200%2060%2060%27%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%3E%3Cpath%20d%3D%27M30%200l25.98%2015v30L30%2060%204.02%2045V15z%27%20fill%3D%27none%27%20stroke%3D%27%230066b3%27%20stroke-width%3D%271%27%2F%3E%3C%2Fsvg%3E\")";
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

  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'wszystkie' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Always display 3 products per row
  const getGridColumns = () => {
    return 'grid-cols-1 md:grid-cols-3';
  };

  const heroProduct = {
    title: 'AGRILEUS TURBO — wielozadaniowy adiuwant nowej generacji',
    description:
      'Poznaj wszechstronny adiuwant, który poprawia skuteczność oprysków, przyspiesza wnikanie substancji aktywnych i ogranicza straty wynikające z parowania. Idealny do mieszanek zbiornikowych i zabiegów wymagających najwyższej precyzji.',
    image: '/produkty/ricarion1l.png',
    category: 'aduiwanty' as Product['category'],
    mainBenefits: [
      {
        label: 'Lepsza przyczepność',
        description: 'Tworzy cienką powłokę, która wydłuża czas działania cieczy roboczej na powierzchni liści.',
        icon: '🛡️'
      },
      {
        label: 'Optymalne zwilżanie',
        description: 'Obniża napięcie powierzchniowe, dzięki czemu oprysk lepiej pokrywa roślinę.',
        icon: '💧'
      },
      {
        label: 'Więcej plonu',
        description: 'Minimalizuje ryzyko zmywania preparatu i poprawia wykorzystanie składników odżywczych.',
        icon: '🌾'
      }
    ],
    sizes: ['1 L', '5 L', '10 L', '20 L'],
    link: '/produkty/agrileus-turbo'
  } as const;

  const highlightedStats = [
    {
      value: '12%',
      label: 'Średni wzrost skuteczności zabiegów',
      icon: '📈'
    },
    {
      value: '6h',
      label: 'Długotrwała aktywność na liściach',
      icon: '⏱️'
    },
    {
      value: '0,2 ml',
      label: 'Rekomendowane dawkowanie na 1 L wody',
      icon: '⚖️'
    }
  ] as const;

  const productBenefits = [
    {
      title: 'Stabilna formulacja',
      description:
        'Nowoczesna technologia produkcji gwarantuje stałą jakość i bezpieczeństwo stosowania w szerokim zakresie temperatur.',
      icon: '🧪'
    },
    {
      title: 'Kompatybilność z mieszaninami',
      description: 'Możliwość stosowania z większością herbicydów, fungicydów i nawozów dolistnych.',
      icon: '🔗'
    },
    {
      title: 'Wsparcie ekspertów',
      description: 'Nasi doradcy pomogą dobrać optymalny program zabiegów i schemat stosowania.',
      icon: '👩‍🔬'
    }
  ] as const;

  const categoryStories = [
    {
      title: 'Herbicydy pod kontrolą',
      description:
        'Redukuj stres roślin po zabiegach herbicydowych i maksymalizuj efekt chwastobójczy dzięki dopasowanym adiuwantom.',
      color: 'from-blue-500/20 via-blue-100 to-blue-500/10',
      link: '/uslugi',
      icon: '🌿'
    },
    {
      title: 'Fungicydy z pełną skutecznością',
      description: 'Zwiększ odporność upraw na patogeny wykorzystując adiuwanty, które poprawiają retencję cieczy roboczej.',
      color: 'from-green-500/20 via-green-100 to-green-500/10',
      link: '/blog',
      icon: '🍃'
    },
    {
      title: 'Insektycydy bez kompromisów',
      description:
        'Zapewnij dokładne pokrycie liści i skrzydeł szkodników nawet przy niskich strumieniach oprysków.',
      color: 'from-yellow-500/20 via-yellow-100 to-yellow-500/10',
      link: '/kontakt',
      icon: '🐞'
    }
  ] as const;

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Animated Hexagon Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{ backgroundImage: hexagonBackground, backgroundSize: '60px 60px' }}></div>
      </div>

      {/* Floating Shapes */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-[#0066b3]/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#2dbd6e]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

      {/* Content */}
      <div className="relative z-10">
        {/* Search and Filter Section */}
        <section className="py-10 mt-16 backdrop-blur-sm bg-white/85 relative">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: hexagonBackground, backgroundSize: '60px 60px' }}></div>
          <div className="relative z-10">
            <div className="max-w-6xl mx-auto px-4">
              {/* Search Bar */}
              <div className="text-center mb-6">
                <div className="relative max-w-2xl mx-auto">
                  <input
                    type="text"
                    placeholder="Wyszukaj produkty..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-6 py-4 text-base border border-gray-300 rounded-full focus:border-[#0066b3] focus:outline-none focus:ring-2 focus:ring-[#0066b3]/50 shadow-lg bg-white backdrop-blur-sm text-gray-900 placeholder-gray-500"
                  />
                  <div className="absolute right-6 top-1/2 transform -translate-y-1/2 text-gray-500 text-lg">
                    🔍
                  </div>
                </div>
              </div>

              {/* Category Filters */}
              <div className="flex flex-wrap justify-center gap-3 mb-8">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 transform hover:scale-105 ${
                      selectedCategory === category.id
                        ? `${category.color} text-white shadow-lg hover:shadow-xl`
                        : 'bg-white backdrop-blur-sm text-gray-700 border border-gray-300 hover:border-gray-400 hover:bg-gray-50 shadow'
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>

              {/* Active filters */}
              <div className="flex flex-wrap justify-center gap-3 mb-6">
                {selectedCategory !== 'wszystkie' && (
                  <div className="flex items-center gap-2 bg-[#0066b3]/10 text-[#0066b3] border border-[#0066b3]/30 px-4 py-2 rounded-full text-xs font-semibold shadow">
                    <span>Kategoria: {categories.find((c) => c.id === selectedCategory)?.name ?? 'Wszystkie'}</span>
                    <button
                      onClick={() => setSelectedCategory('wszystkie')}
                      className="text-[#0066b3] hover:text-[#2dbd6e] transition-colors"
                    >
                      ✕
                    </button>
                  </div>
                )}
                {searchTerm && (
                  <div className="flex items-center gap-2 bg-[#2dbd6e]/10 text-[#2dbd6e] border border-[#2dbd6e]/30 px-4 py-2 rounded-full text-xs font-semibold shadow">
                    <span>Fraza: &quot;{searchTerm}&quot;</span>
                    <button
                      onClick={() => setSearchTerm('')}
                      className="text-[#2dbd6e] hover:text-[#0066b3] transition-colors"
                    >
                      ✕
                    </button>
                  </div>
                )}
              </div>

              {/* Results Count */}
              <div className="text-center">
                <p className="text-sm text-gray-700">
                  Znaleziono <span className="font-semibold text-[#0066b3]">{filteredProducts.length}</span> produktów
                  {searchTerm && (
                    <span>
                      {' '}
                      dla &quot;<span className="font-medium text-[#2dbd6e]">{searchTerm}</span>&quot;
                    </span>
                  )}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Product Spotlight */}
        <section className="relative max-w-6xl mx-auto px-4 md:px-6 py-16">
          <div className="absolute inset-0 bg-white/70 backdrop-blur-2xl rounded-3xl shadow-[0_20px_80px_rgba(0,102,179,0.15)]"></div>
          <div className="relative grid lg:grid-cols-[1.2fr_1fr] gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#0066b3]/10 to-[#2dbd6e]/10 text-[#0066b3] border border-[#0066b3]/20 px-4 py-2 rounded-full text-sm font-semibold">
                <span className="text-xs uppercase tracking-wider">Produkt tygodnia</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                {heroProduct.title}
              </h2>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                {heroProduct.description}
              </p>
              <div className="grid sm:grid-cols-3 gap-4">
                {heroProduct.mainBenefits.map((benefit) => (
                  <div
                    key={benefit.label}
                    className="bg-white border border-gray-200 rounded-2xl p-5 shadow-[0_10px_30px_rgba(0,102,179,0.1)] text-center"
                  >
                    <div className="text-3xl mb-2">{benefit.icon}</div>
                    <div className="text-sm font-semibold text-gray-900">{benefit.label}</div>
                    <p className="text-xs text-gray-600 mt-1 leading-relaxed">{benefit.description}</p>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap items-center gap-3">
                {heroProduct.sizes.map((size) => (
                  <span
                    key={size}
                    className="inline-flex items-center justify-center bg-[#0066b3]/10 text-[#0066b3] px-3 py-1.5 rounded-full text-xs font-semibold border border-[#0066b3]/30"
                  >
                    {size}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-4 items-center">
                <Link
                  href={heroProduct.link}
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-[#0066b3] to-[#2dbd6e] text-white px-5 py-3 rounded-full font-semibold text-sm shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                >
                  Zobacz szczegóły
                  <span className="text-lg">→</span>
                </Link>
                <button
                  onClick={() => setSelectedCategory(heroProduct.category ?? 'wszystkie')}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full font-semibold text-sm border border-[#0066b3]/40 text-[#0066b3] hover:border-[#0066b3] hover:text-[#0052a3] transition-all"
                >
                  Wszystkie {getCategoryInfo(heroProduct.category).name.toLowerCase()}y
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-[#0066b3]/20 to-[#2dbd6e]/20 rounded-full blur-3xl"></div>
              <div className="relative aspect-square bg-white rounded-3xl border border-gray-200 shadow-[0_20px_80px_rgba(0,102,179,0.15)] overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center p-6">
                  <div className="relative w-full h-full">
                    <Image
                      src={heroProduct.image}
                      alt={heroProduct.title}
                      fill
                      className="object-contain drop-shadow-[0_10px_40px_rgba(0,102,179,0.2)]"
                      quality={95}
                    />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 px-4 py-4 bg-white/80 backdrop-blur-md border-t border-gray-100">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <p className="text-xs uppercase tracking-widest text-gray-500">Segment</p>
                      <p className="text-sm font-semibold text-gray-900">{getCategoryInfo(heroProduct.category).name}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs uppercase tracking-widest text-gray-500">Dostępność</p>
                      <p className="text-sm font-semibold text-[#2dbd6e]">Wysyłka 24h</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Highlighted stats */}
        <section className="max-w-6xl mx-auto px-4 md:px-6 pb-16">
          <div className="bg-white/80 backdrop-blur-lg border border-gray-200 rounded-3xl shadow-[0_20px_80px_rgba(0,102,179,0.12)] px-6 py-10">
            <div className="grid md:grid-cols-3 gap-6">
              {highlightedStats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl mb-3">{stat.icon}</div>
                  <p className="text-3xl font-bold text-[#0066b3]">{stat.value}</p>
                  <p className="text-sm text-gray-600 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Product benefits */}
        <section className="max-w-6xl mx-auto px-4 md:px-6 pb-12">
          <div className="grid md:grid-cols-3 gap-6">
            {productBenefits.map((benefit) => (
              <div key={benefit.title} className="bg-white border border-gray-200 rounded-2xl p-6 shadow-[0_10px_30px_rgba(0,102,179,0.1)]">
                <div className="text-3xl mb-3">{benefit.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Category stories */}
        <section className="max-w-6xl mx-auto px-4 md:px-6 pb-20">
          <div className="grid md:grid-cols-3 gap-6">
            {categoryStories.map((story) => (
              <div key={story.title} className={`relative rounded-3xl overflow-hidden border border-gray-200 shadow-[0_15px_50px_rgba(0,102,179,0.12)] bg-gradient-to-br ${story.color}`}>
                <div className="absolute inset-0 bg-white/70 backdrop-blur-md"></div>
                <div className="relative p-6 flex flex-col h-full">
                  <div className="text-3xl mb-4">{story.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{story.title}</h3>
                  <p className="text-sm text-gray-700 leading-relaxed flex-grow">{story.description}</p>
                  <div className="mt-6">
                    <Link
                      href={story.link}
                      className="inline-flex items-center gap-2 text-[#0066b3] font-semibold text-sm hover:text-[#2dbd6e] transition-colors"
                    >
                      Dowiedz się więcej
                      <span className="text-lg">→</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Products Grid */}
        <section className="max-w-6xl mx-auto px-4 md:px-6 pb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Wszystkie produkty
            </h2>
            <p className="text-lg text-gray-600">
              Przeglądaj naszą pełną ofertę produktów
            </p>
          </div>

          {filteredProducts.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                Nie znaleziono produktów
              </h3>
              <p className="text-gray-600 mb-6">
                Spróbuj zmienić kryteria wyszukiwania lub wybierz inną kategorię
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('wszystkie');
                }}
                className="inline-flex items-center gap-2 bg-[#0066b3] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#0052a3] transition-colors"
              >
                Wyczyść filtry
              </button>
            </div>
          ) : (
            <div className={`grid ${getGridColumns()} gap-8`}>
              {filteredProducts.map((product) => {
                const categoryInfo = getCategoryInfo(product.category);
                return (
                  <Link
                    key={product.slug}
                    href={`/produkty/${product.slug}`}
                    className="group bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(0,102,179,0.1)] hover:shadow-[0_20px_60px_rgba(0,102,179,0.2)] transition-all duration-300 transform hover:-translate-y-2"
                  >
                    <div className="relative aspect-square bg-gradient-to-br from-gray-50 to-white p-8">
                      <div className="absolute top-4 right-4 z-10">
                        <span className={`${categoryInfo.bgColor} ${categoryInfo.textColor} ${categoryInfo.borderColor} border px-3 py-1.5 rounded-full text-xs font-semibold backdrop-blur-sm`}>
                          {categoryInfo.name}
                        </span>
                      </div>
                      <div className="relative w-full h-full">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-contain drop-shadow-[0_10px_40px_rgba(0,102,179,0.15)] group-hover:scale-110 transition-transform duration-300"
                          quality={90}
                        />
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-[#0066b3] transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed mb-4">
                        {product.description}
                      </p>
                      <div className="flex items-center gap-2 text-[#0066b3] font-semibold text-sm group-hover:text-[#2dbd6e] transition-colors">
                        <span>Zobacz szczegóły</span>
                        <span className="text-lg group-hover:translate-x-1 transition-transform">→</span>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
