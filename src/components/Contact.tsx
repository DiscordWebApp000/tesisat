import React from 'react';
import Link from 'next/link';

const Contact = () => {
  return (
    <section id="iletisim" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Hemen <span className="text-emerald-600">İletişime</span> Geçin
        </h2>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Tesisat sorunlarınız için uzman ekibimizle iletişime geçin. 
          7/24 hizmetinizdeyiz!
        </p>

        {/* Simple Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="text-3xl mb-3">📞</div>
            <h3 className="font-semibold text-gray-900 mb-2">7/24 Acil Servis</h3>
            <p className="text-emerald-600 font-bold">+90 (532) 555 0123</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="text-3xl mb-3">📧</div>
            <h3 className="font-semibold text-gray-900 mb-2">E-posta</h3>
            <p className="text-emerald-600 font-semibold">info@tesisat.com</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="text-3xl mb-3">📍</div>
            <h3 className="font-semibold text-gray-900 mb-2">Adres</h3>
            <p className="text-gray-600 text-sm">Kadıköy, İstanbul</p>
          </div>
        </div>

        {/* CTA Button */}
        <Link 
          href="/iletisim"
          className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
        >
          📋 Detaylı İletişim Formu
        </Link>
      </div>
    </section>
  );
};

export default Contact;
