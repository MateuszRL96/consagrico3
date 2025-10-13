'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <ul className="flex items-center space-x-7 text-lg">
      <li>
        <Link 
          href="/onas" 
          className={`font-medium uppercase transition-colors ${
            isActive('/onas') 
              ? 'text-[#2dbd6e] hover:text-[#34c57a]' 
              : 'text-[#003366] hover:text-[#2dbd6e]'
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
              ? 'text-[#2dbd6e] hover:text-[#34c57a]' 
              : 'text-[#003366] hover:text-[#2dbd6e]'
          }`}
        >
          Produkty
        </Link>
      </li>
      <li>
        <Link 
          href="/blog" 
          className={`font-medium uppercase transition-colors ${
            isActive('/blog') 
              ? 'text-[#2dbd6e] hover:text-[#34c57a]' 
              : 'text-[#003366] hover:text-[#2dbd6e]'
          }`}
        >
          Blog
        </Link>
      </li>
      <li>
        <Link 
          href="/kontakt" 
          className={`font-medium uppercase transition-colors ${
            isActive('/kontakt') 
              ? 'text-[#2dbd6e] hover:text-[#34c57a]' 
              : 'text-[#003366] hover:text-[#2dbd6e]'
          }`}
        >
          Kontakt
        </Link>
      </li>
    </ul>
  );
} 