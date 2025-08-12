"use client"
import React from 'react';
import { useState } from 'react';
import Image from 'next/image';

const GalleryPage = () => {
  // State for modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState({
    url: '',
    title: '',
    description: ''
  });

  // Function to open modal
  const openModal = (image: string, title: string, description: string) => {
    setSelectedImage({ url: image, title, description });
    setIsModalOpen(true);
    // Prevent scrolling when modal is open
    document.body.style.overflow = 'hidden';
  };

  // Function to close modal
  const closeModal = () => {
    setIsModalOpen(false);
    // Re-enable scrolling
    document.body.style.overflow = 'auto';
  };

  // Galeri kategorileri
  const categories = [
    { id: 'all', name: 'Tümü', count: 24 },
    { id: 'bathroom', name: 'Banyo', count: 8 },
    { id: 'kitchen', name: 'Mutfak', count: 6 },
    { id: 'heating', name: 'Isıtma', count: 5 },
    { id: 'plumbing', name: 'Tesisat', count: 5 }
  ];

  // Galeri fotoğrafları
  const galleryItems = [
    {
      id: 1,
      category: 'bathroom',
      title: 'Modern Banyo Tesisatı',
      description: 'Şık ve fonksiyonel banyo tasarımı',
      image: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      beforeAfter: false
    },
    {
      id: 2,
      category: 'kitchen',
      title: 'Mutfak Su Tesisatı',
      description: 'Komple mutfak tesisat yenileme',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      beforeAfter: false
    },
    {
      id: 3,
      category: 'heating',
      title: 'Kombi Kurulumu',
      description: 'Yeni nesil kombi montajı',
      image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      beforeAfter: false
    },
    {
      id: 4,
      category: 'plumbing',
      title: 'Ana Su Hattı',
      description: 'Bina ana su hattı yenileme',
      image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      beforeAfter: false
    },
    {
      id: 5,
      category: 'bathroom',
      title: 'Banyo Yenileme - Önce/Sonra',
      description: 'Komple banyo tadilatı',
      image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      beforeAfter: true
    },
    {
      id: 6,
      category: 'kitchen',
      title: 'Mutfak Lavabo Montajı',
      description: 'Granit evye ve musluk takımı',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      beforeAfter: false
    },
    {
      id: 7,
      category: 'heating',
      title: 'Yerden Isıtma Sistemi',
      description: 'Modern yerden ısıtma kurulumu',
      image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      beforeAfter: false
    },
    {
      id: 8,
      category: 'bathroom',
      title: 'Duşakabin Kurulumu',
      description: 'Cam duşakabin ve tesisat',
      image: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      beforeAfter: false
    }
  ];

  return (
    <div>
      {/* Hero Section - Galeri'ye özel */}
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
            <span className="text-blue-400">Galeri</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-200 max-w-3xl mx-auto">
            Tamamladığımız projelerden seçkiler ve işçiliğimizin örnekleri.
          </p>
          
          {/* Quick Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl">
              <div className="text-2xl font-bold text-blue-300">100+</div>
              <div className="text-sm text-blue-100">Tamamlanan Proje</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl">
              <div className="text-2xl font-bold text-blue-300">5</div>
              <div className="text-sm text-blue-100">Farklı Kategori</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl">
              <div className="text-2xl font-bold text-blue-300">100%</div>
              <div className="text-sm text-blue-100">Müşteri Memnuniyeti</div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          {/* Category Filter */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-emerald-600 text-sm font-medium mb-4">
              <div className="w-1 h-1 bg-emerald-600 rounded-full"></div>
              <span>PROJELERİMİZ</span>
              <div className="w-1 h-1 bg-emerald-600 rounded-full"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Çalışma Örneklerimiz
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Yaptığımız işlerin kalitesini fotoğraflarla görebilirsiniz.
            </p>

            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  className="px-4 py-2 rounded-full border border-gray-300 text-gray-700 hover:border-emerald-500 hover:text-emerald-600 hover:bg-emerald-50 transition-all duration-200 text-sm font-medium"
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {galleryItems.map((item) => (
              <div
                key={item.id}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  
                  {/* Before/After Badge */}
                  {item.beforeAfter && (
                    <div className="absolute top-4 left-4 bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                      Önce/Sonra
                    </div>
                  )}

                  {/* Category Badge */}
                  <div className="absolute top-4 right-4 bg-emerald-500 text-white text-xs font-medium px-2 py-1 rounded-full">
                    {categories.find(c => c.id === item.category)?.name}
                  </div>

                  {/* Overlay Content */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="font-semibold text-sm mb-1">{item.title}</h3>
                    <p className="text-xs text-gray-200">{item.description}</p>
                  </div>

                  {/* View Button */}
                  <div className="absolute inset-0 bg-emerald-600/0 group-hover:bg-emerald-600/20 transition-all duration-300 flex items-center justify-center">
                    <button 
                      onClick={() => openModal(item.image, item.title, item.description)}
                      className="bg-white text-emerald-600 p-3 rounded-full opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-100 transition-all duration-300 shadow-lg"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 9a3 3 0 000 6 3 3 0 000-6zM12 17a5 5 0 110-10 5 5 0 010 10zM12 4.5C7.5 4.5 4.1 7.5 3 12c1.1 4.5 4.5 7.5 9 7.5s7.9-3 9-7.5c-1.1-4.5-4.5-7.5-9-7.5z"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
              Daha Fazla Göster
            </button>
          </div>
        </div>
      </section>




      {/* Image Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={closeModal}>
          <div 
            className="relative max-w-5xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button 
              className="absolute top-4 right-4 z-10 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all duration-200"
              onClick={closeModal}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <div className="flex flex-col md:flex-row">
              {/* Image */}
              <div className="md:w-3/4 bg-gray-900 relative">
                <Image 
                  src={selectedImage.url} 
                  alt={selectedImage.title}
                  fill
                  className="object-contain" 
                  sizes="(max-width: 768px) 100vw, 75vw"
                />
              </div>
              
              {/* Info */}
              <div className="md:w-1/4 p-6 bg-white mt-12">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{selectedImage.title}</h3>
                <p className="text-gray-600 mb-4">{selectedImage.description}</p>
                
                <div className="border-t border-gray-200 pt-4 mt-12">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Proje Detayları</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center gap-2">
                      <span className="w-4 h-4 bg-emerald-100 rounded-full flex items-center justify-center">
                        <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                      </span>
                      <span>Profesyonel işçilik</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-4 h-4 bg-emerald-100 rounded-full flex items-center justify-center">
                        <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                      </span>
                      <span>Kaliteli malzeme</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-4 h-4 bg-emerald-100 rounded-full flex items-center justify-center">
                        <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                      </span>
                      <span>2 yıl garanti</span>
                    </li>
                  </ul>
                </div>
                
               
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;
