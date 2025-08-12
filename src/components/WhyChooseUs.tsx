import React from 'react';
import Image from 'next/image';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: "⭐",
      title: "20+ Yıl Deneyim",
      description: "Sektörde 20 yılı aşkın deneyimimizle her türlü tesisat sorununu çözüyoruz."
    },
    {
      icon: "🕒",
      title: "7/24 Hizmet",
      description: "Acil durumlarınızda 7/24 yanınızdayız. Gece gündüz demeden hizmet veriyoruz."
    },
    {
      icon: "🔒",
      title: "Garantili İşçilik",
      description: "Tüm işlerimizde garanti veriyoruz. Müşteri memnuniyeti bizim önceliğimiz."
    },
    {
      icon: "💰",
      title: "Uygun Fiyat",
      description: "Kaliteli hizmeti uygun fiyatlarla sunuyoruz. Gereksiz maliyet yaratmıyoruz."
    },
    {
      icon: "👨‍🔧",
      title: "Uzman Ekip",
      description: "Sertifikalı ve deneyimli teknisyenlerimizle profesyonel hizmet alıyorsunuz."
    },
    {
      icon: "📱",
      title: "Hızlı Müdahale",
      description: "Acil durumlarınızda en kısa sürede müdahale ediyoruz."
    }
  ];

  return (
    <section id="hakkimizda" className="py-20 bg-gray-50/50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Image */}
          <div className="relative">
            <Image 
              src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              alt="Profesyonel Tesisat Ekibi"
              width={1000}
              height={600}
              className="rounded-xl shadow-lg"
            />
          </div>

          {/* Right side - Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Neden <span className="text-emerald-600">Bizi</span> Seçmelisiniz?
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Tesisat işlerinizde güvenilir, kaliteli ve hızlı hizmet almak için 
              doğru adrestesiniz. Müşteri memnuniyeti odaklı çalışma prensibimizle 
              her projede en iyi sonucu elde ediyoruz.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {reasons.map((reason, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-emerald-50 rounded-lg flex items-center justify-center">
                    <span className="text-lg">{reason.icon}</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1 text-sm">
                      {reason.title}
                    </h3>
                    <p className="text-gray-600 text-xs leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300">
                Referanslarımızı Gör
              </button>
              <button className="border-2 border-gray-300 text-gray-700 hover:border-emerald-400 hover:text-emerald-600 px-6 py-3 rounded-lg font-semibold transition-colors duration-300">
                İletişime Geç
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
