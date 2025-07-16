import React from 'react';
import { Play, Camera } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/274937/pexels-photo-274937.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Cinematic background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <div className="mb-6">
          <Camera className="w-16 h-16 mx-auto text-yellow-500 mb-4" />
        </div>

        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight">
          Filming Reality.
          <br/>
          <span className="text-yellow-500">Revealing Eternal Narratives.</span>
        </h1>


        <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-2xl mx-auto font-light">
          Producing cinematic masterpieces that move hearts, spark minds, and leave lasting impact.
        </p>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          
          {/* <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
            <Play size={20} />
            Watch Our Reel
          </button> */}

          <button className="border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black font-semibold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105">
            Get In Touch
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-yellow-500 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-yellow-500 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div> */}

      
    </section>
  );
};

export default Hero;