import React from 'react';
import { ProductCard } from '../common/ProductCard';

export function ProductGrid({ products = [], onSelectProduct, onAddToCart }) {
  if (products.length === 0) {
    return (
      <div className="text-center py-20 bg-stone-50 rounded-2xl border border-dashed border-stone-300">
        <p className="text-stone-500 text-sm">No items found matching the selected criteria.</p>
      </div>
    );
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onSelect={onSelectProduct}
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  );
}

export default ProductGrid;
