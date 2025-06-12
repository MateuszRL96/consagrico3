import Image from 'next/image';

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative h-[400px] -mt-40">
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
        <div className="absolute inset-0 z-20 flex items-center justify-center text-center text-white" style={{ marginTop: '160px' }}>
          <div>
            <h1 className="text-5xl font-bold mb-4">O Nas</h1>
            <p className="text-xl opacity-90">
              Jesteśmy liderem w dostarczaniu innowacyjnych rozwiązań chemicznych
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Company Description with Image */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
            <div className="prose max-w-none">
              <p className="text-lg mb-6">
                Consagrico to firma z wieloletnim doświadczeniem w branży chemicznej. 
                Specjalizujemy się w produkcji i dystrybucji wysokiej jakości produktów 
                chemicznych dla różnych gałęzi przemysłu.
              </p>
              <p className="text-lg mb-6">
                Nasza misja to dostarczanie innowacyjnych i bezpiecznych rozwiązań, 
                które pomagają naszym klientom osiągać lepsze wyniki w ich działalności.
              </p>
            </div>
            <div className="relative h-[300px]">
              <Image
                src="/lab1 (1).jpg"
                alt="Laboratorium Consagrico"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </section>

        {/* Values with Images */}
        <section>
          <h2 className="text-3xl font-bold mb-8">Nasze Wartości</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="relative h-48 mb-4">
                <Image
                  src="/lab1 (2).jpg"
                  alt="Jakość w laboratorium"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <h3 className="text-xl font-semibold mb-3">Jakość</h3>
              <p className="text-gray-600">
                Stawiamy na najwyższą jakość produktów i usług, potwierdzoną 
                certyfikatami i zadowoleniem klientów.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="relative h-48 mb-4">
                <Image
                  src="/lab1 (3).jpg"
                  alt="Innowacyjne rozwiązania"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <h3 className="text-xl font-semibold mb-3">Innowacyjność</h3>
              <p className="text-gray-600">
                Ciągle rozwijamy nasze produkty i procesy, aby sprostać 
                zmieniającym się potrzebom rynku.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="relative h-48 mb-4">
                <Image
                  src="/lab1 (4).jpg"
                  alt="Bezpieczeństwo procesów"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <h3 className="text-xl font-semibold mb-3">Bezpieczeństwo</h3>
              <p className="text-gray-600">
                Dbamy o bezpieczeństwo naszych produktów i procesów produkcyjnych, 
                chroniąc środowisko i ludzi.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="relative h-48 mb-4">
                <Image
                  src="/plant2.jpg"
                  alt="Współpraca z klientami"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <h3 className="text-xl font-semibold mb-3">Partnerstwo</h3>
              <p className="text-gray-600">
                Budujemy długotrwałe relacje z klientami i partnerami biznesowymi, 
                oparte na zaufaniu i wzajemnym szacunku.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
} 