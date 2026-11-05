import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { SedeSelectorModal } from './components/SedeSelectorModal';
import { HomeView } from './views/HomeView';
import { CatalogView } from './views/CatalogView';
import { ProductDetailView } from './views/ProductDetailView';
import { QuoteListView } from './views/QuoteListView';
import { PromotionsView } from './views/PromotionsView';
import { WholesaleView } from './views/WholesaleView';
import { BranchesView } from './views/BranchesView';
import { AboutView } from './views/AboutView';
import { ContactView } from './views/ContactView';
import { Product, CartItem, PRODUCTS_DATA, INITIAL_CART_ITEMS } from './data/mockData';

export default function App() {
  const [currentView, setCurrentView] = useState<string>('inicio');
  const [selectedProduct, setSelectedProduct] = useState<Product>(PRODUCTS_DATA[0]);
  const [selectedSede, setSelectedSede] = useState<'jagua' | 'loma' | 'chiriguana'>('jagua');
  const [isSedeModalOpen, setIsSedeModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('todos');

  // Load / initialize cart
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('chaky_cart');
      if (saved) return JSON.parse(saved);
    } catch {
      // fallback
    }
    return INITIAL_CART_ITEMS;
  });

  // Persist cart to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('chaky_cart', JSON.stringify(cart));
    } catch {
      // ignore
    }
  }, [cart]);

  // Scroll to top when view changes
  const handleNavigate = (view: string, extraParam?: string) => {
    setCurrentView(view);
    if (view === 'catalogo' && extraParam) {
      if (extraParam.length > 2 && !['arrastre', 'frenos', 'motor', 'lubricantes', 'llantas', 'electrico', 'suspension', 'accesorios', 'proteccion', 'carroceria', 'luces'].includes(extraParam)) {
        setSearchQuery(extraParam);
      } else {
        setSelectedCategory(extraParam);
      }
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectProduct = (product: Product) => {
    setSelectedProduct(product);
    setCurrentView('producto');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Cart operations
  const handleAddToCart = (product: Product, quantity: number = 1) => {
    setCart((prevCart) => {
      const existingIndex = prevCart.findIndex((item) => item.product.id === product.id);
      if (existingIndex >= 0) {
        const updated = [...prevCart];
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updated[existingIndex].quantity + quantity
        };
        return updated;
      } else {
        return [...prevCart, { product, quantity }];
      }
    });
  };

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveItem(productId);
      return;
    }
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const handleRemoveItem = (productId: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.product.id !== productId));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const handleLoadDemoCart = () => {
    setCart(INITIAL_CART_ITEMS);
  };

  const totalCartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col bg-background text-on-surface antialiased selection:bg-secondary selection:text-white">
      {/* Header */}
      <Header
        currentView={currentView}
        onNavigate={handleNavigate}
        cartCount={totalCartCount}
        selectedSede={selectedSede}
        onOpenSedeModal={() => setIsSedeModalOpen(true)}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      {/* Main View Container */}
      <main className="flex-1 w-full pt-20">
        {currentView === 'inicio' && (
          <HomeView
            onNavigate={handleNavigate}
            onSelectProduct={handleSelectProduct}
            onAddToCart={handleAddToCart}
            selectedSede={selectedSede}
            onOpenSedeModal={() => setIsSedeModalOpen(true)}
          />
        )}

        {currentView === 'catalogo' && (
          <CatalogView
            onNavigate={handleNavigate}
            onSelectProduct={handleSelectProduct}
            onAddToCart={handleAddToCart}
            selectedSede={selectedSede}
            onOpenSedeModal={() => setIsSedeModalOpen(true)}
            initialSearchQuery={searchQuery}
            initialCategory={selectedCategory}
          />
        )}

        {currentView === 'producto' && (
          <ProductDetailView
            product={selectedProduct}
            onNavigate={handleNavigate}
            onSelectProduct={handleSelectProduct}
            onAddToCart={handleAddToCart}
            selectedSede={selectedSede}
            onOpenSedeModal={() => setIsSedeModalOpen(true)}
          />
        )}

        {currentView === 'mi-pedido' && (
          <QuoteListView
            cart={cart}
            onUpdateQuantity={handleUpdateQuantity}
            onRemoveItem={handleRemoveItem}
            onClearCart={handleClearCart}
            onLoadDemoCart={handleLoadDemoCart}
            selectedSede={selectedSede}
            onOpenSedeModal={() => setIsSedeModalOpen(true)}
            onNavigate={handleNavigate}
          />
        )}

        {currentView === 'promociones' && (
          <PromotionsView
            onNavigate={handleNavigate}
            selectedSede={selectedSede}
            onOpenSedeModal={() => setIsSedeModalOpen(true)}
          />
        )}

        {currentView === 'mayoristas' && (
          <WholesaleView
            onNavigate={handleNavigate}
            selectedSede={selectedSede}
            onOpenSedeModal={() => setIsSedeModalOpen(true)}
          />
        )}

        {currentView === 'sedes' && (
          <BranchesView
            onNavigate={handleNavigate}
            selectedSede={selectedSede}
            onSelectSede={(sedeId) => setSelectedSede(sedeId)}
          />
        )}

        {currentView === 'nosotros' && (
          <AboutView
            onNavigate={handleNavigate}
            selectedSede={selectedSede}
            onOpenSedeModal={() => setIsSedeModalOpen(true)}
          />
        )}

        {currentView === 'contacto' && (
          <ContactView
            onNavigate={handleNavigate}
            selectedSede={selectedSede}
            onOpenSedeModal={() => setIsSedeModalOpen(true)}
          />
        )}
      </main>

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp selectedSede={selectedSede} />

      {/* Global Sede Selection Modal */}
      <SedeSelectorModal
        isOpen={isSedeModalOpen}
        onClose={() => setIsSedeModalOpen(false)}
        selectedSede={selectedSede}
        onSelectSede={(sedeId) => setSelectedSede(sedeId)}
      />

      {/* Global Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenSedeModal={() => setIsSedeModalOpen(true)}
      />
    </div>
  );
}
