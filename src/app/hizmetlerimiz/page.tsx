import React from 'react';
import Image from 'next/image';

const ServicesPage = () => {
  const services = [
    {
      icon: "🕳️",
      title: "Kanalizasyon",
      description: "Kanalizasyon görüntüleme Ve Kanalizasyon açma  işleriniz.",
      features: [
        "Kanalizasyon Görüntüleme",
        "Tıkalı Kanalizasyon Açma",
        "kanalizasyon İşlemleri "
      ],
      image: "/img/tünel.jpg"
    },
    {
      icon: "👷🏼",
      title: "Kanalizasyon Tünel",
      description: "Binanızın Altına Kanalizasyon Tünel Kazma İşleriniz",
      features: [
        "Tünel kazma ",
        "Tünel Kapatma",
        "Kanalizasyon Hattı açma "
      ],
      image: "/img/slider.jpg"
    },
    {
      icon: "🚿",
      title: "Banyo & Mutfak",
      description: "Banyo ve mutfak tesisatı, gider tıkanıklığı,açma Hizmeti",
      features: [
        "Banyo Gideri Açma",
        "Mutfak Gideri Açma",
        "Gider tıkanıklığı açma"
      ],
      image: "/img/gider.jpg"
    },
    {
      icon: "🔧",
      title: "Acil Servis",
      description: "7/24 acil tesisat arıza giderme, su kesintisi ve acil müdahale.",
      features: [
        "7/24 acil müdahale",
        "Tıkalı Gider Sorunu",
        "Acil tesisat onarımı",
        "Gece müdahale hizmeti",
        "Hızlı sorun tespiti",
        "Geçici çözüm uygulama"
      ],
      image: "/img/acil.jpg"
    },
    {
      icon: "🏠",
      title: "Yeni Tesisat",
      description: "Yeni bina tesisat kurulumu, proje tasarımı ve uygulama.",
      features: [
        "Yeni bina tesisat projesi",
        "Tesisat sistem tasarımı",
        "Malzeme seçimi ve tedariki",
        "Profesyonel kurulum",
        "Test ve devreye alma",
        "Kullanım kılavuzu"
      ],
      image: "/img/tesisat.jpg"
    },
    {
      icon: "🔍",
      title: "Tesisat Kontrolü",
      description: "Detaylı tesisat kontrolü, raporlama ve önleyici bakım hizmetleri.",
      features: [
        "Detaylı tesisat kontrolü",
        "Arıza tespiti ve raporlama",
        "Önleyici bakım planı",
        "Enerji verimliliği analizi",
        "Güvenlik kontrolü",
        "Bakım takip sistemi"
      ],
      image: "/img/kontrol.jpg"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-32 text-white">
        <div className="absolute inset-0">
          <Image
            src="/img/sayfa2.jpg"
            alt="Hizmetlerimiz Arka Plan"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
            quality={85}
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+JNwTLI5xY/wAk/8QAFQEBAQAAAAAAAAAAAAAAAAAAAwUG/9oACAEBAwE/AMZb3X7f/9k="
          />
        </div>
        <div className="absolute inset-0 bg-black opacity-75"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="text-amber-400">Hizmetlerimiz</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-200 max-w-3xl mx-auto">
            Profesyonel ekibimizle tesisat alanında kapsamlı çözümler sunuyoruz.
          </p>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl">
              <div className="text-2xl font-bold text-amber-400">20+</div>
              <div className="text-sm text-amber-100">Yıl Deneyim</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl">
              <div className="text-2xl font-bold text-amber-400">500+</div>
              <div className="text-sm text-amber-100">Tamamlanan İş</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl">
              <div className="text-2xl font-bold text-amber-400">24/7</div>
              <div className="text-sm text-amber-100">Hizmet</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview Section - Different Layout */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-amber-600 text-sm font-medium mb-4">
              <div className="w-1 h-1 bg-amber-600 rounded-full"></div>
              <span>HİZMETLERİMİZ</span>
              <div className="w-1 h-1 bg-amber-600 rounded-full"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Neler Sunuyoruz?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              20 yıllık deneyimimizle tesisat alanında her türlü ihtiyacınızı karşılıyoruz.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <div 
                key={index}
                className="group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-amber-300 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row">
                  {/* Service Image */}
                  <div className="relative lg:w-1/2 h-48 lg:h-auto overflow-hidden">
                    <Image 
                      src={service.image} 
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                   
                  </div>

                  {/* Service Content */}
                  <div className="lg:w-1/2 p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    
                    {/* Features List */}
                    <ul className="space-y-2 mb-6">
                      {service.features.slice(0, 3).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2 text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-amber-500 rounded-full"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <a 
                      href="/iletisim"
                      className="block w-full bg-amber-600 hover:bg-amber-700 text-white py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 text-center"
                    >
                      İletişime Geç
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services - Different Design */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-amber-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Neden <span className="text-amber-600">Bizim</span> Hizmetlerimizi Seçmelisiniz?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Tesisat işlerinizde güvenilir, kaliteli ve hızlı hizmet almak için 
              doğru adrestesiniz.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">⭐</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">20+ Yıl Deneyim</h3>
              <p className="text-gray-600">Sektörde 20 yılı aşkın deneyimimizle her türlü tesisat sorununu çözüyoruz.</p>
            </div>
            
            <div className="text-center bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🕒</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">7/24 Hizmet</h3>
              <p className="text-gray-600">Acil durumlarınızda 7/24 yanınızdayız. Gece gündüz demeden hizmet veriyoruz.</p>
            </div>
            
            <div className="text-center bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🔒</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Garantili İşçilik</h3>
              <p className="text-gray-600">Tüm işlerimizde garanti veriyoruz. Müşteri memnuniyeti bizim önceliğimiz.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Process - Different Layout */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Hizmet Sürecimiz
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Tesisat sorunlarınızı nasıl çözdüğümüzü adım adım açıklayalım.
            </p>
          </div>

          <div className="relative">
            {/* Connection Line */}
            <div className="hidden md:block absolute top-8 left-1/2 transform -translate-x-1/2 w-full h-0.5 bg-amber-200"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
              <div className="text-center">
                <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-2xl text-white">📞</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">1. İletişim</h3>
                <p className="text-gray-600 text-sm">Bize ulaşın, sorununuzu anlatın</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-2xl text-white">🔍</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">2. Keşif</h3>
                <p className="text-gray-600 text-sm">Ücretsiz keşif ve fiyat teklifi</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-2xl text-white">🔧</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">3. Uygulama</h3>
                <p className="text-gray-600 text-sm">Profesyonel ekip ile uygulama</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-2xl text-white">✅</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">4. Teslim</h3>
                <p className="text-gray-600 text-sm">Test ve garanti ile teslim</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Different Design */}
      <section className="relative py-20 text-white">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/img/sayfa2.jpg')`
          }}
        ></div>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-amber-900 bg-opacity-80"></div>
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Hizmet Almaya Hazır mısınız?
          </h2>
          <p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto">
            Tesisat sorunlarınızı çözmek için uzman ekibimizle iletişime geçin.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/iletisim"
              className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              📞 Hemen Ara
            </a>
            <a 
              href="/iletisim"
              className="border-2 border-white text-white hover:bg-white hover:text-amber-600 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300"
            >
              📋 Teklif Al
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
