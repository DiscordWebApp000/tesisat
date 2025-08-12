'use client'
import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
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

const HaberDetay = () => {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;
  const [haber, setHaber] = useState<Haber | null>(null);
  const [relatedHaberler, setRelatedHaberler] = useState<Haber[]>([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchHaber = async () => {
      try {
        const response = await fetch('/data/haberler.json');
        const data = await response.json();
        const currentHaber = data.haberler.find((h: Haber) => h.slug === slug);
        
        if (currentHaber) {
          setHaber(currentHaber);
          // İlgili haberleri bul (aynı kategoriden, mevcut haber hariç)
          const related = data.haberler
            .filter((h: Haber) => h.categoryId === currentHaber.categoryId && h.slug !== slug)
            .slice(0, 3);
          setRelatedHaberler(related);
        }
        setLoading(false);
      } catch (error) {
        console.error('Haber verisi yüklenirken hata:', error);
        setLoading(false);
      }
    };

    fetchHaber();
  }, [slug]);

  // Haber bulunamadıysa 404
  if (!haber && !loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Haber Bulunamadı</h1>
          <p className="text-gray-600 mb-8">Aradığınız haber mevcut değil.</p>
          <Link 
            href="/haberler"
            className="bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
          >
            Haberlere Dön
          </Link>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto mb-4"></div>
          <p className="text-gray-600">Haber yükleniyor...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6 py-4">
        
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Article Header */}
        <header className="mb-12">
          {/* Category Badge */}
          <div className="mb-6">
            <span className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
              {haber?.category}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {haber?.title}
          </h1>

          {/* Meta Information */}
          <div className="flex items-center gap-6 text-gray-500 text-sm mb-8">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {haber?.date}
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {haber?.readTime}
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              {haber?.author}
            </div>
          </div>

          {/* Excerpt */}
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl">
            {haber?.excerpt}
          </p>
        </header>

        {/* Featured Image */}
        <div className="mb-12">
          <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden">
            <Image 
              src={haber?.image || ''}
              alt={haber?.title || ''}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Article Content */}
        <article className="mb-16">
          <div className="max-w-3xl mx-auto">
            <div 
              className="prose prose-gray prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: haber?.content || '' }}
            />
          </div>
        </article>

        {/* Divider */}
        <div className="border-t border-gray-100 my-16"></div>

        {/* CTA Section */}
        <div className="bg-gray-50 rounded-2xl p-8 md:p-12 text-center mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Tesisat Sorunlarınız İçin Uzman Ekibimizle İletişime Geçin
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Profesyonel tesisat hizmetleri için hemen bizimle iletişime geçin. 
            7/24 hizmetinizdeyiz.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/iletisim"
              className="bg-gray-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
            >
              İletişime Geç
            </Link>
            <a 
              href="tel:+905325550123"
              className="border-2 border-gray-900 text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-900 hover:text-white transition-colors"
            >
              📞 Hemen Ara
            </a>
          </div>
        </div>

        {/* Related Articles */}
        {relatedHaberler.length > 0 && (
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              İlgili Haberler
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedHaberler.map((relatedHaber) => (
                <Link 
                  key={relatedHaber.id}
                  href={`/haberler/${relatedHaber.slug}`}
                  className="group block"
                >
                  <article className="bg-white border border-gray-100 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300">
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      <Image 
                        src={relatedHaber.image}
                        alt={relatedHaber.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
                        <span>{relatedHaber.date}</span>
                        <span>•</span>
                        <span>{relatedHaber.readTime}</span>
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors line-clamp-2">
                        {relatedHaber.title}
                      </h4>
                      <p className="text-gray-600 text-sm line-clamp-3">
                        {relatedHaber.excerpt}
                      </p>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Back to News */}
        <div className="text-center">
          <Link 
            href="/haberler"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 font-medium transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Tüm Haberlere Dön
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HaberDetay;
