import React, { useState } from 'react';
import { Button } from '../../components/ui/Button';
import { Badge } from '../../components/ui/Badge';
import { Rating } from '../../components/common/Rating';


export function ProductCard({ product, onSelect, onAddToCart }) {
  const [isFavorite, setIsFavorite] = useState(false);

  if (!product) return null;

  return (
    <div className="group relative flex flex-col rounded- bg-white border border-stone-200/80 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      {/* Product Image & Badges */}
      <div className="relative aspect-4/4 w-full bg-stone-100 overflow-hidden cursor-pointer" onClick={() => onSelect && onSelect(product)}>
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        {product.tag && (
          <div className="absolute top-3 left-3">
            <Badge variant={product.badgeVariant || 'default'}>{product.tag}</Badge>
          </div>
        )}
        <button
          type="button"
          aria-label={
            isFavorite
              ? `Remove ${product.name} from favorites`
              : `Add ${product.name} to favorites`
          }
          aria-pressed={isFavorite}
          title={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
          onClick={(event) => {
            event.stopPropagation();
            setIsFavorite((favorite) => !favorite);
          }}
          className="absolute top-3 right-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-sm transition-transform duration-200 hover:scale-110 focus:outline-none focus:ring-"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            className={`h-5 w-5 transition-colors duration-200 ${isFavorite ? 'text-rose-600' : 'text-stone-700'
              }`}
            fill={isFavorite ? 'currentColor' : 'none'}
            stroke="currentColor"
            strokeWidth="1.8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z"
            />
          </svg>
        </button>
      </div>

      {/* Product Details */}
      <div className="p-5 flex flex-col flex-1 justify-between gap-3">
        <div>
          <span className="text-[11px] font-semibold uppercase tracking-wider text-amber-800">
            {product.category}
          </span>
          <h3
            onClick={() => onSelect && onSelect(product)}
            className="text-[20px] font-semibold text-stone-900 mt-1 line-clamp-1 group-hover:text-amber-800 transition-colors cursor-pointer"
          >
            {product.name}
          </h3>
          <div className="mt-2">
            <Rating score={product.rating} reviewsCount={product.reviewsCount} />
          </div>
        </div>
        {/* Price & Action */}
        <div className="flex items-center justify-between pt-2 border-t border-stone-100">
          <div className="flex items-baseline gap-2">
            <span className="text-[20px] font-bold text-stone-900">${product.price}</span>
            {product.originalPrice && (
              <span className="text-[20px] text-stone-500 line-through">
                ${product.originalPrice}
              </span>
            )}
          </div>
          <Button
            size="sm"
            variant="primary"
            onClick={(e) => {
              e.stopPropagation();
              if (onAddToCart) onAddToCart(product);
            }}
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
}
export default ProductCard;
