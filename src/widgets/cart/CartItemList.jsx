import React from 'react';
import { Button } from '../../components/ui/Button';

export function CartItemList({ items = [], onUpdateQuantity, onRemoveItem, onContinueShopping }) {
  if (items.length === 0) {
    return (
      <div className="text-center py-16 bg-white rounded-2xl border border-stone-200 p-8 shadow-sm">
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-amber-50 flex items-center justify-center text-amber-800">
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-stone-900">Your bag is currently empty</h3>
        <p className="text-stone-500 text-sm mt-1 max-w-sm mx-auto">
          Explore our artisan collections to find timeless handcrafted textiles and decor.
        </p>
        <div className="mt-6">
          <Button variant="primary" onClick={onContinueShopping}>
            Start Shopping
          </Button>
        </div>
      </div>
    );
  }
  return (
    <div className="space-y-4">
      {items.map((item) => (
        <div
          key={item.id}
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 bg-white rounded-2xl border border-stone-200/80 gap-4 shadow-sm"
        >
          <div className="flex items-center gap-4">
            <img
              src={item.image}
              alt={item.name}
              className="w-20 h-20 rounded-xl object-cover bg-stone-100 shrink-0"
            />
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-amber-800">
                {item.category}
              </span>
              <h4 className="text-base font-semibold text-stone-900">{item.name}</h4>
              <p className="text-sm font-bold text-stone-900 mt-1">${item.price}</p>
            </div>
          </div>

          <div className="flex items-center justify-between w-full sm:w-auto gap-6">
            <div className="flex items-center border border-stone-300 rounded-lg overflow-hidden">
              <button
                onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                className="px-2.5 py-1 text-stone-600 hover:bg-stone-100 cursor-pointer"
              >
                -
              </button>
              <span className="px-3 py-1 text-xs font-semibold text-stone-800">
                {item.quantity}
              </span>
              <button
                onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                className="px-2.5 py-1 text-stone-600 hover:bg-stone-100 cursor-pointer"
              >
                +
              </button>
            </div>

            <span className="text-base font-bold text-stone-900 w-20 text-right">
              ${item.price * item.quantity}
            </span>

            <button
              onClick={() => onRemoveItem(item.id)}
              className="text-stone-400 hover:text-rose-600 transition-colors p-1 cursor-pointer"
              title="Remove item"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CartItemList;
