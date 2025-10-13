'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

// Typy dla postów
interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
  linkedinUrl?: string;
}

export default function Blog() {
  // Przykładowe posty - później można przenieść do bazy danych lub CMS
  const [posts] = useState<BlogPost[]>([
    {
      id: '1',
      title: 'Innowacje w ochronie roślin - przyszłość rolnictwa',
      excerpt: 'Odkryj najnowsze trendy w technologii ochrony roślin i dowiedz się, jak mogą one wpłynąć na Twoje gospodarstwo.',
      content: '',
      image: '/lab1 (2).jpg',
      author: 'Zespół Conagrico',
      date: '2024-01-15',
      category: 'Innowacje',
      readTime: '5 min',
      linkedinUrl: ''
    },
    {
      id: '2',
      title: 'Zrównoważone rolnictwo - jak dbać o środowisko',
      excerpt: 'Praktyczne wskazówki dotyczące stosowania środków ochrony roślin w sposób przyjazny dla środowiska.',
      content: '',
      image: '/kombajn.jpeg',
      author: 'Zespół Conagrico',
      date: '2024-01-10',
      category: 'Ekologia',
      readTime: '7 min',
      linkedinUrl: ''
    },
    {
      id: '3',
      title: 'Jak zwiększyć plony przy mniejszych kosztach',
      excerpt: 'Sprawdzone metody optymalizacji kosztów przy jednoczesnym zwiększeniu efektywności upraw.',
      content: '',
      image: '/plant1 (1).jpg',
      author: 'Zespół Conagrico',
      date: '2024-01-05',
      category: 'Poradniki',
      readTime: '6 min',
      linkedinUrl: ''
    }
  ]);

  const [selectedCategory, setSelectedCategory] = useState<string>('Wszystkie');
  const categories = ['Wszystkie', 'Innowacje', 'Ekologia', 'Poradniki', 'Aktualności'];

  const filteredPosts = selectedCategory === 'Wszystkie' 
    ? posts 
    : posts.filter(post => post.category === selectedCategory);

  const shareOnLinkedIn = (post: BlogPost) => {
    const url = `${window.location.origin}/blog/${post.id}`;
    const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
    window.open(linkedInUrl, '_blank', 'width=600,height=600');
  };

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Animated Hexagon Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l25.98 15v30L30 60 4.02 45V15z' fill='none' stroke='%230066b3' stroke-width='1'/%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      {/* Floating Shapes */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-[#0066b3]/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#2dbd6e]/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>

      {/* Content */}
      <div className="relative z-10">
        {/* Category Filter */}
        <div className="max-w-7xl mx-auto px-4 mb-12 pt-32 mt-16">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-[#0066b3] text-white shadow-lg shadow-[#0066b3]/50'
                    : 'bg-white text-gray-700 hover:bg-gray-50 border-2 border-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="max-w-7xl mx-auto px-4 pb-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article 
                key={post.id}
                className="group bg-white backdrop-blur-md rounded-2xl shadow-xl overflow-hidden border-2 border-gray-200 hover:border-[#0066b3] transition-all duration-300 hover:shadow-2xl hover:shadow-[#0066b3]/20 hover:-translate-y-2"
              >
                {/* Image */}
                <Link href={`/blog/${post.id}`}>
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-[#0066b3] text-white px-4 py-2 rounded-full text-sm font-semibold">
                        {post.category}
                      </span>
                    </div>
                  </div>
                </Link>

                {/* Content */}
                <div className="p-6">
                  {/* Meta Info */}
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {new Date(post.date).toLocaleDateString('pl-PL')}
                    </span>
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {post.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <Link href={`/blog/${post.id}`}>
                    <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#0066b3] transition-colors line-clamp-2">
                      {post.title}
                    </h2>
                  </Link>

                  {/* Excerpt */}
                  <p className="text-gray-600 mb-6 line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <Link 
                      href={`/blog/${post.id}`}
                      className="text-[#0066b3] hover:text-[#0088dd] font-semibold flex items-center gap-2 transition-colors"
                    >
                      Czytaj więcej
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>

                    {/* LinkedIn Share Button */}
                    <button
                      onClick={() => shareOnLinkedIn(post)}
                      className="p-2 rounded-lg bg-[#0077b5] hover:bg-[#006399] text-white transition-colors duration-300 group/linkedin"
                      title="Udostępnij na LinkedIn"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Empty State */}
          {filteredPosts.length === 0 && (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">📝</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Brak postów w tej kategorii</h3>
              <p className="text-gray-600">Wkrótce pojawią się nowe artykuły!</p>
            </div>
          )}
        </div>

        {/* Newsletter Section */}
        <section className="py-20 bg-gradient-to-r from-[#0066b3] to-[#2dbd6e]">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Bądź na bieżąco!
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Zapisz się do newslettera i otrzymuj najnowsze artykuły prosto na swoją skrzynkę
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Twój adres e-mail"
                className="flex-1 px-6 py-4 rounded-lg bg-white border-2 border-white text-gray-900 placeholder-gray-500 focus:outline-none focus:border-white focus:ring-2 focus:ring-white/50 transition-all"
              />
              <button className="px-8 py-4 bg-white hover:bg-gray-100 text-[#0066b3] font-semibold rounded-lg transition-colors duration-300 shadow-lg">
                Zapisz się
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}