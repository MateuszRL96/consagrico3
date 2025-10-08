'use client';
import Link from 'next/link';

export default function Documents() {
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

      <div className="relative z-10">
      {/* Hero Section */}
      <section className="relative py-32 text-center text-white">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Dokumenty</h1>
          <p className="text-xl opacity-90">
            Ważne dokumenty i materiały do pobrania
          </p>
          <div className="w-24 h-1 bg-[#0066b3] mx-auto rounded-full mt-6"></div>
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-gray-800/60 backdrop-blur-md rounded-2xl shadow-lg p-8 md:p-12 border border-gray-700/50">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-[#0066b3] mb-6">Dokumenty do pobrania</h2>
            
            {/* Documents List */}
            <div className="grid gap-6">
              {/* Example document - this section will be populated with actual documents later */}
              <div className="p-6 border border-gray-700 rounded-lg hover:border-[#0066b3] transition-colors bg-gray-700/30">
                <div className="flex items-start space-x-4">
                  <div className="bg-gray-600 p-3 rounded-lg">
                    <svg className="w-8 h-8 text-[#0066b3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white">Dokumenty będą dostępne wkrótce</h3>
                    <p className="mt-1 text-gray-300">
                      W tym miejscu pojawią się ważne dokumenty do pobrania. Prosimy o cierpliwość.
                    </p>
                  </div>
                </div>
              </div>

              {/* Instructions for adding new documents */}
              <div className="mt-8 p-6 bg-[#0066b3]/20 rounded-lg border border-[#0066b3]/30">
                <h3 className="text-lg font-semibold text-[#0066b3] mb-2">Jak dodać nowy dokument?</h3>
                <ol className="list-decimal list-inside text-gray-300 space-y-2">
                  <li>Umieść plik PDF w folderze public/documents</li>
                  <li>Dodaj nowy element do listy dokumentów w kodzie</li>
                  <li>Określ nazwę, opis i link do dokumentu</li>
                  <li>Zachowaj spójny styl z istniejącymi dokumentami</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
    </div>
  );
} 