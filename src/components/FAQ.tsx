import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { X, ChevronDown, MessageCircleQuestion, Phone, Truck, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const FAQ = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What makes your flour different?",
      answer: "Our flour is stone-ground using traditional methods that preserve nutrients and flavor.",
      icon: <ShieldCheck className="text-wheat-gold mr-2" size={18} />
    },
    {
      question: "How fresh is your flour?",
      answer: "We grind fresh to order and deliver within 2-3 days with no preservatives.",
      icon: <Truck className="text-wheat-gold mr-2" size={18} />
    },
    {
      question: "Do you offer organic options?",
      answer: "Yes, we have certified organic wheat, bajra, and multigrain flour.",
      icon: <ShieldCheck className="text-wheat-gold mr-2" size={18} />
    },
    {
      question: "What types of flour do you provide?",
      answer: "We offer whole wheat, bajra, multigrain, jowar, and specialty blends.",
      icon: <ShieldCheck className="text-wheat-gold mr-2" size={18} />
    },
    {
      question: "How should I store the flour?",
      answer: "Keep in airtight containers in a cool, dry place for best freshness.",
      icon: <ShieldCheck className="text-wheat-gold mr-2" size={18} />
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, UPI, net banking, and cash on delivery.",
      icon: <ShieldCheck className="text-wheat-gold mr-2" size={18} />
    },
    {
      question: "Can I customize my flour blend?",
      answer: "Yes! We offer custom blending services. Contact us to create your perfect mix.",
      icon: <ShieldCheck className="text-wheat-gold mr-2" size={18} />
    },
    {
      question: "Do you offer bulk discounts?",
      answer: "We provide special pricing for orders above 10kg. Contact our sales team for details.",
      icon: <ShieldCheck className="text-wheat-gold mr-2" size={18} />
    }
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      {/* Floating FAQ Button */}
      <div className="fixed right-4 bottom-4 z-40">
        <Button 
          onClick={() => setIsOpen(true)}
          className="bg-wheat-gold hover:bg-brown-warm text-white shadow-md rounded-full px-4 py-2 flex items-center gap-2 transition-all hover:scale-105 active:scale-95"
        >
          <MessageCircleQuestion className="h-4 w-4" />
          <span>FAQs</span>
        </Button>
      </div>

      {/* FAQ Panel */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end transition-opacity duration-300">
          <div className="bg-white w-full max-w-md h-full overflow-y-auto transform transition-transform duration-300 translate-x-0">
            <div className="p-4 border-b sticky top-0 bg-white z-10">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold text-brown-warm flex items-center gap-2">
                  <MessageCircleQuestion className="text-wheat-gold" />
                  Frequently Asked Questions
                </h2>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="p-1 rounded-full hover:bg-gray-100 transition-colors"
                >
                  <X className="text-gray-500 hover:text-brown-warm" />
                </button>
              </div>
            </div>

            <div className="p-4 space-y-3">
              {faqs.map((faq, index) => (
                <div 
                  key={index}
                  className="border border-gray-200 rounded-lg overflow-hidden transition-all hover:shadow-sm hover:border-wheat-gold"
                >
                  <button
                    className={`w-full px-4 py-3 text-left flex items-center ${activeIndex === index ? 'bg-wheat-light/20' : ''}`}
                    onClick={() => toggleFAQ(index)}
                  >
                    {faq.icon}
                    <span className="font-medium text-brown-warm flex-1 text-left">{faq.question}</span>
                    <ChevronDown 
                      className={`h-5 w-5 text-wheat-gold transition-transform duration-200 ${activeIndex === index ? 'rotate-180' : ''}`}
                    />
                  </button>
                  
                  {activeIndex === index && (
                    <div className="px-4 pb-3 pt-1 text-gray-700 transition-opacity duration-200">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <Link to="/contact" className="no-underline">
              <div className="p-4 border-t sticky bottom-0 bg-white">
                <Button className="w-full bg-wheat-gold hover:bg-brown-warm text-white transition-colors flex items-center gap-2">
                  <Phone size={16} />
                  Contact Us
                </Button>
              </div>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default FAQ;