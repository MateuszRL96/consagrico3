'use client';
import Image from "next/image";
import Link from 'next/link';
import ProductWheel from './components/ProductWheel';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Products Categories - Interactive Wheel */}
      <ProductWheel />

      {/* About Company Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">O naszej firmie</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Consagrico to wiodący producent i dystrybutor wysokiej jakości środków ochrony roślin
            </p>
          </div>

          {/* Company Stats */}
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#0066b3] mb-2">15+</div>
              <div className="text-gray-600">Lat doświadczenia</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#2dbd6e] mb-2">500+</div>
              <div className="text-gray-600">Zadowolonych klientów</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#0066b3] mb-2">50+</div>
              <div className="text-gray-600">Produktów w ofercie</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#2dbd6e] mb-2">24/7</div>
              <div className="text-gray-600">Wsparcie techniczne</div>
            </div>
          </div>

          {/* Video Section */}
          <div className="mb-16">
            <div className="bg-gray-100 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Zobacz naszą firmę w akcji</h3>
              <div className="relative w-full max-w-4xl mx-auto aspect-video bg-gray-200 rounded-xl overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-[#0066b3] rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M8 5v10l8-5-8-5z"/>
                      </svg>
                    </div>
                    <p className="text-gray-600">Tutaj będzie video o firmie</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Company Images Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="space-y-4">
              <div className="relative h-64 rounded-xl overflow-hidden">
                <Image
                  src="/laborator.jpeg"
                  alt="Nasze laboratorium"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h4 className="text-lg font-semibold text-gray-900">Nowoczesne laboratorium</h4>
              <p className="text-gray-600">Najnowocześniejsze urządzenia do testowania i kontroli jakości</p>
            </div>
            <div className="space-y-4">
              <div className="relative h-64 rounded-xl overflow-hidden">
                <Image
                  src="/kombajn.jpeg"
                  alt="Produkcja"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h4 className="text-lg font-semibold text-gray-900">Proces produkcyjny</h4>
              <p className="text-gray-600">Zaawansowane linie produkcyjne zapewniające najwyższą jakość</p>
            </div>
            <div className="space-y-4">
              <div className="relative h-64 rounded-xl overflow-hidden">
                <Image
                  src="/jedenpiec (1).jpg"
                  alt="Zespół"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h4 className="text-lg font-semibold text-gray-900">Wykwalifikowany zespół</h4>
              <p className="text-gray-600">Doświadczeni specjaliści z wieloletnim doświadczeniem</p>
            </div>
          </div>

          {/* Mission & Values */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Nasza misja</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Dążymy do zapewnienia rolnikom najwyższej jakości środków ochrony roślin, 
                które są skuteczne, bezpieczne dla środowiska i opłacalne ekonomicznie.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Nasze produkty pomagają zwiększyć plony przy jednoczesnym zachowaniu 
                zasad zrównoważonego rolnictwa.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Nasze wartości</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-[#2dbd6e] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-600">Jakość i niezawodność produktów</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-[#2dbd6e] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-600">Innowacyjność i rozwój</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-[#2dbd6e] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-600">Ochrona środowiska</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-[#2dbd6e] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-600">Partnerstwo z klientami</span>
                </li>
              </ul>
            </div>
        </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-[#0066b3] to-[#2dbd6e] rounded-2xl p-8 text-center text-white">
            <h3 className="text-3xl font-bold mb-4">Gotowy na współpracę?</h3>
            <p className="text-xl mb-8 opacity-90">
              Skontaktuj się z nami, aby dowiedzieć się więcej o naszych produktach
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/kontakt" 
                className="inline-block bg-white text-[#0066b3] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Skontaktuj się
              </Link>
              <Link 
                href="/produkty" 
                className="inline-block border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#0066b3] transition-colors"
              >
                Zobacz produkty
          </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
