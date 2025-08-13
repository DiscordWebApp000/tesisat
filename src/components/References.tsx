import React from 'react';
import Image from 'next/image';

const References = () => {
  const references = [
    {
      name: "Ahmet Yılmaz",
      company: "Konut Sahibi",
      location: "Kadıköy, İstanbul",
      rating: 5,
      comment: "Çok profesyonel bir ekip. Su kaçağı sorunumu 2 saatte çözdüler. Kesinlikle tavsiye ederim!",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      name: "Fatma Demir",
      company: "İş Yeri Sahibi",
      location: "Beşiktaş, İstanbul",
      rating: 5,
      comment: "İş yerimizdeki tesisat sorununu çok hızlı çözdüler. 7/24 hizmet gerçekten çok değerli.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      name: "Mehmet Kaya",
      company: "Apartman Yöneticisi",
      location: "Şişli, İstanbul",
      rating: 5,
      comment: "Apartmanımızda yapılan tesisat işleri çok kaliteli. 2 yıldır hiç sorun yaşamadık.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      name: "Ayşe Özkan",
      company: "Ev Sahibi",
      location: "Üsküdar, İstanbul",
      rating: 5,
      comment: "Gece yarısı su kesintisi yaşadık, 1 saatte geldiler. Çok teşekkürler!",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    }
  ];

  return (
    <section id="referanslar" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Müşteri Yorumları
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4 sm:px-0">
            Müşterilerimizin memnuniyeti bizim en büyük başarımızdır.
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {references.map((ref, index) => (
            <div key={index} className="bg-white border border-gray-200 p-4 sm:p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center mb-3">
                <Image 
                  src={ref.image} 
                  alt={ref.name}
                  width={40}
                  height={40}
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover mr-2 sm:mr-3"
                />
                <div>
                  <h4 className="font-semibold text-gray-900 text-xs sm:text-sm">{ref.name}</h4>
                  <p className="text-xs text-gray-600">{ref.company}</p>
                  <p className="text-xs text-gray-500">{ref.location}</p>
                </div>
              </div>
              
              <div className="flex mb-3">
                {[...Array(ref.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xs sm:text-sm">⭐</span>
                ))}
              </div>
              
              <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
                &quot;{ref.comment}&quot;
              </p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="bg-gray-50 p-4 sm:p-6 rounded-xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center">
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-amber-600 mb-1 sm:mb-2">500+</div>
              <p className="text-xs sm:text-sm text-gray-600">Tamamlanan İş</p>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-amber-600 mb-1 sm:mb-2">1000+</div>
              <p className="text-xs sm:text-sm text-gray-600">Mutlu Müşteri</p>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-amber-600 mb-1 sm:mb-2">20+</div>
              <p className="text-xs sm:text-sm text-gray-600">Yıl Deneyim</p>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-amber-600 mb-1 sm:mb-2">24/7</div>
              <p className="text-xs sm:text-sm text-gray-600">Hizmet</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default References;
