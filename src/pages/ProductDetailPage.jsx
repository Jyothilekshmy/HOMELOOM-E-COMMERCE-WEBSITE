import React from 'react';
import { ProductGallery } from '../widgets/product/ProductGallery';
import { ProductInfo } from '../widgets/product/ProductInfo';
import { ProductCard } from '../widgets/common/ProductCard';
import { Button } from '../components/ui/Button';

export function ProductDetailPage({
  product,
  allProducts = [],
  onNavigate,
  onSelectProduct,
  onAddToCart,
}) {
  if (!product) {
    return (
      <div className="py-20 text-center">
        <h2 className="text-2xl font-serif text-stone-800">No product selected</h2>
        <Button variant="accent" className="mt-4" onClick={() => onNavigate('shop')}>
          Back to Catalog
        </Button>
      </div>
    );
  }

  // Related products
  const related = allProducts
    .filter((p) => p.id !== product.id && p.category === product.category)
    .concat(allProducts.filter((p) => p.id !== product.id))
    .slice(0, 3);

  return (
    <div className="py-6 space-y-16">
      {/* Breadcrumb / Back button */}
      <Button
        variant="accent"
        size="sm"
        onClick={() => onNavigate('shop')}  
      >
        &larr; Back To Catalog
      </Button>

      {/* Main product showcase */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        {/* Product Gallery Widget */}
        <ProductGallery product={product} />

        {/* Product Info Widget */}
        <ProductInfo product={product} onAddToCart={onAddToCart} />
      </div>

      {/* Related Products Section */}
      <div className="border-t border-stone-200 pt-16">
        
        <h3 className="text-2xl sm:text-3xl font-bold text-green-950 mt-1 mb-8">
          Recommended for You
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {related.map((p) => (
            <ProductCard
              key={p.id}
              product={p}
              onSelect={onSelectProduct}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductDetailPage;
