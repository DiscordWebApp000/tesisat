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
    <section id="hakkimizda" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-50/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Left side - Image */}
          <div className="relative order-2 lg:order-1">
            <Image 
              src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              alt="Profesyonel Tesisat Ekibi"
              width={1000}
              height={600}
              className="rounded-xl shadow-lg w-full h-auto"
            />
          </div>

          {/* Right side - Content */}
          <div className="order-1 lg:order-2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 text-center lg:text-left">
              Neden <span className="text-emerald-600">Bizi</span> Seçmelisiniz?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed text-center lg:text-left">
              Tesisat işlerinizde güvenilir, kaliteli ve hızlı hizmet almak için 
              doğru adrestesiniz. Müşteri memnuniyeti odaklı çalışma prensibimizle 
              her projede en iyi sonucu elde ediyoruz.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {reasons.map((reason, index) => (
                <div key={index} className="flex items-start gap-2 sm:gap-3">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-emerald-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-sm sm:text-lg">{reason.icon}</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1 text-xs sm:text-sm">
                      {reason.title}
                    </h3>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg font-semibold transition-colors duration-300 text-sm sm:text-base touch-button">
                Referanslarımızı Gör
              </button>
              <button className="border-2 border-gray-300 text-gray-700 hover:border-emerald-400 hover:text-emerald-600 px-4 py-2 sm:px-6 sm:py-3 rounded-lg font-semibold transition-colors duration-300 text-sm sm:text-base touch-button">
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
