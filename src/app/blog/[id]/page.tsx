'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useState, useEffect, useMemo } from 'react';

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
}

export default function BlogPost() {
  const params = useParams();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [copied, setCopied] = useState(false);

  // Przykładowe dane - później można pobrać z API/bazy danych
  const posts: BlogPost[] = useMemo(() => [
    {
      id: '1',
      title: 'Innowacje w ochronie roślin - przyszłość rolnictwa',
      excerpt: 'Odkryj najnowsze trendy w technologii ochrony roślin i dowiedz się, jak mogą one wpłynąć na Twoje gospodarstwo.',
      content: `
        <h2>Wprowadzenie</h2>
        <p>Nowoczesne rolnictwo stoi przed wieloma wyzwaniami - od zmian klimatycznych po rosnące wymagania dotyczące zrównoważonego rozwoju. W tym kontekście innowacje w ochronie roślin odgrywają kluczową rolę.</p>
        
        <h2>Najnowsze technologie</h2>
        <p>Współczesna ochrona roślin to nie tylko tradycyjne środki chemiczne. To zaawansowane systemy monitoringu, precyzyjne aplikacje i biologiczne metody kontroli szkodników.</p>
        
        <h3>Precyzyjne rolnictwo</h3>
        <p>Wykorzystanie dronów, sensorów i sztucznej inteligencji pozwala na dokładne określenie potrzeb roślin i optymalne dawkowanie środków ochrony.</p>
        
        <h3>Biologiczne środki ochrony</h3>
        <p>Coraz większą popularność zyskują naturalne metody kontroli szkodników, które są bezpieczne dla środowiska i nie pozostawiają szkodliwych pozostałości.</p>
        
        <h2>Korzyści dla gospodarstw</h2>
        <ul>
          <li>Redukcja kosztów poprzez precyzyjne dawkowanie</li>
          <li>Zwiększenie plonów dzięki lepszej ochronie</li>
          <li>Ochrona środowiska naturalnego</li>
          <li>Spełnienie wymogów certyfikacji</li>
        </ul>
        
        <h2>Podsumowanie</h2>
        <p>Inwestycja w nowoczesne metody ochrony roślin to inwestycja w przyszłość Twojego gospodarstwa. Nasze produkty łączą tradycyjną skuteczność z nowoczesnymi rozwiązaniami.</p>
      `,
      image: '/lab1 (2).jpg',
      author: 'Zespół Conagrico',
      date: '2024-01-15',
      category: 'Innowacje',
      readTime: '5 min'
    },
    {
      id: '2',
      title: 'Zrównoważone rolnictwo - jak dbać o środowisko',
      excerpt: 'Praktyczne wskazówki dotyczące stosowania środków ochrony roślin w sposób przyjazny dla środowiska.',
      content: `
        <h2>Czym jest zrównoważone rolnictwo?</h2>
        <p>Zrównoważone rolnictwo to podejście, które łączy efektywność produkcji z troską o środowisko naturalne i przyszłe pokolenia.</p>
        
        <h2>Praktyczne wskazówki</h2>
        <p>Przedstawiamy sprawdzone metody, które pomogą Ci prowadzić gospodarstwo w sposób odpowiedzialny ekologicznie.</p>
      `,
      image: '/kombajn.jpeg',
      author: 'Zespół Conagrico',
      date: '2024-01-10',
      category: 'Ekologia',
      readTime: '7 min'
    },
    {
      id: '3',
      title: 'Jak zwiększyć plony przy mniejszych kosztach',
      excerpt: 'Sprawdzone metody optymalizacji kosztów przy jednoczesnym zwiększeniu efektywności upraw.',
      content: `
        <h2>Optymalizacja kosztów</h2>
        <p>Dowiedz się, jak efektywnie zarządzać budżetem gospodarstwa bez uszczerbku dla jakości upraw.</p>
        
        <h2>Zwiększanie efektywności</h2>
        <p>Praktyczne porady dotyczące maksymalizacji plonów przy optymalnym wykorzystaniu zasobów.</p>
      `,
      image: '/plant1 (1).jpg',
      author: 'Zespół Conagrico',
      date: '2024-01-05',
      category: 'Poradniki',
      readTime: '6 min'
    }
  ], []);

  useEffect(() => {
    const foundPost = posts.find(p => p.id === params.id);
    setPost(foundPost || null);
  }, [params.id, posts]);

  const shareOnLinkedIn = () => {
    const url = window.location.href;
    const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
    window.open(linkedInUrl, '_blank', 'width=600,height=600');
  };

  const shareOnFacebook = () => {
    const url = window.location.href;
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
    window.open(facebookUrl, '_blank', 'width=600,height=600');
  };

  const shareOnTwitter = () => {
    const url = window.location.href;
    const text = post?.title || '';
    const twitterUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`;
    window.open(twitterUrl, '_blank', 'width=600,height=600');
  };

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!post) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Post nie został znaleziony</h1>
          <Link href="/blog" className="text-[#0066b3] hover:text-[#0088dd] font-semibold">
            Wróć do bloga
          </Link>
        </div>
      </div>
    );
  }

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
        {/* Back Button */}
        <div className="max-w-4xl mx-auto px-4 pt-24">
          <Link 
            href="/blog"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors mb-8"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Wróć do bloga
          </Link>
        </div>

        {/* Article Header */}
        <article className="max-w-4xl mx-auto px-4 pb-20">
          {/* Category Badge */}
          <div className="mb-6">
            <span className="bg-[#0066b3] text-white px-4 py-2 rounded-full text-sm font-semibold">
              {post.category}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {post.title}
          </h1>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8 pb-8 border-b border-gray-200">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>{new Date(post.date).toLocaleDateString('pl-PL')}</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{post.readTime} czytania</span>
            </div>
          </div>

          {/* Featured Image */}
          <div className="relative h-96 rounded-2xl overflow-hidden mb-12 border-2 border-gray-200">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
            />
          </div>

          {/* Share Buttons - Sticky */}
          <div className="lg:fixed lg:left-8 lg:top-1/2 lg:-translate-y-1/2 flex lg:flex-col gap-4 mb-8 lg:mb-0">
            <button
              onClick={shareOnLinkedIn}
              className="p-3 rounded-lg bg-[#0077b5] hover:bg-[#006399] text-white transition-all duration-300 shadow-lg hover:scale-110"
              title="Udostępnij na LinkedIn"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </button>

            <button
              onClick={shareOnFacebook}
              className="p-3 rounded-lg bg-[#1877f2] hover:bg-[#0d65d9] text-white transition-all duration-300 shadow-lg hover:scale-110"
              title="Udostępnij na Facebook"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </button>

            <button
              onClick={shareOnTwitter}
              className="p-3 rounded-lg bg-[#1da1f2] hover:bg-[#0d8bd9] text-white transition-all duration-300 shadow-lg hover:scale-110"
              title="Udostępnij na Twitter"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </button>

            <button
              onClick={copyLink}
              className={`p-3 rounded-lg transition-all duration-300 shadow-lg hover:scale-110 ${
                copied 
                  ? 'bg-[#2dbd6e] text-white' 
                  : 'bg-gray-700 hover:bg-gray-600 text-white'
              }`}
              title="Kopiuj link"
            >
              {copied ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              )}
            </button>
          </div>

          {/* Content */}
          <div 
            className="prose prose-lg max-w-none
              prose-headings:text-gray-900 prose-headings:font-bold
              prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
              prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
              prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6
              prose-ul:text-gray-700 prose-ul:my-6
              prose-li:my-2
              prose-strong:text-gray-900"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Call to Action */}
          <div className="mt-16 p-8 bg-gradient-to-r from-[#0066b3] to-[#2dbd6e] rounded-2xl">
            <h3 className="text-2xl font-bold text-white mb-4">
              Zainteresowany naszymi produktami?
            </h3>
            <p className="text-white/90 mb-6">
              Skontaktuj się z nami, aby dowiedzieć się więcej o naszej ofercie i otrzymać profesjonalne doradztwo.
            </p>
            <Link 
              href="/kontakt"
              className="inline-block px-8 py-4 bg-white hover:bg-gray-100 text-[#0066b3] font-semibold rounded-lg transition-colors duration-300 shadow-lg"
            >
              Skontaktuj się z nami
            </Link>
          </div>
        </article>
      </div>
    </div>
  );
}