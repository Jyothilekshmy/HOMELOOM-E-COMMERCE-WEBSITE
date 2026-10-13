import React from 'react';
import { Button } from '../../components/ui/Button';

export function ProductFilter({
  categories = [],
  selectedCategory,
  onSelectCategory,
  sortOption,
  onSortChange,
  showSort = true,
  selectedButtonClassName = '',
  unselectedButtonClassName = '',
}) {
  return (
    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 py-4 mb-6">
      {/* Category Pills */}
      <div className="flex flex-wrap items-center gap-2">
        <Button
          size="sm"
          variant={selectedCategory === 'All' ? 'accent' : 'ghost'}
          className={selectedCategory === 'All' ? selectedButtonClassName : unselectedButtonClassName}
          onClick={() => onSelectCategory('All')}
        >
          All Items
        </Button>
        {categories.map((cat) => (
          <Button
            key={cat}
            size="sm"
            variant={selectedCategory === cat ? 'accent' : 'ghost'}
            className={selectedCategory === cat ? selectedButtonClassName : unselectedButtonClassName}
            onClick={() => onSelectCategory(cat)}
          >
            {cat}
          </Button>
        ))}
      </div>

      {/* Sort selection */}
      {/* Sort Selection */}
      {showSort && (
        <div className="flex items-center gap-2 text-xs font-semibold text-stone-600">
          <span>Sort By:</span>

          <select
            value={sortOption}
            onChange={(e) => onSortChange(e.target.value)}
            className="rounded-lg border border-stone-200 bg-white px-3 py-1.5 text-xs text-stone-800 focus:outline-none focus:ring-1 focus:ring-amber-700 cursor-pointer"
          >
            <option value="featured">Featured First</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Top Rated</option>
          </select>
        </div>
      )}
    </div>
  );
}

export default ProductFilter;
