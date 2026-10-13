import React, { useState } from 'react';
import { Button } from '../../components/ui/Button';
import { Rating } from '../../components/common/Rating';
import { Badge } from '../../components/ui/Badge';

export function ProductInfo({ product, onAddToCart }) {
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState('Natural Clay');

  if (!product) return null;

  const colors = ['Natural Clay', 'Oatmeal', 'Olive Dusk'];

  return (
    <div className="flex flex-col gap-6">
      <div>
        <div className="flex items-center gap-2 mb-2">
          <Badge variant="eco" size="sm">
            Ethically sourced
          </Badge>
          <span className="text-xs text-stone-500 uppercase tracking-wider">{product.category}</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-green-950 leading-tight">
          {product.name}
        </h1>
        <div className="mt-3 flex items-center gap-4">
          <Rating score={product.rating} reviewsCount={product.reviewsCount} />
          <span className="text-xs text-emerald-700 font-medium">In Stock & Ready to Ship</span>
        </div>
      </div>
      {/* Pricing */}
      <div className="flex items-baseline gap-3">
        <span className="text-3xl font-bold text-stone-900">${product.price}</span>
        {product.originalPrice && (
          <span className="text-2xl text-stone-500 line-through">
            ${product.originalPrice}
          </span>
        )}
        {product.originalPrice && (
          <span className="text-xs font-semibold text-rose-700 bg-rose-50 px-2 py-0.5 rounded-md">
            Save ${(product.originalPrice - product.price)}
          </span>
        )}
      </div>
      <p className="text-stone-600 text-sm leading-relaxed border-t border-b border-stone-200/80 py-4">
        {product.description}
      </p>
      {/* Color Selection */}
      <div>
        <label className="text-xs font-bold uppercase tracking-wider text-stone-700 block mb-2">
          Tone: <span className="text-stone-900 font-normal">{selectedColor}</span>
        </label>
        <div className="flex gap-2">
          {colors.map((c) => (
            <button
              key={c}
              onClick={() => setSelectedColor(c)}
              className={`px-3 py-1.5 text-xs rounded-lg border transition-all cursor-pointer ${
                selectedColor === c
                  ? 'border-amber-800 bg-amber-50 text-amber-900 font-semibold'
                  : 'border-stone-200 text-stone-700 hover:border-stone-400'
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      {/* Quantity & Add to Cart */}
      <div className="flex items-center gap-4 pt-2">
        <div className="flex items-center border border-stone-300 rounded-xl bg-white overflow-hidden">
          <button
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="px-3 py-2 text-stone-600 hover:bg-stone-100 cursor-pointer"
          >
            -
          </button>
          <span className="px-4 py-2 text-sm font-semibold text-stone-800">{quantity}</span>
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="px-3 py-2 text-stone-600 hover:bg-stone-100 cursor-pointer"
          >
            +
          </button>
        </div>

        <Button
          size="lg"
          variant="primary"
          className="flex-1"
          onClick={() => onAddToCart && onAddToCart(product, quantity)}
        >
          Add To Shopping Bag — ${(product.price * quantity)}
        </Button>
      </div>

      {/* Benefits checklist */}
      <div className="grid grid-cols-2 gap-3 pt-4 text-xs text-stone-600">
        <div className="flex items-center gap-2">
          <span className="text-emerald-700">✓</span> Premium Quality Materials
        </div>
        <div className="flex items-center gap-2">
          <span className="text-emerald-700">✓</span> Free Shipping on Orders
        </div>
        <div className="flex items-center gap-2">
          <span className="text-emerald-700">✓</span> 30-Day In-Home Trial
        </div>
        <div className="flex items-center gap-2">
          <span className="text-emerald-700">✓</span> Handcrafted with Care
        </div>
      </div>
    </div>
  );
}

export default ProductInfo;
