'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';

export default function AboutUs() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const values = [
    {
      title: 'Jakość',
      subtitle: 'Jakość w laboratorium',
      description: 'Stawiamy na najwyższą jakość produktów i usług, potwierdzoną certyfikatami i zadowoleniem klientów.',
      icon: '🔬',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Innowacyjność',
      subtitle: 'Innowacyjne rozwiązania',
      description: 'Ciągle rozwijamy nasze produkty i procesy, aby sprostać zmieniającym się potrzebom rynku.',
      icon: '💡',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'Bezpieczeństwo',
      subtitle: 'Bezpieczeństwo procesów',
      description: 'Dbamy o bezpieczeństwo naszych produktów i procesów produkcyjnych, chroniąc środowisko i ludzi.',
      icon: '🛡️',
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Partnerstwo',
      subtitle: 'Współpraca z klientami',
      description: 'Budujemy długotrwałe relacje z klientami i partnerami biznesowymi, oparte na zaufaniu i wzajemnym szacunku.',
      icon: '🤝',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Zrównoważony Rozwój',
      subtitle: 'Odpowiedzialność ekologiczna',
      description: 'Działamy z poszanowaniem środowiska naturalnego, wprowadzając ekologiczne rozwiązania w naszych procesach.',
      icon: '🌱',
      color: 'from-green-600 to-teal-500'
    },
    {
      title: 'Ekspertyza',
      subtitle: 'Wiedza i doświadczenie',
      description: 'Nasz zespół składa się z wykwalifikowanych specjalistów z wieloletnim doświadczeniem w branży chemicznej.',
      icon: '📚',
      color: 'from-indigo-500 to-blue-500'
    }
  ];

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Animated Hexagon Background */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l25.98 15v30L30 60 4.02 45V15z' fill='none' stroke='%230066b3' stroke-width='1'/%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}
        ></div>
      </div>

      {/* Floating Shapes */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-[#0066b3]/10 rounded-full blur-3xl animate-pulse"></div>
      <div
        className="absolute bottom-20 right-10 w-96 h-96 bg-[#2dbd6e]/10 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: '1s' }}
      ></div>

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="pt-32 pb-20">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
              <div className="space-y-6">
                <span className="inline-flex items-center gap-2 bg-[#0066b3]/10 text-[#0066b3] border border-[#0066b3]/30 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-[0.2em]">
                  O nas
                </span>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                  Tworzymy bezpieczne i skuteczne rozwiązania dla rolnictwa profesjonalnego
                </h1>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Jesteśmy polską firmą z ponad 15-letnim doświadczeniem w produkcji adiuwantów, preparatów
                  ochronnych i wspomagających dla rolnictwa. Łączymy naukową precyzję, laboratoryjną kontrolę i
                  partnerską współpracę z gospodarstwami w całym kraju.
                </p>
                <div className="grid sm:grid-cols-3 gap-4">
                  {[
                    { label: 'Własne laboratorium R&D', icon: '🔬' },
                    { label: 'Zespół doradców terenowych', icon: '🧑‍🌾' },
                    { label: 'Bezpieczeństwo potwierdzone badaniami', icon: '🛡️' }
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="bg-white border border-gray-200 rounded-2xl shadow-[0_10px_40px_rgba(0,102,179,0.08)] px-4 py-6 text-center"
                    >
                      <div className="text-2xl mb-2">{item.icon}</div>
                      <p className="text-sm font-semibold text-gray-800 leading-tight">{item.label}</p>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/produkty"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-[#0066b3] to-[#2dbd6e] text-white px-6 py-3 rounded-full text-sm font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all"
                  >
                    Poznaj nasze produkty
                    <span className="text-lg">→</span>
                  </Link>
                  <Link
                    href="/kontakt"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold border border-[#0066b3]/40 text-[#0066b3] hover:border-[#0066b3] hover:text-[#004c8a] transition-all"
                  >
                    Umów konsultację
                  </Link>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -top-12 -right-10 w-40 h-40 bg-gradient-to-br from-[#0066b3]/20 to-[#2dbd6e]/20 rounded-full blur-3xl"></div>
                <div className="relative bg-white rounded-3xl border border-gray-200 shadow-[0_40px_120px_rgba(0,102,179,0.15)] overflow-hidden">
                  <div className="grid sm:grid-cols-2">
                    <div className="p-8 space-y-4 border-b sm:border-b-0 sm:border-r border-gray-100">
                      <h3 className="text-xl font-semibold text-gray-900">Współpracujemy z liderami rynku</h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        Realizujemy projekty dla największych gospodarstw rolnych, dostarczając dopasowane rozwiązania
                        od etapu planowania zabiegu aż po finalne wdrożenie.
                      </p>
                    </div>
                    <div className="p-8 space-y-4">
                      <h3 className="text-xl font-semibold text-gray-900">Innowacje w praktyce</h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        Nasze laboratorium stale opracowuje nowe formulacje, dbając o bezpieczeństwo roślin, gleby i
                        operatorów.
                      </p>
                    </div>
                  </div>
                  <div className="bg-[#0066b3]/10 px-8 py-6">
                    <p className="text-sm font-semibold text-[#0066b3] uppercase tracking-[0.3em]">Certyfikowana jakość</p>
                    <p className="text-sm text-gray-700 mt-2">
                      Wdrożyliśmy systemy zarządzania jakością zgodne ze standardami ISO oraz regularnie audytujemy
                      procesy produkcyjne.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-24 bg-white/80 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: '15+', label: 'Lat doświadczenia' },
                { number: '500+', label: 'Zadowolonych klientów' },
                { number: '50+', label: 'Produktów w ofercie' },
                { number: '24/7', label: 'Wsparcie techniczne' }
              ].map((stat, index) => (
                <div
                  key={index}
                  className={`text-center transform transition-all duration-1000 delay-${index * 200} ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                  }`}
                >
                  <div className="text-4xl md:text-5xl font-bold text-[#0066b3] mb-2">{stat.number}</div>
                  <div className="text-gray-700 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section ref={sectionRef} className="py-24 bg-transparent">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2
                className={`text-4xl font-bold text-gray-900 mb-6 transform transition-all duration-1000 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
              >
                Nasze Wartości
              </h2>
              <div className="w-24 h-1 bg-[#0066b3] mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div
                  key={value.title}
                  className={`group transform transition-all duration-700 delay-${index * 100} ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                  }`}
                >
                  <div className="bg-white backdrop-blur-md rounded-xl shadow-lg p-8 h-full border-2 border-gray-200 hover:border-[#0066b3] hover:shadow-xl hover:shadow-[#0066b3]/20 transition-all duration-300 group-hover:-translate-y-1">
                    <div className="text-4xl mb-6">{value.icon}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                    <h4 className="text-lg font-semibold text-gray-700 mb-4">{value.subtitle}</h4>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-24 bg-transparent">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div
                className={`transform transition-all duration-1000 ${
                  isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
                }`}
              >
                <h2 className="text-4xl font-bold text-gray-900 mb-8">
                  Nasza Misja
                </h2>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Dążymy do zapewnienia rolnikom najwyższej jakości środków ochrony roślin, które są skuteczne,
                  bezpieczne dla środowiska i opłacalne ekonomicznie.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Nasze produkty pomagają zwiększyć plony przy jednoczesnym zachowaniu zasad zrównoważonego rolnictwa.
                </p>
                <div className="mt-8 grid sm:grid-cols-2 gap-4">
                  {[
                    {
                      title: 'Doradztwo w terenie',
                      description: 'Wspieramy gospodarstwa od planowania zabiegu po analizę wyników plonowania.',
                      icon: '🧭'
                    },
                    {
                      title: 'Szkolenia i warsztaty',
                      description: 'Prowadzimy program edukacyjny dla agronomów i operatorów opryskiwaczy.',
                      icon: '🎓'
                    }
                  ].map((item) => (
                    <div key={item.title} className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
                      <div className="text-2xl mb-2">{item.icon}</div>
                      <h3 className="text-md font-semibold text-gray-900 mb-1">{item.title}</h3>
                      <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div
                className={`relative transform transition-all duration-1000 delay-300 ${
                  isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
                }`}
              >
                <div className="relative h-96 rounded-xl overflow-hidden shadow-xl border-2 border-gray-200">
                  <Image src="/laborator.jpeg" alt="Nasza misja" fill className="object-cover" />
                </div>
                <div className="absolute -bottom-10 right-10 bg-white rounded-2xl border border-gray-200 shadow-xl px-6 py-4">
                  <p className="text-sm font-semibold text-gray-800">100% partii sprawdzanych laboratoryjnie</p>
                  <p className="text-xs text-gray-500 mt-1">
                    Każdy produkt opuszcza naszą fabrykę dopiero po przejściu pełnego pakietu testów jakościowych.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-24 bg-white/70">
          <div className="max-w-5xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Historia rozwoju</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Z niewielkiego laboratorium badawczego do ogólnopolskiej sieci dystrybucji. Najważniejsze kamienie milowe
                naszej działalności.
              </p>
            </div>
            <div className="relative border-l-2 border-[#0066b3]/20 pl-8">
              {[
                {
                  year: '2008',
                  title: 'Założenie firmy',
                  description:
                    'Rozpoczęliśmy działalność jako lokalny producent adiuwantów wspierających zabiegi ochrony roślin.'
                },
                {
                  year: '2013',
                  title: 'Własne laboratorium',
                  description: 'Rozbudowa zaplecza badawczego oraz wdrożenie pierwszych autorskich formulacji.'
                },
                {
                  year: '2018',
                  title: 'Ekspansja w Polsce',
                  description: 'Nawiązanie współpracy z partnerami dystrybucyjnymi w kluczowych regionach rolniczych.'
                },
                {
                  year: '2022',
                  title: 'Nowa linia produkcyjna',
                  description: 'Uruchomienie nowoczesnego zakładu z kontrolą jakości w czasie rzeczywistym.'
                }
              ].map((event) => (
                <div key={event.year} className="relative mb-10 last:mb-0">
                  <div className="absolute -left-[11px] top-1 w-5 h-5 rounded-full border-2 border-white bg-gradient-to-br from-[#0066b3] to-[#2dbd6e] shadow"></div>
                  <div className="bg-white border border-gray-200 rounded-2xl shadow-lg px-6 py-5">
                    <p className="text-[#0066b3] font-semibold text-sm uppercase tracking-[0.3em]">{event.year}</p>
                    <h3 className="text-lg font-semibold text-gray-900 mt-2">{event.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed mt-2">{event.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-24 bg-transparent">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Nasz Zespół</h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Doświadczeni specjaliści, którzy każdego dnia pracują nad doskonaleniem naszych produktów
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { name: 'Zespół Badawczy', role: 'Laboratorium', image: '/lab1 (2).jpg' },
                { name: 'Zespół Produkcyjny', role: 'Fabryka', image: '/kombajn.jpeg' },
                { name: 'Zespół Wsparcia', role: 'Biuro', image: '/jedenpiec (1).jpg' }
              ].map((team, index) => (
                <div
                  key={index}
                  className={`group transform transition-all duration-700 delay-${index * 200} ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                  }`}
                >
                  <div className="relative h-80 rounded-xl overflow-hidden shadow-lg border-2 border-gray-200 hover:border-[#0066b3] group-hover:shadow-xl group-hover:shadow-[#0066b3]/20 transition-all duration-300">
                    <Image
                      src={team.image}
                      alt={team.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 right-6 text-white">
                      <h3 className="text-2xl font-bold mb-2">{team.name}</h3>
                      <p className="text-lg opacity-90">{team.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="pb-24">
          <div className="max-w-5xl mx-auto px-4">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#0066b3] via-[#1a75d1] to-[#2dbd6e] p-10 text-white shadow-[0_30px_90px_rgba(0,102,179,0.3)]">
              <div className="absolute inset-0 opacity-10" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M40 0l34.64 20v40L40 80 5.36 60V20z' fill='none' stroke='%23ffffff' stroke-width='1'/%3E%3C/svg%3E")`,
                backgroundSize: '80px 80px'
              }}></div>
              <div className="relative grid md:grid-cols-[1.5fr_1fr] gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold mb-4">Wspólnie zbudujmy przewagę Twojego gospodarstwa</h3>
                  <p className="text-base md:text-lg opacity-90 mb-6">
                    Chętnie przygotujemy plan współpracy, przedstawimy referencje i pomożemy dobrać produkty, które
                    najlepiej zadziałają w Twoich warunkach.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Link
                      href="/kontakt"
                      className="inline-flex items-center gap-2 bg-white text-[#0066b3] px-6 py-3 rounded-full text-sm font-semibold hover:bg-gray-100 hover:text-[#2dbd6e] transition-all duration-300"
                    >
                      Skontaktuj się z nami
                      <span className="text-lg">→</span>
                    </Link>
                    <Link
                      href="/dokumenty"
                      className="inline-flex items-center gap-2 border border-white/60 text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-white/10 transition-all duration-300"
                    >
                      Pobierz katalog PDF
                    </Link>
                  </div>
                </div>
                <div className="bg-white/15 rounded-2xl p-6 border border-white/30 text-sm">
                  <p className="uppercase tracking-[0.3em] text-white/80 font-semibold mb-3">Gotowy do działania</p>
                  <p className="leading-relaxed text-white/90">
                    Nasz zespół ekspertów jest do dyspozycji w całej Polsce. Oferujemy konsultacje na miejscu, wsparcie
                    telefoniczne oraz szybkie dostawy z magazynów regionalnych.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
} 