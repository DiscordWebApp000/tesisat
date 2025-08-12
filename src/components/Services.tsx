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
    <section id="hizmetler" className="py-20 bg-emerald-50/30">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Hizmetlerimiz
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Profesyonel ekibimizle tesisat alanında kapsamlı çözümler sunuyoruz.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-white border border-gray-200 rounded-xl p-6 hover:border-emerald-300 hover:shadow-lg transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-12 h-12 bg-emerald-50 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">{service.icon}</span>
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed mb-4">
                {service.description}
              </p>

                                   {/* Learn More Link */}
                     <a href={`/hizmetlerimiz/${service.slug}`} className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium text-sm transition-colors duration-200">
                       Detayları Gör
                       <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                       </svg>
                     </a>
            </div>
          ))}
        </div>

        {/* Simple CTA */}
        <div className="mt-16 text-center">
          <div className="bg-white border border-gray-200 rounded-xl p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Özel Hizmet Paketleri
            </h3>
            <p className="text-gray-600 mb-6">
              Eviniz veya iş yeriniz için özel olarak hazırladığımız hizmet paketlerimizi inceleyin.
            </p>
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300">
              Paketleri İncele
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
