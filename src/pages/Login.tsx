
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
    phone: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle authentication logic here
    alert(isLogin ? 'Login successful!' : 'Registration successful!');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section className="bg-gradient-to-br from-wheat-light to-cream min-h-[calc(100vh-4rem)] flex items-center py-16">
        <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <Card className="shadow-xl border-0">
            <CardHeader className="text-center pb-6">
              <div className="w-16 h-16 bg-wheat-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-2xl">V</span>
              </div>
              <CardTitle className="text-2xl font-bold text-brown-warm">
                {isLogin ? 'Welcome Back' : 'Join Verma Flour Mill'}
              </CardTitle>
              <p className="text-gray-600">
                {isLogin 
                  ? 'Sign in to your account to continue shopping'
                  : 'Create an account to start ordering fresh flour'
                }
              </p>
            </CardHeader>

            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                {!isLogin && (
                  <>
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-brown-warm mb-2">
                        Full Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required={!isLogin}
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        className="border-gray-300 focus:border-wheat-gold focus:ring-wheat-gold"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-brown-warm mb-2">
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        required={!isLogin}
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 9876543210"
                        className="border-gray-300 focus:border-wheat-gold focus:ring-wheat-gold"
                      />
                    </div>
                  </>
                )}

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-brown-warm mb-2">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    className="border-gray-300 focus:border-wheat-gold focus:ring-wheat-gold"
                  />
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-brown-warm mb-2">
                    Password
                  </label>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    required
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                    className="border-gray-300 focus:border-wheat-gold focus:ring-wheat-gold"
                  />
                </div>

                {!isLogin && (
                  <div>
                    <label htmlFor="confirmPassword" className="block text-sm font-medium text-brown-warm mb-2">
                      Confirm Password
                    </label>
                    <Input
                      id="confirmPassword"
                      name="confirmPassword"
                      type="password"
                      required={!isLogin}
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      placeholder="Confirm your password"
                      className="border-gray-300 focus:border-wheat-gold focus:ring-wheat-gold"
                    />
                  </div>
                )}

                <Button
                  type="submit"
                  className="w-full bg-wheat-gold hover:bg-brown-warm text-white py-3 text-lg font-medium transition-all duration-300"
                >
                  {isLogin ? 'Sign In' : 'Create Account'}
                </Button>
              </form>

              {isLogin && (
                <div className="text-center mt-4">
                  <Link to="/forgot-password" className="text-wheat-gold hover:text-brown-warm text-sm transition-colors">
                    Forgot your password?
                  </Link>
                </div>
              )}

              <div className="mt-6 text-center">
                <p className="text-gray-600">
                  {isLogin ? "Don't have an account? " : "Already have an account? "}
                  <button
                    type="button"
                    onClick={() => setIsLogin(!isLogin)}
                    className="text-wheat-gold hover:text-brown-warm font-medium transition-colors"
                  >
                    {isLogin ? 'Sign up' : 'Sign in'}
                  </button>
                </p>
              </div>

              {/* Social Login Options */}
              <div className="mt-6">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-gray-500">Or continue with</span>
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-3">
                  <Button variant="outline" className="border-gray-300 hover:bg-gray-50">
                    <span className="mr-2">📱</span>
                    Google
                  </Button>
                  <Button variant="outline" className="border-gray-300 hover:bg-gray-50">
                    <span className="mr-2">📧</span>
                    OTP
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Login;
