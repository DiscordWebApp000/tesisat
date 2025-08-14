'use client'
import React, { useState, useEffect } from 'react';
import { db } from '@/lib/firebase';
import { collection, getDocs } from 'firebase/firestore';
import Image from 'next/image';
import Link from 'next/link';

interface GalleryCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  order: number;
  isActive: boolean;
}

interface GalleryItem {
  id: string;
  title: string;
  description: string;
  categoryId: string;
  imageUrl: string;
  thumbnailUrl: string;
  tags: string[];
  isActive: boolean;
  isFeatured: boolean;
  order: number;
}

const Gallery = () => {
  const [categories, setCategories] = useState<GalleryCategory[]>([]);
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGalleryData = async () => {
      try {
        setLoading(true);
        
        // Fetch categories
        const categoriesSnapshot = await getDocs(collection(db, 'gallery_categories'));
        const categoriesData = categoriesSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) as GalleryCategory[];
        
        // Client-side sorting
        categoriesData.sort((a, b) => (a.order || 0) - (b.order || 0));
        setCategories(categoriesData);

        // Fetch gallery items
        const itemsSnapshot = await getDocs(collection(db, 'gallery_items'));
        const itemsData = itemsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) as GalleryItem[];
        
        // Filter active items, sort by order, and take only the latest 6
        const activeItems = itemsData.filter(item => item.isActive);
        activeItems.sort((a, b) => (a.order || 0) - (b.order || 0));
        const latestItems = activeItems.slice(0, 6);
        
        setGalleryItems(latestItems);
        
      } catch (error) {
        console.error('Galeri verisi yüklenirken hata:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchGalleryData();
  }, []);

  const getCategoryName = (categoryId: string) => {
    const category = categories.find(cat => cat.id === categoryId);
    return category ? category.name : 'Kategori Yok';
  };

  const getCategoryIcon = (categoryId: string) => {
    const category = categories.find(cat => cat.id === categoryId);
    return category ? category.icon : '📷';
  };

  if (loading) {
    return (
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <div className="w-12 h-12 border-4 border-amber-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-gray-600">Galeri yükleniyor...</p>
          </div>
        </div>
      </section>
    );
  }

  if (galleryItems.length === 0) {
    return null; // Don't show anything if no gallery items
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-amber-600 text-sm font-medium mb-4">
            <div className="w-1 h-1 bg-amber-600 rounded-full"></div>
            <span>ÇALIŞMA ÖRNEKLERİMİZ</span>
            <div className="w-1 h-1 bg-amber-600 rounded-full"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Galeri & Projeler
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Başarıyla tamamladığımız projelerden örnekler ve çalışma alanlarımız.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                {item.imageUrl ? (
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                    <span className="text-4xl text-gray-400">📷</span>
                  </div>
                )}
                
                {/* Featured Badge */}
                {item.isFeatured && (
                  <div className="absolute top-4 left-4 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    ⭐ ÖNE ÇIKAN
                  </div>
                )}
                
                {/* Category Badge */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-gray-700 text-xs font-medium px-3 py-1 rounded-full">
                  {getCategoryIcon(item.categoryId)} {getCategoryName(item.categoryId)}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors line-clamp-2">
                  {item.title}
                </h3>
                
                {item.description && (
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                    {item.description}
                  </p>
                )}
                
                {/* Tags */}
                {item.tags && item.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.tags.slice(0, 2).map((tag, index) => (
                      <span
                        key={index}
                        className="inline-block px-2 py-1 bg-amber-100 text-amber-700 text-xs rounded-full font-medium"
                      >
                        #{tag}
                      </span>
                    ))}
                    {item.tags.length > 2 && (
                      <span className="inline-block px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                        +{item.tags.length - 2}
                      </span>
                    )}
                  </div>
                )}
                
                {/* View Details Link */}
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">
                    {getCategoryName(item.categoryId)}
                  </span>
                  <Link 
                    href={`/galeri`}
                    className="inline-flex items-center text-amber-600 hover:text-amber-700 font-medium text-sm transition-colors duration-200"
                  >
                    Detayları Gör
                    <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link 
            href="/galeri"
            className="inline-flex items-center bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
          >
            Tüm Galeriyi Gör
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Gallery;

