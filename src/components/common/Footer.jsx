import React from 'react';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';

export function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-300 mt-20 border-t border-stone-800">
      {/* Guarantees banner */}
      <div className="border-b border-stone-800 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div className="flex items-center gap-4 justify-center md:justify-start">
            <div className="w-12 h-12 rounded-2xl bg-stone-800 flex items-center justify-center text-amber-500 shrink-0">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
              </svg>
            </div>
            <div>
              <h4 className="font-semibold text-white text-base">Ethically Sourced</h4>
              <p className="text-xs text-stone-400">100% organic fair-trade looms and materials</p>
            </div>
          </div>

          <div className="flex items-center gap-4 justify-center md:justify-start">
            <div className="w-12 h-12 rounded-2xl bg-stone-800 flex items-center justify-center text-amber-500 shrink-0">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div>
              <h4 className="font-semibold text-white text-base">Express Worldwide Shipping</h4>
              <p className="text-xs text-stone-400">Delivered carefully in carbon-neutral packaging</p>
            </div>
          </div>

          <div className="flex items-center gap-4 justify-center md:justify-start">
            <div className="w-12 h-12 rounded-2xl bg-stone-800 flex items-center justify-center text-amber-500 shrink-0">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div>
              <h4 className="font-semibold text-white text-base">30-Day In-Home Trial</h4>
              <p className="text-xs text-stone-400">Love your piece or receive a hassle-free refund</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <span className="text-2xl font-serif font-bold text-white tracking-tight">HOMELOOM</span>
          <p className="mt-3 text-sm text-stone-400 leading-relaxed">
            Curating timeless artisanal homeware, handwoven textiles, and organic living essentials designed to elevate every space.
          </p>
        </div>

        <div>
          <h5 className="text-xs font-bold uppercase tracking-wider text-stone-200 mb-4">Collections</h5>
          <ul className="space-y-2.5 text-sm">
            <li><a href="#shop" className="hover:text-amber-400 transition-colors">Hand-Knotted Rugs</a></li>
            <li><a href="#shop" className="hover:text-amber-400 transition-colors">Linen Bedding Sets</a></li>
            <li><a href="#shop" className="hover:text-amber-400 transition-colors">Artisan Ceramic Vessels</a></li>
            <li><a href="#shop" className="hover:text-amber-400 transition-colors">Woven Throw Blankets</a></li>
          </ul>
        </div>

        <div>
          <h5 className="text-xs font-bold uppercase tracking-wider text-stone-200 mb-4">Customer Care</h5>
          <ul className="space-y-2.5 text-sm">
            <li><a href="#shipping" className="hover:text-amber-400 transition-colors">Track Order</a></li>
            <li><a href="#returns" className="hover:text-amber-400 transition-colors">Returns & Exchanges</a></li>
            <li><a href="#care" className="hover:text-amber-400 transition-colors">Textile Care Guide</a></li>
            <li><a href="#faq" className="hover:text-amber-400 transition-colors">FAQ & Support</a></li>
          </ul>
        </div>

        <div>
          <h5 className="text-xs font-bold uppercase tracking-wider text-stone-200 mb-4">Newsletter</h5>
          <p className="text-sm text-stone-400 mb-4">
            Receive private seasonal previews and stories from master artisans.
          </p>
          <div className="flex gap-2">
            <Input
              placeholder="Enter your email"
              className="bg-stone-800 border-stone-700 text-stone-100 placeholder:text-stone-500"
            />
            <Button variant="primary" className="shrink-0">
              Join
            </Button>
          </div>
        </div>
      </div>

      <div className="border-t border-stone-800 py-6 text-center text-xs text-stone-500">
        &copy; {new Date().getFullYear()} HOMELOOM Living Inc. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
