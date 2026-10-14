import React, { useEffect, useState } from 'react';
import { Navigate, Route, Routes, useLocation, useNavigate, useParams } from 'react-router-dom';
import { Navbar, Footer } from './components/common';
import { HomePage, ShopPage, ProductDetailPage, CartPage, CheckoutPage } from './pages';
import { mockProducts } from './data/products';

const pagePaths = {
  home: '/',
  shop: '/shop',
  details: `/products/${mockProducts[0].id}`,
  cart: '/cart',
  checkout: '/checkout',
};

function ProductDetailsRoute({ onNavigate, onSelectProduct, onAddToCart }) {
  const { productId } = useParams();
  const product = mockProducts.find((item) => item.id === productId);

  if (!product) {
    return <Navigate to="/shop" replace />;
  }

  return (
    <ProductDetailPage
      product={product}
      allProducts={mockProducts}
      onNavigate={onNavigate}
      onSelectProduct={onSelectProduct}
      onAddToCart={onAddToCart}
    />
  );
}

export function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const currentPage = location.pathname.startsWith('/products/')
    ? 'details'
    : Object.keys(pagePaths).find((page) => pagePaths[page] === location.pathname) ?? 'home';
  const [cartItems, setCartItems] = useState([
    { ...mockProducts[0], quantity: 1 },
    { ...mockProducts[2], quantity: 1 },
  ]);
  const [cartToast, setCartToast] = useState(null);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  useEffect(() => {
    const updateBackToTopVisibility = () => setShowBackToTop(window.scrollY > 300);

    window.addEventListener('scroll', updateBackToTopVisibility, { passive: true });
    updateBackToTopVisibility();

    return () => window.removeEventListener('scroll', updateBackToTopVisibility);
  }, []);

  useEffect(() => {
    if (!cartToast) return undefined;

    const timeoutId = window.setTimeout(() => setCartToast(null), 3000);
    return () => window.clearTimeout(timeoutId);
  }, [cartToast]);

  const handleNavigate = (page, category) => {
    if (page === 'shop' && category && category !== 'All') {
      navigate(`/shop?category=${encodeURIComponent(category)}`);
      return;
    }
    navigate(pagePaths[page] ?? '/');
  };

  const handleSelectProduct = (product) => {
    navigate(`/products/${product.id}`);
  };

  const handleAddToCart = (product, quantity = 1) => {
    setCartItems((prevItems) => {
      const existing = prevItems.find((item) => item.id === product.id);
      if (existing) {
        return prevItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
        );
      }
      return [...prevItems, { ...product, quantity }];
    });
    setCartToast({ productName: product.name, quantity });
  };

  const handleUpdateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      handleRemoveItem(productId);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) => (item.id === productId ? { ...item, quantity: newQuantity } : item))
    );
  };

  const handleRemoveItem = (productId) => {
    setCartItems((prev) => prev.filter((item) => item.id !== productId));
  };

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col bg-stone-50/50 text-stone-900 font-sans selection:bg-amber-100 selection:text-amber-900">
      {/* Common Navbar */}
      <Navbar
        activePage={currentPage}
        onNavigate={handleNavigate}
        cartCount={totalCartCount}
        overlay={currentPage === 'home'}
      />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                products={mockProducts}
                onNavigate={handleNavigate}
                onSelectProduct={handleSelectProduct}
                onAddToCart={handleAddToCart}
              />
            }
          />
          <Route
            path="/shop"
            element={
              <ShopPage
                products={mockProducts}
                onSelectProduct={handleSelectProduct}
                onAddToCart={handleAddToCart}
              />
            }
          />
          <Route
            path="/products"
            element={<Navigate to={pagePaths.details} replace />}
          />
          <Route
            path="/products/:productId"
            element={
              <ProductDetailsRoute
                onNavigate={handleNavigate}
                onSelectProduct={handleSelectProduct}
                onAddToCart={handleAddToCart}
              />
            }
          />
          <Route
            path="/cart"
            element={
              <CartPage
                cartItems={cartItems}
                onUpdateQuantity={handleUpdateQuantity}
                onRemoveItem={handleRemoveItem}
                onContinueShopping={() => handleNavigate('shop')}
                onCheckout={() => handleNavigate('checkout')}
              />
            }
          />
          <Route
            path="/checkout"
            element={
              <CheckoutPage
                cartItems={cartItems}
                onReturnHome={() => handleNavigate('home')}
              />
            }
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      {/* Common Footer */}
      <Footer />
      {showBackToTop && (
        <button
          type="button"
          aria-label="Back to top"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed right-6 bottom-6 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-green-950 text-white shadow-lg transition-colors hover:bg-amber-900 focus:outline-none focus:ring-2 focus:ring-amber-700 focus:ring-offset-2"
        >
          <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-6 w-6">
            <path
              d="M12 19V5m-7 7 7-7 7 7"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      )}

      {cartToast && (
        <div
          role="status"
          aria-live="polite"
          aria-atomic="true"
          className="fixed bottom-6 right-6 z-50 flex max-w-sm items-center gap-3 rounded-xl border border-emerald-200 bg-gray-950 px-4 py-2.5 shadow-lg"
        >
          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-800">
            <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className="h-5 w-5">
              <path
                d="m5 10 3.2 3.2L15 6.5"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <p className="flex-1 text-sm font-medium text-amber-100">
             Item added to cart
          </p>
          <button
            type="button"
            aria-label="Dismiss notification"
            onClick={() => setCartToast(null)}
            className="rounded p-1 text-stone-500 transition-colors hover:bg-stone-100 hover:text-stone-800"
          >
            <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className="h-4 w-4">
              <path
                d="m5 5 10 10M15 5 5 15"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}

export default App;