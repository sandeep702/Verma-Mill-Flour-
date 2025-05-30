import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ChevronDown, ChevronUp, Award, Sparkles } from 'lucide-react';

const About = () => {
  const [expandedValue, setExpandedValue] = useState<number | null>(null);
  const [activeTimeline, setActiveTimeline] = useState<number>(0);

  const values = [
    {
      icon: "🌱",
      title: "Purity",
      description: "We believe in keeping our products pure and natural, without any artificial additives or preservatives.",
      details: "Our modern grinding process preserves all natural nutrients and ensures no chemicals touch your flour. Every grain is carefully selected and processed with advanced techniques that maintain traditional quality standards.",
      color: "from-green-400 to-emerald-500"
    },
    {
      icon: "🤝",
      title: "Trust",
      description: "Building lasting relationships with our customers through consistent quality and transparency.",
      details: "With over 20 years of service, we've built trust through consistent quality, transparent processes, and by always putting our customers first. Our open-door policy means you can visit our mill anytime.",
      color: "from-blue-400 to-cyan-500"
    },
    {
      icon: "🏭",
      title: "Modern Technology",
      description: "Using cutting-edge techniques while maintaining the essence of traditional flour milling.",
      details: "We employ state-of-the-art machinery and modern techniques for flour production, ensuring efficiency, hygiene, and consistency while preserving the nutritional value and taste of traditional methods.",
      color: "from-amber-400 to-orange-500"
    }
  ];

  const timeline = [
    {
      year: "2003",
      title: "The Beginning",
      description: "Surjit Kumar establishes Verma Flour Mill with a vision to provide fresh, pure flour using modern techniques.",
      stats: { customers: "100+", villages: "5", mills: "1" },
      color: "bg-gradient-to-r from-amber-500 to-orange-500"
    },
    {
      year: "2008",
      title: "Technology Upgrade",
      description: "Investment in modern milling equipment and quality control systems.",
      stats: { customers: "1000+", villages: "20+", mills: "3" },
      color: "bg-gradient-to-r from-orange-500 to-red-500"
    },
    {
      year: "2015",
      title: "Expansion & Growth",
      description: "Expanded operations with advanced machinery and increased production capacity.",
      stats: { customers: "5000+", villages: "100+", mills: "8" },
      color: "bg-gradient-to-r from-blue-500 to-purple-500"
    },
    {
      year: "2020",
      title: "Digital Innovation",
      description: "Launch of online platform and home delivery services with modern logistics.",
      stats: { customers: "15000+", villages: "500+", mills: "15" },
      color: "bg-gradient-to-r from-purple-500 to-pink-500"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section with improved spacing */}
      <section className="relative min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 overflow-hidden  ">
      
        
        <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center min-h-screen">
          <div className="w-full">
            <div className="text-center">
              <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm text-amber-800 px-6 mb-10 rounded-full text-lg font-medium  hover:bg-white/90 transition-all duration-300 cursor-pointer">
                <Sparkles className="animate-spin" size={20} />
                Est. 2003
                <Award className="animate-bounce" size={20} />
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-amber-900 mb-12 leading-tight">
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600 animate-pulse">Story</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-16">
                From modern techniques to serving families across the nation - 
                discover the legacy of <span className="font-bold text-amber-800">Verma Flour Mill</span> founded by <span className="font-bold text-orange-700">Surjit Kumar</span>
              </p>
              
              <div className="flex flex-wrap justify-center gap-8 mb-8">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/90 transition-all duration-300 hover:scale-105">
                  <div className="text-3xl font-bold text-amber-600">20+</div>
                  <div className="text-sm text-gray-600">Years Legacy</div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/90 transition-all duration-300 hover:scale-105">
                  <div className="text-3xl font-bold text-orange-600">15K+</div>
                  <div className="text-sm text-gray-600">Happy Families</div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/90 transition-all duration-300 hover:scale-105">
                  <div className="text-3xl font-bold text-yellow-600">100%</div>
                  <div className="text-sm text-gray-600">Pure & Fresh</div>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <div className="animate-bounce">
                <ChevronDown className="mx-auto text-amber-600 hover:text-amber-800 transition-colors cursor-pointer" size={40} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Story Section with improved spacing */}
      <section className="py-2 bg-white relative">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-50 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <div className="inline-block bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium">
                Our Heritage
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-amber-900 leading-tight">
                A Modern Legacy That Started in <span className="text-orange-600">2003</span>
              </h2>
              
              <div className="space-y-8 text-gray-700 leading-relaxed text-lg">
                <div className="p-8 bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl border-l-4 border-amber-500 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                  <p className="font-medium text-gray-800 mb-4">
                    It all began with a vision of <span className="text-amber-700 font-bold">Surjit Kumar</span>, who believed that fresh, 
                    pure flour should be accessible to every household using modern techniques.
                  </p>
                  <p>
                    Starting with advanced milling equipment and modern quality standards, he laid the 
                    foundation of what would become a trusted name in contemporary flour milling.
                  </p>
                </div>
                
                <div className="p-8 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl border-l-4 border-blue-500 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                  <p>
                    Over two decades, we have embraced cutting-edge technology while maintaining our commitment 
                    to freshness and purity. Our modern approach ensures consistent quality and efficient 
                    processing while preserving the nutritional value of every grain.
                  </p>
                </div>
                
                <div className="p-8 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl border-l-4 border-green-500 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                  <p>
                    Today, Verma Flour Mill stands as a symbol of modern excellence, 
                    bringing the benefits of advanced technology and fresh, pure flour to thousands of families 
                    who value quality, nutrition, and innovation.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-amber-500 to-orange-500 rounded-3xl blur opacity-20 animate-pulse"></div>
              <div className="relative bg-gradient-to-br from-amber-100 to-orange-100 rounded-3xl p-8 shadow-2xl">
                <div className="bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl h-96 flex items-center justify-center text-white relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/10"></div>
                  <div className="relative text-center z-10">
                    <div className="text-8xl mb-6 animate-bounce">🏭</div>
                    <h3 className="text-4xl font-bold mb-4">2003</h3>
                    <p className="text-xl opacity-90 mb-4">Modern Innovation Begins</p>
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                      <p className="text-sm italic">
                        "Fresh, pure flour through modern excellence" - Surjit Kumar
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Values Section with improved spacing */}
      <section className="py-12 bg-gradient-to-br from-gray-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-block bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium mb-8">
              Our Foundation
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-8">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide us in everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {values.map((value, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer border border-transparent hover:border-amber-200"
                onClick={() => setExpandedValue(expandedValue === index ? null : index)}
              >
                <div className={`w-20 h-20 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <span className="text-3xl">{value.icon}</span>
                </div>
                
                <h3 className="text-2xl font-semibold text-amber-900 mb-6 group-hover:text-amber-700 transition-colors">
                  {value.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  {value.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-amber-600 font-medium">Learn more</span>
                  {expandedValue === index ? (
                    <ChevronUp className="text-amber-600 group-hover:text-amber-800 transition-colors" size={20} />
                  ) : (
                    <ChevronDown className="text-amber-600 group-hover:text-amber-800 transition-colors" size={20} />
                  )}
                </div>
                
                {expandedValue === index && (
                  <div className="mt-8 p-6 bg-amber-50 rounded-lg border-t-2 border-amber-200 animate-fade-in">
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {value.details}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Timeline Section with improved spacing */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-block bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium mb-8">
              Our Journey
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-8">
              Journey Through Time
            </h2>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-amber-500 to-orange-500 rounded-full"></div>
            
            <div className="space-y-20">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} cursor-pointer`}
                  onClick={() => setActiveTimeline(index)}
                  onMouseEnter={() => setActiveTimeline(index)}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12 text-left'}`}>
                    <div className={`bg-white rounded-2xl p-10 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 ${activeTimeline === index ? 'ring-2 ring-amber-500 shadow-2xl scale-105' : ''}`}>
                      <h3 className="text-2xl font-bold text-amber-900 mb-4">{item.title}</h3>
                      <p className="text-gray-600 mb-8 leading-relaxed text-lg">{item.description}</p>
                      
                      <div className="grid grid-cols-3 gap-6">
                        <div className="text-center">
                          <div className="text-xl font-bold text-amber-600">{item.stats.customers}</div>
                          <div className="text-xs text-gray-500">Customers</div>
                        </div>
                        <div className="text-center">
                          <div className="text-xl font-bold text-orange-600">{item.stats.villages}</div>
                          <div className="text-xs text-gray-500">Villages</div>
                        </div>
                        <div className="text-center">
                          <div className="text-xl font-bold text-yellow-600">{item.stats.mills}</div>
                          <div className="text-xs text-gray-500">Mills</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <div className={`w-24 h-24 ${item.color} text-white rounded-full flex items-center justify-center font-bold text-lg shadow-2xl transform transition-all duration-500 ${activeTimeline === index ? 'scale-125' : 'hover:scale-110'}`}>
                      {item.year}
                    </div>
                    {activeTimeline === index && (
                      <div className="absolute inset-0 w-24 h-24 bg-white rounded-full animate-ping opacity-20"></div>
                    )}
                  </div>
                  
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section with improved spacing */}
      <section className="relative py-12 bg-gradient-to-br from-amber-900 via-orange-800 to-red-900 text-white overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent transform -skew-y-6 animate-pulse"></div>
          <div className="absolute top-20 left-20 w-32 h-32 bg-white rounded-full blur-3xl animate-pulse delay-75"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-white rounded-full blur-3xl animate-pulse delay-150"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block bg-amber-100 text-amber-800 px-6 py-3 rounded-full text-sm font-medium mb-12">
            Our Purpose
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-12">Our Mission</h2>
          <p className="text-xl md:text-2xl max-w-5xl mx-auto leading-relaxed opacity-95 mb-16">
            To provide the freshest, purest flour using modern techniques and advanced technology. 
            We are committed to supporting local farmers, maintaining environmental sustainability, 
            and delivering the highest quality products that nourish families with fresh, 
            pure flour that meets contemporary standards of excellence.
          </p>
          
          <div className="flex flex-wrap justify-center gap-8">
            <div className="flex items-center gap-3 bg-white/20 backdrop-blur-sm px-8 py-4 rounded-full hover:bg-white/30 transition-all duration-300 cursor-pointer group">
              <span className="group-hover:scale-125 transition-transform">🌾</span>
              <span>Supporting Local Farmers</span>
            </div>
            <div className="flex items-center gap-3 bg-white/20 backdrop-blur-sm px-8 py-4 rounded-full hover:bg-white/30 transition-all duration-300 cursor-pointer group">
              <span className="group-hover:scale-125 transition-transform">🏭</span>
              <span>Modern Technology</span>
            </div>
            <div className="flex items-center gap-3 bg-white/20 backdrop-blur-sm px-8 py-4 rounded-full hover:bg-white/30 transition-all duration-300 cursor-pointer group">
              <span className="group-hover:scale-125 transition-transform">✨</span>
              <span>Fresh & Pure Quality</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
