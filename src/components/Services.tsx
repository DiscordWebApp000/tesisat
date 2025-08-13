import React from 'react';

const Services = () => {
  const services = [
    {
      icon: "🚰",
      title: "Su Tesisatı",
      description: "Su kaçağı tespiti, boru değişimi, musluk tamiri ve tüm su tesisatı işleriniz.",
      slug: "su-tesisati"
    },
    {
      icon: "🔥",
      title: "Isıtma Sistemleri",
      description: "Kombi kurulumu, petek montajı, ısıtma sistemi bakım ve onarımı.",
      slug: "isitma-sistemleri"
    },
    {
      icon: "🚿",
      title: "Banyo & Mutfak",
      description: "Banyo ve mutfak tesisatı, gider tıkanıklığı, lavabo montajı.",
      slug: "banyo-mutfak"
    },
    {
      icon: "🔧",
      title: "Acil Servis",
      description: "7/24 acil tesisat arıza giderme, su kesintisi ve acil müdahale.",
      slug: "acil-servis"
    },
    {
      icon: "🏠",
      title: "Yeni Tesisat",
      description: "Yeni bina tesisat kurulumu, proje tasarımı ve uygulama.",
      slug: "yeni-tesisat"
    },
    {
      icon: "🔍",
      title: "Tesisat Kontrolü",
      description: "Detaylı tesisat kontrolü, raporlama ve önleyici bakım hizmetleri.",
      slug: "tesisat-kontrolu"
    }
  ];

  return (
    <section id="hizmetler" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-50/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Hizmetlerimiz
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4 sm:px-0">
            Profesyonel ekibimizle tesisat alanında kapsamlı çözümler sunuyoruz.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-white border border-gray-200 rounded-xl p-4 sm:p-6 hover:border-amber-300 hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              {/* Icon */}
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-amber-50 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                <span className="text-xl sm:text-2xl">{service.icon}</span>
              </div>

              {/* Title */}
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-3 sm:mb-4">
                {service.description}
              </p>

              {/* Learn More Link */}
              <a href={`/hizmetlerimiz/${service.slug}`} className="inline-flex items-center text-amber-600 hover:text-amber-700 font-medium text-sm transition-colors duration-200">
                Detayları Gör
                <svg className="w-3 h-3 sm:w-4 sm:h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          ))}
        </div>

    
      </div>
    </section>
  );
};

export default Services;
