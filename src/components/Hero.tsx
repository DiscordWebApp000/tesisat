import React from 'react';

const Hero = () => {
  return (
    <section className="relative text-white h-screen flex items-center justify-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://media.wusa9.com/assets/WUSA/images/ccba71a4-70ed-49a2-9bd4-88b395c21ce0/ccba71a4-70ed-49a2-9bd4-88b395c21ce0_1920x1080.jpg')`
        }}
      ></div>
      
      {/* Premium gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/70 to-transparent"></div>
      
             <div className="container mx-auto px-4 relative z-10">
         <div className="max-w-5xl mx-auto text-left">
           <div className="mb-4">
             <span className="bg-cyan-400 text-black px-4 py-2 text-sm font-bold uppercase tracking-wider">
               Premium Hizmet
             </span>
           </div>
           
           <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-none">
             <span className="text-white">Profesyonel</span>
             <br />
             <span className="text-cyan-400 font-black">Tesisat Çözümleri</span>
           </h1>
           
           <p className="text-xl mb-8 font-medium text-gray-200 max-w-lg">
             Su tesisatı, doğalgaz, kalorifer sistemlerinde uzman ekibimizle hizmetinizdeyiz.
           </p>
           
           <div className="flex flex-col sm:flex-row gap-4">
             <button className="bg-cyan-400 text-black font-bold py-4 px-8 rounded-lg text-lg hover:bg-cyan-500 transition-all shadow-xl">
               Ücretsiz Keşif
             </button>
             <button className="border-2 border-white text-white font-bold py-4 px-8 rounded-lg text-lg hover:bg-white hover:text-black transition-all">
               📞 0532 XXX XX XX
             </button>
           </div>
         </div>
       </div>
    </section>
  );
};

export default Hero;