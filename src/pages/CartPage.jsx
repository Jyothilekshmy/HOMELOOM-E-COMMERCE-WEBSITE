import React from 'react';
import { CartItemList } from '../widgets/cart/CartItemList';
import { OrderSummary } from '../widgets/cart/OrderSummary';

export function CartPage({
  cartItems = [],
  onUpdateQuantity,
  onRemoveItem,
  onContinueShopping,
  onCheckout,
}) {
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  return (
    <div className="py-6">
      <div className="mb-8">
        <span className="text-xs font-bold uppercase tracking-widest text-amber-800">
          Shopping Cart
        </span>
        <h1 className="text-3xl sm:text-4xl font-bold text-green-950 mt-1">
          Review Your Chosen Items ({cartItems.reduce((acc, item) => acc + item.quantity, 0)})
        </h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
        {/* Left Column: Cart Items List Widget */}
        <div className="lg:col-span-2">
          <CartItemList
            items={cartItems}
            onUpdateQuantity={onUpdateQuantity}
            onRemoveItem={onRemoveItem}
            onContinueShopping={onContinueShopping}
          />
        </div>
        {/* Right Column: Order Summary Widget */}
        <div>
          <OrderSummary subtotal={subtotal} onCheckout={onCheckout} />
        </div>
      </div>
    </div>
  );
}
export default CartPage;
