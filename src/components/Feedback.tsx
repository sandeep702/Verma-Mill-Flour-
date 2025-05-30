
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { toast } from '@/hooks/use-toast';

const Feedback = () => {
  const [feedback, setFeedback] = useState({
    name: '',
    email: '',
    rating: 5,
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Feedback submitted:', feedback);
    toast({
      title: "Feedback Submitted",
      description: "Thank you for your valuable feedback! We appreciate your input.",
    });
    setFeedback({ name: '', email: '', rating: 5, message: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFeedback({
      ...feedback,
      [e.target.name]: e.target.value
    });
  };


  return (
    <section className="py-4 bg-[#FFF8F0]">
  <div className="max-w-md mx-auto px-4">
    <div className="text-center mb-8">
      <h2 className="text-3xl font-bold text-yellow-800 mb-2">Feedback</h2>
      <p className="text-sm text-gray-600">We value your thoughts and suggestions!</p>
    </div>

    <div className="bg-white rounded-2xl shadow-lg p-6 space-y-5 transition-all duration-300">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-yellow-800 mb-1">Name</label>
          <input
            type="text"
            name="name"
            value={feedback.name}
            onChange={handleInputChange}
            required
            className="w-full px-3 py-2 border border-gray-200 rounded-lg shadow-sm focus:ring-2 focus:ring-yellow-300 outline-none"
            placeholder="Your Name"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-yellow-800 mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={feedback.email}
            onChange={handleInputChange}
            required
            className="w-full px-3 py-2 border border-gray-200 rounded-lg shadow-sm focus:ring-2 focus:ring-yellow-300 outline-none"
            placeholder="you@example.com"
          />
        </div>
<div className="flex justify-center">
        <div>
          <label className="block text-sm text-center font-medium text-yellow-800 mb-1">Rating</label>
          <div className="flex gap-1 items-center">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                onClick={() => setFeedback({ ...feedback, rating: star })}
                className={`text-xl ${
                  star <= feedback.rating ? 'text-yellow-400' : 'text-gray-300'
                } hover:scale-110 transition-transform duration-150`}
              >
                ⭐
              </button>
            ))}
          </div>
        </div>
</div>
        <div>
          <label className="block text-sm font-medium text-yellow-800 mb-1">Message</label>
          <textarea
            name="message"
            value={feedback.message}
            onChange={handleInputChange}
            required
            rows={3}
            className="w-full px-3 py-2 border border-gray-200 rounded-lg shadow-sm focus:ring-2 focus:ring-yellow-300 outline-none resize-none"
            placeholder="Your feedback..."
          />
        </div>

        <button
          type="submit"
          className="w-full bg-lime-500 hover:bg-orange-600 text-white text-xl font-serif py-2 rounded-lg font-semibold transition-all duration-200"
        >
          Submit
        </button>
      </form>
    </div>
  </div>
</section>

  );
};

export default Feedback;
