
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { Button } from '@/components/ui/button';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('name');

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'wheat', name: 'Wheat Flour' },
    { id: 'millets', name: 'Millet Flour' },
    { id: 'multigrain', name: 'Multigrain' },
    { id: 'organic', name: 'Organic' }
  ];

  const products = [
    {
      id: '1',
      name: 'Premium Whole Wheat Flour',
      price: 85,
      originalPrice: 100,
      image: '/api/placeholder/300/200',
      description: 'Stone-ground whole wheat flour with complete nutrition and authentic taste. Perfect for daily use.',
      weight: '5 kg',
      category: 'wheat',
      isNew: true,
      rating: 5
    },
    {
      id: '2',
      name: 'Organic Bajra Flour',
      price: 120,
      image: '/api/placeholder/300/200',
      description: 'Nutrient-rich pearl millet flour, perfect for healthy rotis and traditional recipes.',
      weight: '2 kg',
      category: 'millets',
      
      isOrganic: true,

      rating: 5
    },
    {
      id: '3',
      name: 'Multigrain Health Mix',
      price: 150,
      originalPrice: 180,
      image: '/api/placeholder/300/200',
      description: 'Balanced blend of wheat, jowar, bajra, and other grains for optimal nutrition.',
      weight: '3 kg',
      category: 'multigrain',
      
      isOrganic: true,
      rating: 5
    },
    {
      id: '4',
      name: 'Traditional Jowar Flour',
      price: 95,
      image: '/api/placeholder/300/200',
      description: 'High-fiber sorghum flour, excellent for gluten-free diet and diabetes management.',
      weight: '2 kg',
      category: 'millets',
      rating: 4
    },
    {
      id: '5',
      name: 'Organic Whole Wheat',
      price: 110,
      originalPrice: 130,
      image: '/api/placeholder/300/200',
      description: 'Certified organic wheat flour from pesticide-free farms, stone-ground for purity.',
      weight: '5 kg',
      category: 'wheat',
      isOrganic: true,
      rating: 5
    },
    {
      id: '6',
      name: 'Mixed Millet Flour',
      price: 140,
      image: '/api/placeholder/300/200',
      description: 'Nutritious blend of bajra, jowar, and ragi for enhanced health benefits.',
      weight: '2.5 kg',
      category: 'multigrain',
      isNew: true,
      rating: 5
    
    },
    {
      id: '7',
      name: 'Sharbati Wheat Flour',
      price: 125,
      image: '/api/placeholder/300/200',
      description: 'Premium quality Sharbati wheat flour, known for its superior taste and texture.',
      weight: '10 kg',
      category: 'wheat',
      isFinite: true,
      isOrganic: true,
      rating: 5
    },
    {
      id: '8',
      name: 'Ragi Flour',
      price: 100,
      image: '/api/placeholder/300/200',
      description: 'Calcium-rich finger millet flour, perfect for healthy breakfast and snacks.',
      weight: '1 kg',
      
      category: 'millets',
      rating: 4
    }
  ];

  const filteredProducts = products.filter(product => 
    selectedCategory === 'all' || 
    product.category === selectedCategory ||
    (selectedCategory === 'organic' && product.isOrganic)
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return (b.rating || 0) - (a.rating || 0);
      default:
        return a.name.localeCompare(b.name);
    }
  });

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
    <section className="bg-gradient-to-br from-wheat-light to-cream py-24">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center">
      <h1 className="text-4xl md:text-5xl font-extrabold font-serif text-brown-warm mb-6  tracking-tight">
        Discover Our Finest Flours
      </h1>
       <p className="text-lg md:text-xl text-gray-800 max-w-2xl mx-auto  leading-relaxed">
        Our flours are crafted using modern machines while preserving the soul of tradition — 
        ensuring freshness, nutrition, and love in every bite.
      </p>
    </div>
  </div>
</section>


      {/* Filters and Products */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Bar */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-12">
            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`${
                    selectedCategory === category.id
                      ? 'bg-wheat-gold hover:bg-brown-warm text-white'
                      : 'border-wheat-gold text-wheat-gold hover:bg-wheat-gold hover:text-white'
                  } transition-all duration-200`}
                >
                  {category.name}
                </Button>
              ))}
            </div>

          {/* Sort Options */}
<div className="flex items-center gap-3">
  <label htmlFor="sortBy" className="text-sm font-semibold font-serif text-gray-800">
    Sort by:
  </label>
  <select
    id="sortBy"
    value={sortBy}
    onChange={(e) => setSortBy(e.target.value)}
    className="border border-gray-300 rounded-md px-4 py-2 text-sm font-semibold text-orange-600 bg-white hover:border-wheat-gold focus:outline-none focus:ring-2 focus:ring-wheat-gold transition"
  >
    <option value="price-low">Price: Low to High</option>
    <option value="price-high">Price: High to Low</option>
    <option value="rating">Highest Rated</option>
  </select>
</div>
          </div>
          {/* Product Count */}
          <div className="mb-8">
            <p className="text-gray-600">
              Showing {sortedProducts.length} of {products.length} products
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {sortedProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>

          {/* Empty State */}
          {sortedProducts.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🌾</div>
              <h3 className="text-xl font-semibold text-brown-warm mb-2">
                No products found
              </h3>
              <p className="text-gray-600 mb-6">
                Try adjusting your filters to find what you're looking for.
              </p>
              <Button
                onClick={() => setSelectedCategory('all')}
                className="bg-wheat-gold hover:bg-brown-warm text-white"
              >
                View All Products
              </Button>
            </div>
          )}
        </div>
      </section>

     {/* Quality Promise Section */}
<section className="py-16 bg-wheat-light">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-brown-warm mb-4">
        Our Quality Promise
      </h2>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        Since <span className="font-semibold text-brown-warm">2003</span>, we've blended modern milling machines with traditional values — ensuring top quality, freshness, and trust.
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      {/* Feature 1 */}
      <div className="text-center p-6 bg-white rounded-xl shadow hover:shadow-md hover:-translate-y-1 transition-all duration-300">
        <div className="w-16 h-16 bg-wheat-gold rounded-full flex items-center justify-center mx-auto mb-4 shadow-inner">
          <span className="text-3xl">🌾</span>
        </div>
        <h3 className="font-semibold text-brown-warm text-lg mb-2">Stone Ground</h3>
        <p className="text-sm text-gray-600">Traditional chakki grinding preserves natural nutrients.</p>
      </div>

      {/* Feature 2 */}
      <div className="text-center p-6 bg-white rounded-xl shadow hover:shadow-md hover:-translate-y-1 transition-all duration-300">
        <div className="w-16 h-16 bg-wheat-gold rounded-full flex items-center justify-center mx-auto mb-4 shadow-inner">
          <span className="text-3xl">⚙️</span>
        </div>
        <h3 className="font-semibold text-brown-warm text-lg mb-2">Modern Machines</h3>
        <p className="text-sm text-gray-600">We use the latest tech to enhance purity and efficiency.</p>
      </div>

      {/* Feature 3 */}
<div className="text-center p-6 bg-white rounded-xl shadow hover:shadow-md hover:-translate-y-1 transition-all duration-300">
  <div className="w-16 h-16 bg-wheat-gold rounded-full flex items-center justify-center mx-auto mb-4 shadow-inner">
    <span className="text-3xl">❤️‍🔥</span>
  </div>
  <h3 className="font-semibold text-brown-warm text-lg mb-2">Made with Love</h3>
  <p className="text-sm text-gray-600">
    Crafted with care and precision — we use modern machinery for flour preparation to ensure consistency, purity, and a touch of love in every bite.
  </p>
</div>


      {/* Feature 4 */}
      <div className="text-center p-6 bg-white rounded-xl shadow hover:shadow-md hover:-translate-y-1 transition-all duration-300">
        <div className="w-16 h-16 bg-wheat-gold rounded-full flex items-center justify-center mx-auto mb-4 shadow-inner">
          <span className="text-3xl">📦</span>
        </div>
        <h3 className="font-semibold text-brown-warm text-lg mb-2">Safe Packaging</h3>
        <p className="text-sm text-gray-600">Airtight & eco-friendly packaging to lock in freshness.</p>
      </div>
    </div>
  </div>
</section>


      <Footer />
    </div>
  );
};

export default Products;
