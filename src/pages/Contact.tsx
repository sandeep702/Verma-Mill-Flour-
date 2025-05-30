import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      alert('Thank you for your message! We will get back to you soon.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-cream/10 to-wheat-light/20">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/texture-light.png')] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold font-serif text-brown-dark mb-6">
            Contact Us
          </h1>
          <div className="w-24 h-1.5 bg-wheat-gold mx-auto mb-8"></div>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto font-sans leading-relaxed">
            We'd love to hear from you. Whether you have questions about our products, 
            want to place an order, or just want to say hello, we're here for you.
          </p>
        </div>
      </section>
 <div className="mb-2 flex flex-col items-center text-center">
              <h2 className="text-3xl font-bold text-brown-dark mb-4">Our Contact Information</h2>
              <p className="text-gray-600 text-xl leading-relaxed">
                Have questions about our products or services? We're here to help!

              </p>
              <p className="text-gray-600 text-xl leading-relaxed">   Reach out to us through any of the following channels.</p>
            </div>
      {/* Contact Section */}
      <section className=" flex-grow relative">
        <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-cream to-transparent -z-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
         

            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-start mt-12 space-x-4 p-6 bg-white rounded-xl shadow-sm border border-cream hover:shadow-md transition-all duration-300 hover:border-wheat-gold/30">
                <div className="w-12 h-12 bg-gradient-to-br from-wheat-gold to-brown-warm rounded-full flex items-center justify-center flex-shrink-0 shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-brown-dark mb-2">Visit Our Mill</h3>
                  <p className="text-gray-600">
                    Near Gov School, Malewala<br />
                    Sirsa, India - 125055
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-sm border border-cream hover:shadow-md transition-all duration-300 hover:border-wheat-gold/30">
                <div className="w-12 h-12 bg-gradient-to-br from-wheat-gold to-brown-warm rounded-full flex items-center justify-center flex-shrink-0 shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-lime-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-brown-dark mb-2">Call Us</h3>
                  <p className="text-gray-600">
                    +91-9053643988<br />
                    +91-9050306580
                  </p>
                  <a href="tel:+919053643988" className="mt-2 inline-flex items-center gap-1 text-wheat-gold hover:text-brown-dark transition-colors font-medium">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Call Now
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-sm border border-cream hover:shadow-md transition-all duration-300 hover:border-wheat-gold/30">
                <div className="w-12 h-12 bg-gradient-to-br from-wheat-gold to-brown-warm rounded-full flex items-center justify-center flex-shrink-0 shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-brown-dark mb-2">Email Us</h3>
                  <p className="text-gray-600">
                    ravinderkumar.90536@gmail.com<br />
                    ravinderverma90536@gmail.com
                  </p>
                  <a href="mailto:ravinderkumar.90536@gmail.com" className="mt-2 inline-flex items-center gap-1 text-wheat-gold hover:text-brown-dark transition-colors font-medium">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Send Email
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-sm border border-cream hover:shadow-md transition-all duration-300 hover:border-wheat-gold/30">
                <div className="w-12 h-12 bg-gradient-to-br from-wheat-gold to-brown-warm rounded-full flex items-center justify-center flex-shrink-0 shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-lime-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-brown-dark mb-2">Working Hours</h3>
                  <p className="text-gray-600">Monday - Sunday: 8:00 AM - 8:00 PM</p>
                  <p className="text-gray-500 text-sm mt-1">24/7 Support for urgent inquiries</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl mt-12 p-8 shadow-lg border border-cream/50 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-wheat-gold to-brown-warm"></div>
            <h3 className="text-2xl font-bold text-brown-dark mb-2">Send Us a Message</h3>
            <p className="text-gray-600 mb-6">We typically respond within 24 hours</p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name <span className="text-wheat-gold">*</span>
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className="bg-white border-gray-300 focus:border-wheat-gold focus:ring-wheat-gold/50 rounded-lg py-3 px-4"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 XXXXXXXXXX"
                    className="bg-white border-gray-300 focus:border-wheat-gold focus:ring-wheat-gold/50 rounded-lg py-3 px-4"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address <span className="text-wheat-gold">*</span>
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  className="bg-white border-gray-300 focus:border-wheat-gold focus:ring-wheat-gold/50 rounded-lg py-3 px-4"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject <span className="text-wheat-gold">*</span>
                </label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What's this about?"
                  className="bg-white border-gray-300 focus:border-wheat-gold focus:ring-wheat-gold/50 rounded-lg py-3 px-4"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message <span className="text-wheat-gold">*</span>
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us more about your inquiry..."
                  rows={5}
                  className="bg-white border-gray-300 focus:border-wheat-gold focus:ring-wheat-gold/50 rounded-lg py-3 px-4"
                />
              </div>

             <div className="flex justify-center">
  <Button 
    type="submit" 
    className="bg-gradient-to-br w-half from-lime-600 font-bold to-brown-warm hover:from-wheat-gold/90 hover:to-brown-warm/90 text-white shadow-md hover:shadow-lg"
    disabled={isSubmitting}
  >
    {isSubmitting ? (
      <>
        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        Sending...
      </>
    ) : 'Send Message'}
  </Button>
</div>

            </form>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gradient-to-b from-cream/20 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-brown-dark mb-4">Our Location</h2>
            <div className="w-24 h-1.5 bg-wheat-gold mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Visit our mill to see the traditional stone grinding process in action and experience 
              the quality of our products firsthand.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border border-cream/50 overflow-hidden">
            <div className="w-full h-96 rounded-lg overflow-hidden relative border border-cream/50">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3468.9171057540493!2d75.072104!3d29.6060959!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39114923c70f85a9%3A0x6cd08404c511cccb!2sVerma%20Flour%20Mill!5e0!3m2!1sen!2sin!4v1748363701322!5m2!1sen!2sin"
                className="absolute inset-0 w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Verma Flour Mill Location"
              ></iframe>
            </div>
            <div className="mt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
              <div>
                <h3 className="font-semibold text-brown-dark">Verma Flour Mill</h3>
                <p className="text-gray-600">Near Gov School, Malewala, Sirsa, India - 125055</p>
              </div>
              <Button 
                asChild
                className="bg-gradient-to-br from-lime-600 font-bold to-brown-warm hover:from-wheat-gold/90 hover:to-brown-warm/90 text-white shadow-md hover:shadow-lg"
              >
                <a 
                  href="https://www.google.com/maps/place/Verma+Flour+Mill/@29.6060959,75.072104,15z/data=!4m6!3m5!1s0x39114923c70f85a9:0x6cd08404c511cccb!8m2!3d29.6060959!4d75.072104!16s%2Fg%2F11k0j3pz4y?entry=ttu" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Get Directions
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;