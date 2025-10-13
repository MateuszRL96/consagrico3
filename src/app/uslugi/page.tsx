import Image from 'next/image';

export default function Services() {
  return (
    <div className="min-h-screen bg-gray-900 relative overflow-hidden">
      {/* Animated Hexagon Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l25.98 15v30L30 60 4.02 45V15z' fill='none' stroke='%230066b3' stroke-width='1'/%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-[#0066b3]/20 to-[#2dbd6e]/20"></div>

      {/* Floating Shapes */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-[#0066b3]/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#2dbd6e]/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="relative h-[400px] mt-16">
          <div className="absolute inset-0 flex items-center justify-center text-center text-white">
            <div>
              <h1 className="text-5xl font-bold mb-4">Usługi</h1>
              <p className="text-xl opacity-90">
                Kompleksowe rozwiązania dla Twojego biznesu
              </p>
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="bg-gray-800/60 backdrop-blur-md rounded-lg shadow-lg overflow-hidden border border-gray-700/50 hover:border-[#0066b3]/50 transition-all duration-300 hover:shadow-2xl hover:shadow-[#0066b3]/20 transform hover:-translate-y-2">
            <div className="relative h-48">
              <Image
                src="/lab1 (2).jpg"
                alt="Doradztwo techniczne"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3 text-white">Doradztwo techniczne</h3>
              <p className="text-gray-300 mb-4">
                Profesjonalne wsparcie w doborze odpowiednich rozwiązań chemicznych dla Twojej firmy.
              </p>
            </div>
          </div>

          {/* Service 2 */}
          <div className="bg-gray-800/60 backdrop-blur-md rounded-lg shadow-lg overflow-hidden border border-gray-700/50 hover:border-[#2dbd6e]/50 transition-all duration-300 hover:shadow-2xl hover:shadow-[#2dbd6e]/20 transform hover:-translate-y-2">
            <div className="relative h-48">
              <Image
                src="/lab1 (3).jpg"
                alt="Badania laboratoryjne"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3 text-white">Badania laboratoryjne</h3>
              <p className="text-gray-300 mb-4">
                Kompleksowe analizy i testy w naszym nowoczesnym laboratorium.
              </p>
            </div>
          </div>

          {/* Service 3 */}
          <div className="bg-gray-800/60 backdrop-blur-md rounded-lg shadow-lg overflow-hidden border border-gray-700/50 hover:border-[#0066b3]/50 transition-all duration-300 hover:shadow-2xl hover:shadow-[#0066b3]/20 transform hover:-translate-y-2">
            <div className="relative h-48">
              <Image
                src="/lab1 (4).jpg"
                alt="Produkcja na zamówienie"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3 text-white">Produkcja na zamówienie</h3>
              <p className="text-gray-300 mb-4">
                Realizacja indywidualnych zamówień według specyfikacji klienta.
              </p>
            </div>
          </div>

          {/* Service 4 */}
          <div className="bg-gray-800/60 backdrop-blur-md rounded-lg shadow-lg overflow-hidden border border-gray-700/50 hover:border-[#2dbd6e]/50 transition-all duration-300 hover:shadow-2xl hover:shadow-[#2dbd6e]/20 transform hover:-translate-y-2">
            <div className="relative h-48">
              <Image
                src="/plant1 (1).jpg"
                alt="Optymalizacja procesów"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3 text-white">Optymalizacja procesów</h3>
              <p className="text-gray-300 mb-4">
                Audyt i usprawnienie procesów chemicznych w Twojej firmie.
              </p>
            </div>
          </div>

          {/* Service 5 */}
          <div className="bg-gray-800/60 backdrop-blur-md rounded-lg shadow-lg overflow-hidden border border-gray-700/50 hover:border-[#0066b3]/50 transition-all duration-300 hover:shadow-2xl hover:shadow-[#0066b3]/20 transform hover:-translate-y-2">
            <div className="relative h-48">
              <Image
                src="/plant2.jpg"
                alt="Szkolenia"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3 text-white">Szkolenia</h3>
              <p className="text-gray-300 mb-4">
                Profesjonalne szkolenia z zakresu obsługi i stosowania naszych produktów.
              </p>
            </div>
          </div>

          {/* Service 6 */}
          <div className="bg-gray-800/60 backdrop-blur-md rounded-lg shadow-lg overflow-hidden border border-gray-700/50 hover:border-[#2dbd6e]/50 transition-all duration-300 hover:shadow-2xl hover:shadow-[#2dbd6e]/20 transform hover:-translate-y-2">
            <div className="relative h-48">
              <Image
                src="/lab1 (1).jpg"
                alt="Wsparcie techniczne"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3 text-white">Wsparcie techniczne</h3>
              <p className="text-gray-300 mb-4">
                Całodobowa pomoc techniczna i serwis dla naszych klientów.
              </p>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
} 