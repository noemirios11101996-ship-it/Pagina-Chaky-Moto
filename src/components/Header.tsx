import React, { useState } from 'react';
import { SEDES_DATA } from '../data/mockData';

interface HeaderProps {
  currentView: string;
  onNavigate: (view: string, query?: string) => void;
  cartCount: number;
  selectedSede: string;
  onOpenSedeModal: () => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentView,
  onNavigate,
  cartCount,
  selectedSede,
  onOpenSedeModal,
  searchQuery,
  setSearchQuery
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const activeSede = SEDES_DATA[selectedSede] || SEDES_DATA['jagua'];

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNavigate('catalogo', searchQuery);
  };

  const navItems = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'catalogo', label: 'Catálogo' },
    { id: 'promociones', label: 'Promociones' },
    { id: 'mayoristas', label: 'Mayoristas' },
    { id: 'sedes', label: 'Sedes' },
    { id: 'nosotros', label: 'Nosotros' },
    { id: 'contacto', label: 'Contacto' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 shadow-xs">
      {/* Top Banner Bar */}
      <div className="w-full bg-primary text-on-primary py-1.5 border-b border-primary-container/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between font-label-md text-label-md">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[16px] text-primary-fixed">verified</span>
            <span className="truncate">Repuestos originales y genéricos · Detal y mayor · 3 sedes en el Cesar</span>
          </div>

          <div className="hidden lg:flex items-center gap-6 text-primary-fixed">
            <span className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[15px]">schedule</span>
              Lun–Sáb 7:00 a. m.–6:00 p. m.
            </span>
            <span className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[15px]">local_shipping</span>
              Despachos rápidos en todo el Cesar
            </span>
            <button
              onClick={onOpenSedeModal}
              className="flex items-center gap-1 bg-primary-container px-2.5 py-0.5 rounded-full text-white text-xs hover:bg-white/20 transition-all cursor-pointer"
              title="Cambiar sede de atención"
            >
              <span className="material-symbols-outlined text-[14px]">storefront</span>
              <span>{activeSede.municipality.split(',')[0]}</span>
              <span className="material-symbols-outlined text-[14px]">arrow_drop_down</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="h-20 w-full bg-surface-container-lowest/95 backdrop-blur-md border-b border-surface-container shadow-[0_1px_8px_rgba(0,0,0,0.06)]">
        <div className="h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          {/* Brand Logo */}
          <div className="flex items-center gap-6 flex-shrink-0">
            <button
              onClick={() => onNavigate('inicio')}
              className="flex items-center gap-3 text-left group cursor-pointer"
            >
              <div className="h-11 w-11 rounded-xl bg-surface-container flex items-center justify-center group-hover:bg-primary transition-all shadow-xs">
                <span className="material-symbols-outlined text-primary group-hover:text-white text-[28px] transition-colors">
                  two_wheeler
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-headline-sm text-headline-sm font-extrabold text-primary tracking-tight leading-none group-hover:text-primary-container transition-colors">
                  CHAKY MOTOS
                </span>
                <span className="font-label-sm text-[10px] text-secondary uppercase font-bold tracking-wider mt-0.5">
                  Un Mundo de Servicios
                </span>
              </div>
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex items-center gap-5 font-label-md text-label-md">
              {navItems.map((item) => {
                const isActive = currentView === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => onNavigate(item.id)}
                    className={`py-2 px-1 border-b-2 font-medium transition-all cursor-pointer ${
                      isActive
                        ? 'border-primary-container text-primary-container font-bold'
                        : 'border-transparent text-on-surface-variant hover:text-on-surface'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Search & Actions */}
          <div className="flex items-center gap-3 flex-1 max-w-md justify-end">
            {/* Search Input */}
            <form onSubmit={handleSearchSubmit} className="relative w-full hidden sm:block">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-[20px]">
                search
              </span>
              <input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Buscar repuestos o accesorios..."
                type="text"
                className="w-full h-10 pl-10 pr-4 rounded-xl bg-surface-container-low text-on-surface placeholder:text-outline font-body-sm text-body-sm border border-transparent focus:outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary-container transition-all"
              />
            </form>

            {/* Mobile Sede Trigger */}
            <button
              onClick={onOpenSedeModal}
              className="lg:hidden flex items-center justify-center h-10 px-2.5 rounded-xl bg-surface-container-low text-on-surface-variant text-xs hover:bg-surface-container transition-colors"
              title="Cambiar sede"
            >
              <span className="material-symbols-outlined text-[18px] text-primary">storefront</span>
            </button>

            {/* Cart Button */}
            <button
              onClick={() => onNavigate('mi-pedido')}
              className={`relative flex items-center justify-center h-10 w-10 sm:h-11 sm:w-11 rounded-xl transition-all cursor-pointer ${
                currentView === 'mi-pedido'
                  ? 'bg-primary text-white shadow-sm'
                  : 'bg-surface-container-low text-on-surface-variant hover:bg-surface-container hover:text-on-surface'
              }`}
              title="Ver mi cotización y pedido"
            >
              <span className="material-symbols-outlined text-[22px]">shopping_bag</span>
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 h-5 min-w-[20px] px-1 bg-secondary text-white rounded-full font-label-sm text-[11px] font-bold flex items-center justify-center shadow-xs animate-bounce">
                  {cartCount}
                </span>
              )}
            </button>

            {/* WhatsApp Contact CTA */}
            <a
              href={`https://wa.me/${activeSede.whatsapp}?text=${encodeURIComponent(
                `Hola Chaky Motos (${activeSede.name}), me gustaría consultar disponibilidad de repuestos y precios.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-1.5 h-10 px-4 rounded-xl bg-secondary text-white hover:bg-secondary-container transition-all font-label-md text-label-md shadow-[0_2px_6px_rgba(162,63,0,0.25)] flex-shrink-0 cursor-pointer"
            >
              <span className="material-symbols-outlined text-[18px]">chat</span>
              <span>Escríbenos</span>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden flex items-center justify-center h-10 w-10 rounded-xl bg-surface-container-low text-on-surface hover:bg-surface-container"
              aria-label="Abrir menú"
            >
              <span className="material-symbols-outlined text-[24px]">
                {mobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-surface-container-lowest border-b border-surface-container shadow-xl px-4 py-5 animate-fadeIn">
          {/* Mobile Search */}
          <form onSubmit={handleSearchSubmit} className="relative w-full mb-4 sm:hidden">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-[20px]">
              search
            </span>
            <input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar repuestos o accesorios..."
              type="text"
              className="w-full h-10 pl-10 pr-4 rounded-xl bg-surface-container-low text-on-surface placeholder:text-outline font-body-sm text-body-sm border border-transparent focus:outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary-container transition-all"
            />
          </form>

          {/* Sede indicator */}
          <div className="mb-4 p-3 bg-surface-container-low rounded-xl flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">storefront</span>
              <div>
                <p className="text-xs font-bold text-primary">{activeSede.name}</p>
                <p className="text-[11px] text-on-surface-variant">{activeSede.municipality}</p>
              </div>
            </div>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSedeModal();
              }}
              className="text-xs font-bold text-secondary hover:underline"
            >
              Cambiar
            </button>
          </div>

          <div className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`flex items-center justify-between p-3 rounded-xl font-label-md text-sm text-left transition-colors ${
                  currentView === item.id
                    ? 'bg-primary text-white font-bold'
                    : 'text-on-surface hover:bg-surface-container-low'
                }`}
              >
                <span>{item.label}</span>
                <span className="material-symbols-outlined text-[18px]">chevron_right</span>
              </button>
            ))}
          </div>

          <div className="mt-4 pt-4 border-t border-surface-container flex flex-col gap-2">
            <a
              href={`https://wa.me/${activeSede.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-secondary text-white font-bold text-sm shadow-md"
            >
              <span className="material-symbols-outlined">chat</span>
              <span>WhatsApp {activeSede.municipality.split(',')[0]}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
