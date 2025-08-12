'use client'
import React, { useState } from 'react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "7/24 acil servis hizmeti veriyor musunuz?",
      answer: "Evet, 7 gün 24 saat acil tesisat hizmeti veriyoruz. Su kaçağı, gider tıkanıklığı, kombi arızası gibi acil durumlarınızda hemen bizi arayabilirsiniz."
    },
    {
      question: "Tesisat işlerinizde garanti veriyor musunuz?",
      answer: "Elbette! Tüm tesisat işlerimizde 2 yıl garanti veriyoruz. Kullandığımız malzemeler de üretici garantisi kapsamındadır. Herhangi bir sorun yaşarsanız ücretsiz müdahale ediyoruz."
    },
    {
      question: "Fiyat teklifi almak için ne yapmam gerekiyor?",
      answer: "Ücretsiz keşif ve fiyat teklifi için bizi arayabilir veya iletişim formundan mesaj gönderebilirsiniz. Uzman ekibimiz gelip işi yerinde inceleyerek size detaylı fiyat teklifi sunar."
    },
    {
      question: "Hangi bölgelerde hizmet veriyorsunuz?",
      answer: "İstanbul'un tüm ilçelerinde hizmet veriyoruz. Özellikle Anadolu yakasında (Kadıköy, Üsküdar, Maltepe, Kartal) daha hızlı müdahale edebiliyoruz."
    },
    {
      question: "Tesisat malzemelerini siz mi temin ediyorsunuz?",
      answer: "Evet, kaliteli ve garantili malzemeleri biz temin ediyoruz. İsterseniz kendi malzemenizi de getirebilirsiniz. Sadece işçilik ücreti alırız."
    },
    {
      question: "Su kaçağı tespiti nasıl yapılır?",
      answer: "Modern cihazlarla su kaçağı tespiti yapıyoruz. Termal kamera, ses dinleme cihazları ve basınç testleri ile kaçağın yerini tespit ediyoruz. Yıkım yapmadan sorunun yerini bulabiliriz."
    },
    {
      question: "Kombi bakımı ne sıklıkla yapılmalı?",
      answer: "Kombi bakımı yılda en az bir kez yapılmalıdır. Özellikle kış öncesi bakım önemlidir. Düzenli bakım sayesinde kombinizin ömrü uzar ve enerji tasarrufu sağlarsınız."
    },
    {
      question: "Ödeme nasıl yapabilirim?",
      answer: "Nakit, kredi kartı (taksitli), banka kartı ve havale ile ödeme kabul ediyoruz. İş tamamlandıktan sonra ödeme alıyoruz. Büyük projeler için peşin indirim uyguluyoruz."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left - Info */}
          <div className="lg:sticky lg:top-24">
            <div className="inline-flex items-center gap-2 text-emerald-600 text-sm font-medium mb-4">
              <div className="w-1 h-1 bg-emerald-600 rounded-full"></div>
              <span>SIK SORULAN SORULAR</span>
              <div className="w-1 h-1 bg-emerald-600 rounded-full"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Merak Ettikleriniz
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Müşterilerimizin en sık sorduğu soruları ve yanıtlarını derledik. 
              Aradığınız cevabı bulamıyorsanız bizimle iletişime geçin.
            </p>

            {/* Quick Contact Card */}
            <div className="bg-emerald-50 p-6 rounded-2xl border border-emerald-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Hemen Destek Alın
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Acil durumlarınızda 7/24 hizmetinizdeyiz.
              </p>
              <div className="flex gap-3">
                <a
                  href="tel:+905325550123"
                  className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors text-center"
                >
                  📞 Ara
                </a>
                
              </div>
            </div>
          </div>

          {/* Right - FAQ List */}
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`border-l-4 transition-all duration-300 ${
                  activeIndex === index 
                    ? 'border-emerald-500 bg-emerald-50 shadow-sm' 
                    : 'border-gray-200 bg-white hover:border-emerald-300 hover:bg-gray-50'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 text-left focus:outline-none"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${
                        activeIndex === index 
                          ? 'bg-emerald-500 text-white' 
                          : 'bg-gray-200 text-gray-600'
                      }`}>
                        {String(index + 1).padStart(2, '0')}
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 leading-tight">
                        {faq.question}
                      </h3>
                    </div>
                    <div className={`w-6 h-6 flex-shrink-0 transition-all duration-300 ${
                      activeIndex === index ? 'rotate-180 text-emerald-600' : 'text-gray-400'
                    }`}>
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 6v12m6-6H6"
                        />
                      </svg>
                    </div>
                  </div>
                </button>
                
                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  activeIndex === index 
                    ? 'max-h-96 opacity-100' 
                    : 'max-h-0 opacity-0'
                }`}>
                  <div className="px-6 pb-6 ml-11">
                    <div className="bg-white p-4 rounded-lg border border-emerald-100">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
