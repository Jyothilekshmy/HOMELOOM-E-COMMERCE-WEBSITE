import React, { useState } from 'react';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';

export function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <section className="my-16 bg-amber-50/70 border border-amber-200/60 rounded-sm p-8 sm:p-14 text-center max-w-7xl mx-auto shadow-sm">
      <span className="text-xs font-bold uppercase tracking-widest text-amber-800">
        The Artisan Journal
      </span>
      <h2 className="text-3xl font-bold font-georgia text-stone-900 mt-2 ">
        Join Our Circle for 15% Off Your First Order
      </h2>
      <p className="text-stone-600 text-sm max-w-md mx-auto mt-3">
        Stories of traditional loom craftsmanship, interior styling guides, and early access to limited artisan editions.
      </p>

      {subscribed ? (
        <div className="mt-6 p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl max-w-md mx-auto text-sm font-medium">
          ✓ Welcome to the HomeLoom circle! Check your inbox for your 15% voucher.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <Input
            type="email"
            placeholder="Enter your email address..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="bg-white"
          />
          <Button type="submit" variant="primary" className="shrink-0">
            Subscribe
          </Button>
        </form>
      )}
    </section>
  );
}

export default NewsletterSection;
