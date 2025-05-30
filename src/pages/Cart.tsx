
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { useCart } from '@/contexts/CartContext';
import { toast } from '@/hooks/use-toast';
declare global {
  interface Window {
    Razorpay: any;
  }
}

const Cart = () => {
  const { cartItems, updateQuantity, getCartTotal, clearCart } = useCart();

  const subtotal = getCartTotal();
  const shipping = subtotal > 500 ? 0 : 50;
  const total = subtotal + shipping;

  const loadRazorpay = () => {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  const handleCheckout = async () => {
    console.log('Proceeding to checkout...');
    
    const res = await loadRazorpay();
    
    if (!res) {
      toast({
        title: "Error",
        description: "Razorpay SDK failed to load. Please check your internet connection.",
        variant: "destructive"
      });
      return;
    }

    const options = {
      key: "rzp_test_9999999999", // Replace with your Razorpay Test Key ID
      amount: total * 100, // Amount in paise
      currency: "INR",
      name: "Verma Flour Mill",
      description: "Fresh Stone-Ground Flour Purchase",
      image: "/lovable-uploads/bededb14-02b4-4c7b-b406-98ecbc63b475.png",
      handler: function (response: any) {
        console.log('Payment successful:', response);
        toast({
          title: "Payment Successful! 🎉",
          description: `Payment ID: ${response.razorpay_payment_id}`,
        });
        clearCart();
      },
      prefill: {
        name: "Customer Name",
        email: "customer@example.com",
        contact: "9999999999"
      },
      notes: {
        address: "Verma Flour Mill, Local Store"
      },
      theme: {
        color: "#D4A574"
      },
      modal: {
        ondismiss: function() {
          toast({
            title: "Payment Cancelled",
            description: "You cancelled the payment process",
            variant: "destructive"
          });
        }
      }
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  const handleClearCart = () => {
    clearCart();
    toast({
      title: "Cart Cleared",
      description: "All items have been removed from your cart",
    });
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-wheat-light to-cream ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl mt-20  font-serif md:text-5xl font-bold text-brown-warm mb-6 animate-fade-in">
              Shopping Cart
            </h1>
            <p className="text-xl mb-8 font-mono text-gray-700">
              Review your selected items before checkout
            </p>
          </div>
        </div>
      </section>

      {/* Cart Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {cartItems.length === 0 ? (
            /* Empty Cart */
            <div className="text-center py-16 animate-fade-in">
              <div className="text-6xl mb-6">🛒</div>
              <h2 className="text-2xl font-bold text-brown-warm mb-4">
                Your cart is empty
              </h2>
              <p className="text-gray-600 mb-8">
                Looks like you haven't added any items to your cart yet.
              </p>
              <Link to="/products">
                <Button className="bg-wheat-gold hover:bg-brown-warm text-white px-8 py-3 hover:scale-105 transition-all duration-200">
                  Continue Shopping
                </Button>
              </Link>
            </div>
          ) : (
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-bold text-brown-warm mb-6">
                    Cart Items ({cartItems.length})
                  </h2>
                  <Button
                    variant="outline"
                    onClick={handleClearCart}
                    className="text-red-600 border-red-600 hover:bg-red-50"
                  >
                    Clear Cart
                  </Button>
                </div>
                
                {cartItems.map((item) => (
                  <Card key={item.id} className="hover:shadow-md transition-all duration-200 animate-fade-in">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-6">
                        {/* Product Image */}
                        <div className="w-24 h-24 bg-wheat-light rounded-lg flex items-center justify-center flex-shrink-0 hover:scale-105 transition-transform duration-200">
                          <span className="text-3xl">🌾</span>
                        </div>
                        
                        {/* Product Info */}
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-brown-warm mb-1">
                            {item.name}
                          </h3>
                          <p className="text-gray-600 text-sm mb-2">{item.weight}</p>
                          <p className="text-lg font-bold text-brown-warm">
                            ₹{item.price}
                          </p>
                        </div>
                        
                        {/* Quantity Controls */}
                        <div className="flex items-center space-x-3">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-8 h-8 p-0 hover:scale-110 transition-transform duration-200"
                          >
                            -
                          </Button>
                          <span className="w-8 text-center font-medium bg-wheat-light px-2 py-1 rounded">
                            {item.quantity}
                          </span>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-8 h-8 p-0 hover:scale-110 transition-transform duration-200"
                          >
                            +
                          </Button>
                        </div>
                        
                        {/* Remove Button */}
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => updateQuantity(item.id, 0)}
                          className="text-red-600 border-red-600 hover:bg-red-50 hover:scale-105 transition-all duration-200"
                        >
                          Remove
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <Card className="sticky top-24 animate-fade-in hover:shadow-lg transition-shadow duration-200">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-brown-warm mb-6">
                      Order Summary
                    </h3>
                    
                    <div className="space-y-4 mb-6">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Subtotal</span>
                        <span className="font-medium">₹{subtotal}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Shipping</span>
                        <span className="font-medium">
                          {shipping === 0 ? 'Free' : `₹${shipping}`}
                        </span>
                      </div>
                      {shipping === 0 && (
                        <p className="text-sm text-green-600 animate-pulse">
                          🎉 Free shipping on orders above ₹500
                        </p>
                      )}
                      <div className="border-t pt-4">
                        <div className="flex justify-between text-lg font-bold">
                          <span>Total</span>
                          <span>₹{total}</span>
                        </div>
                      </div>
                    </div>

                    <Button
                      onClick={handleCheckout}
                      className="w-full bg-wheat-gold hover:bg-brown-warm text-white py-3 mb-4 hover:scale-105 transition-all duration-200"
                    >
                      Pay with Razorpay
                    </Button>

                    <Link to="/products">
                      <Button variant="outline" className="w-full border-wheat-gold text-wheat-gold hover:bg-wheat-gold hover:text-white hover:scale-105 transition-all duration-200">
                        Continue Shopping
                      </Button>
                    </Link>

                    {/* Trust Indicators */}
                    <div className="mt-6 pt-6 border-t space-y-3">
                      <div className="flex items-center space-x-2 text-sm text-gray-600 hover:text-wheat-gold transition-colors duration-200">
                        <span>🔒</span>
                       <span>Secure Payment with Razorpay</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-600 hover:text-wheat-gold transition-colors duration-200">
                        <span>🚚</span>
                        <span>Free Delivery Above ₹500</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-600 hover:text-wheat-gold transition-colors duration-200">
                        <span>↩️</span>
                        <span>Easy Returns</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Cart;
