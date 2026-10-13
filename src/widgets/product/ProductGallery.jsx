import React, { useState } from 'react';
import { Badge } from '../../components/ui/Badge';

export function ProductGallery({ product }) {
  const [selectedImg, setSelectedImg] = useState(0);

  // Gallery images list (using product image + variations)
  const images = [
    product?.image,
    "/Assets/product/product-10.webp",
    "/Assets/product/product-11.webp",
  ].filter(Boolean);

  return (
    <div className="flex flex-col gap-4">
      {/* Main Image */}
      <div className="relative aspect-square w-full rounded-3xl overflow-hidden bg-stone-100 shadow-md">
        <img
          src={images[selectedImg]}
          alt={product?.name || 'Product Image'}
          className="w-full h-full object-cover object-center transition-all duration-300"
        />
        {product?.tag && (
          <div className="absolute top-4 left-4">
            <Badge variant={product.badgeVariant || 'default'}>{product.tag}</Badge>
          </div>
        )}
      </div>

      {/* Thumbnails */}
      <div className="flex items-center gap-3">
        {images.map((img, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedImg(idx)}
            className={`w-20 h-20 rounded-xl overflow-hidden border-2 transition-all cursor-pointer ${
              selectedImg === idx ? 'border-amber-700 ring-2 ring-amber-700/20' : 'border-stone-200 opacity-70 hover:opacity-100'
            }`}
          >
            <img src={img} alt={`Thumb ${idx + 1}`} className="w-full h-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}

export default ProductGallery;
