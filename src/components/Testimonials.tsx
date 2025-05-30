import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sandeep kamboz",
      location: "Google Maps",
      rating: 4.5,
      text: "Pure and fresh Chakki Aatta",
      time: "just now",
      badge: "ago",
      avatar: "SK"
    },
    {
      id: 2,
      name: "Ritik Singh Chauhan",
      location: "Google Maps",
      rating: 4,
      text: "The quality of their Wheat Flour is very good and they provide the Flour on time.",
      time: "51 minutes ago",
      badge: "ago",
      avatar: "RC"
    },
    {
      id: 3,
      name: "Ankit Moond",
      location: "Google Maps",
      rating: 5,
      text: "Best quality atta available 24*7 at reasonable price.",
      badge: "7 months ago",
      avatar: "AM"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-cream to-wheat-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brown-warm mb-4">
            Latest Google Reviews from Our Happy Customers
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real feedback from real customers on Google Maps — See what they’re saying about our flour quality and service!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="group transition-transform hover:scale-[1.02] hover:-translate-y-1"
            >
              <Card className="bg-white border border-gray-200 rounded-2xl hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-5">
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center space-x-2">
                      <div className="w-9 h-9 rounded-full bg-yellow-200 text-yellow-800 flex items-center justify-center font-bold uppercase">
                        {testimonial.avatar}
                      </div>
                      <div>
                        <p className="font-semibold text-brown-warm">
                          {testimonial.name}
                        </p>
                        <p className="text-xs text-gray-500">{testimonial.location}</p>
                      </div>
                    </div>
                    <div className="text-sm text-gray-400 text-right">
                    
                      {testimonial.badge && (
                        <span className="ml-2 px-2 py-0.5 bg-yellow-100 text-yellow-600 rounded-full text-xs font-semibold animate-pulse">
                          {testimonial.badge}
                        </span>
                      )}
                    </div>
                  </div>

                  <p className="text-gray-700  text-sm leading-relaxed italic transition-all duration-200 group-hover:text-brown-600">
                    "{testimonial.text}"
                  </p>
                  <div className="flex justify-center mt-4 mb-3">
                    {[...Array(Math.floor(testimonial.rating))].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-lg">⭐</span>
                    ))}
                    {testimonial.rating % 1 !== 0 && (
                      <span className="text-yellow-400 text-lg">⭐️</span>
                    )}
                  </div>

                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
