'use client';
import Image from "next/image";
import Link from 'next/link';
import ProductWheel from './components/ProductWheel';

export default function Home() {
  const industries = [
    {
      title: 'Przemysł Rolniczy',
      products: [
        {
          name: 'AgroFert Plus',
          description: 'Zaawansowany nawóz mineralny',
          image: '/lab1 (1).jpg'
        },
        {
          name: 'BioProtect',
          description: 'Środek ochrony roślin',
          image: '/lab1 (1).jpg'
        }
      ]
    },
    {
      title: 'Przemysł Budowlany',
      products: [
        {
          name: 'ConcreteSeal',
          description: 'Uszczelniacz do betonu',
          image: '/lab1 (1).jpg'
        },
        {
          name: 'WallGuard',
          description: 'Impregnat do ścian',
          image: '/lab1 (1).jpg'
        }
      ]
    },
    {
      title: 'Przemysł Spożywczy',
      products: [
        {
          name: 'FoodSafe Clean',
          description: 'Środek czyszczący dla przemysłu spożywczego',
          image: '/lab1 (1).jpg'
        },
        {
          name: 'SaniPure',
          description: 'Środek dezynfekujący',
          image: '/lab1 (1).jpg'
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Products Categories - Interactive Wheel */}
      <ProductWheel />

      {/* Hero Section */}
      <section className="relative h-[800px]">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image
            src="/laborator.jpeg"
            alt="Laboratorium Consagrico"
            fill
            className="object-cover"
            quality={90}
            priority
                />
              </div>
        <div className="absolute inset-0 from-[#0066b3]/80 via-[#1a75d1]/70 to-[#2dbd6e]/70 z-10 pointer-events-none"></div>
        <div className="absolute inset-0 z-20 flex items-center justify-center text-center text-white" style={{ marginTop: '160px' }}>
          <div>
            <h1 className="text-6xl font-bold mb-6">Consagrico</h1>
            <p className="text-2xl opacity-90 max-w-3xl mx-auto">
              Innowacyjne rozwiązania chemiczne dla różnych gałęzi przemysłu
            </p>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="mx-auto px-4 py-24 bg-gradient-to-b from-[#e6f2ff] via-[#e9fff2] to-white">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Nasze Branże</h2>
        <div className="space-y-24">
          {industries.map((industry, index) => (
            <div key={industry.title} className="relative">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-[#0066b3]">{industry.title}</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
                {industry.products.map((product) => (
                  <div key={product.name} className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2">
                    <div className="relative h-64">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover"
                        quality={85}
                      />
                    </div>
                    <div className="p-8">
                      <h4 className="text-2xl font-bold text-gray-900 mb-2">{product.name}</h4>
                      <p className="text-gray-600 mb-6">{product.description}</p>
                      <Link 
                        href="/kontakt" 
                        className="inline-block bg-[#2dbd6e] text-white px-6 py-3 rounded-lg hover:bg-[#27a561] transition-colors"
                      >
                        Więcej informacji
                      </Link>
                  </div>
                </div>
                ))}
              </div>
              {index < industries.length - 1 && (
                <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-[150%]">
                  <div className="w-px h-24 bg-gray-200"></div>
            </div>
              )}
          </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-[#0066b3] via-[#1a75d1] to-[#2dbd6e] py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Potrzebujesz spersonalizowanego rozwiązania?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Skontaktuj się z nami, aby omówić swoje potrzeby. Nasi eksperci pomogą dobrać odpowiednie rozwiązanie.
          </p>
          <Link 
            href="/kontakt" 
            className="inline-block bg-white text-[#0066b3] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 hover:text-[#2dbd6e] transition-colors"
          >
            Skontaktuj się z nami
          </Link>
        </div>
      </section>
    </div>
  );
}
