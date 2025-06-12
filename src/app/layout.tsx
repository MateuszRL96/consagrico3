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
        <header className="fixed w-full z-50">
          {/* Navigation */}
          <div className="relative bg-white shadow-md mt-12">
            <nav className="container mx-auto px-22">
              <div className="flex items-center justify-between h-20">
                {/* Logo container */}
                <div className="relative" style={{ width: '200px', height: '0px' }}>
                  <Link 
                    href="/" 
                    className="block absolute bg-white p-6 shadow-lg" 
                    style={{ top: '-88px', zIndex: 1000 }}
                  >
                    <Image
                      src="/consagricologo.png"
                      alt="Consagrico Logo"
                      width={200}
                      height={200}
                      className="rounded-lg"
                      priority
                    />
                  </Link>
                </div>
                
                {/* Navigation items */}
                <Navigation />
              </div>
            </nav>
          </div>
        </header>
        {/* Spacer to prevent content from hiding under fixed header */}
        <div className="h-32"></div>
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
