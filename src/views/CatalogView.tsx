import React, { useState, useMemo } from 'react';
import { CATEGORIES, PRODUCTS_DATA, Product, SEDES_DATA } from '../data/mockData';

interface CatalogViewProps {
  onNavigate: (view: string) => void;
  onSelectProduct: (product: Product) => void;
  onAddToCart: (product: Product, quantity?: number) => void;
  selectedSede: string;
  onOpenSedeModal: () => void;
  initialSearchQuery?: string;
  initialCategory?: string;
}

export const CatalogView: React.FC<CatalogViewProps> = ({
  onNavigate,
  onSelectProduct,
  onAddToCart,
  selectedSede,
  onOpenSedeModal,
  initialSearchQuery = '',
  initialCategory = 'todos'
}) => {
  const [search, setSearch] = useState(initialSearchQuery);
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedBrand, setSelectedBrand] = useState('todas');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'name'>('featured');
  const [filterSedeAvailabilityOnly, setFilterSedeAvailabilityOnly] = useState(false);

  const activeSede = SEDES_DATA[selectedSede] || SEDES_DATA['jagua'];

  const brands = useMemo(() => {
    const list = Array.from(new Set(PRODUCTS_DATA.map((p) => p.brand)));
    return ['todas', ...list];
  }, []);

  const filteredProducts = useMemo(() => {
    return PRODUCTS_DATA.filter((product) => {
      // Category filter
      if (selectedCategory !== 'todos' && product.category !== selectedCategory) {
        return false;
      }
      // Brand filter
      if (selectedBrand !== 'todas' && product.brand !== selectedBrand) {
        return false;
      }
      // Sede availability filter
      if (filterSedeAvailabilityOnly) {
        const sedeKey = selectedSede as 'jagua' | 'loma' | 'chiriguana';
        if (!product.sedeAvailability[sedeKey]) {
          return false;
        }
      }
      // Search term
      if (search.trim()) {
        const q = search.toLowerCase();
        const matchesName = product.name.toLowerCase().includes(q);
        const matchesCode = product.code.toLowerCase().includes(q);
        const matchesBrand = product.brand.toLowerCase().includes(q);
        const matchesCompat = product.compatibility.some((c) => c.toLowerCase().includes(q));
        if (!matchesName && !matchesCode && !matchesBrand && !matchesCompat) {
          return false;
        }
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.priceDetal - b.priceDetal;
      if (sortBy === 'price-desc') return b.priceDetal - a.priceDetal;
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
    });
  }, [selectedCategory, selectedBrand, filterSedeAvailabilityOnly, selectedSede, search, sortBy]);

  return (
    <div className="flex flex-col w-full">
      {/* Breadcrumbs & Top Context */}
      <section className="w-full bg-surface-container-low py-3 border-b border-surface-container">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between text-body-sm text-on-surface-variant gap-2">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2">
            <button
              onClick={() => onNavigate('inicio')}
              className="text-primary hover:underline font-label-md text-xs flex items-center gap-1 cursor-pointer"
            >
              <span className="material-symbols-outlined text-[16px]">home</span>
              Inicio
            </button>
            <span className="text-outline">/</span>
            <span className="text-on-surface font-label-md text-xs font-bold">
              Catálogo de repuestos y accesorios
            </span>
          </nav>
          <div className="flex items-center gap-2 text-xs bg-surface-container px-3 py-1 rounded-full text-primary-container font-medium">
            <span className="material-symbols-outlined text-[15px]">storefront</span>
            <span>
              Sede activa: <strong>{activeSede.municipality.split(',')[0]}</strong>
            </span>
            <button
              onClick={onOpenSedeModal}
              className="text-secondary hover:underline font-bold text-xs cursor-pointer ml-1"
            >
              (Cambiar)
            </button>
          </div>
        </div>
      </section>

      {/* Catalog Hero / Header Toolbar */}
      <section className="w-full bg-surface-container-lowest py-8 border-b border-surface-container">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-6">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="flex flex-col max-w-2xl">
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2.5 py-0.5 rounded-full bg-surface-container-high text-primary font-label-sm text-[11px] font-bold uppercase tracking-wide">
                  Inventario & Referencias
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed-variant font-label-sm text-[11px] font-bold">
                  Venta Detal & Mayorista
                </span>
              </div>
              <h1 className="font-headline-xl text-primary tracking-tight font-extrabold leading-tight">
                Catálogo de repuestos y accesorios
              </h1>
              <p className="font-body-md text-sm text-on-surface-variant mt-1 leading-relaxed">
                Explora nuestras referencias y consulta disponibilidad en la sede que prefieras en el Cesar: La Jagua, La Loma o Chiriguaná. Despachos rápidos para particulares y talleres mecánicos.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 bg-surface-container-low p-2 rounded-2xl">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-surface-container-lowest shadow-xs">
                <span className="material-symbols-outlined text-primary text-[20px]">hub</span>
                <div className="flex flex-col">
                  <span className="text-[10px] text-outline uppercase font-bold tracking-wider">Atención</span>
                  <span className="font-label-md text-xs font-bold text-primary">3 Sedes Activas</span>
                </div>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-surface-container-lowest shadow-xs">
                <span className="material-symbols-outlined text-secondary text-[20px]">verified</span>
                <div className="flex flex-col">
                  <span className="text-[10px] text-outline uppercase font-bold tracking-wider">Calidad</span>
                  <span className="font-label-md text-xs font-bold text-secondary">Original y Genérico</span>
                </div>
              </div>
            </div>
          </div>

          {/* Search & Filter Toolbar */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3 pt-2">
            <div className="md:col-span-6 relative">
              <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-outline text-[20px]">
                search
              </span>
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Buscar por referencia, moto (ej. Boxer, NKD, Pulsar), marca o código..."
                className="w-full h-11 pl-11 pr-4 rounded-xl bg-surface-container-low text-on-surface placeholder:text-outline text-xs sm:text-sm border border-surface-container focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary transition-all"
              />
              {search && (
                <button
                  onClick={() => setSearch('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-outline hover:text-on-surface"
                >
                  <span className="material-symbols-outlined text-[18px]">close</span>
                </button>
              )}
            </div>

            <div className="md:col-span-3">
              <select
                value={selectedBrand}
                onChange={(e) => setSelectedBrand(e.target.value)}
                className="w-full h-11 px-3 rounded-xl bg-surface-container-low text-on-surface text-xs font-medium border border-surface-container focus:outline-none focus:ring-2 focus:ring-primary cursor-pointer"
              >
                <option value="todas">Todas las marcas</option>
                {brands.filter((b) => b !== 'todas').map((brand) => (
                  <option key={brand} value={brand}>
                    Marca: {brand}
                  </option>
                ))}
              </select>
            </div>

            <div className="md:col-span-3">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="w-full h-11 px-3 rounded-xl bg-surface-container-low text-on-surface text-xs font-medium border border-surface-container focus:outline-none focus:ring-2 focus:ring-primary cursor-pointer"
              >
                <option value="featured">Destacados primero</option>
                <option value="price-asc">Precio: Menor a Mayor</option>
                <option value="price-desc">Precio: Mayor a Menor</option>
                <option value="name">Nombre: A a la Z</option>
              </select>
            </div>
          </div>

          {/* Category Chips Carousel / Row */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none pt-1">
            {CATEGORIES.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap flex items-center gap-1.5 transition-all cursor-pointer flex-shrink-0 ${
                    isSelected
                      ? 'bg-primary text-white shadow-sm'
                      : 'bg-surface-container-low text-on-surface-variant hover:bg-surface-container hover:text-on-surface border border-surface-container'
                  }`}
                >
                  <span className="material-symbols-outlined text-[18px]">{cat.icon}</span>
                  <span>{cat.name}</span>
                </button>
              );
            })}
          </div>

          {/* Quick Filter Switch for Active Sede */}
          <div className="flex items-center justify-between text-xs text-on-surface-variant pt-2 border-t border-surface-container">
            <span className="font-medium">
              Mostrando <strong>{filteredProducts.length}</strong> repuestos y accesorios
            </span>
            <label className="flex items-center gap-2 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={filterSedeAvailabilityOnly}
                onChange={(e) => setFilterSedeAvailabilityOnly(e.target.checked)}
                className="rounded text-primary focus:ring-primary"
              />
              <span>Solo disponibles en sede {activeSede.municipality.split(',')[0]}</span>
            </label>
          </div>
        </div>
      </section>

      {/* Product List Grid */}
      <section className="w-full py-10 bg-background min-h-120">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredProducts.length === 0 ? (
            <div className="bg-surface-container-lowest rounded-3xl p-12 text-center border border-surface-container max-w-md mx-auto my-8">
              <div className="w-16 h-16 rounded-2xl bg-surface-container flex items-center justify-center mx-auto mb-4 text-outline">
                <span className="material-symbols-outlined text-[36px]">search_off</span>
              </div>
              <h3 className="font-headline-sm font-bold text-primary text-base">
                No encontramos productos con estos filtros
              </h3>
              <p className="text-xs text-on-surface-variant mt-2 leading-relaxed">
                Prueba buscando otro término o restablece los filtros de marca o categoría.
              </p>
              <button
                onClick={() => {
                  setSearch('');
                  setSelectedCategory('todos');
                  setSelectedBrand('todas');
                  setFilterSedeAvailabilityOnly(false);
                }}
                className="mt-6 px-4 py-2 rounded-xl bg-primary text-white text-xs font-bold hover:bg-primary-container transition-all"
              >
                Limpiar todos los filtros
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => {
                const sedeKey = selectedSede as 'jagua' | 'loma' | 'chiriguana';
                const availableInCurrentSede = product.sedeAvailability[sedeKey];

                return (
                  <div
                    key={product.id}
                    className="rounded-2xl bg-surface-container-lowest border border-surface-container overflow-hidden hover:shadow-xl transition-all flex flex-col justify-between group"
                  >
                    <div>
                      {/* Image Thumbnail */}
                      <div className="relative overflow-hidden bg-surface-container-low aspect-4/3 cursor-pointer"
                        onClick={() => onSelectProduct(product)}
                      >
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                        />
                        <span className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full bg-primary text-white text-[10px] font-bold uppercase tracking-wider">
                          {product.brand}
                        </span>

                        <div className="absolute top-2.5 right-2.5 flex flex-col items-end gap-1">
                          <span
                            className={`px-2 py-0.5 rounded-full text-[10px] font-bold shadow-xs ${
                              availableInCurrentSede
                                ? 'bg-emerald-600 text-white'
                                : 'bg-surface-variant text-on-surface-variant'
                            }`}
                          >
                            {availableInCurrentSede ? 'En Sede' : 'Por Encargo'}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-4 space-y-3">
                        <div>
                          <span className="text-[10px] font-bold text-outline uppercase tracking-wider">
                            Cód: {product.code}
                          </span>
                          <h3
                            onClick={() => onSelectProduct(product)}
                            className="font-headline-sm text-sm font-bold text-on-surface hover:text-primary transition-colors cursor-pointer mt-0.5 line-clamp-2"
                          >
                            {product.name}
                          </h3>
                        </div>

                        {/* Compatibility Badges */}
                        <div className="flex flex-wrap gap-1">
                          {product.compatibility.slice(0, 2).map((comp, idx) => (
                            <span
                              key={idx}
                              className="px-2 py-0.5 rounded-md bg-surface-container text-primary text-[10px] font-medium"
                            >
                              {comp}
                            </span>
                          ))}
                          {product.compatibility.length > 2 && (
                            <span className="px-1.5 py-0.5 rounded-md bg-surface-container text-outline text-[10px]">
                              +{product.compatibility.length - 2}
                            </span>
                          )}
                        </div>

                        {/* Pricing Box */}
                        <div className="bg-surface-container-low p-2.5 rounded-xl space-y-1">
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-on-surface-variant font-medium">Detal:</span>
                            <span className="text-base font-extrabold text-primary">
                              ${product.priceDetal.toLocaleString('es-CO')}
                            </span>
                          </div>
                        </div>

                        {/* Sede Stock Pills */}
                        <div className="flex items-center justify-between text-[10px] text-outline pt-1">
                          <span className="font-semibold text-on-surface-variant">Disponibilidad:</span>
                          <div className="flex items-center gap-1.5">
                            <span
                              className={`w-2 h-2 rounded-full ${
                                product.sedeAvailability.jagua ? 'bg-emerald-500' : 'bg-gray-300'
                              }`}
                              title="La Jagua"
                            />
                            <span>Jagua</span>
                            <span
                              className={`w-2 h-2 rounded-full ${
                                product.sedeAvailability.loma ? 'bg-emerald-500' : 'bg-gray-300'
                              }`}
                              title="La Loma"
                            />
                            <span>Loma</span>
                            <span
                              className={`w-2 h-2 rounded-full ${
                                product.sedeAvailability.chiriguana ? 'bg-emerald-500' : 'bg-gray-300'
                              }`}
                              title="Chiriguaná"
                            />
                            <span>Chiriguaná</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="p-4 pt-0 flex items-center gap-2">
                      <button
                        onClick={() => onSelectProduct(product)}
                        className="flex-1 py-2 px-3 rounded-xl bg-surface-container hover:bg-surface-container-high text-primary font-label-md text-xs font-bold transition-all text-center cursor-pointer"
                      >
                        Ver Detalle
                      </button>
                      <button
                        onClick={() => onAddToCart(product, 1)}
                        className="p-2 rounded-xl bg-primary hover:bg-primary-container text-white transition-all cursor-pointer flex items-center justify-center shadow-xs"
                        title="Agregar a mi cotización"
                      >
                        <span className="material-symbols-outlined text-[20px]">add_shopping_cart</span>
                      </button>
                      <a
                        href={`https://wa.me/${activeSede.whatsapp}?text=${encodeURIComponent(
                          `Hola Chaky Motos (${activeSede.name}), quisiera cotizar el repuesto: ${product.name} (Cód: ${product.code}).`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white transition-all flex items-center justify-center shadow-xs"
                        title="Consultar por WhatsApp"
                      >
                        <span className="material-symbols-outlined text-[20px]">chat</span>
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};
