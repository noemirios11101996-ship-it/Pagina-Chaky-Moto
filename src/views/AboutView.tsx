import React from 'react';
import { SEDES_DATA } from '../data/mockData';

interface AboutViewProps {
  onNavigate: (view: string) => void;
  selectedSede: string;
  onOpenSedeModal: () => void;
}

export const AboutView: React.FC<AboutViewProps> = ({
  onNavigate,
  selectedSede,
  onOpenSedeModal
}) => {
  const activeSede = SEDES_DATA[selectedSede] || SEDES_DATA['jagua'];

  return (
    <div className="flex flex-col w-full bg-background min-h-screen">
      {/* Breadcrumbs */}
      <section className="w-full bg-surface-container-low py-3 border-b border-surface-container">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between font-label-md text-xs text-on-surface-variant">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2">
            <button
              onClick={() => onNavigate('inicio')}
              className="hover:text-primary transition-colors flex items-center gap-1 cursor-pointer"
            >
              <span className="material-symbols-outlined text-[16px]">home</span>
              <span>Inicio</span>
            </button>
            <span className="text-outline">/</span>
            <span className="text-primary font-bold">Sobre Nosotros</span>
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

      {/* Hero Section */}
      <section className="w-full bg-surface-container-lowest py-12 md:py-16 border-b border-surface-container">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Col */}
            <div className="lg:col-span-7 flex flex-col items-start gap-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container text-primary font-label-sm text-xs font-bold uppercase tracking-wider">
                <span className="material-symbols-outlined text-[16px]">verified</span>
                <span>IDENTIDAD CHAKY MOTOS · CESAR</span>
              </div>

              <h1 className="font-display-lg text-primary tracking-tight leading-tight font-extrabold">
                Un mundo de servicios para tu moto
              </h1>

              <p className="font-body-lg text-sm sm:text-base text-on-surface-variant max-w-2xl leading-relaxed">
                Repuestos, accesorios y lujos con atención cercana y honesta desde nuestras tres sedes en el Cesar: La Jagua de Ibirico, La Loma y Chiriguaná.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href={`https://wa.me/${activeSede.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-xl bg-secondary hover:bg-secondary-container text-white font-label-lg text-xs sm:text-sm font-bold shadow-md transition-all cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[20px]">chat</span>
                  <span>Hablar con un asesor</span>
                </a>

                <button
                  onClick={() => onNavigate('sedes')}
                  className="inline-flex items-center justify-center gap-2 h-12 px-5 rounded-xl bg-surface-container text-primary font-label-lg text-xs sm:text-sm font-bold hover:bg-primary hover:text-white transition-all cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[20px]">store</span>
                  <span>Conocer nuestras 3 sedes</span>
                </button>
              </div>

              {/* Micro Highlights */}
              <div className="grid grid-cols-3 gap-3 w-full pt-4 border-t border-surface-container">
                <div className="p-3.5 rounded-xl bg-surface-container-low flex flex-col gap-1">
                  <span className="material-symbols-outlined text-secondary text-[22px]">storefront</span>
                  <span className="font-headline-sm text-xs sm:text-sm font-bold text-on-surface">3 Sedes</span>
                  <span className="text-[10px] text-outline">En el centro del Cesar</span>
                </div>
                <div className="p-3.5 rounded-xl bg-surface-container-low flex flex-col gap-1">
                  <span className="material-symbols-outlined text-primary text-[22px]">inventory_2</span>
                  <span className="font-headline-sm text-xs sm:text-sm font-bold text-on-surface">Mayor & Detal</span>
                  <span className="text-[10px] text-outline">Cotización por WhatsApp</span>
                </div>
                <div className="p-3.5 rounded-xl bg-surface-container-low flex flex-col gap-1">
                  <span className="material-symbols-outlined text-emerald-600 text-[22px]">credit_score</span>
                  <span className="font-headline-sm text-xs sm:text-sm font-bold text-on-surface">Sistecrédito</span>
                  <span className="text-[10px] text-outline">Financiación ágil</span>
                </div>
              </div>
            </div>

            {/* Right Visual Col */}
            <div className="lg:col-span-5 relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-surface-container">
                <img
                  src="https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=800&q=80"
                  alt="Instalaciones Chaky Motos"
                  className="w-full h-96 object-cover"
                />
                <div className="p-5 bg-surface-container-lowest border-t border-surface-container">
                  <span className="text-xs font-bold text-primary block">
                    CHAKY MOTOS · Sede Principal La Jagua de Ibirico
                  </span>
                  <p className="text-[11px] text-on-surface-variant mt-1">
                    Bodega mayorista, mostrador al público y despacho departamental
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Essence & Story */}
      <section className="w-full py-12 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-secondary">
                Nuestra Trayectoria
              </span>
              <h2 className="font-headline-xl text-primary font-extrabold tracking-tight">
                Crecemos junto al trabajo diario de los motociclistas del Cesar
              </h2>
              <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                CHAKY MOTOS nació con una visión clara: brindar una solución integral, honesta y de fácil acceso a repuestos, lubricantes y accesorios para quienes dependen de su motocicleta día a día en el departamento del Cesar.
              </p>
              <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                Entendemos que la moto no es solo un medio de transporte, sino el sustento de miles de familias en el sector minero, agropecuario, mototaxismo y transporte local. Por eso garantizamos que cada repuesto que sale de nuestro almacén cumple con estándares rigurosos de durabilidad y desempeño.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-surface-container-lowest border border-surface-container shadow-xs space-y-2">
                <div className="w-10 h-10 rounded-xl bg-primary text-white flex items-center justify-center font-bold">
                  <span className="material-symbols-outlined text-[20px]">thumb_up</span>
                </div>
                <h3 className="font-headline-sm text-xs sm:text-sm font-bold text-primary">Precios Honestos</h3>
                <p className="text-[11px] text-on-surface-variant leading-relaxed">
                  Sin recargos sorpresa ni especulación. Precios de mostrador claros para particulares y mayoristas.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-surface-container-lowest border border-surface-container shadow-xs space-y-2">
                <div className="w-10 h-10 rounded-xl bg-secondary text-white flex items-center justify-center font-bold">
                  <span className="material-symbols-outlined text-[20px]">bolt</span>
                </div>
                <h3 className="font-headline-sm text-xs sm:text-sm font-bold text-primary">Agilidad Total</h3>
                <p className="text-[11px] text-on-surface-variant leading-relaxed">
                  Cotizaciones en WhatsApp en menos de 5 minutos e inventario físico listo en estantería.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-surface-container-lowest border border-surface-container shadow-xs space-y-2">
                <div className="w-10 h-10 rounded-xl bg-primary-container text-white flex items-center justify-center font-bold">
                  <span className="material-symbols-outlined text-[20px]">handshake</span>
                </div>
                <h3 className="font-headline-sm text-xs sm:text-sm font-bold text-primary">Alianza con Talleres</h3>
                <p className="text-[11px] text-on-surface-variant leading-relaxed">
                  Atendemos pedidos mayoristas y confirmamos el precio por WhatsApp según las referencias y cantidades solicitadas.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-surface-container-lowest border border-surface-container shadow-xs space-y-2">
                <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold">
                  <span className="material-symbols-outlined text-[20px]">verified_user</span>
                </div>
                <h3 className="font-headline-sm text-xs sm:text-sm font-bold text-primary">Garantía Real</h3>
                <p className="text-[11px] text-on-surface-variant leading-relaxed">
                  Respaldo directo en tienda por fallas de fábrica sin trámites burocráticos desgastantes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer / Product lines */}
      <section className="w-full py-12 bg-surface-container-lowest">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-secondary">
              Nuestro Portafolio
            </span>
            <h2 className="font-headline-xl text-primary font-extrabold tracking-tight mt-1">
              ¿Qué encuentras en CHAKY MOTOS?
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-surface-container-low border border-surface-container space-y-3">
              <span className="material-symbols-outlined text-primary text-[32px]">settings</span>
              <h3 className="font-headline-sm text-sm font-bold text-primary">Kits de Arrastre y Cadenas</h3>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                Marcas líderes como Choho Racing, Casarella y Revo en pasos 428H y 520 para alto kilometraje.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-surface-container-low border border-surface-container space-y-3">
              <span className="material-symbols-outlined text-secondary text-[32px]">disc_full</span>
              <h3 className="font-headline-sm text-sm font-bold text-primary">Frenos y Suspensión</h3>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                Pastillas sinterizadas Ichiban, bandas traseras, discos ventilados y amortiguadores reforzados.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-surface-container-low border border-surface-container space-y-3">
              <span className="material-symbols-outlined text-primary text-[32px]">opacity</span>
              <h3 className="font-headline-sm text-sm font-bold text-primary">Lubricantes y Químicos</h3>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                Línea completa Motul 7100, 5100, 3000, Mobil Super Moto, refrigerantes y lubricantes de cadena.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-surface-container-low border border-surface-container space-y-3">
              <span className="material-symbols-outlined text-secondary text-[32px]">sports_motorsports</span>
              <h3 className="font-headline-sm text-sm font-bold text-primary">Llantas, Cascos y Accesorios</h3>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                Llantas Kenda, cascos Shaft Pro certificados ECE R22.06, guantes, impermeables y luces LED.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Real Team & Local Commitment Note */}
      <section className="w-full py-12 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-white text-xs font-bold uppercase tracking-wider">
            <span className="material-symbols-outlined text-[16px]">people</span>
            Gente de Nuestra Tierra
          </div>
          <h2 className="font-headline-xl text-white font-extrabold">
            Atención humana y experta en mostrador
          </h2>
          <p className="text-xs sm:text-sm text-primary-fixed-dim leading-relaxed max-w-2xl mx-auto">
            En nuestras sedes de La Jagua de Ibirico, La Loma y Chiriguaná te atiende personal de la región que conoce las motocicletas de trabajo, las carreteras locales y las exigencias del clima y la minería.
          </p>
          <div className="pt-4 flex justify-center gap-4">
            <button
              onClick={() => onNavigate('contacto')}
              className="px-6 py-3 rounded-xl bg-white text-primary font-bold text-xs hover:bg-primary-fixed transition-all cursor-pointer shadow-md"
            >
              Contactar a nuestro equipo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
