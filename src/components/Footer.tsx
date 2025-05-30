import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { toast } from '@/hooks/use-toast';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter subscription:', email);
    toast({
      title: "Subscribed Successfully!",
      description: "Thank you for subscribing to our newsletter. You'll receive updates about fresh flour and special offers.",
    });
    setEmail('');
  };

  return (
    <footer className="bg-slate-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="group flex items-center space-x-2 transition-transform duration-200">
              <div className="w-16 h-16 bg-lime-200 rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                <img 
                  src="/uploads/logo.png" 
                  alt="Verma Flour Mill Logo" 
                  className="w-18 h-18 group-hover:scale-110 transition-transform duration-300" 
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold group-hover:text-wheat-gold transition-colors duration-200">Verma</span>
                <span className="text-sm italic opacity-90 -mt-1 group-hover:opacity-100 transition-opacity duration-200">Flour Mill</span>
              </div>
            </div>
         <p className="text-base font-medium tracking-wide text-white/90 leading-relaxed hover:text-wheat-gold hover:scale-105 transition-all duration-300 ease-in-out">
  A legacy of purity since 2003 — where every grain tells a story of trust and tradition.
</p>

         <div className="flex space-x-4">
  {/* Facebook */}
  <a
    href="https://www.facebook.com/share/1ALch1CFGJ/"
    target="_blank"
    rel="noopener noreferrer"
    className="w-8 h-8 bg-pink-500 rounded-xl flex items-center justify-center hover:bg-white hover:text-brown-warm transition-all duration-200 cursor-pointer hover:scale-110 active:scale-95"
  >
    <svg
  xmlns="http://www.w3.org/2000/svg"
  fill="currentColor"
  viewBox="0 0 24 24"
  className="w-6 h-6"
>
  <path d="M22 12.07C22 6.48 17.52 2 12 2S2 6.48 2 12.07c0 5 3.66 9.13 8.44 9.93v-7.03h-2.54v-2.9h2.54v-2.2c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.44 2.9h-2.34v7.03C18.34 21.2 22 17.05 22 12.07z" />
</svg>

  </a>

  {/* X (Twitter) */}
  <a
    href="https://x.com/Ravinde05772075?t=UwkkN6L_xZdBNfqbr8BuUQ&s=08"
    target="_blank"
    rel="noopener noreferrer"
    className="w-8 h-8 bg-pink-500 rounded-xl flex items-center justify-center hover:bg-white hover:text-brown-warm transition-all duration-200 cursor-pointer hover:scale-110 active:scale-95"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
      className="w-5 h-5"
    >
      <path d="M23.954 4.569a10 10 0 0 1-2.825.775 4.932 4.932 0 0 0 2.163-2.724 9.864 9.864 0 0 1-3.127 1.195 4.916 4.916 0 0 0-8.38 4.482A13.94 13.94 0 0 1 1.671 3.149 4.822 4.822 0 0 0 3.195 9.72a4.9 4.9 0 0 1-2.228-.616v.06a4.918 4.918 0 0 0 3.946 4.827 4.996 4.996 0 0 1-1.29.172c-.315 0-.622-.03-.922-.086a4.936 4.936 0 0 0 4.6 3.417 9.868 9.868 0 0 1-6.102 2.104c-.395 0-.787-.023-1.175-.068a13.945 13.945 0 0 0 7.548 2.213c9.054 0 14.002-7.496 14.002-13.986 0-.21 0-.423-.015-.633A9.936 9.936 0 0 0 24 4.59z" />
    </svg>
  </a>

  {/* Instagram */}
  <a
    href="https://www.instagram.com/_ravinder_official_?igsh=bDAwcnI0dWpqbnFy"
    target="_blank"
    rel="noopener noreferrer"
    className="w-8 h-8 bg-pink-500 rounded-xl flex items-center justify-center hover:bg-white hover:text-brown-warm transition-all duration-200 cursor-pointer hover:scale-110 active:scale-95"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
      className="w-5 h-5"
    >
      <path d="M7.75 2A5.75 5.75 0 0 0 2 7.75v8.5A5.75 5.75 0 0 0 7.75 22h8.5A5.75 5.75 0 0 0 22 16.25v-8.5A5.75 5.75 0 0 0 16.25 2h-8.5zm7.25 4.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-3.25 1.75a4 4 0 1 1 0 8 4 4 0 0 1 0-8zM12 9.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5z" />
    </svg>
  </a>
</div>
          </div>
          

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold hover:text-wheat-gold transition-colors duration-200 w-fit">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { path: "/", label: "Home" },
                { path: "/about", label: "About Us" },
                { path: "/products", label: "Products" },
                { path: "/contact", label: "Contact" }
              ].map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path} 
                    className="text-sm opacity-90 hover:opacity-100 hover:text-wheat-gold transition-all duration-200 hover:translate-x-1 inline-block before:content-['→'] before:mr-1 before:opacity-0 before:transition-all before:duration-200 hover:before:opacity-100 hover:before:mr-2"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold hover:text-wheat-gold transition-colors duration-200 w-fit">Our Products</h3>
            <ul className="space-y-2">
              {[
                "Whole Wheat Flour",
                "Bajra Flour",
                "Multigrain Flour",
                "Organic Options",
                "Custom Blends"
              ].map((product) => (
                <li 
                  key={product}
                  className="text-sm opacity-90 hover:opacity-100 hover:text-wheat-gold transition-all duration-200 cursor-pointer relative before:absolute before:-left-3 before:top-1/2 before:-translate-y-1/2 before:w-1 before:h-1 before:bg-wheat-gold before:rounded-full before:opacity-0 before:transition-all before:duration-200 hover:before:opacity-100"
                >
                  {product}
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold hover:text-wheat-gold transition-colors duration-200 w-fit">Stay Connected</h3>
            
            {/* Newsletter Signup */}
            <form onSubmit={handleNewsletterSubmit} className="space-y-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="w-full px-3 py-2 text-brown-warm rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-wheat-gold transition-all duration-200 placeholder:opacity-70 hover:shadow-lg"
              />
              <Button 
                type="submit" 
                size="sm" 
                className="w-full bg-wheat-gold hover:bg-white hover:text-brown-warm transition-all duration-200 hover:scale-105 active:scale-95 shadow-md hover:shadow-lg"
              >
                Subscribe to Newsletter
              </Button>
            </form>

            {/* Contact Info */}
            <div className="space-y-2 pt-2">
              {[
                { icon: "📞", text: "+91-9053643988" },
                { icon: "✉️", text: "info@vermaflourmill.com" },
                { icon: "🕒", text: "Contact Anytime" }
              ].map((item, index) => (
                <div 
                  key={index} 
                  className="flex items-center space-x-2 group transition-colors duration-200"
                >
                  <span className="text-wheat-gold group-hover:scale-125 transition-transform duration-200">{item.icon}</span>
                  <span className="text-sm opacity-90 group-hover:opacity-100 group-hover:text-wheat-gold transition-all duration-200">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t  content-center border-white border-opacity-20 mt-4 pt-8 flex flex-col lg:flex-row justify-center">
          <div className="text-sm opacity-90 mb-2   lg:mb-0 hover:opacity-100 hover:text-wheat-gold transition-all duration-200">
            © {new Date().getFullYear()} Verma Flour Mill. All rights reserved.
          </div>
         
        </div>
      </div>
    </footer>
  );
};

export default Footer;