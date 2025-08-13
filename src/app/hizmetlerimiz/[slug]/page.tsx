import React from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';

// Services data - JSON'dan gelecek
const servicesData = {
  'su-tesisati': {
    id: 'su-tesisati',
    title: 'Su Tesisatı',
    icon: '🚰',
    description: 'Su kaçağı tespiti, boru değişimi, musluk tamiri ve tüm su tesisatı işleriniz.',
    heroImage: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    features: [
      'Su kaçağı tespiti ve onarımı',
      'Boru değişimi ve yenileme',
      'Musluk ve batarya montajı',
      'Su sayacı kurulumu',
      'Su basıncı ayarlama',
      'Su filtreleme sistemleri',
      'Sıhhi tesisat kurulumu',
      'Gider ve kanalizasyon işleri'
    ],
    detailedInfo: {
      overview: 'Su tesisatı hizmetlerimiz, modern teknoloji ve 20 yıllık deneyimimizle evinizdeki tüm su ile ilgili sorunları çözmek üzere tasarlanmıştır.',
      whyChoose: [
        'Modern kaçak tespit cihazları kullanımı',
        'Orijinal ve kaliteli malzeme garantisi',
        'Minimum yıkım ile maksimum çözüm',
        '2 yıl işçilik garantisi',
        '7/24 acil müdahale hizmeti'
      ],
      process: [
        { step: 1, title: 'Keşif ve Tespit', description: 'Modern cihazlarla sorunun tespiti' },
        { step: 2, title: 'Çözüm Önerisi', description: 'En uygun çözüm ve fiyat teklifi' },
        { step: 3, title: 'Uygulama', description: 'Profesyonel ekiple hızlı çözüm' },
        { step: 4, title: 'Test ve Garanti', description: 'Kalite kontrolü ve garanti belgesi' }
      ]
    },
    gallery: [
      'https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    ],
    pricing: {
      starting: '250₺',
      description: 'Keşif ücretsiz, fiyatlar işin kapsamına göre belirlenir.'
    }
  },
  'isitma-sistemleri': {
    id: 'isitma-sistemleri',
    title: 'Isıtma Sistemleri',
    icon: '🔥',
    description: 'Kombi kurulumu, petek montajı, ısıtma sistemi bakım ve onarımı.',
    heroImage: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    features: [
      'Kombi kurulumu ve bakımı',
      'Petek montajı ve değişimi',
      'Yerden ısıtma sistemleri',
      'Kazan kurulumu ve bakımı',
      'Isıtma sistemi optimizasyonu',
      'Enerji tasarrufu çözümleri',
      'Isıtma kontrol sistemleri',
      'Radyatör ve convektör montajı'
    ],
    detailedInfo: {
      overview: 'Isıtma sistemleri konusunda uzman ekibimizle, kombiden yerden ısıtmaya kadar tüm sistemlerin kurulum, bakım ve onarım hizmetlerini sunuyoruz.',
      whyChoose: [
        'Tüm marka kombi servis yetkisi',
        'Enerji verimli sistem önerileri',
        'Profesyonel kurulum ve test',
        'Yıllık bakım paket seçenekleri',
        'Garanti kapsamında hızlı servis'
      ],
      process: [
        { step: 1, title: 'İhtiyaç Analizi', description: 'Mekanın ısıtma ihtiyacı hesaplanır' },
        { step: 2, title: 'Sistem Tasarımı', description: 'En verimli sistem tasarlanır' },
        { step: 3, title: 'Kurulum', description: 'Profesyonel montaj ve test' },
        { step: 4, title: 'Eğitim ve Garanti', description: 'Kullanım eğitimi ve garanti' }
      ]
    },
    gallery: [
      'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    ],
    pricing: {
      starting: '500₺',
      description: 'Kombi bakımı 350₺\'den başlar. Kurulum fiyatları sistem türüne göre değişir.'
    }
  },
  'banyo-mutfak': {
    id: 'banyo-mutfak',
    title: 'Banyo & Mutfak',
    icon: '🚿',
    description: 'Banyo ve mutfak tesisatı, gider tıkanıklığı, lavabo montajı.',
    heroImage: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    features: [
      'Banyo tesisatı kurulumu',
      'Mutfak tesisatı düzenleme',
      'Gider tıkanıklığı açma',
      'Lavabo ve evye montajı',
      'Duşakabin kurulumu',
      'WC ve bidet montajı',
      'Banyo-mutfak tadilat tesisatı',
      'Sıcak su sistemi kurulumu'
    ],
    detailedInfo: {
      overview: 'Banyo ve mutfak alanlarınızın tesisat ihtiyaçlarını modern çözümlerle karşılıyor, yaşam kalitenizi artırıyoruz.',
      whyChoose: [
        'Hijyenik ve kaliteli malzemeler',
        'Su tasarrufu sağlayan sistemler',
        'Estetik ve fonksiyonel çözümler',
        'Hızlı kurulum ve minimum rahatsızlık',
        'Tadilat sonrası temizlik hizmeti'
      ],
      process: [
        { step: 1, title: 'Alan İnceleme', description: 'Mevcut durum ve ihtiyaç analizi' },
        { step: 2, title: 'Proje Tasarım', description: 'Fonksiyonel tasarım önerisi' },
        { step: 3, title: 'Malzeme Temin', description: 'Kaliteli malzeme temini' },
        { step: 4, title: 'Kurulum ve Son Test', description: 'Profesyonel montaj ve test' }
      ]
    },
    gallery: [
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1620626011761-996317b8d101?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    ],
    pricing: {
      starting: '200₺',
      description: 'Gider açma 150₺, lavabo montajı 200₺\'den başlayan fiyatlarla.'
    }
  },
  'acil-servis': {
    id: 'acil-servis',
    title: 'Acil Servis',
    icon: '🔧',
    description: '7/24 acil tesisat arıza giderme, su kesintisi ve acil müdahale.',
    heroImage: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    features: [
      '7/24 acil müdahale',
      'Su kesintisi çözümü',
      'Acil tesisat onarımı',
      'Gece müdahale hizmeti',
      'Hızlı sorun tespiti',
      'Geçici çözüm uygulama',
      'Acil kaçak tamiri',
      'Kombi acil arıza giderme'
    ],
    detailedInfo: {
      overview: 'Acil durumlarınızda 7/24 hizmetinizdeyiz. Deneyimli ekibimizle en kısa sürede müdahale eder, sorunlarınızı çözeriz.',
      whyChoose: [
        'Ortalama 30 dakika müdahale süresi',
        'Gece-gündüz fark etmez hizmet',
        'Acil durum için özel ekip',
        'Mobil servis aracı ile hızlı ulaşım',
        'Geçici çözümler ile anlık rahatlama'
      ],
      process: [
        { step: 1, title: 'Acil Çağrı', description: 'Size en yakın ekibimizi yönlendiriyoruz' },
        { step: 2, title: 'Hızlı Müdahale', description: '30 dakika içinde yerinde' },
        { step: 3, title: 'Sorun Tespiti', description: 'Hızlı tanı ve çözüm önerisi' },
        { step: 4, title: 'Anlık Çözüm', description: 'Mümkünse anında, değilse geçici çözüm' }
      ]
    },
    gallery: [
      'https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    ],
    pricing: {
      starting: '150₺',
      description: 'Çıkış ücreti 150₺. İş yapılırsa çıkış ücreti düşülür.'
    }
  },
  'yeni-tesisat': {
    id: 'yeni-tesisat',
    title: 'Yeni Tesisat',
    icon: '🏠',
    description: 'Yeni bina tesisat kurulumu, proje tasarımı ve uygulama.',
    heroImage: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    features: [
      'Yeni bina tesisat projesi',
      'Tesisat sistem tasarımı',
      'Malzeme seçimi ve tedariki',
      'Profesyonel kurulum',
      'Test ve devreye alma',
      'Kullanım kılavuzu',
      'Belediye onay işlemleri',
      'İskan sonrası garanti hizmeti'
    ],
    detailedInfo: {
      overview: 'Yeni yapılar için sıfırdan tesisat projesi tasarlıyor, A\'dan Z\'ye tüm kurulum işlemlerini gerçekleştiriyoruz.',
      whyChoose: [
        'Mimari projeye uygun tasarım',
        'Enerji verimli sistem önerileri',
        'Belediye onayları dahil hizmet',
        'Uzun vadeli garanti sistemi',
        'İskan sonrası destek hizmeti'
      ],
      process: [
        { step: 1, title: 'Proje İnceleme', description: 'Mimari proje analizi ve sistem tasarımı' },
        { step: 2, title: 'Teknik Çizim', description: 'Detaylı tesisat projesi hazırlığı' },
        { step: 3, title: 'Malzeme ve Kurulum', description: 'Kaliteli malzeme temini ve kurulum' },
        { step: 4, title: 'Test ve Devreye Alma', description: 'Sistem testleri ve kullanıma hazırlama' }
      ]
    },
    gallery: [
      'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    ],
    pricing: {
      starting: '15.000₺',
      description: 'Proje büyüklüğüne göre. Metrekare başı 75₺\'den başlayan fiyatlar.'
    }
  },
  'tesisat-kontrolu': {
    id: 'tesisat-kontrolu',
    title: 'Tesisat Kontrolü',
    icon: '🔍',
    description: 'Detaylı tesisat kontrolü, raporlama ve önleyici bakım hizmetleri.',
    heroImage: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    features: [
      'Detaylı tesisat kontrolü',
      'Arıza tespiti ve raporlama',
      'Önleyici bakım planı',
      'Enerji verimliliği analizi',
      'Güvenlik kontrolü',
      'Bakım takip sistemi',
      'Fotoğraflı detay raporu',
      'Uzun vadeli izleme'
    ],
    detailedInfo: {
      overview: 'Sistematik kontroller ile potansiyel sorunları önceden tespit ediyor, büyük arızaları önlüyoruz.',
      whyChoose: [
        'Detaylı fotoğraflı raporlama',
        'Preventif bakım programı',
        'Erken uyarı sistemi',
        'Enerji tasarruf önerileri',
        'Yıllık takip ve izleme'
      ],
      process: [
        { step: 1, title: 'Ön İnceleme', description: 'Sistem genel durumu değerlendirilir' },
        { step: 2, title: 'Detaylı Kontrol', description: 'Tüm bileşenler tek tek kontrol edilir' },
        { step: 3, title: 'Raporlama', description: 'Fotoğraflı detay raporu hazırlanır' },
        { step: 4, title: 'Öneri ve Takip', description: 'İyileştirme önerileri ve takip planı' }
      ]
    },
    gallery: [
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    ],
    pricing: {
      starting: '300₺',
      description: 'Temel kontrol 300₺, detaylı analiz raporu 500₺.'
    }
  }
};

interface ServiceDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const { slug } = await params;
  const service = servicesData[slug as keyof typeof servicesData];

  if (!service) {
    notFound();
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-32 text-white">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url("${service.heroImage}")`
          }}
        />
        <div className="absolute inset-0 bg-black opacity-75"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-4xl">{service.icon}</span>
              <h1 className="text-4xl md:text-6xl font-bold">
                <span className="text-blue-400">{service.title}</span>
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
              {service.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#iletisim-formu"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 text-center"
              >
                📞 Hemen Teklif Al
              </a>
              <a
                href="tel:+905325550123"
                className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 text-center"
              >
                📱 Acil Ara: 0532 555 01 23
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Hizmet Detayları
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {service.detailedInfo.overview}
              </p>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Neden Bizi Tercih Etmelisiniz?
                </h3>
                <ul className="space-y-3">
                  {service.detailedInfo.whyChoose.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                                          <div className="w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-amber-50 p-6 rounded-xl border border-amber-100">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">💰</span>
                  <h4 className="text-lg font-semibold text-gray-900">Fiyat Bilgisi</h4>
                </div>
                <div className="text-2xl font-bold text-amber-600 mb-2">
                  {service.pricing.starting}*
                </div>
                <p className="text-gray-600 text-sm">
                  {service.pricing.description}
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">
                Hizmet Kapsamımız
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.features.map((feature, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-amber-500 rounded-lg flex items-center justify-center">
                        <span className="text-white text-sm font-bold">{index + 1}</span>
                      </div>
                      <span className="text-gray-800 font-medium text-sm">{feature}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

   

      {/* Gallery Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Çalışma Örneklerimiz
            </h2>
            <p className="text-lg text-gray-600">
              {service.title} alanındaki başarılı projelerimizden örnekler.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {service.gallery.map((image, index) => (
              <div key={index} className="group relative overflow-hidden rounded-2xl shadow-lg">
                <Image
                  src={image}
                  alt={`${service.title} örnek ${index + 1}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="font-semibold">{service.title} Projesi</p>
                    <p className="text-sm opacity-90">Örnek Çalışma {index + 1}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    
    </div>
  );
}

// Generate static params for all services
export function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({
    slug: slug,
  }));
}
