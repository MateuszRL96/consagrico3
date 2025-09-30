import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import Navigation from './components/Navigation';

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body className={inter.className}>
        <header className="fixed top-0 left-0 right-0 z-[1000] bg-[#F7F6FB] shadow-md">
          <div className="container mx-auto px-2 py-3">
            <div className="flex items-center justify-between">
              <Link href="/" className="flex items-center gap-3 md:gap-4" style={{ marginLeft: '50px' }}>
                <Image
                  src="/ConsagricoLogo.png"
                  alt="Consagrico Logo"
                  width={180}
                  height={60}
                  className="h-10 md:h-12 w-auto"
                  quality={100}
                  sizes="(max-width: 768px) 90px, 180px"
                  priority
                />
              </Link>
              <Navigation />
            </div>
          </div>
        </header>
        {/* Spacer to prevent content from hiding under fixed header */}
        <main className="min-h-screen">
          {children}
        </main>
        <footer className="bg-gray-800 text-white">
          <div className="container mx-auto px-4 py-6">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-lg font-bold">Consagrico</h3>
                <p className="text-sm">Profesjonalne rozwiązania chemiczne</p>
              </div>
              <div className="text-sm">
                &copy; {new Date().getFullYear()} Consagrico. Wszelkie prawa zastrzeżone.
              </div>
            </div>
            <div className="border-t border-gray-700 mt-4 pt-4">
              <ul className="flex justify-center space-x-8 text-sm text-gray-400">
                <li>
                  <Link href="/dokumenty" className="hover:text-white transition-colors">
                    Dokumenty
                  </Link>
                </li>
                <li>
                  <Link href="/polityka-prywatnosci" className="hover:text-white transition-colors">
                    Polityka prywatności
                  </Link>
                </li>
                <li>
                  <Link href="/nota-prawna" className="hover:text-white transition-colors">
                    Nota prawna
                  </Link>
                </li>
                <li>
                  <Link href="/mapa-serwisu" className="hover:text-white transition-colors">
                    Mapa serwisu
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}

