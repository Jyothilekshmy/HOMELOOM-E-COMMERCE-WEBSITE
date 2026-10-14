import React, { useEffect, useState } from 'react';
export function Navbar({ activePage = 'home', onNavigate, cartCount = 0, overlay = false }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    if (!isMobileMenuOpen) return undefined;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setIsMobileMenuOpen(false);
    };
    const desktopMediaQuery = window.matchMedia('(min-width: 768px)');
    const handleBreakpointChange = (event) => {
      if (event.matches) setIsMobileMenuOpen(false);
    };
    document.addEventListener('keydown', handleKeyDown);
    desktopMediaQuery.addEventListener('change', handleBreakpointChange);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', handleKeyDown);
      desktopMediaQuery.removeEventListener('change', handleBreakpointChange);
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'shop', label: 'Shop ' },
    { id: 'details', label: 'Products' },
    { id: 'cart', label: 'Cart' },
    { id: 'contact', label: 'Contact' },

  ];

  return (
    <>
      {/* Top promotional bar */}
      <div className="bg-[#012911] text-amber-100 text-xs py-2 px-4 text-center font-medium tracking-wide">
        Handcrafted artisan decor & home furnitures — Enjoy free shipping on orders over $150
      </div>
      <header className={`${overlay
        ? 'sticky top-0 z-50 -mb-18 bg-stone-950/35 backdrop-blur-sm border-b border-white/15'
        : 'sticky top-0 z-50 bg-stone-50/90 backdrop-blur-md border-b border-stone-200/80'
        } transition-all`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-18">
            {/* Brand Logo */}
            <button
              onClick={() => onNavigate && onNavigate('home')}
              className="flex items-center gap-2.5 text-left group cursor-pointer focus:outline-none"
            >
              <div className="w-10 h-10 rounded-xl bg-linear-to-br from-amber-700 to-amber-900 flex items-center justify-center text-white shadow-md shadow-amber-900/20 group-hover:scale-105 transition-transform">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <div>
                <span className={`text-2xl font-serif font-bold tracking-tight ${overlay ? 'text-white group-hover:text-amber-200' : 'text-stone-900 group-hover:text-amber-800'} transition-colors`}>
                  HOMELOOM
                </span>
                <span className={`block text-[10px] uppercase tracking-widest ${overlay ? 'text-white/80' : 'text-stone-600'} font-semibold`}>
                  Artisan Living
                </span>
              </div>
            </button>
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => onNavigate && onNavigate(link.id)}
                  className={`px-4 py-2 rounded-lg text-[16px] font-medium transition-colors cursor-pointer ${activePage === link.id
                    ? overlay ? 'text-white bg-white/20 font-semibold' : 'text-amber-800 bg-green-100 font-semibold'
                    : overlay ? 'text-white/90 hover:text-white hover:bg-white/10' : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100/70'
                    }`}
                >
                  {link.label}
                </button
              >))}
            </nav>
            {/* Right Action Icons */}
            <div className="flex items-center space-x-3">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => onNavigate && onNavigate('cart')}
                  className={`relative p-1.5 rounded-lg ${overlay ? 'text-white hover:bg-white/10 hover:text-amber-200' : 'text-stone-700 hover:bg-stone-100 hover:text-amber-800'} transition-colors cursor-pointer focus:outline-none hidden lg:block`}
                  aria-label="Cart"
                >
                  <img
                    src="/Assets/home/cart.svg"
                    alt="Cart"
                    className={`w-6 h-6 ${overlay ? 'brightness-0 invert' : ''}`}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = '/assets/home/cart.svg';
                    }}
                  />
                  {cartCount > 0 && (
                    <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-amber-700 text-[11px] font-bold text-white shadow">
                      {cartCount}
                    </span>
                  )}
                </button>
                <button
                  onClick={() => onNavigate && onNavigate('cart')}
                  className={`relative p-1.5 rounded-xs ${overlay ? 'text-white hover:bg-white/10 hover:text-amber-200' : 'text-stone-700 hover:bg-stone-100 hover:text-amber-800'} transition-colors cursor-pointer focus:outline-none hidden lg:block`}
                  aria-label="wishlist"
                >
                  <img
                    src="/Assets/home/wishlist.svg"
                    alt="Wishlist"
                    className={`w-7 h-7 ${overlay ? 'brightness-0 invert' : ''}`}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = '/assets/home/wishlist.svg';
                    }}
                  />
                  <span className="absolute top-1 right-1 flex h-3 w-3 items-center justify-center rounded-full bg-amber-700 text-[11px] font-bold text-white shadow">
                  </span>
                </button>
              </div>

              {/* Mobile Hamburger Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`md:hidden p-2 rounded-lg ${overlay ? 'text-white hover:bg-white/10' : 'text-stone-700 hover:bg-stone-100'} cursor-pointer`}
                aria-label="Toggle Navigation"
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-navigation"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  {isMobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>
      {/* Keep fixed mobile navigation outside the sticky, backdrop-blurred header. */}
      <button
        type="button"
        aria-label="Close navigation menu"
        tabIndex={isMobileMenuOpen ? 0 : -1}
        aria-hidden={!isMobileMenuOpen}
        inert={!isMobileMenuOpen}
        onClick={() => setIsMobileMenuOpen(false)}
        className={`fixed inset-0 z-55 bg-black/50 transition-opacity duration-350 ease-in-out md:hidden ${
          isMobileMenuOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
      />
      <nav
        id="mobile-navigation"
        aria-label="Mobile navigation"
        aria-hidden={!isMobileMenuOpen}
        inert={!isMobileMenuOpen}
        className={`fixed inset-y-0 right-0 z-60 flex h-dvh w-[min(20rem,85vw)] flex-col gap-2 bg-stone-50 p-5 shadow-2xl transition-transform duration-350 ease-in-out md:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="mb-3 flex items-center justify-between border-b border-stone-200 pb-4">
          <span className="font-serif text-lg font-bold tracking-tight text-stone-900">
            HOMELOOM
          </span>
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(false)}
            className="rounded-lg p-2 text-stone-700 transition-colors hover:bg-stone-200 focus:outline-none focus:ring-2 focus:ring-amber-700"
            aria-label="Close navigation menu"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        {navLinks.map((link) => (
          <button
            key={link.id}
            onClick={() => {
              if (onNavigate) onNavigate(link.id);
              setIsMobileMenuOpen(false);
            }}
            className={`rounded-lg px-4 py-2.5 text-left text-sm font-medium transition-colors ${
              activePage === link.id
                ? 'bg-amber-50 text-amber-800 font-semibold'
                : 'text-stone-600 hover:bg-stone-100 hover:text-stone-900'
            }`}
          >
            {link.label}
          </button>
        ))}
      </nav>
    </>
  );
}

export default Navbar;
