import React from 'react';
import Image from 'next/image';

const ServicesPage = () => {
  const services = [
    {
      icon: "🚰",
      title: "Su Tesisatı",
      description: "Su kaçağı tespiti, boru değişimi, musluk tamiri ve tüm su tesisatı işleriniz.",
      features: [
        "Su kaçağı tespiti ve onarımı",
        "Boru değişimi ve yenileme",
        "Musluk ve batarya montajı",
        "Su sayacı kurulumu",
        "Su basıncı ayarlama",
        "Su filtreleme sistemleri"
      ],
      image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      icon: "🔥",
      title: "Isıtma Sistemleri",
      description: "Kombi kurulumu, petek montajı, ısıtma sistemi bakım ve onarımı.",
      features: [
        "Kombi kurulumu ve bakımı",
        "Petek montajı ve değişimi",
        "Yerden ısıtma sistemleri",
        "Kazan kurulumu ve bakımı",
        "Isıtma sistemi optimizasyonu",
        "Enerji tasarrufu çözümleri"
      ],
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      icon: "🚿",
      title: "Banyo & Mutfak",
      description: "Banyo ve mutfak tesisatı, gider tıkanıklığı, lavabo montajı.",
      features: [
        "Banyo tesisatı kurulumu",
        "Mutfak tesisatı düzenleme",
        "Gider tıkanıklığı açma",
        "Lavabo ve evye montajı",
        "Duşakabin kurulumu",
        "WC ve bidet montajı"
      ],
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      icon: "🔧",
      title: "Acil Servis",
      description: "7/24 acil tesisat arıza giderme, su kesintisi ve acil müdahale.",
      features: [
        "7/24 acil müdahale",
        "Su kesintisi çözümü",
        "Acil tesisat onarımı",
        "Gece müdahale hizmeti",
        "Hızlı sorun tespiti",
        "Geçici çözüm uygulama"
      ],
      image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
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
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
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
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-32 text-white">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("https://images.ctfassets.net/3q1a0w8cwuwf/5uX51bWDGc78Fm0ccSp6In/87bfb51906fe64ba7b6a161f0aa780e0/010203-BlogHeaders-December-Schools-Michigan-Plumbing-1920x1080_1x.png")'
          }}
        />
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
            backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLdXhV77INQjs26m7T61uuFSrA2wfHTSggsA&s')`
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
