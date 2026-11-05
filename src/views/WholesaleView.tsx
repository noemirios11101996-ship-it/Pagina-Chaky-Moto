import React, { useState } from 'react';
import { SEDES_DATA, WHOLESALE_BENEFITS, FAQ_LIST } from '../data/mockData';

interface WholesaleViewProps {
  onNavigate: (view: string) => void;
  selectedSede: string;
  onOpenSedeModal: () => void;
}

export const WholesaleView: React.FC<WholesaleViewProps> = ({
  onNavigate,
  selectedSede,
  onOpenSedeModal
}) => {
  const [workshopName, setWorkshopName] = useState('');
  const [contactName, setContactName] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [requestedReferences, setRequestedReferences] = useState('');
  const [chosenSede, setChosenSede] = useState<'jagua' | 'loma' | 'chiriguana'>('jagua');

  const activeSede = SEDES_DATA[selectedSede] || SEDES_DATA['jagua'];

  const handleWholesaleQuoteSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const targetSede = SEDES_DATA[chosenSede];
    const message = `*SOLICITUD COTIZACIÓN MAYORISTA CHAKY MOTOS*
*Taller/Almacén:* ${workshopName || 'No especificado'}
*Responsable:* ${contactName}
*Teléfono:* ${phone}
*Ubicación:* ${city || 'Departamento del Cesar'}
*Sede para despacho:* ${targetSede.name}

*REPUESTOS O REFERENCIAS SOLICITADAS (Mínimo 6 unidades por referencia):*
${requestedReferences}

Solicito confirmación de precios mayoristas, disponibilidad de lotes y tiempos de despacho.`;

    window.open(`https://wa.me/${targetSede.whatsapp}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="flex flex-col w-full bg-background min-h-screen">
      {/* Breadcrumbs */}
      <section className="w-full bg-surface-container-lowest border-b border-surface-container py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between font-label-md text-xs text-on-surface-variant">
          <nav aria-label="Ruta de navegación" className="flex items-center gap-2">
            <button
              onClick={() => onNavigate('inicio')}
              className="text-primary hover:underline flex items-center gap-1 cursor-pointer"
            >
              <span className="material-symbols-outlined text-[16px]">home</span>
              <span>Inicio</span>
            </button>
            <span className="text-outline">/</span>
            <span className="text-primary font-bold">Canal Mayoristas</span>
          </nav>
          <div className="hidden sm:flex items-center gap-2 text-primary text-xs bg-primary-fixed/40 px-3 py-1 rounded-full font-semibold">
            <span className="material-symbols-outlined text-[15px]">local_shipping</span>
            <span>Atención B2B en el Corredor Minero del Cesar</span>
          </div>
        </div>
      </section>

      {/* Hero Mayorista (Dark Navy #0B1D3A style) */}
      <section className="w-full bg-tertiary text-white relative overflow-hidden py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 flex flex-col gap-4">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 w-fit text-secondary-fixed text-xs font-bold tracking-wide uppercase">
                <span className="material-symbols-outlined text-[16px]">verified</span>
                <span>Canal exclusivo para talleres y distribuidores</span>
              </div>

              <h1 className="font-headline-xl md:font-display-lg font-extrabold text-white tracking-tight leading-tight">
                Tu negocio necesita repuestos. <br className="hidden sm:block" />
                <span className="text-secondary-fixed">Nosotros te ayudamos a conseguirlos.</span>
              </h1>

              <p className="font-headline-sm text-surface-variant font-medium text-base sm:text-lg">
                Solicita una cotización mayorista desde 6 unidades de la misma referencia
              </p>

              <p className="font-body-md text-xs sm:text-sm text-tertiary-fixed-dim max-w-2xl leading-relaxed">
                Atención directa para talleres mecánicos, almacenes de repuestos y comerciantes en todo el Cesar. En CHAKY MOTOS suministramos repuestos certificados con retiro en mostrador o despacho rápido a tu municipio.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <a
                  href="#formulario-mayorista"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-secondary hover:bg-secondary-container text-white font-label-lg text-xs sm:text-sm font-bold transition-all shadow-md"
                >
                  <span className="material-symbols-outlined text-[20px]">chat</span>
                  <span>Solicitar cotización mayorista</span>
                </a>

                <a
                  href="#regla-minimos"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-label-lg text-xs sm:text-sm font-bold transition-colors"
                >
                  <span className="material-symbols-outlined text-[18px]">rule</span>
                  <span>Ver regla de cantidades</span>
                </a>
              </div>

              {/* Commercial disclaimer note */}
              <div className="mt-2 flex items-start gap-2 bg-white/5 p-3 rounded-xl text-tertiary-fixed text-xs border border-white/10">
                <span className="material-symbols-outlined text-secondary-fixed text-[18px] shrink-0 mt-0.5">info</span>
                <span>
                  <strong>Nota comercial:</strong> CHAKY MOTOS es distribuidor y comercializador mayorista y al detal de repuestos. <strong>No realizamos reparaciones ni servicios mecánicos de taller.</strong>
                </span>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-3 gap-3 pt-3">
                <div className="flex flex-col bg-white/5 p-3.5 rounded-xl border border-white/10">
                  <span className="font-headline-lg font-bold text-secondary-fixed text-2xl">6+</span>
                  <span className="text-[10px] text-surface-variant uppercase tracking-wider font-semibold">Unid. por referencia</span>
                </div>
                <div className="flex flex-col bg-white/5 p-3.5 rounded-xl border border-white/10">
                  <span className="font-headline-lg font-bold text-white text-2xl">3</span>
                  <span className="text-[10px] text-surface-variant uppercase tracking-wider font-semibold">Sedes en el Cesar</span>
                </div>
                <div className="flex flex-col bg-white/5 p-3.5 rounded-xl border border-white/10">
                  <span className="font-headline-lg font-bold text-primary-fixed text-2xl">100%</span>
                  <span className="text-[10px] text-surface-variant uppercase tracking-wider font-semibold">Mostrador y despachos</span>
                </div>
              </div>
            </div>

            {/* Right Visual Image */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-surface-container-low border-2 border-white/10">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBWvRA52cex1Lwt3s4O7quURzk0ueBw08jZvaK6HGc3AfyO5FjPeLboMocSTAgqvHqtXbQ0Lztz2qTYdRbJRMT85T9c5QiFu0XNCA9FW5OVnRJTi9Dk0V4qgVCMT0yGMzqS_F32Zn412kCyHKtUgJ-lNOgg29hz8Wcq4WSWNpCKbpOOcrc4KqY5t9KtOmG8drbQ7pUaC1kAtF0FQQa-5dQmflsX4HqWn5-8DnVMgASbMzYbeIR-LCQr"
                  alt="Bodega de repuestos mayorista Chaky Motos"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-tertiary/90 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 bg-surface-container-lowest/95 backdrop-blur-md p-4 rounded-xl shadow-md text-on-surface flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-primary-fixed flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined text-[24px]">inventory_2</span>
                    </div>
                    <div>
                      <h4 className="font-label-md text-xs font-bold text-primary leading-tight">Stock permanente de alta rotación</h4>
                      <p className="text-[11px] text-on-surface-variant">Lotes listos para entrega en La Jagua, La Loma y Chiriguaná</p>
                    </div>
                  </div>
                  <span className="hidden sm:inline-flex items-center gap-1 text-[11px] text-secondary font-bold">
                    <span className="h-2 w-2 rounded-full bg-secondary animate-pulse" />
                    En Bodega
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Regla de Mínimos Section */}
      <section id="regla-minimos" className="w-full py-12 bg-surface-container-lowest border-b border-surface-container">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-secondary">
              Condición Comercial
            </span>
            <h2 className="font-headline-xl text-primary font-extrabold tracking-tight mt-1">
              ¿Cómo funciona la regla de 6 unidades?
            </h2>
            <p className="text-xs sm:text-sm text-on-surface-variant mt-2 leading-relaxed">
              Para garantizar que los precios especiales beneficien a talleres mecánicos y almacenes de reventa, aplicamos una regla simple y transparente:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch">
            <div className="p-6 rounded-2xl bg-emerald-50/70 border-2 border-emerald-500/40 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-emerald-800 font-bold text-sm">
                  <span className="material-symbols-outlined text-[22px]">check_circle</span>
                  <span>SÍ APLICA PRECIO MAYORISTA</span>
                </div>
                <ul className="space-y-2 text-xs text-emerald-950">
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-[16px] text-emerald-600 shrink-0 mt-0.5">done</span>
                    <span><strong>6 o más unidades del mismo código:</strong> Ej. 6 Kits de Arrastre Choho Boxer CT 100.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-[16px] text-emerald-600 shrink-0 mt-0.5">done</span>
                    <span><strong>6 o más aceites Motul 7100 10W40:</strong> Se liquida a tarifa mayorista por litro.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-[16px] text-emerald-600 shrink-0 mt-0.5">done</span>
                    <span><strong>Lotes por caja cerrada:</strong> Bujías por caja de 10 unidades o llantas por pares/docena.</span>
                  </li>
                </ul>
              </div>
              <div className="p-3 bg-white/70 rounded-xl text-[11px] text-emerald-900 font-medium">
                Descuentos del 15% al 25% respecto al precio de mostrador al detal.
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-amber-50/70 border-2 border-amber-500/40 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-amber-900 font-bold text-sm">
                  <span className="material-symbols-outlined text-[22px]">cancel</span>
                  <span>NO APLICA PRECIO MAYORISTA</span>
                </div>
                <ul className="space-y-2 text-xs text-amber-950">
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-[16px] text-amber-700 shrink-0 mt-0.5">close</span>
                    <span><strong>Compras de 1 a 5 unidades de una misma referencia:</strong> Se aplica precio detal de mostrador.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-[16px] text-amber-700 shrink-0 mt-0.5">close</span>
                    <span><strong>6 repuestos de diferentes referencias mezcladas:</strong> (Ej: 1 bujía + 1 llanta + 1 aceite + 1 pastilla + 1 guante + 1 espejo).</span>
                  </li>
                </ul>
              </div>
              <div className="p-3 bg-white/70 rounded-xl text-[11px] text-amber-900 font-medium">
                Si requieres pocas unidades surtidas, usa nuestro cotizador al detal normal.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wholesale Benefits */}
      <section className="w-full py-12 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-secondary">
              Ventajas Para Tu Negocio
            </span>
            <h2 className="font-headline-xl text-primary font-extrabold tracking-tight mt-1">
              ¿Por qué surtir tu taller con Chaky Motos?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHOLESALE_BENEFITS.map((benefit, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-surface-container-lowest border border-surface-container shadow-xs flex flex-col gap-3"
              >
                <div className="w-12 h-12 rounded-xl bg-primary text-white flex items-center justify-center">
                  <span className="material-symbols-outlined text-[24px]">{benefit.icon}</span>
                </div>
                <h3 className="font-headline-sm text-sm font-bold text-primary">
                  {benefit.title}
                </h3>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wholesale Quote Form Section */}
      <section id="formulario-mayorista" className="w-full py-12 bg-surface-container-lowest border-t border-surface-container">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 rounded-3xl bg-surface-container-low border border-surface-container shadow-sm space-y-6">
            <div className="text-center space-y-2">
              <span className="px-3 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed-variant text-xs font-bold uppercase tracking-wider">
                Cotización Rápida
              </span>
              <h2 className="font-headline-xl text-primary font-extrabold">
                Solicitud de Cotización Mayorista
              </h2>
              <p className="text-xs sm:text-sm text-on-surface-variant max-w-xl mx-auto">
                Diligencia el formulario y te conectaremos inmediatamente con el encargado de bodega por WhatsApp con tu listado organizado.
              </p>
            </div>

            <form onSubmit={handleWholesaleQuoteSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-on-surface block mb-1">
                    Nombre del Taller / Almacén:
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ej. Taller Motores del Cesar"
                    value={workshopName}
                    onChange={(e) => setWorkshopName(e.target.value)}
                    className="w-full h-11 px-3.5 rounded-xl bg-white border border-surface-container text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-on-surface block mb-1">
                    Nombre de Contacto:
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Tu nombre completo"
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    className="w-full h-11 px-3.5 rounded-xl bg-white border border-surface-container text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-on-surface block mb-1">
                    Teléfono / WhatsApp:
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="Ej. 310 123 4567"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full h-11 px-3.5 rounded-xl bg-white border border-surface-container text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-on-surface block mb-1">
                    Municipio o Corregimiento:
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ej. La Loma, Becerril, Chiriguaná..."
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full h-11 px-3.5 rounded-xl bg-white border border-surface-container text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-on-surface block mb-1">
                  Sede de Chaky Motos para despacho o retiro:
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {(['jagua', 'loma', 'chiriguana'] as const).map((sedeKey) => {
                    const isSelected = chosenSede === sedeKey;
                    return (
                      <button
                        type="button"
                        key={sedeKey}
                        onClick={() => setChosenSede(sedeKey)}
                        className={`p-3 rounded-xl border text-xs font-bold transition-all text-center cursor-pointer ${
                          isSelected
                            ? 'bg-primary text-white border-primary shadow-xs'
                            : 'bg-white text-on-surface border-surface-container hover:bg-surface-container'
                        }`}
                      >
                        {SEDES_DATA[sedeKey].municipality.split(',')[0]}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-on-surface block mb-1">
                  Referencias y Cantidades Requeridas (Mínimo 6 unds por referencia):
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Ej:
- 10 Kits de arrastre Choho Boxer CT 100
- 12 Aceites Motul 7100 10W40
- 6 Pastillas Ichiban FZ 16"
                  value={requestedReferences}
                  onChange={(e) => setRequestedReferences(e.target.value)}
                  className="w-full p-3 rounded-xl bg-white border border-surface-container text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-primary leading-relaxed"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 px-6 rounded-2xl bg-secondary hover:bg-secondary-container text-white font-label-lg text-sm font-bold shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span className="material-symbols-outlined text-[22px]">chat</span>
                <span>Enviar Solicitud Mayorista por WhatsApp</span>
              </button>

              <p className="text-[11px] text-center text-outline">
                Respondemos en minutos con disponibilidad en bodega y liquidación de fletes.
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};
