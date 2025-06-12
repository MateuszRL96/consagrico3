'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <ul className="flex space-x-12 text-lg ml-auto">
      <li>
        <Link 
          href="/onas" 
          className={`font-medium uppercase transition-colors ${
            isActive('/onas') 
              ? 'text-[#3399ff] hover:text-[#1a8cff]' 
              : 'text-[#003366] hover:text-[#004d99]'
          }`}
        >
          O Nas
        </Link>
      </li>
      <li>
        <Link 
          href="/produkty" 
          className={`font-medium uppercase transition-colors ${
            isActive('/produkty') 
              ? 'text-[#3399ff] hover:text-[#1a8cff]' 
              : 'text-[#003366] hover:text-[#004d99]'
          }`}
        >
          Produkty
        </Link>
      </li>
      <li>
        <Link 
          href="/uslugi" 
          className={`font-medium uppercase transition-colors ${
            isActive('/uslugi') 
              ? 'text-[#3399ff] hover:text-[#1a8cff]' 
              : 'text-[#003366] hover:text-[#004d99]'
          }`}
        >
          Usługi
        </Link>
      </li>
      <li>
        <Link 
          href="/kontakt" 
          className={`font-medium uppercase transition-colors ${
            isActive('/kontakt') 
              ? 'text-[#3399ff] hover:text-[#1a8cff]' 
              : 'text-[#003366] hover:text-[#004d99]'
          }`}
        >
          Kontakt
        </Link>
      </li>
    </ul>
  );
} 