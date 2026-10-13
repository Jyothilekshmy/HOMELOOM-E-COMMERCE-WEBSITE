import React, { useMemo, useState } from 'react';
import { HeroBanner } from '../widgets/home/HeroBanner';
import { NewsletterSection } from '../widgets/home/NewsletterSection';
import { ProductCard } from '../widgets/common/ProductCard';
import { Button } from '../components/ui/Button';
import { MovingCarousel } from '../widgets/home/MovingCarousel';
import { DecorSection } from '../widgets/home/DecorSection';
import { FeaturedCategories } from '../widgets/home/FeaturedCategories';
import { decorCategories, furnitureCategories,} from '../data/products';
export function HomePage({ products = [], onNavigate, onSelectProduct, onAddToCart }) {
  // Show top 3 trending products
  const trendingProducts = products.slice(0, 3);
  const categories = useMemo(
    () => Array.from(new Set(products.map((product) => product.category))),
    [products]
  );
  const [selectedCategory, setSelectedCategory] = useState('All');
  const handleSelectCategory = () => onNavigate?.('shop');
  const handleHeroCategorySelect = (category) => {
    setSelectedCategory(category);
    onNavigate?.('shop', category);
  };
  return (
    <div className="space-y-12">
      {/* Hero Banner Widget */}
      <HeroBanner
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={handleHeroCategorySelect}
        onExplore={onNavigate}
      />
      <MovingCarousel
        onSelectProduct={onSelectProduct}
        onAddToCart={onAddToCart}
        onNavigate={onNavigate}
      />
      {/* Categories Widget */}
      <FeaturedCategories
        title="Find Your Perfect Furniture"
        subtitle="Thoughtfully Crafted"
        categories={furnitureCategories}
        onSelectCategory={handleSelectCategory}
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-8 sm:mb-10 text-center">
        <h2 className="text-2xl font-bold text-green-950 sm:text-3xl lg:text-5xl">
          Home Decors Collections
        </h2>
        <p className="text-[16px] text center text-b">Handpicked decor to add warmth, texture, and character to every corner.</p>
      </div>
      <section
        aria-label="Home decor collections"
        className="grid grid-cols-1 overflow-hidden md:grid-cols-2"
      >
        {/* LEFT: Your Image */}
        <div className="h-112.5 bg-stone-100 md:h-160 lg:h-180">
          <img
            src="/Assets/home/Decor-section.webp"
            alt="Beautiful home interior"
            className="h-full w-full"
            loading="lazy"
          />
        </div>
        {/* RIGHT: Reusable Marquee Component */}
        <div className="h-112.5 min-w-0 md:h-155">
          <DecorSection onNavigate={onNavigate} />
        </div>
      </section>
      {/* Categories Widget */}
      <FeaturedCategories
        title="Shop by Craft & Medium"
        subtitle="Curated Spaces"
        categories={decorCategories}
        onSelectCategory={handleSelectCategory}
      />
      {/* Featured / Trending Section */}
      <section className="my-16">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
             <h2 className="text-3xl font-bold text-green-950 mt-1">
             Trending Now
            </h2>
            <span className="text-lg font-bold  text-amber-800">
              Shop Now, Get 10% Off
            </span>
          </div>
          <Button
            variant="accent"
            size="sm"
            onClick={() => onNavigate('shop')}
          >
            Browse All {products.length} Products &rarr;
          </Button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {trendingProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onSelect={onSelectProduct}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>
      </section>
      {/* Newsletter Section Widget */}
      <NewsletterSection />
    </div>
  );
}

export default HomePage;
