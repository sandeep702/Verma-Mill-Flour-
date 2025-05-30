import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Leaf, Handshake, Cpu, Calendar, Users, MapPin, Factory, 
  Award, Sparkles, Wheat, Shield, Truck, Home, Globe, Heart,
  ChevronDown, ChevronUp
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const About = () => {
  const [expandedValue, setExpandedValue] = useState<number | null>(null);

  const values = [
    {
      icon: <Leaf className="text-emerald-500" size={32} />,
      title: "Purity",
      description: "100% natural flour with no artificial additives",
      details: "Our modern grinding process preserves all natural nutrients without chemicals. Every grain is carefully selected and processed with advanced techniques that maintain traditional quality standards.",
      color: "bg-emerald-100"
    },
    {
      icon: <Handshake className="text-blue-500" size={32} />,
      title: "Trust",
      description: "Built over 20 years of consistent quality",
      details: "We've earned trust through transparent processes and putting customers first. Our open-door policy means you can visit our mill anytime to see our operations firsthand.",
      color: "bg-blue-100"
    },
    {
      icon: <Cpu className="text-amber-500" size={32} />,
      title: "Innovation",
      description: "Cutting-edge milling technology",
      details: "State-of-the-art machinery ensures efficiency, hygiene, and consistency while preserving nutritional value and authentic taste of traditional methods.",
      color: "bg-amber-100"
    }
  ];

  const milestones = [
    {
      year: "2003",
      title: "Foundation",
      description: "Surjit Kumar establishes Verma Flour Mill with modern milling techniques",
      icon: <Factory className="text-amber-600" size={24} />,
      stats: {
        customers: "100+",
        villages: "5",
        production: "2 tons/day"
      }
    },
    {
      year: "2008",
      title: "Technology Leap",
      description: "Invested in advanced milling equipment and quality systems",
      icon: <Cpu className="text-orange-600" size={24} />,
      stats: {
        customers: "1000+",
        villages: "20+",
        production: "10 tons/day"
      }
    },
    {
      year: "2015",
      title: "Expansion",
      description: "Opened new facilities with increased production capacity",
      icon: <MapPin className="text-blue-600" size={24} />,
      stats: {
        customers: "5000+",
        villages: "100+",
        production: "50 tons/day"
      }
    },
    {
      year: "2020",
      title: "Digital Transformation",
      description: "Launched online ordering and home delivery services",
      icon: <Globe className="text-purple-600" size={24} />,
      stats: {
        customers: "15000+",
        villages: "500+",
        production: "100 tons/day"
      }
    }
  ];

  const stats = [
    { value: "20+", label: "Years of Excellence", icon: <Calendar size={20} className="text-amber-500" /> },
    { value: "5K+", label: "Happy Families", icon: <Home size={20} className="text-orange-500" /> },
    { value: "6+", label: "Villages Served", icon: <MapPin size={20} className="text-red-500" /> },
    { value: "100%", label: "Natural Ingredients", icon: <Leaf size={20} className="text-emerald-500" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/grain-pattern.svg')] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-white px-6 py-2 rounded-full shadow-sm mb-8"
            >
              <Sparkles className="text-amber-500 animate-pulse" size={18} />
              <span className="text-amber-800 font-medium">Est. 2003</span>
              <Award className="text-amber-500 animate-bounce" size={18} />
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl md:text-6xl font-bold text-gray-900 mb-6"
            >
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600">Story</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto mb-12"
            >
              From a single mill to serving thousands of families - the journey of Verma Flour Mill founded by Surjit Kumar with a vision for pure, modern flour production.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap justify-center gap-6 mb-16"
            >
              {stats.map((stat, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3">
                    {stat.icon}
                    <div>
                      <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
                      <div className="text-sm text-gray-500">{stat.label}</div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ChevronDown className="mx-auto text-amber-500" size={32} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="inline-block bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                Our Heritage
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                A Legacy of <span className="text-amber-600">Quality</span> & <span className="text-orange-600">Innovation</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Founded in 2003 by Surjit Kumar, Verma Flour Mill began with a simple mission: to provide families with the purest, freshest flour using modern techniques that preserve traditional quality.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-amber-100 p-3 rounded-lg">
                    <Wheat className="text-amber-600" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Farm Fresh Grains</h3>
                    <p className="text-gray-600">Sourced directly from trusted local farmers</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Shield className="text-blue-600" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Quality Assurance</h3>
                    <p className="text-gray-600">Rigorous testing at every production stage</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <Truck className="text-green-600" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Fast Delivery</h3>
                    <p className="text-gray-600">Fresh flour delivered to your doorstep</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-amber-400 to-orange-500 rounded-2xl blur opacity-20"></div>
              <div className="relative bg-white rounded-2xl overflow-hidden shadow-xl">
                <div className="aspect-w-16 aspect-h-9 bg-gradient-to-br from-amber-100 to-orange-100 p-8">
                  <div className="flex items-center justify-center h-full">
                    <div className="text-center">
                      <div className="text-6xl mb-6">🏭</div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">2003</h3>
                      <p className="text-gray-600">The beginning of our journey</p>
                      <div className="mt-6 bg-white/80 backdrop-blur-sm rounded-lg p-4 inline-block">
                        <p className="text-sm text-gray-700 italic">
                          "Pure flour through modern excellence" - Surjit Kumar
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-b from-white to-amber-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Foundation</h2>
            <div className="inline-flex bg-amber-500 text-white px-6 py-2 rounded-full">
              Our Values
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="grid md:grid-cols-3 gap-8"
          >
            {values.map((value, index) => (
              <motion.div
                whileHover={{ y: -5 }}
                key={index}
                className={`bg-white rounded-xl shadow-sm hover:shadow-md overflow-hidden transition-all ${expandedValue === index ? 'ring-2 ring-amber-500' : ''}`}
                onClick={() => setExpandedValue(expandedValue === index ? null : index)}
              >
                <div className={`p-8 ${value.color} flex justify-center`}>
                  <motion.div whileHover={{ scale: 1.1 }}>
                    {value.icon}
                  </motion.div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-600 mb-4">{value.description}</p>
                  <div className="flex items-center justify-between text-amber-600 font-medium">
                    <span>Learn more</span>
                    {expandedValue === index ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </div>
                </div>
                <AnimatePresence>
                  {expandedValue === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-gray-600">
                        {value.details}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gradient-to-br from-amber-900 to-orange-800 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-block bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full text-sm font-medium mb-8"
          >
            Our Purpose
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-8"
          >
            Our Mission & Vision
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl max-w-4xl mx-auto mb-12 leading-relaxed"
          >
            To revolutionize flour production by combining traditional quality with modern technology, ensuring every family has access to pure, nutritious flour while supporting sustainable farming practices.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          >
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20 hover:border-white/30 transition-all"
            >
              <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Heart className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Quality Commitment</h3>
              <p className="text-white/90">Uncompromising standards for purity and freshness in every batch</p>
            </motion.div>
            
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20 hover:border-white/30 transition-all"
            >
              <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Globe className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Community Impact</h3>
              <p className="text-white/90">Supporting local farmers and sustainable agriculture practices</p>
            </motion.div>
            
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20 hover:border-white/30 transition-all"
            >
              <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Cpu className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Innovation</h3>
              <p className="text-white/90">Continuous improvement through technology and modern techniques</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;