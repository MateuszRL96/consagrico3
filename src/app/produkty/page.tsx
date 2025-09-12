'use client';
import Image from 'next/image';
import Link from 'next/link';

type Product = {
  name: string;
  slug: string;
  description: string;
  image: string;
};

const products: Product[] = [
  {
    name: 'OLECON 84 EC',
    slug: 'olecon-84-ec',
    description: 'Adiuwant olejowy poprawiający przyczepność i zwilżenie cieczy użytkowej.',
    image: '/karnister4.png'
  }
];

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <section className="max-w-6xl mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold text-gray-900 mb-12 text-center">Produkty</h1>
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.slug} className="group bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2">
              <div className="relative h-72">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                  quality={85}
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="grid grid-cols-2 gap-6">
                    {/* 1L option */}
                    <div className="text-center">
                      <div className="text-white text-lg font-semibold mb-2">1 Litr</div>
                      <Link
                        href={{ pathname: `/produkty/${product.slug}`, query: { size: '1l' } }}
                        className="inline-block bg-[#2dbd6e] text-white px-4 py-2 rounded-lg hover:bg-[#27a561] transition-colors"
                      >
                        Czytaj więcej
                      </Link>
                    </div>
                    {/* 5L option */}
                    <div className="text-center">
                      <div className="text-white text-lg font-semibold mb-2">5 Litrów</div>
                      <Link
                        href={{ pathname: `/produkty/${product.slug}`, query: { size: '5l' } }}
                        className="inline-block bg-[#2dbd6e] text-white px-4 py-2 rounded-lg hover:bg-[#27a561] transition-colors"
                      >
                        Czytaj więcej
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">{product.name}</h2>
                <p className="text-gray-600">{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
