'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { db } from '@/lib/firebase';
import { collection, getDocs } from 'firebase/firestore';

interface Haber {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  content: string;
  imageUrl: string;
  tags: string[];
  featured: boolean;
  isActive: boolean;
  order: number;
  createdAt: string;
  updatedAt: string;
}

const News = () => {
  const [haberler, setHaberler] = useState<Haber[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        
        // Fetch news from Firestore
        const newsSnapshot = await getDocs(collection(db, 'haberler'));
        const newsData = newsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) as Haber[];
        
        // Filter active news and sort by order, then take only the latest 3
        const activeNews = newsData.filter(haber => haber.isActive);
        activeNews.sort((a, b) => (a.order || 0) - (b.order || 0));
        const latestNews = activeNews.slice(0, 3);
        
        setHaberler(latestNews);
      } catch (error) {
        console.error('Haber verisi yüklenirken hata:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <div className="w-12 h-12 border-4 border-amber-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-gray-600">Haberler yükleniyor...</p>
          </div>
        </div>
      </section>
    );
  }

  if (haberler.length === 0) {
    return null; // Don't show anything if no news
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-amber-600 text-sm font-medium mb-4">
            <div className="w-1 h-1 bg-amber-600 rounded-full"></div>
            <span>GÜNCEL HABERLERİMİZ</span>
            <div className="w-1 h-1 bg-amber-600 rounded-full"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Blog & Haberler
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Tesisat dünyasından en güncel haberler ve uzman önerilerini takip edin.
          </p>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {haberler.map((haber) => (
            <article
              key={haber.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                {haber.imageUrl ? (
                  <Image
                    src={haber.imageUrl}
                    alt={haber.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                    <span className="text-4xl text-gray-400">📰</span>
                  </div>
                )}
                
                {/* Featured Badge */}
                {haber.featured && (
                  <div className="absolute top-4 left-4 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    ⭐ ÖNE ÇIKAN
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
                  <span>{new Date(haber.createdAt).toLocaleDateString('tr-TR')}</span>
                  <span>•</span>
                </div>
                
                <Link href={`/haberler/${haber.id}`}>
                  <h3 className="font-bold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors cursor-pointer line-clamp-2">
                    {haber.title}
                  </h3>
                </Link>
                
                {haber.subtitle && (
                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">{haber.subtitle}</p>
                )}
                
                <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                  {haber.description}
                </p>
                
                {/* Tags */}
                {haber.tags && haber.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {haber.tags.slice(0, 2).map((tag, index) => (
                      <span
                        key={index}
                        className="inline-block px-2 py-1 bg-amber-100 text-amber-700 text-xs rounded-full font-medium"
                      >
                        #{tag}
                      </span>
                    ))}
                    {haber.tags.length > 2 && (
                      <span className="inline-block px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                        +{haber.tags.length - 2}
                      </span>
                    )}
                  </div>
                )}
                
                <Link 
                  href={`/haberler/${haber.id}`}
                  className="inline-flex items-center text-amber-600 hover:text-amber-700 font-medium text-sm transition-colors duration-200"
                >
                  Devamını Oku
                  <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link 
            href="/haberler"
            className="inline-flex items-center bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
          >
            Tüm Haberleri Gör
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default News;

