import Image from 'next/image';

export default function Services() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative h-[400px]">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image
            src="/lab1 (1).jpg"
            alt="Laboratorium Consagrico"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-[#0066b3]/80 z-10 pointer-events-none"></div>
        <div className="absolute inset-0 z-20 flex items-center justify-center text-center text-white">
          <div>
            <h1 className="text-5xl font-bold mb-4">Usługi</h1>
            <p className="text-xl opacity-90">
              Kompleksowe rozwiązania dla Twojego biznesu
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-12 bg-blue-50">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative h-48">
              <Image
                src="/lab1 (2).jpg"
                alt="Doradztwo techniczne"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3">Doradztwo techniczne</h3>
              <p className="text-gray-600 mb-4">
                Profesjonalne wsparcie w doborze odpowiednich rozwiązań chemicznych dla Twojej firmy.
              </p>
            </div>
          </div>

          {/* Service 2 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative h-48">
              <Image
                src="/lab1 (3).jpg"
                alt="Badania laboratoryjne"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3">Badania laboratoryjne</h3>
              <p className="text-gray-600 mb-4">
                Kompleksowe analizy i testy w naszym nowoczesnym laboratorium.
              </p>
            </div>
          </div>

          {/* Service 3 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative h-48">
              <Image
                src="/lab1 (4).jpg"
                alt="Produkcja na zamówienie"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3">Produkcja na zamówienie</h3>
              <p className="text-gray-600 mb-4">
                Realizacja indywidualnych zamówień według specyfikacji klienta.
              </p>
            </div>
          </div>

          {/* Service 4 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative h-48">
              <Image
                src="/plant1 (1).jpg"
                alt="Optymalizacja procesów"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3">Optymalizacja procesów</h3>
              <p className="text-gray-600 mb-4">
                Audyt i usprawnienie procesów chemicznych w Twojej firmie.
              </p>
            </div>
          </div>

          {/* Service 5 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative h-48">
              <Image
                src="/plant2.jpg"
                alt="Szkolenia"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3">Szkolenia</h3>
              <p className="text-gray-600 mb-4">
                Profesjonalne szkolenia z zakresu obsługi i stosowania naszych produktów.
              </p>
            </div>
          </div>

          {/* Service 6 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative h-48">
              <Image
                src="/lab1 (1).jpg"
                alt="Wsparcie techniczne"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3">Wsparcie techniczne</h3>
              <p className="text-gray-600 mb-4">
                Całodobowa pomoc techniczna i serwis dla naszych klientów.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 