
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { useCart } from '@/contexts/CartContext';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  description: string;
  weight: string;
  isOrganic?: boolean;
  isNew?: boolean;
  rating?: number;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  price,
  originalPrice,
  image,
  description,
  weight,
  isOrganic = false,
  isNew = false,
  rating = 0,
}) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      id,
      name,
      price,
      weight,
      image,
    });
  };

  return (
    <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white border-gray-200 hover:border-wheat-gold overflow-hidden">
      <CardHeader className="p-0 relative">
        {/* Product Image */}
        <div className="relative bg-wheat-light h-48 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-wheat-gold to-brown-warm opacity-20"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-6xl opacity-60">🌾</div>
          </div>
          
          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {isNew && (
              <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                New
              </span>
            )}
            {isOrganic && (
              <span className="bg-wheat-gold text-white text-xs px-2 py-1 rounded-full font-medium">
                Organic
              </span>
            )}
          </div>

          {/* Discount Badge */}
          {originalPrice && (
            <div className="absolute top-3 right-3">
              <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                {Math.round(((originalPrice - price) / originalPrice) * 100)}% OFF
              </span>
            </div>
          )}
        </div>
      </CardHeader>

      <CardContent className="p-4 space-y-3">
        {/* Product Name */}
        <h3 className="font-bold text-lg text-brown-warm group-hover:text-wheat-gold transition-colors duration-200">
          {name}
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-sm line-clamp-2">
          {description}
        </p>

        {/* Weight */}
        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold font-serif text-gray-800 bg-gray-300 px-2 py-1 rounded">
            {weight}
          </span>
{/* Rating */}
{rating > 0 && (
  <div className="flex items-center space-x-1">
    <div className="flex">
      {[...Array(5)].map((_, i) => (
       <svg
  key={i}
  xmlns="http://www.w3.org/2000/svg"
  className={`w-4 h-4 fill-current transition duration-900 ${rating === 5 ? 'animate-pulse' : ''}`}
  viewBox="0 0 20 20"
  fill="currentColor"
  style={{ color: i < rating ? '#FB7185' : '#D1D5DB' }} // lime-400 or gray-300
>
  <path d="M10 15.27L16.18 18l-1.64-7.03L20 7.24l-7.19-.61L10 0 7.19 6.63 0 7.24l5.46 4.73L3.82 18z" />
</svg>

      ))}
    </div>
    <span className="text-xs  font-bold opacity-80 text-green-600">({rating})</span>
  </div>
)}
        </div>

        {/* Pricing */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold text-brown-warm">
              ₹{price}
            </span>
            {originalPrice && (
              <span className="text-sm text-gray-400 line-through">
                ₹{originalPrice}
              </span>
            )}
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <Button
          onClick={handleAddToCart}
          className="w-full bg-wheat-gold hover:bg-brown-warm text-white transition-all duration-300 transform group-hover:scale-105"
        >
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;