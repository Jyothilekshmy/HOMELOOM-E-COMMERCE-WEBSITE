import React, { useState, useMemo } from 'react';
import { ProductFilter } from '../widgets/shop/ProductFilter';
import { ProductGrid } from '../widgets/shop/ProductGrid';
import { Input } from '../components/ui/Input';

export function ShopPage({ products = [], onSelectProduct, onAddToCart }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortOption, setSortOption] = useState('featured');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = useMemo(() => {
    return Array.from(new Set(products.map((p) => p.category)));
  }, [products]);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Filter by category
    if (selectedCategory !== 'All') {
      result = result.filter((p) => p.category === selectedCategory);
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q)
      );
    }

    // Sort
    if (sortOption === 'price-low') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortOption === 'price-high') {
      result.sort((a, b) => b.price - a.price);
    } else if (sortOption === 'rating') {
      result.sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [products, selectedCategory, sortOption, searchQuery]);

  return (
    <div className="py-6">
      {/* Header */}
      <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-amber-800">
            Artisan Catalog
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-green-950 mt-1">
            Everything for Your Home
          </h1>
          <p className="text-sm text-amber-800 mt-1">
            Showing {filteredProducts.length} handcrafted sustainable pieces
          </p>
        </div>

        {/* Search Bar */}
        <div className="w-full md:w-72">
          <Input
            placeholder="Search furnitures,decors.."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Filter and Sort Widget */}
      <ProductFilter
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
        sortOption={sortOption}
        onSortChange={setSortOption}
      />

      {/* Product Grid Widget */}
      <ProductGrid
        products={filteredProducts}
        onSelectProduct={onSelectProduct}
        onAddToCart={onAddToCart}
      />
    </div>
  );
}

export default ShopPage;
