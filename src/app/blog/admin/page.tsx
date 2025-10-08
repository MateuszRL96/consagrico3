'use client';
import { useState } from 'react';
import Image from 'next/image';

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

export default function BlogAdmin() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);
  
  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    content: '',
    image: '',
    author: 'Zespół Conagrico',
    category: 'Aktualności',
    readTime: '5 min'
  });

  const categories = ['Innowacje', 'Ekologia', 'Poradniki', 'Aktualności'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newPost: BlogPost = {
      id: editingPost?.id || Date.now().toString(),
      ...formData,
      date: editingPost?.date || new Date().toISOString().split('T')[0]
    };

    if (editingPost) {
      setPosts(posts.map(p => p.id === editingPost.id ? newPost : p));
    } else {
      setPosts([newPost, ...posts]);
    }

    // Reset form
    setFormData({
      title: '',
      excerpt: '',
      content: '',
      image: '',
      author: 'Zespół Conagrico',
      category: 'Aktualności',
      readTime: '5 min'
    });
    setEditingPost(null);
    setIsFormOpen(false);
  };

  const handleEdit = (post: BlogPost) => {
    setEditingPost(post);
    setFormData({
      title: post.title,
      excerpt: post.excerpt,
      content: post.content,
      image: post.image,
      author: post.author,
      category: post.category,
      readTime: post.readTime
    });
    setIsFormOpen(true);
  };

  const handleDelete = (id: string) => {
    if (confirm('Czy na pewno chcesz usunąć ten post?')) {
      setPosts(posts.filter(p => p.id !== id));
    }
  };

  const shareOnLinkedIn = (post: BlogPost) => {
    const url = `${window.location.origin}/blog/${post.id}`;
    const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
    window.open(linkedInUrl, '_blank', 'width=600,height=600');
  };

  const exportToJSON = () => {
    const dataStr = JSON.stringify(posts, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'blog-posts.json';
    link.click();
  };

  return (
    <div className="min-h-screen bg-gray-900 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l25.98 15v30L30 60 4.02 45V15z' fill='none' stroke='%230066b3' stroke-width='1'/%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-[#0066b3]/20 to-[#2dbd6e]/20"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-24">
        {/* Header */}
        <div className="flex justify-between items-center mb-12">
          <div>
            <h1 className="text-4xl font-bold text-white mb-2">Panel Administracyjny Bloga</h1>
            <p className="text-gray-400">Zarządzaj postami i publikuj na LinkedIn</p>
          </div>
          <div className="flex gap-4">
            <button
              onClick={exportToJSON}
              className="px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white font-semibold rounded-lg transition-colors duration-300"
            >
              📥 Eksportuj JSON
            </button>
            <button
              onClick={() => {
                setIsFormOpen(true);
                setEditingPost(null);
                setFormData({
                  title: '',
                  excerpt: '',
                  content: '',
                  image: '',
                  author: 'Zespół Conagrico',
                  category: 'Aktualności',
                  readTime: '5 min'
                });
              }}
              className="px-6 py-3 bg-[#0066b3] hover:bg-[#0088dd] text-white font-semibold rounded-lg transition-colors duration-300 shadow-lg shadow-[#0066b3]/50"
            >
              ➕ Nowy Post
            </button>
          </div>
        </div>

        {/* Form Modal */}
        {isFormOpen && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-gray-800 rounded-2xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto border-2 border-gray-700">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-white">
                  {editingPost ? 'Edytuj Post' : 'Nowy Post'}
                </h2>
                <button
                  onClick={() => setIsFormOpen(false)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Title */}
                <div>
                  <label className="block text-white font-semibold mb-2">Tytuł</label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-[#0066b3]"
                    required
                  />
                </div>

                {/* Excerpt */}
                <div>
                  <label className="block text-white font-semibold mb-2">Krótki opis (excerpt)</label>
                  <textarea
                    value={formData.excerpt}
                    onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                    rows={3}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-[#0066b3]"
                    required
                  />
                </div>

                {/* Content */}
                <div>
                  <label className="block text-white font-semibold mb-2">Treść (HTML)</label>
                  <textarea
                    value={formData.content}
                    onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                    rows={12}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white font-mono text-sm focus:outline-none focus:border-[#0066b3]"
                    placeholder="<h2>Nagłówek</h2><p>Treść...</p>"
                    required
                  />
                  <p className="text-gray-400 text-sm mt-2">
                    Możesz używać tagów HTML: h2, h3, p, ul, li, strong, em
                  </p>
                </div>

                {/* Image URL */}
                <div>
                  <label className="block text-white font-semibold mb-2">URL obrazu</label>
                  <input
                    type="text"
                    value={formData.image}
                    onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-[#0066b3]"
                    placeholder="/lab1 (2).jpg"
                    required
                  />
                </div>

                {/* Category & Read Time */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white font-semibold mb-2">Kategoria</label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-[#0066b3]"
                    >
                      {categories.map(cat => (
                        <option key={cat} value={cat}>{cat}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-white font-semibold mb-2">Czas czytania</label>
                    <input
                      type="text"
                      value={formData.readTime}
                      onChange={(e) => setFormData({ ...formData, readTime: e.target.value })}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-[#0066b3]"
                      placeholder="5 min"
                      required
                    />
                  </div>
                </div>

                {/* Author */}
                <div>
                  <label className="block text-white font-semibold mb-2">Autor</label>
                  <input
                    type="text"
                    value={formData.author}
                    onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-[#0066b3]"
                    required
                  />
                </div>

                {/* Buttons */}
                <div className="flex gap-4 pt-4">
                  <button
                    type="submit"
                    className="flex-1 px-6 py-3 bg-[#0066b3] hover:bg-[#0088dd] text-white font-semibold rounded-lg transition-colors duration-300"
                  >
                    {editingPost ? 'Zapisz zmiany' : 'Opublikuj post'}
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsFormOpen(false)}
                    className="px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white font-semibold rounded-lg transition-colors duration-300"
                  >
                    Anuluj
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Posts List */}
        <div className="space-y-6">
          {posts.length === 0 ? (
            <div className="text-center py-20 bg-gray-800/60 backdrop-blur-md rounded-2xl border-2 border-gray-700/50">
              <div className="text-6xl mb-4">📝</div>
              <h3 className="text-2xl font-bold text-white mb-2">Brak postów</h3>
              <p className="text-gray-400 mb-6">Dodaj pierwszy post, aby rozpocząć!</p>
              <button
                onClick={() => setIsFormOpen(true)}
                className="px-6 py-3 bg-[#0066b3] hover:bg-[#0088dd] text-white font-semibold rounded-lg transition-colors duration-300"
              >
                Dodaj post
              </button>
            </div>
          ) : (
            posts.map((post) => (
              <div
                key={post.id}
                className="bg-gray-800/60 backdrop-blur-md rounded-2xl p-6 border-2 border-gray-700/50 hover:border-[#0066b3]/50 transition-all duration-300"
              >
                <div className="flex gap-6">
                  {/* Image */}
                  <div className="relative w-48 h-32 rounded-lg overflow-hidden flex-shrink-0">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <span className="inline-block bg-[#0066b3] text-white px-3 py-1 rounded-full text-sm font-semibold mb-2">
                          {post.category}
                        </span>
                        <h3 className="text-xl font-bold text-white">{post.title}</h3>
                      </div>
                    </div>
                    
                    <p className="text-gray-400 mb-4 line-clamp-2">{post.excerpt}</p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm text-gray-400">
                        <span>{new Date(post.date).toLocaleDateString('pl-PL')}</span>
                        <span>•</span>
                        <span>{post.readTime}</span>
                        <span>•</span>
                        <span>{post.author}</span>
                      </div>

                      <div className="flex gap-2">
                        <button
                          onClick={() => shareOnLinkedIn(post)}
                          className="p-2 rounded-lg bg-[#0077b5] hover:bg-[#006399] text-white transition-colors"
                          title="Udostępnij na LinkedIn"
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                          </svg>
                        </button>
                        <button
                          onClick={() => handleEdit(post)}
                          className="p-2 rounded-lg bg-gray-700 hover:bg-gray-600 text-white transition-colors"
                          title="Edytuj"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                          </svg>
                        </button>
                        <button
                          onClick={() => handleDelete(post.id)}
                          className="p-2 rounded-lg bg-red-600 hover:bg-red-700 text-white transition-colors"
                          title="Usuń"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Info Box */}
        <div className="mt-12 p-6 bg-blue-900/30 border-2 border-blue-700/50 rounded-2xl">
          <h3 className="text-xl font-bold text-white mb-3">💡 Wskazówki</h3>
          <ul className="text-gray-300 space-y-2">
            <li>• Posty są przechowywane lokalnie w przeglądarce (localStorage)</li>
            <li>• Użyj przycisku "Eksportuj JSON" aby zapisać kopię zapasową</li>
            <li>• Kliknij ikonę LinkedIn przy poście, aby udostępnić go na LinkedIn</li>
            <li>• W treści możesz używać HTML: &lt;h2&gt;, &lt;h3&gt;, &lt;p&gt;, &lt;ul&gt;, &lt;li&gt;</li>
          </ul>
        </div>
      </div>
    </div>
  );
}