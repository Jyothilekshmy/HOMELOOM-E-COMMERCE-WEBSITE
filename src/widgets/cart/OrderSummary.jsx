import React from 'react';
import { Button } from '../../components/ui/Button';

export function OrderSummary({ subtotal = 0, onCheckout }) {
  const shipping = subtotal > 150 || subtotal === 0 ? 0 : 15;
  const estimatedTax = Math.round(subtotal * 0.08);
  const total = subtotal + shipping + estimatedTax;

  return (
    <div className="bg-stone-50 rounded-2xl border border-stone-200 p-6 flex flex-col gap-5">
      <h3 className="text-lg font-bold text-stone-900 border-b border-stone-200 pb-3">
        Order Summary
      </h3>

      <div className="space-y-3 text-sm">
        <div className="flex justify-between text-stone-600">
          <span>Subtotal</span>
          <span className="font-semibold text-stone-900">${subtotal}</span>
        </div>
        <div className="flex justify-between text-stone-600">
          <span>Shipping</span>
          <span className="font-semibold text-stone-900">
            {shipping === 0 ? <span className="text-emerald-700">Free</span> : `$${shipping}`}
          </span>
        </div>
        <div className="flex justify-between text-stone-600">
          <span>Estimated Sales Tax</span>
          <span className="font-semibold text-stone-900">${estimatedTax}</span>
        </div>

        {subtotal > 0 && subtotal < 150 && (
          <div className="text-xs text-amber-800 bg-amber-100/60 p-2.5 rounded-lg">
            Add ${(150 - subtotal)} more to qualify for <strong>Free Worldwide Shipping</strong>!
          </div>
        )}

        <div className="border-t border-stone-200 pt-3 flex justify-between text-base font-bold text-stone-900">
          <span>Total</span>
          <span className="text-xl text-amber-900">${total}</span>
        </div>
      </div>

      <Button
        variant="primary"
        size="lg"
        disabled={subtotal === 0}
        onClick={onCheckout}
        className="w-full mt-2"
      >
        Proceed To Secure Checkout
      </Button>

      <div className="text-[11px] text-stone-500 text-center space-y-1">
        <p>Secure & Encrypted Checkout</p>
        <p>30-Day In-Home Guarantee & Easy Returns</p>
      </div>
    </div>
  );
}

export default OrderSummary;
