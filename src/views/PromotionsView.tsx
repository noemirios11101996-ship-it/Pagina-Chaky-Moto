import React from 'react';
import { SEDES_DATA } from '../data/mockData';

interface PromotionsViewProps {
  onNavigate: (view: string) => void;
  selectedSede: string;
  onOpenSedeModal: () => void;
}

export const PromotionsView: React.FC<PromotionsViewProps> = ({
  onNavigate,
  selectedSede,
  onOpenSedeModal
}) => {
  const activeSede = SEDES_DATA[selectedSede] || SEDES_DATA['jagua'];

  const samplePromoCards = [
    {
      id: 1,
      category: 'Categoría por definir · Transmisión',
      title: 'Combo Kit de Arrastre Reforzado + Lubricante',
      desc: 'Estructura base preparada para kits de tracción, cadenas reforzadas y rodamientos para alto kilometraje en carreteras y trochas del Cesar.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAgbPaAMbGW6YEMW6pWA8oXzdvSEDHZsWzB1lm45K-K8X9-GCISmcqlTkGNcrk3lVr54fOgF4xJJ1B06Q0odmAezvI5_zCG_BueamJHyLiYKHN3ajEhdSvmVxiCvL9GZs5J1NJxe6w5sWtUeIcO3qnDZFwiPL6RxFuKGVtUdYbDafs75samDQHOtQSQF3X4a_8KMGvQm8SG2GZN5x8osjiJfcq7BnYmVooPdk4vB50qUZp_HKvaRL-z',
      badge: 'Próximo Combo Mantenimiento'
    },
    {
      id: 2,
      category: 'Categoría por definir · Lubricación & Motor',
      title: 'Pack Cambio de Aceite Sintético + Bujía Iridio',
      desc: 'Formato diseñado para cambios preventivos con marcas líderes como Motul, Mobil y bujías NGK originales.',
      image: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=600&q=80',
      badge: 'Próxima Oferta Mensual'
    },
    {
      id: 3,
      category: 'Categoría por definir · Seguridad Vial',
      title: 'Llantas Delantera y Trasera Sellomatic en Pareja',
      desc: 'Combos de neumáticos certificados DOT/ECE para transporte diario y trabajo minero con facilidades de Sistecrédito.',
      image: 'https://images.unsplash.com/photo-1578844251758-2f71da64c96f?auto=format&fit=crop&w=600&q=80',
      badge: 'Próximo Descuento de Temporada'
    }
  ];

  return (
    <div className="flex flex-col w-full bg-background min-h-screen">
      {/* Breadcrumbs */}
      <section className="w-full bg-surface-container-lowest border-b border-surface-container py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between font-label-md text-xs text-on-surface-variant">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2">
            <button
              onClick={() => onNavigate('inicio')}
              className="text-primary hover:underline flex items-center gap-1 cursor-pointer"
            >
              <span className="material-symbols-outlined text-[16px]">home</span>
              <span>Inicio</span>
            </button>
            <span className="text-outline">/</span>
            <span className="text-primary font-bold">Promociones</span>
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

      {/* Page Header */}
      <section className="w-full py-8 md:py-12 bg-surface-container-low border-b border-surface-container">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex flex-col max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-highest text-primary text-[11px] font-bold uppercase tracking-wider mb-2 w-fit">
              <span className="h-2 w-2 rounded-full bg-secondary animate-pulse" />
              <span>PROMOCIONES CHAKY MOTOS</span>
            </div>
            <h1 className="font-headline-xl text-primary font-extrabold leading-tight tracking-tight">
              Oportunidades para equipar tu moto
            </h1>
            <p className="font-body-lg text-sm sm:text-base text-on-surface-variant mt-2 max-w-2xl leading-relaxed">
              Consulta aquí nuestras promociones cuando estén disponibles y confirma condiciones con un asesor comercial en tiempo real.
            </p>
          </div>

          <div className="flex items-center gap-3 bg-surface-container-lowest px-4 py-2.5 rounded-xl shadow-xs">
            <span className="material-symbols-outlined text-secondary text-[24px]">verified_user</span>
            <div className="flex flex-col">
              <span className="text-[10px] text-outline font-bold uppercase tracking-wider">Canal Oficial</span>
              <span className="font-label-md text-xs font-bold text-primary">Garantía Directa en Mostrador</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Preparation Banner (Replicating Image_8) */}
      <section className="w-full py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-surface-container-lowest shadow-md border border-surface-container overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch min-h-96">
              <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed-variant text-xs font-bold uppercase tracking-wider flex items-center gap-1">
                    <span className="material-symbols-outlined text-[15px]">hourglass_top</span>
                    PRÓXIMAMENTE DISPONIBLE
                  </span>
                </div>

                <h2 className="font-headline-lg text-primary font-bold tracking-tight mb-3">
                  Estamos preparando este espacio para nuestras próximas promociones
                </h2>

                <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed mb-6">
                  En CHAKY MOTOS mantenemos precios justos y competitivos todo el año en repuestos originales y genéricos. Muy pronto publicaremos aquí combos de mantenimiento, ofertas de temporada y precios especiales por volumen confirmados directamente con nuestros proveedores. Mientras tanto, puedes consultar disponibilidad inmediata y precios de mostrador con nuestros asesores en La Jagua, La Loma o Chiriguaná.
                </p>

                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href={`https://wa.me/${activeSede.whatsapp}?text=${encodeURIComponent(
                      `Hola Chaky Motos (${activeSede.name}), quisiera consultar las promociones y combos actuales para moto.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-secondary text-white font-label-lg text-xs sm:text-sm font-bold shadow-md hover:bg-secondary-container transition-all"
                  >
                    <span className="material-symbols-outlined text-[20px]">chat</span>
                    <span>Consultar novedades por WhatsApp</span>
                  </a>

                  <button
                    onClick={() => onNavigate('catalogo')}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-surface-container-low hover:bg-surface-container text-primary font-label-lg text-xs sm:text-sm font-bold transition-colors cursor-pointer border border-surface-container"
                  >
                    <span className="material-symbols-outlined text-[20px]">inventory_2</span>
                    <span>Ver catálogo de repuestos</span>
                  </button>
                </div>
              </div>

              <div className="lg:col-span-5 relative bg-surface-container flex items-center justify-center p-6 min-h-64 lg:min-h-full">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBlnqrCNTHBRoUD7QB3ynxRk8I2jHOYpsbe0TmL8CBS0BgNBgyEfrKOWkfr4j7SmtkuNCbEdS8vRgXpvhF2I8QT7dLDkg7O_0RC0GybEBym9KsuRZNEUo311b97bMIRn-Vu7KULIGG0xEsHc6LkE0QIZcOvABVFYQ2JVFEhs9XeV18Q5MiQo6vqZaCBg3dtypwb0wcKRlBd_CVscnxPph9AYDHej2IO69og77TTfG0EBXZHKVHXxTDO"
                  alt="Almacén de repuestos Chaky Motos"
                  className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-85"
                />
                <div className="relative z-10 bg-surface-container-lowest/95 backdrop-blur-md p-6 rounded-2xl max-w-xs shadow-lg text-center flex flex-col items-center border border-white/40">
                  <div className="h-12 w-12 rounded-xl bg-primary-fixed flex items-center justify-center text-primary mb-2">
                    <span className="material-symbols-outlined text-[26px]">tune</span>
                  </div>
                  <span className="font-headline-sm text-sm font-bold text-primary">Catálogo en Mostrador</span>
                  <p className="text-xs text-on-surface-variant mt-1 leading-relaxed">
                    Más de 2.000 referencias listas para entrega inmediata y despacho en todo el departamento del Cesar.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mockup Preview Grid */}
      <section className="w-full py-10 bg-surface-container-low border-y border-surface-container">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <div className="flex items-center gap-1.5 text-secondary text-xs font-bold uppercase tracking-wider mb-1">
                <span className="material-symbols-outlined text-[16px]">visibility</span>
                <span>Muestrario de formatos comerciales</span>
              </div>
              <h2 className="font-headline-lg text-primary font-bold">
                Cuando haya promociones, las verás aquí
              </h2>
              <p className="text-xs sm:text-sm text-on-surface-variant max-w-2xl mt-1">
                Visualización preliminar de cómo presentaremos las ofertas oficiales una vez sean confirmadas con nuestros proveedores.
              </p>
            </div>
            <div className="flex items-center gap-2 bg-surface-container px-3 py-1.5 rounded-lg text-on-surface-variant text-xs font-medium shrink-0">
              <span className="material-symbols-outlined text-[16px] text-primary">info</span>
              <span>Sin precios ficticios ni contadores agresivos</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {samplePromoCards.map((card) => (
              <div
                key={card.id}
                className="flex flex-col bg-surface-container-lowest rounded-2xl shadow-xs overflow-hidden border border-surface-container hover:shadow-md transition-all"
              >
                <div className="bg-surface-container-high py-2 px-4 flex items-center justify-between text-xs font-bold text-primary">
                  <span>Maqueta referencial de oferta</span>
                  <span className="material-symbols-outlined text-[16px]">dashboard</span>
                </div>

                <div className="relative w-full h-48 bg-surface-container-low flex items-center justify-center overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover filter contrast-85"
                  />
                  <div className="absolute top-2.5 right-2.5">
                    <span className="px-2.5 py-0.5 rounded-md bg-secondary text-white text-[10px] font-bold shadow-xs">
                      {card.badge}
                    </span>
                  </div>
                </div>

                <div className="p-5 flex flex-col flex-1 justify-between gap-4">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-secondary">
                      {card.category}
                    </span>
                    <h3 className="font-headline-sm text-sm font-bold text-primary mt-1">
                      {card.title}
                    </h3>
                    <p className="text-xs text-on-surface-variant mt-2 leading-relaxed">
                      {card.desc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-surface-container flex items-center justify-between text-xs">
                    <div>
                      <span className="text-[10px] text-outline block">Estado de tarifa:</span>
                      <span className="font-bold text-primary text-xs">Precio por confirmar</span>
                    </div>
                    <a
                      href={`https://wa.me/${activeSede.whatsapp}?text=${encodeURIComponent(
                        `Hola Chaky Motos, me interesa saber si ya tienen precio para: ${card.title}`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-primary font-bold text-xs inline-flex items-center gap-1"
                    >
                      <span className="material-symbols-outlined text-[15px]">chat</span>
                      <span>Consultar</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Protocol */}
      <section className="w-full py-10 bg-surface-container-lowest">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto">
            <span className="material-symbols-outlined text-[28px]">verified</span>
          </div>
          <h3 className="font-headline-lg font-bold text-primary">
            Política de Precios Transparentes Chaky Motos
          </h3>
          <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
            En nuestras sedes de La Jagua de Ibirico, La Loma y Chiriguaná puedes consultar precios al detal y solicitar por WhatsApp una cotización mayorista para las referencias y cantidades que necesitas.
          </p>
        </div>
      </section>
    </div>
  );
};
