import React, { useState } from 'react';
import { CATEGORIES, PRODUCTS_DATA, Product, SEDES_DATA, FAQ_LIST, TESTIMONIALS_DATA } from '../data/mockData';

interface HomeViewProps {
  onNavigate: (view: string, filter?: string) => void;
  onSelectProduct: (product: Product) => void;
  onAddToCart: (product: Product, quantity?: number) => void;
  selectedSede: string;
  onOpenSedeModal: () => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  onNavigate,
  onSelectProduct,
  onAddToCart,
  selectedSede,
  onOpenSedeModal
}) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const activeSede = SEDES_DATA[selectedSede] || SEDES_DATA['jagua'];
  const featuredProducts = PRODUCTS_DATA.filter((p) => p.featured).slice(0, 4);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="flex flex-col w-full">
      {/* Top Context & Headquarters Ribbon */}
      <section className="w-full bg-surface-container-low py-2.5 border-b border-surface-container">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between text-body-sm text-on-surface-variant gap-2">
          <div className="flex items-center gap-2 font-label-md text-xs">
            <span className="material-symbols-outlined text-[16px] text-primary">pin_drop</span>
            <span>Atención activa en sede:</span>
            <span className="font-bold text-primary">{activeSede.name}</span>
            <button
              onClick={onOpenSedeModal}
              className="text-secondary font-bold hover:underline cursor-pointer ml-1"
            >
              (Cambiar)
            </button>
          </div>
          <div className="flex items-center gap-4 text-xs font-medium">
            <span className="hidden sm:inline-flex items-center gap-1">
              <span className="material-symbols-outlined text-[15px] text-emerald-600">check_circle</span>
              Venta al detal y mayorista
            </span>
            <span className="inline-flex items-center gap-1 text-primary font-bold">
              <span className="material-symbols-outlined text-[15px]">credit_score</span>
              Disponible Sistecrédito
            </span>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative w-full bg-linear-to-b from-surface-container-lowest via-background to-surface-container-low py-12 md:py-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: Headline and Call-to-actions */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary-fixed text-on-secondary-fixed-variant text-xs font-bold tracking-wide">
                <span className="material-symbols-outlined text-[16px] text-secondary">verified</span>
                <span>Un Mundo de Servicios en el Cesar</span>
              </div>

              <h1 className="font-display-lg text-primary tracking-tight font-extrabold leading-tight">
                Repuestos, Llantas y Accesorios Para Tu Moto al <span className="text-secondary">Mejor Precio</span>
              </h1>

              <p className="font-body-lg text-on-surface-variant leading-relaxed">
                Distribuidora multimarca en el departamento del Cesar. Surtimos a motociclistas, mototaxistas y talleres mecánicos con repuestos originales y genéricos de alta calidad desde nuestras sedes en <strong className="text-on-surface">La Jagua de Ibirico</strong>, <strong className="text-on-surface">La Loma</strong> y <strong className="text-on-surface">Chiriguaná</strong>.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => onNavigate('catalogo')}
                  className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-primary hover:bg-primary-container text-white font-label-lg shadow-md hover:shadow-lg transition-all cursor-pointer"
                >
                  <span className="material-symbols-outlined">two_wheeler</span>
                  <span>Ver Catálogo Completo</span>
                </button>

                <button
                  onClick={() => onNavigate('mayoristas')}
                  className="flex items-center gap-2 px-5 py-3.5 rounded-xl bg-surface-container hover:bg-surface-container-high text-primary font-label-lg transition-all cursor-pointer border border-primary/20"
                >
                  <span className="material-symbols-outlined text-secondary">inventory_2</span>
                  <span>Canal Mayoristas</span>
                </button>

                <a
                  href={`https://wa.me/${activeSede.whatsapp}?text=${encodeURIComponent(
                    `Hola Chaky Motos, deseo consultar repuestos desde la sede ${activeSede.name}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-label-lg shadow-sm hover:shadow transition-all"
                >
                  <span className="material-symbols-outlined">chat</span>
                  <span>WhatsApp Directo</span>
                </a>
              </div>

              {/* Badges strip */}
              <div className="pt-4 border-t border-surface-container grid grid-cols-3 gap-4">
                <div>
                  <p className="text-lg font-extrabold text-primary">+2,000</p>
                  <p className="text-xs text-on-surface-variant">Referencias en stock</p>
                </div>
                <div>
                  <p className="text-lg font-extrabold text-secondary">3 Sedes</p>
                  <p className="text-xs text-on-surface-variant">La Jagua, La Loma, Chiriguaná</p>
                </div>
                <div>
                  <p className="text-lg font-extrabold text-primary">Sistecrédito</p>
                  <p className="text-xs text-on-surface-variant">Crédito rápido en minutos</p>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Visual Card */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-surface-container-lowest bg-surface-container">
                <img
                  src="https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=1000&q=80"
                  alt="Taller y Almacén Chaky Motos"
                  className="w-full h-80 object-cover object-center"
                />
                <div className="absolute inset-0 bg-linear-to-t from-primary/90 via-primary/30 to-transparent flex flex-col justify-end p-6 text-white">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2.5 py-1 rounded bg-secondary text-white font-bold text-xs uppercase tracking-wider">
                      Atención Inmediata
                    </span>
                    <span className="text-xs text-primary-fixed">Cesar, Colombia</span>
                  </div>
                  <h3 className="font-headline-md font-bold text-white leading-snug">
                    ¿Tienes taller o almacén de motos?
                  </h3>
                  <p className="text-xs text-primary-fixed-dim mt-1">
                    Solicita una cotización mayorista por WhatsApp con las referencias y cantidades que necesitas.
                  </p>
                  <button
                    onClick={() => onNavigate('mayoristas')}
                    className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-white hover:text-secondary-fixed transition-colors"
                  >
                    <span>Conoce las condiciones comerciales</span>
                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Value Pillars */}
      <section className="w-full bg-surface-container-lowest py-10 border-y border-surface-container">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-5 rounded-2xl bg-surface-container-low border border-surface-container flex flex-col gap-2">
              <div className="w-10 h-10 rounded-xl bg-primary text-white flex items-center justify-center">
                <span className="material-symbols-outlined text-[22px]">two_wheeler</span>
              </div>
              <h4 className="font-headline-sm text-sm font-bold text-primary">Compatibilidad Garantizada</h4>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                Repuestos probados para Bajaj Boxer, NKD 125, Pulsar, Discover, Yamaha FZ, Crypton y motos de trabajo en trocha.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-surface-container-low border border-surface-container flex flex-col gap-2">
              <div className="w-10 h-10 rounded-xl bg-secondary text-white flex items-center justify-center">
                <span className="material-symbols-outlined text-[22px]">request_quote</span>
              </div>
              <h4 className="font-headline-sm text-sm font-bold text-primary">Precio Detal y Mayorista</h4>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                Consulta por WhatsApp el precio mayorista de las referencias y cantidades que necesitas.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-surface-container-low border border-surface-container flex flex-col gap-2">
              <div className="w-10 h-10 rounded-xl bg-primary-container text-white flex items-center justify-center">
                <span className="material-symbols-outlined text-[22px]">hub</span>
              </div>
              <h4 className="font-headline-sm text-sm font-bold text-primary">Cobertura en Todo el Cesar</h4>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                3 sedes con inventario real en La Jagua de Ibirico, La Loma y Chiriguaná para despacho o retiro inmediato.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-surface-container-low border border-surface-container flex flex-col gap-2">
              <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center">
                <span className="material-symbols-outlined text-[22px]">credit_card</span>
              </div>
              <h4 className="font-headline-sm text-sm font-bold text-primary">Financiación Sistecrédito</h4>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                Financia repuestos, cascos, llantas y accesorios al instante sin papeleo excesivo en nuestras instalaciones.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Categories Section */}
      <section className="w-full py-12 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-secondary">
                Líneas de Producto
              </span>
              <h2 className="font-headline-xl text-primary font-extrabold tracking-tight mt-1">
                Explora Nuestras Categorías
              </h2>
              <p className="text-sm text-on-surface-variant mt-1">
                Todo lo que tu moto o taller requiere con disponibilidad inmediata
              </p>
            </div>
            <button
              onClick={() => onNavigate('catalogo')}
              className="inline-flex items-center gap-1 text-sm font-bold text-primary hover:text-primary-container transition-colors"
            >
              <span>Ver todas las categorías</span>
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {CATEGORIES.slice(1, 7).map((cat) => (
              <button
                key={cat.id}
                onClick={() => onNavigate('catalogo', cat.id)}
                className="group p-4 rounded-2xl bg-surface-container-lowest border border-surface-container hover:border-primary hover:shadow-md transition-all flex flex-col items-center text-center cursor-pointer"
              >
                <div className="w-14 h-14 rounded-2xl bg-surface-container-low group-hover:bg-primary group-hover:text-white text-primary flex items-center justify-center transition-all mb-3">
                  <span className="material-symbols-outlined text-[28px]">{cat.icon}</span>
                </div>
                <h3 className="font-headline-sm text-xs font-bold text-on-surface group-hover:text-primary transition-colors leading-tight">
                  {cat.name}
                </h3>
                <span className="text-[11px] text-outline mt-1 group-hover:text-secondary font-medium">
                  Explorar
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="w-full py-12 bg-surface-container-lowest border-y border-surface-container">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-secondary">
                Alta Rotación
              </span>
              <h2 className="font-headline-xl text-primary font-extrabold tracking-tight mt-1">
                Repuestos y Accesorios Más Buscados
              </h2>
              <p className="text-sm text-on-surface-variant mt-1">
                Consulta por WhatsApp la cotización mayorista de cualquier referencia.
              </p>
            </div>
            <button
              onClick={() => onNavigate('catalogo')}
              className="inline-flex items-center gap-1 text-sm font-bold text-primary hover:underline"
            >
              <span>Ir al Catálogo Completo</span>
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
                <div
                  key={product.id}
                  className="rounded-2xl bg-surface-container-lowest border border-surface-container overflow-hidden hover:shadow-lg transition-all flex flex-col justify-between group"
                >
                  <div className="relative overflow-hidden bg-surface-container-low aspect-4/3">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                    />
                    <span className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full bg-primary text-white text-[10px] font-bold uppercase tracking-wider">
                      {product.brand}
                    </span>
                  </div>

                  <div className="p-4 flex flex-col flex-1 justify-between gap-3">
                    <div>
                      <span className="text-[11px] font-semibold text-outline uppercase tracking-wider">
                        Cód: {product.code}
                      </span>
                      <h3
                        onClick={() => onSelectProduct(product)}
                        className="font-headline-sm text-sm font-bold text-on-surface hover:text-primary transition-colors cursor-pointer mt-1 line-clamp-2"
                      >
                        {product.name}
                      </h3>
                    </div>

                    <div className="bg-surface-container-low p-2.5 rounded-xl space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-on-surface-variant font-medium">Precio Detal:</span>
                        <span className="text-base font-extrabold text-primary">
                          ${product.priceDetal.toLocaleString('es-CO')}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 pt-1">
                      <button
                        onClick={() => onSelectProduct(product)}
                        className="flex-1 py-2 px-3 rounded-xl bg-surface-container hover:bg-surface-container-high text-primary font-label-md text-xs font-bold transition-all text-center cursor-pointer"
                      >
                        Ver Detalle
                      </button>
                      <button
                        onClick={() => onAddToCart(product, 1)}
                        className="p-2 rounded-xl bg-primary hover:bg-primary-container text-white transition-all cursor-pointer flex items-center justify-center shadow-xs"
                        title="Agregar a mi pedido"
                      >
                        <span className="material-symbols-outlined text-[20px]">add_shopping_cart</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Wholesale Banner */}
      <section className="w-full bg-primary text-white py-12 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-white text-xs font-bold uppercase tracking-wider">
                <span className="material-symbols-outlined text-[16px]">verified</span>
                Canal B2B Para Talleres y Almacenes
              </div>
              <h2 className="font-headline-xl text-white font-extrabold tracking-tight">
                ¿Compras repuestos por mayor para tu negocio?
              </h2>
              <p className="text-sm text-primary-fixed-dim leading-relaxed max-w-2xl">
                Cotiza por WhatsApp las referencias y cantidades que necesitas. El equipo confirma los precios y la disponibilidad.
              </p>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => onNavigate('mayoristas')}
                  className="px-6 py-3 rounded-xl bg-secondary hover:bg-secondary-container text-white font-label-lg font-bold transition-all cursor-pointer shadow-md"
                >
                  Conocer Canal Mayoristas
                </button>
                <a
                  href={`https://wa.me/${SEDES_DATA.jagua.whatsapp}?text=${encodeURIComponent(
                    'Hola, deseo solicitar una cotización mayorista. Estas son las referencias y cantidades que necesito:'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-label-lg font-semibold transition-all inline-flex items-center gap-2"
                >
                  <span className="material-symbols-outlined text-[20px]">chat</span>
                  <span>Línea Mayorista WhatsApp</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-4 bg-primary-container/60 p-6 rounded-2xl border border-white/10 space-y-3">
              <h3 className="font-headline-sm text-sm font-bold text-white flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary-fixed">rule</span>
                Cotización Mayorista
              </h3>
              <p className="text-xs text-primary-fixed-dim leading-relaxed">
                Envía tus referencias y cantidades por WhatsApp. El precio mayorista se confirma mediante cotización, sin cálculo automático por cantidad.
              </p>
              <div className="p-3 bg-white/5 rounded-xl border border-white/10 text-xs">
                <span className="font-bold text-secondary-fixed">Sede Bodega Central:</span>
                <p className="text-primary-fixed text-[11px] mt-0.5">{SEDES_DATA.jagua.address} — La Jagua de Ibirico</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sedes Overview Section */}
      <section className="w-full py-12 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-secondary">
              Presencia en el Cesar
            </span>
            <h2 className="font-headline-xl text-primary font-extrabold tracking-tight mt-1">
              Nuestras 3 Sedes de Atención
            </h2>
            <p className="text-sm text-on-surface-variant mt-2">
              Visítanos o comunícate directamente con la sede más conveniente para tu ubicación
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {Object.values(SEDES_DATA).map((sede) => (
              <div
                key={sede.id}
                className="rounded-2xl bg-surface-container-lowest border border-surface-container p-6 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-headline-sm font-bold text-primary text-base">
                      {sede.municipality.split(',')[0]}
                    </span>
                    {sede.isPrincipal && (
                      <span className="px-2 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed-variant text-[10px] font-bold uppercase tracking-wider">
                        Principal
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-on-surface-variant leading-relaxed">
                    {sede.subtitle}
                  </p>
                  <div className="space-y-2 pt-2 text-xs border-t border-surface-container">
                    <div className="flex items-start gap-2 text-on-surface-variant">
                      <span className="material-symbols-outlined text-[16px] text-primary flex-shrink-0 mt-0.5">location_on</span>
                      <span>{sede.address}</span>
                    </div>
                    <div className="flex items-center gap-2 text-on-surface-variant">
                      <span className="material-symbols-outlined text-[16px] text-secondary flex-shrink-0">schedule</span>
                      <span>{sede.hoursWeek}</span>
                    </div>
                    <div className="flex items-center gap-2 text-primary font-semibold">
                      <span className="material-symbols-outlined text-[16px] flex-shrink-0">call</span>
                      <span>{sede.phone}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-surface-container flex items-center gap-2">
                  <a
                    href={`https://wa.me/${sede.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-label-md text-xs font-bold text-center transition-colors flex items-center justify-center gap-1.5"
                  >
                    <span className="material-symbols-outlined text-[16px]">chat</span>
                    <span>Chat WhatsApp</span>
                  </a>
                  <button
                    onClick={() => onNavigate('sedes')}
                    className="py-2.5 px-3 rounded-xl bg-surface-container hover:bg-surface-container-high text-primary font-label-md text-xs font-bold transition-colors"
                  >
                    Ver Detalles
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Order / Quote Guide */}
      <section className="w-full py-12 bg-surface-container-lowest">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-secondary">
              Fácil y Rápido
            </span>
            <h2 className="font-headline-xl text-primary font-extrabold tracking-tight mt-1">
              ¿Cómo Cotizar o Comprar en Chaky Motos?
            </h2>
            <p className="text-sm text-on-surface-variant mt-2">
              Sin registros engorrosos: arma tu lista y confirma stock en tiempo real
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-5 rounded-2xl bg-surface-container-low border border-surface-container flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg mb-3">
                1
              </div>
              <h4 className="font-headline-sm text-sm font-bold text-primary mb-1">Explora el Catálogo</h4>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                Busca tus referencias por marca, categoría o compatibilidad con tu modelo de motocicleta.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-surface-container-low border border-surface-container flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg mb-3">
                2
              </div>
              <h4 className="font-headline-sm text-sm font-bold text-primary mb-1">Arma Tu Lista</h4>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                Agrega las referencias y cantidades a &quot;Mi Pedido&quot;. Si compras por mayor, solicita la cotización por WhatsApp.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-surface-container-low border border-surface-container flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg mb-3">
                3
              </div>
              <h4 className="font-headline-sm text-sm font-bold text-primary mb-1">Selecciona Tu Sede</h4>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                Elige entre La Jagua de Ibirico, La Loma o Chiriguaná para el despacho o retiro presencial.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-surface-container-low border border-surface-container flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-lg mb-3">
                4
              </div>
              <h4 className="font-headline-sm text-sm font-bold text-primary mb-1">Envía por WhatsApp</h4>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                Un asesor verifica el inventario en mostrador, te confirma formas de pago y coordina la entrega.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full py-12 bg-surface-container-low border-y border-surface-container">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-secondary">
              Confianza Regional
            </span>
            <h2 className="font-headline-xl text-primary font-extrabold tracking-tight mt-1">
              Lo Que Dicen Nuestros Clientes y Talleres
            </h2>
            <p className="text-sm text-on-surface-variant mt-2">
              Respaldamos a quienes mantienen las motos del departamento rodando día a día
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS_DATA.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-surface-container-lowest border border-surface-container shadow-xs flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center text-amber-500">
                    {[...Array(item.rating)].map((_, i) => (
                      <span key={i} className="material-symbols-outlined text-[18px]">
                        star
                      </span>
                    ))}
                  </div>
                  <p className="text-xs text-on-surface-variant leading-relaxed italic">
                    &quot;{item.comment}&quot;
                  </p>
                </div>
                <div className="pt-3 border-t border-surface-container">
                  <p className="font-bold text-primary text-xs">{item.name}</p>
                  <p className="text-[11px] text-outline">{item.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="w-full py-12 bg-surface-container-lowest">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-secondary">
              Dudas Habituales
            </span>
            <h2 className="font-headline-xl text-primary font-extrabold tracking-tight mt-1">
              Preguntas Frecuentes
            </h2>
          </div>

          <div className="space-y-3">
            {FAQ_LIST.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="rounded-xl border border-surface-container overflow-hidden transition-all"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full p-4 text-left bg-surface-container-low hover:bg-surface-container flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <span className="font-headline-sm text-xs sm:text-sm font-bold text-on-surface">
                      {faq.q}
                    </span>
                    <span className="material-symbols-outlined text-primary text-[20px] transition-transform">
                      {isOpen ? 'expand_less' : 'expand_more'}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="p-4 bg-surface-container-lowest text-xs text-on-surface-variant leading-relaxed border-t border-surface-container">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};
