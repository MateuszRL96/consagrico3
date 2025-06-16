import Image from 'next/image';

export default function AboutUs() {
  const values = [
    {
      title: 'Jakość',
      subtitle: 'Jakość w laboratorium',
      description: 'Stawiamy na najwyższą jakość produktów i usług, potwierdzoną certyfikatami i zadowoleniem klientów.',
      icon: '🔬'
    },
    {
      title: 'Innowacyjność',
      subtitle: 'Innowacyjne rozwiązania',
      description: 'Ciągle rozwijamy nasze produkty i procesy, aby sprostać zmieniającym się potrzebom rynku.',
      icon: '💡'
    },
    {
      title: 'Bezpieczeństwo',
      subtitle: 'Bezpieczeństwo procesów',
      description: 'Dbamy o bezpieczeństwo naszych produktów i procesów produkcyjnych, chroniąc środowisko i ludzi.',
      icon: '🛡️'
    },
    {
      title: 'Partnerstwo',
      subtitle: 'Współpraca z klientami',
      description: 'Budujemy długotrwałe relacje z klientami i partnerami biznesowymi, oparte na zaufaniu i wzajemnym szacunku.',
      icon: '🤝'
    },
    {
      title: 'Zrównoważony Rozwój',
      subtitle: 'Odpowiedzialność ekologiczna',
      description: 'Działamy z poszanowaniem środowiska naturalnego, wprowadzając ekologiczne rozwiązania w naszych procesach.',
      icon: '🌱'
    },
    {
      title: 'Ekspertyza',
      subtitle: 'Wiedza i doświadczenie',
      description: 'Nasz zespół składa się z wykwalifikowanych specjalistów z wieloletnim doświadczeniem w branży chemicznej.',
      icon: '📚'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative h-[400px] -mt-32 bg-blue-50">
        <div className="absolute inset-0 z-0">
          <Image
            src="/lab1 (1).jpg"
            alt="Laboratorium Consagrico"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-[#0066b3]/80 z-10"></div>
        <div className="absolute inset-0 z-20 flex items-center justify-center text-center text-white">
          <div>
            <h1 className="text-5xl font-bold mb-6">O Nas</h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Poznaj naszą firmę i wartości, które przyświecają nam w codziennej pracy
            </p>
          </div>
        </div>
      </section>

      {/* First Light Blue Section */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-xl overflow-hidden">
              <Image
                src="/lab1 (1).jpg"
                alt="Nasze laboratorium"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Nasza Historia</h2>
              <p className="text-lg text-gray-700 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <p className="text-lg text-gray-700">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Second Light Blue Section */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Nasza Misja</h2>
              <p className="text-lg text-gray-700 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <p className="text-lg text-gray-700">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden">
              <Image
                src="/lab1 (2).jpg"
                alt="Nasza misja"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Nasze Wartości Section */}
      <section className="py-24 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Nasze Wartości</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={value.title} className="bg-white rounded-xl shadow-lg p-8 transform transition-all duration-300 hover:-translate-y-2">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-[#0066b3] mb-2">{value.title}</h3>
                <h4 className="text-lg font-semibold text-gray-800 mb-4">{value.subtitle}</h4>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
} 