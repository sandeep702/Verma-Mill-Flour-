import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
  <section className="relative min-h-[600px] flex items-center overflow-hidden">
  {/* Base layer */}
  <div className="absolute inset-0 bg-gradient-to-br from-cream to-wheat-light"></div>
  
  {/* Texture layers */}
  <div className="absolute inset-0 opacity-20" style={{
    backgroundImage: `linear-gradient(45deg, transparent 25%, rgba(212, 165, 116, 0.1) 25%, rgba(212, 165, 116, 0.1) 50%, transparent 50%, transparent 75%, rgba(212, 165, 116, 0.1) 75%)`,
    backgroundSize: '20px 20px'
  }}></div>
  
  <div className="absolute inset-0 opacity-15" style={{
    backgroundImage: `linear-gradient(-45deg, transparent 25%, rgba(139, 105, 77, 0.1) 25%, rgba(139, 105, 77, 0.1) 50%, transparent 50%, transparent 75%, rgba(139, 105, 77, 0.1) 75%)`,
    backgroundSize: '30px 30px'
  }}></div>
  
  {/* Scattered dots */}
  <div className="absolute inset-0 overflow-hidden">
    {Array.from({length: 12}).map((_, i) => (
      <div key={i} 
        className="absolute w-1 h-1 bg-wheat-gold rounded-full opacity-30 animate-pulse"
        style={{
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 3}s`
        }}
      ></div>
    ))}
  </div>



      <div className="max-w-8xl mx-auto px-4 mt-20 mb-10 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-10">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-extrabold text-brown-warm tracking-tight leading-tight whitespace-nowrap overflow-hidden animate-typingForwardDisappear">
  Pure & Fresh
  <span className="block mb-4 text-wheat-gold text-shadow-glow">Aata Chakki</span>
  <span className="block mb-4 text-2xl md:text-3xl font-medium text-gray-600 tracking-wide">
    Since 2003
  </span>
</h1>

            <p className="text-lg font-serif md:text-xl text-gray-700 leading-relaxed max-w-xl mx-auto p-5 bg-gradient-to-r from-yellow-50 to-amber-100 rounded-2xl shadow hover:shadow-lg transition duration-300 ease-in-out group"> 
  <span className="inline-flex items-center gap-2 text-amber-600 font-semibold text-xl">
    🧡 100% Pure. Family Trusted.
  </span><br />
  Our flour is processed with <span className="text-green-700 font-medium">modern care</span>, 
  <span className="text-red-600 font-medium"> free from additives</span>, and 
  <span className="text-pink-600 font-medium"> delivered with love</span> — because your 
  <span className="text-blue-700 font-semibold"> family's health</span> matters most.
</p>

            </div>

            {/* Trust Indicators */}
     <div className="flex flex-wrap gap-6 items-center">
              <div className="flex items-center space-x-2 hover-lift">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse-glow"></div>
                <span className="text-sm font-medium text-gray-700">100% Natural</span>
              </div>
              <div className="flex items-center space-x-2 hover-lift">
                <div className="w-3 h-3 bg-wheat-gold rounded-full animate-pulse-glow"></div>
                <span className="text-sm font-medium text-gray-700">Stone Ground</span>
              </div>
              <div className="flex items-center space-x-2 hover-lift">
                <div className="w-3 h-3 bg-brown-warm rounded-full animate-pulse-glow"></div>
                <span className="text-sm font-medium text-gray-700">23+ Years Legacy</span>
              </div>
            </div>


            {/* CTA Buttons */}
            <div className="flex  flex-col sm:flex-row gap-4">
              <Link to="/products">
                <Button size="lg" className="bg-wheat-gold mb-8 hover:bg-brown-warm text-white px-8 py-3 text-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-md">
                  But Now 🤗
                </Button>
              </Link>
              <Link to="/about">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-brown-warm mb-8 text-brown-warm hover:bg-brown-warm hover:text-white px-8 py-3 text-lg font-medium transition-all duration-300 shadow-sm"
                >
                  Our Story 📚
                </Button>
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <img
              src="/lovable-uploads/bededb14-02b4-4c7b-b406-98ecbc63b475.png"
              alt="Premium Quality - Traditional Stone Grinding"
              className="shadow-2xl w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
