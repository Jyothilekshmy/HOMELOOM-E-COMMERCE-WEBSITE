import React, { useState } from 'react';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';

export function CheckoutPage({ cartItems = [], onReturnHome }) {
  const [completed, setCompleted] = useState(false);
  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleSubmit = (e) => {
    e.preventDefault();
    setCompleted(true);
  };

  if (completed) {
    return (
      <div className="py-20 max-w-lg mx-auto text-center bg-white rounded-3xl border border-stone-200 p-8 shadow-sm">
        <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
          ✓
        </div>
        <h2 className="text-3xl font-bold text-stone-900">Thank you for your order!</h2>
        <p className="text-stone-600 text-sm mt-3">
          Your order has been placed successfully. A confirmation email and artisanal tracking details will be sent shortly.
        </p>
        <div className="mt-8">
          <Button variant="primary" onClick={onReturnHome}>
            Return To Home
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="py-6 max-w-2xl mx-auto">
      <div className="mb-8">
        <span className="text-xs font-bold uppercase tracking-widest text-amber-800">
          Fast & Secure
        </span>
        <h1 className="text-3xl font-bold text-green-950 mt-1">
          Complete Your Order
        </h1>
      </div>

      <form onSubmit={handleSubmit} className="bg-white rounded-3xl border border-stone-200 p-8 shadow-sm space-y-6">
        <div className="space-y-4">
          <h3 className="text-base font-semibold text-stone-900">Contact & Shipping Details</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input label="First Name" required placeholder="Eleanor" />
          </div>
          <Input label="Email Address" type="email" required placeholder="eleanor@example.com" />
          <Input label="Street Address" required placeholder="142 Loom Avenue, Suite 4" />
          <div className="grid grid-cols-2 gap-4">
            <Input label="City" required placeholder="Portland" />
            <Input label="Postal Code" required placeholder="97201" />
          </div>
        </div>

        <div className="space-y-4 border-t border-stone-200 pt-6">
          <h3 className="text-base font-semibold text-stone-900">Payment Information</h3>
          <Input label="Card Number" placeholder="•••• •••• •••• 4242" required />
          <div className="grid grid-cols-2 gap-4">
            <Input label="Expiry (MM/YY)" placeholder="12/28" required />
            <Input label="CVC" placeholder="382" required />
          </div>
        </div>

        <div className="border-t border-stone-200 pt-6 flex items-center justify-between">
          <div>
            <span className="text-xs text-stone-500 uppercase">Total Amount</span>
            <p className="text-2xl font-bold text-stone-900">${total > 0 ? total : 0}</p>
          </div>
          <Button type="submit" variant="primary" size="lg">
            Place Order
          </Button>
        </div>
      </form>
    </div>
  );
}

export default CheckoutPage;
