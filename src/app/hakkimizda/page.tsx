import React from 'react';
import Image from 'next/image';

const AboutPage = () => {
  // Ekip üyeleri
  const teamMembers = [
    {
      id: 1,
      name: 'Ahmet Yılmaz',
      position: 'Kurucu & Usta Tesisatçı',
      experience: '25 yıl',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      speciality: 'Su tesisatı ve ısıtma sistemleri'
    },
    {
      id: 2,
      name: 'Mehmet Kaya',
      position: 'Usta Tesisatçı',
      experience: '15 yıl',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      speciality: 'Banyo ve mutfak tesisatı'
    },
    {
      id: 3,
      name: 'Ali Demir',
      position: 'Teknik Uzman',
      experience: '12 yıl',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      speciality: 'Kombi ve ısıtma sistemleri'
    },
    {
      id: 4,
      name: 'Hasan Özkan',
      position: 'Tesisatçı',
      experience: '8 yıl',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      speciality: 'Acil servis ve onarım'
    }
  ];

  // Değerlerimiz
  const values = [
    {
      icon: '🎯',
      title: 'Kalite',
      description: 'Her işimizde en yüksek kalite standartlarını uyguluyoruz.'
    },
    {
      icon: '🤝',
      title: 'Güven',
      description: 'Müşterilerimizle uzun vadeli güven ilişkileri kuruyoruz.'
    },
    {
      icon: '⚡',
      title: 'Hızlılık',
      description: 'Acil durumlarınızda en kısa sürede müdahale ediyoruz.'
    },
    {
      icon: '💡',
      title: 'İnovasyon',
      description: 'Yeni teknolojileri takip ederek çözümler sunuyoruz.'
    }
  ];

  // Sertifikalar
  const certifications = [
    { name: 'TSE Belgeli', year: '2020' },
    { name: 'Meslek Odası Üyesi', year: '2005' },
    { name: 'ISO 9001 Kalite', year: '2018' },
    { name: 'Çevre Dostu Uygulama', year: '2021' }
  ];

  return (
    <div>
      {/* Hero Section */}
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
            <span className="text-blue-400">Hakkımızda</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-200 max-w-3xl mx-auto">
            20 yıllık deneyimimizle İstanbul&apos;da güvenilir tesisat hizmetleri sunuyoruz.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left - Image */}
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Tesisat Pro Ekibi"
                width={800}
                height={600}
                className="rounded-2xl shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-emerald-600 text-white p-6 rounded-2xl shadow-lg">
                <div className="text-3xl font-bold">20+</div>
                <div className="text-sm">Yıl Deneyim</div>
              </div>
            </div>

            {/* Right - Content */}
            <div>
              <div className="inline-flex items-center gap-2 text-emerald-600 text-sm font-medium mb-4">
                <div className="w-1 h-1 bg-emerald-600 rounded-full"></div>
                <span>HİKAYEMİZ</span>
                <div className="w-1 h-1 bg-emerald-600 rounded-full"></div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Tesisat Pro&apos;nun Hikayesi
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                2005 yılında küçük bir işlikten başlayan hikayemiz, bugün İstanbul&apos;un 
                en güvenilir tesisat firmaları arasında yer almamızla devam ediyor. 
                Kurucumuz Ahmet Yılmaz&apos;ın &quot;kaliteli hizmet, mutlu müşteri&quot; mottosuyla 
                başladığımız bu yolculukta, her geçen gün daha da büyüdük.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Bugün 15 kişilik uzman ekibimizle, modern teknolojileri geleneksel 
                ustalıkla birleştirerek, İstanbul&apos;un dört bir yanında hizmet veriyoruz. 
                Müşteri memnuniyeti odaklı yaklaşımımız ve kaliteli işçiliğimizle 
                sektörde fark yaratmaya devam ediyoruz.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-2xl font-bold text-emerald-600">500+</div>
                  <p className="text-gray-600 text-sm">Mutlu Müşteri</p>
                </div>
                <div>
                  <div className="text-2xl font-bold text-emerald-600">1000+</div>
                  <p className="text-gray-600 text-sm">Tamamlanan Proje</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-emerald-600 text-sm font-medium mb-4">
              <div className="w-1 h-1 bg-emerald-600 rounded-full"></div>
              <span>DEĞERLERİMİZ</span>
              <div className="w-1 h-1 bg-emerald-600 rounded-full"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Çalışma Değerlerimiz
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              İş yapış biçimimizi şekillendiren temel değerlerimiz.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">{value.icon}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-emerald-600 text-sm font-medium mb-4">
              <div className="w-1 h-1 bg-emerald-600 rounded-full"></div>
              <span>EKİBİMİZ</span>
              <div className="w-1 h-1 bg-emerald-600 rounded-full"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Uzman Ekibimiz
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Alanında uzman, deneyimli ve sertifikalı ekibimizle hizmetinizdeyiz.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div key={member.id} className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-200 hover:shadow-xl transition-all duration-300">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="text-xs bg-emerald-500 px-2 py-1 rounded-full inline-block mb-2">
                      {member.experience} deneyim
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-emerald-600 text-sm font-medium mb-2">{member.position}</p>
                  <p className="text-gray-600 text-sm">{member.speciality}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Awards */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-emerald-600 text-sm font-medium mb-4">
              <div className="w-1 h-1 bg-emerald-600 rounded-full"></div>
              <span>SERTİFİKALAR</span>
              <div className="w-1 h-1 bg-emerald-600 rounded-full"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Sertifikalar & Belgeler
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Kaliteli hizmet sunmak için sahip olduğumuz belgeler ve sertifikalar.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white p-6 rounded-xl text-center border border-gray-200 hover:border-emerald-300 transition-colors">
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl">🏆</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{cert.name}</h3>
                <p className="text-emerald-600 text-sm font-medium">{cert.year}</p>
              </div>
            ))}
          </div>

          {/* Mission Statement */}
          <div className="mt-16 bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Misyonumuz</h3>
            <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto">
              &quot;İstanbul&apos;da yaşayan her ailenin su ve ısıtma sorunlarını en hızlı, en kaliteli 
              ve en uygun fiyatla çözmek. Modern teknoloji ile geleneksel ustalığı birleştirerek, 
              müşterilerimize 7/24 güvenilir hizmet sunmak bizim misyonumuz.&quot;
            </p>
            <div className="mt-6">
              <span className="text-emerald-600 font-semibold">- Tesisat Pro Ekibi</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-emerald-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Bizimle Çalışmak İster misiniz?
          </h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
            Deneyimli ekibimizle tesisat sorunlarınızı çözmek için bizi arayın.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/iletisim"
              className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              📞 Hemen İletişime Geçin
            </a>
            <a 
              href="/galeri"
              className="border-2 border-white text-white hover:bg-white hover:text-emerald-600 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300"
            >
              📸 Çalışmalarımızı Görün
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
