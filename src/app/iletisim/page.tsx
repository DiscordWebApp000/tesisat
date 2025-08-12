import React from 'react';

const ContactPage = () => {
  return (
    <div>
      {/* Hero Section with Background Image - Like Homepage */}
      <section className="relative py-32 text-white">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("https://media.wusa9.com/assets/WUSA/images/ccba71a4-70ed-49a2-9bd4-88b395c21ce0/ccba71a4-70ed-49a2-9bd4-88b395c21ce0_1920x1080.jpg")'
          }}
        />
        <div className="absolute inset-0 bg-black opacity-75"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            İletişime <span className="text-emerald-400">Geçin</span>
          </h1>
          <p className="text-lg md:text-2xl text-gray-200 max-w-3xl mx-auto">
            Tesisat sorunlarınız için uzman ekibimizle iletişime geçin. 
            7/24 hizmetinizdeyiz!
          </p>
        </div>
      </section>

      {/* Contact Form and Map Section - Side by Side */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Mesaj Gönderin
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Tesisat sorunlarınızı çözmek için sadece bir adım uzaktayız.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-50 rounded-full opacity-70 z-0"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-emerald-50 rounded-full opacity-70 z-0"></div>
              
              <div className="bg-white p-8 md:p-10 rounded-2xl shadow-lg border border-gray-100 relative z-10">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-t-2xl"></div>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Ad Soyad *
                      </label>
                      <input 
                        type="text" 
                        required
                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        placeholder="Adınız ve soyadınız"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Telefon *
                      </label>
                      <input 
                        type="tel" 
                        required
                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        placeholder="Telefon numaranız"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      E-posta *
                    </label>
                    <input 
                      type="email" 
                      required
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="E-posta adresiniz"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Hizmet Türü *
                    </label>
                    <select 
                      required
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    >
                      <option value="">Hizmet seçiniz</option>
                      <option value="su-tesisati">Su Tesisatı</option>
                      <option value="isitma-sistemi">Isıtma Sistemi</option>
                      <option value="banyo-mutfak">Banyo & Mutfak</option>
                      <option value="acil-servis">Acil Servis</option>
                      <option value="yeni-tesisat">Yeni Tesisat</option>
                      <option value="bakim-onarim">Bakım & Onarım</option>
                      <option value="diger">Diğer</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Aciliyet Durumu
                    </label>
                    <div className="flex flex-wrap gap-6">
                      <label className="flex items-center gap-2 hover:text-blue-600 cursor-pointer transition-colors">
                        <input type="radio" name="urgency" value="normal" className="text-blue-600" />
                        <span className="text-gray-700">Normal</span>
                      </label>
                      <label className="flex items-center gap-2 hover:text-blue-600 cursor-pointer transition-colors">
                        <input type="radio" name="urgency" value="acil" className="text-blue-600" />
                        <span className="text-gray-700">Acil</span>
                      </label>
                      <label className="flex items-center gap-2 hover:text-blue-600 cursor-pointer transition-colors">
                        <input type="radio" name="urgency" value="cok-acil" className="text-blue-600" />
                        <span className="text-gray-700">Çok Acil</span>
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Mesajınız *
                    </label>
                    <textarea 
                      rows={4}
                      required
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                      placeholder="Sorununuzu detaylı olarak açıklayın, adres bilgisi ekleyin..."
                    ></textarea>
                  </div>

                  <div className="flex items-center gap-2">
                    <input 
                      type="checkbox" 
                      required
                      className="text-blue-600 rounded focus:ring-blue-500"
                    />
                    <label className="text-sm text-gray-600">
                      <a href="#" className="text-blue-600 hover:underline">Gizlilik Politikası</a>&apos;nı ve{' '}
                      <a href="#" className="text-blue-600 hover:underline">Kullanım Şartları</a>&apos;nı kabul ediyorum
                    </label>
                  </div>

                  <button 
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-4 rounded-lg font-medium text-lg transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    Mesaj Gönder
                  </button>
                </form>
              </div>
            </div>

            {/* Map */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                <span className="text-blue-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </span>
                Konumumuz
              </h3>
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg h-96 border border-gray-100">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3010.2755833690997!2d29.0277!3d40.9903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDU5JzI1LjEiTiAyOcKwMDEnNDAuMCJF!5e0!3m2!1str!2str!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Tesisat Pro Konum"
                ></iframe>
              </div>
              
              {/* Additional Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-5 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
                  <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center text-blue-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Park Alanı</p>
                    <p className="text-gray-600 text-sm">Ücretsiz müşteri park alanı</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-5 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
                  <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center text-blue-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Çalışma Saatleri</p>
                    <p className="text-gray-600 text-sm">Haftaiçi: 08:00-18:00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Simplified Contact Info Below Form */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              İletişim Bilgileri
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Size en hızlı şekilde ulaşabilmemiz için tüm iletişim kanallarımız açık.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Phone */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 bg-emerald-50 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📞</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">7/24 Acil Servis</h3>
              <p className="text-emerald-600 font-bold text-lg">+90 (532) 555 0123</p>
              <p className="text-gray-500 text-sm">+90 (212) 555 0123</p>
            </div>
            
            {/* Email */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 bg-emerald-50 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📧</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">E-posta</h3>
              <p className="text-emerald-600 font-semibold">info@tesisat.com</p>
              <p className="text-gray-500 text-sm">destek@tesisat.com</p>
            </div>
            
            {/* Address */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 bg-emerald-50 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📍</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Adres</h3>
              <p className="text-gray-600 text-sm">
                Tesisat Caddesi No:123<br />
                Kadıköy, İstanbul<br />
                34700 Türkiye
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
