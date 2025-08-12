'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Haber {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  author: string;
  category: string;
  categoryId: string;
  readTime: string;
  featured: boolean;
}

interface Kategori {
  id: string;
  name: string;
  count: number;
}

const NewsPage = () => {
  const [haberler, setHaberler] = useState<Haber[]>([]);
  const [kategoriler, setKategoriler] = useState<Kategori[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/data/haberler.json');
        const data = await response.json();
        setHaberler(data.haberler);
        setKategoriler(data.kategoriler);
        setLoading(false);
      } catch (error) {
        console.error('Haber verisi yüklenirken hata:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Seçili kategoriye göre haberleri filtrele
  const filteredHaberler = selectedCategory === 'all' 
    ? haberler 
    : haberler.filter(haber => haber.categoryId === selectedCategory);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Haberler yükleniyor...</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-32 text-white">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("https://media.wusa9.com/assets/WUSA/images/ccba71a4-70ed-49a2-9bd4-88b395c21ce0/ccba71a4-70ed-49a2-9bd4-88b395c21ce0_1920x1080.jpg")'
          }}
        />
        <div className="absolute inset-0 bg-black opacity-75"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="text-blue-400">Haberler</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-200 max-w-3xl mx-auto">
            Tesisat dünyasından güncel haberler, ipuçları ve faydalı bilgiler.
          </p>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl">
              <div className="text-2xl font-bold text-blue-300">50+</div>
              <div className="text-sm text-blue-100">Faydalı Makale</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl">
              <div className="text-2xl font-bold text-blue-300">5</div>
              <div className="text-sm text-blue-100">Farklı Kategori</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl">
              <div className="text-2xl font-bold text-blue-300">1000+</div>
              <div className="text-sm text-blue-100">Aylık Okuyucu</div>
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          {/* Category Filter */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-emerald-600 text-sm font-medium mb-4">
              <div className="w-1 h-1 bg-emerald-600 rounded-full"></div>
              <span>GÜNCEL HABERLERİMİZ</span>
              <div className="w-1 h-1 bg-emerald-600 rounded-full"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Blog & Haberler
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Tesisat dünyasından en güncel haberler ve uzman önerilerini takip edin.
            </p>

            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-3">
              {kategoriler.map((kategori) => (
                <button
                  key={kategori.id}
                  onClick={() => setSelectedCategory(kategori.id)}
                  className={`px-4 py-2 rounded-full border text-sm font-medium transition-all duration-200 ${
                    selectedCategory === kategori.id
                      ? 'border-emerald-500 text-emerald-600 bg-emerald-50'
                      : 'border-gray-300 text-gray-700 hover:border-emerald-500 hover:text-emerald-600 hover:bg-emerald-50'
                  }`}
                >
                  {kategori.name} ({kategori.count})
                </button>
              ))}
            </div>
          </div>

          {/* Featured Article */}
          {filteredHaberler.filter(haber => haber.featured).map((haber) => (
            <div key={haber.id} className="mb-16 bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="relative h-64 lg:h-auto">
                  <Image
                    src={haber.image}
                    alt={haber.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    ÖNE ÇIKAN
                  </div>
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <span className="bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full text-xs font-medium">
                      {haber.category}
                    </span>
                    <span>{haber.date}</span>
                    <span>•</span>
                    <span>{haber.readTime}</span>
                  </div>
                  <Link href={`/haberler/${haber.slug}`}>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 hover:text-emerald-600 transition-colors cursor-pointer">{haber.title}</h3>
                  </Link>
                  <p className="text-gray-600 leading-relaxed mb-6">{haber.excerpt}</p>
                  <Link 
                    href={`/haberler/${haber.slug}`}
                    className="self-start bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                  >
                    Devamını Oku
                  </Link>
                </div>
              </div>
            </div>
          ))}

          {/* Other Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredHaberler.filter(haber => !haber.featured).map((haber) => (
              <article
                key={haber.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={haber.image}
                    alt={haber.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-emerald-500 text-white text-xs font-medium px-2 py-1 rounded-full">
                    {haber.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
                    <span>{haber.date}</span>
                    <span>•</span>
                    <span>{haber.readTime}</span>
                  </div>
                  <Link href={`/haberler/${haber.slug}`}>
                    <h3 className="font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors cursor-pointer">
                      {haber.title}
                    </h3>
                  </Link>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                    {haber.excerpt}
                  </p>
                  <Link 
                    href={`/haberler/${haber.slug}`}
                    className="text-emerald-600 hover:text-emerald-700 font-medium text-sm transition-colors flex items-center gap-1"
                  >
                    Devamını Oku
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 5l7 7-7 7"/>
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
              Daha Fazla Haber Yükle
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
            <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl">📧</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Haber Bültenimize Abone Olun
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Tesisat dünyasından en son haberler, ipuçları ve özel indirimlerden haberdar olmak için 
              e-posta adresinizi bırakın.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="E-posta adresiniz"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              />
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                Abone Ol
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-4">
              İstediğiniz zaman abonelikten çıkabilirsiniz. Gizlilik politikamızı okuyun.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsPage;
