'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function Documents() {
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
            <h1 className="text-5xl font-bold mb-4">Dokumenty</h1>
            <p className="text-xl opacity-90">
              Ważne dokumenty i materiały do pobrania
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <nav className="flex mb-8 text-gray-600">
          <Link href="/" className="hover:text-[#0066b3]">
            Strona startowa
          </Link>
          <span className="mx-2">&gt;</span>
          <span className="text-[#0066b3]">Dokumenty</span>
        </nav>

        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-[#0066b3] mb-6">Dokumenty do pobrania</h2>
            
            {/* Documents List */}
            <div className="grid gap-6">
              {/* Example document - this section will be populated with actual documents later */}
              <div className="p-6 border border-gray-200 rounded-lg hover:border-[#0066b3] transition-colors">
                <div className="flex items-start space-x-4">
                  <div className="bg-gray-100 p-3 rounded-lg">
                    <svg className="w-8 h-8 text-[#0066b3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900">Dokumenty będą dostępne wkrótce</h3>
                    <p className="mt-1 text-gray-600">
                      W tym miejscu pojawią się ważne dokumenty do pobrania. Prosimy o cierpliwość.
                    </p>
                  </div>
                </div>
              </div>

              {/* Instructions for adding new documents */}
              <div className="mt-8 p-6 bg-blue-50 rounded-lg">
                <h3 className="text-lg font-semibold text-[#0066b3] mb-2">Jak dodać nowy dokument?</h3>
                <ol className="list-decimal list-inside text-gray-700 space-y-2">
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
  );
} 