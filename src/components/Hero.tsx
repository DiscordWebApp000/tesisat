import React from 'react';

const Hero = () => {
  return (
    <section className="relative text-white h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://media.wusa9.com/assets/WUSA/images/ccba71a4-70ed-49a2-9bd4-88b395c21ce0/ccba71a4-70ed-49a2-9bd4-88b395c21ce0_1920x1080.jpg')`
        }}
      ></div>
      
      {/* Premium gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/70 to-transparent"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center sm:text-left">
          <div className="mb-4 sm:mb-6">
            <span className="bg-cyan-400 text-black px-3 py-2 sm:px-4 sm:py-2 text-xs sm:text-sm font-bold uppercase tracking-wider rounded-lg">
              Premium Hizmet
            </span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
            <span className="text-white block sm:inline">Profesyonel</span>
            <br className="hidden sm:block" />
            <span className="text-cyan-400 font-black block sm:inline">Tesisat Çözümleri</span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 font-medium text-gray-200 max-w-lg mx-auto sm:mx-0 leading-relaxed">
            Su tesisatı, doğalgaz, kalorifer sistemlerinde uzman ekibimizle hizmetinizdeyiz.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center sm:justify-start">
            <button className="bg-cyan-400 text-black font-bold py-3 px-6 sm:py-4 sm:px-8 rounded-lg text-base sm:text-lg hover:bg-cyan-500 transition-all shadow-xl transform hover:scale-105 touch-button">
              Ücretsiz Keşif
            </button>
            <button className="border-2 border-white text-white font-bold py-3 px-6 sm:py-4 sm:px-8 rounded-lg text-base sm:text-lg hover:bg-white hover:text-black transition-all touch-button">
              📞 0532 XXX XX XX
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;