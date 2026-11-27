import React, { useState } from 'react';
import { SEDES_DATA, SedeInfo, FAQ_LIST } from '../data/mockData';

interface ContactViewProps {
  onNavigate: (view: string) => void;
  selectedSede: string;
  onOpenSedeModal: () => void;
}

export const ContactView: React.FC<ContactViewProps> = ({
  onNavigate,
  selectedSede,
  onOpenSedeModal
}) => {
  const [targetSede, setTargetSede] = useState<'jagua' | 'loma' | 'chiriguana'>(
    (selectedSede as any) || 'jagua'
  );
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [motoModel, setMotoModel] = useState('');
  const [inquiryType, setInquiryType] = useState('repuesto');
  const [message, setMessage] = useState('');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const activeSede = SEDES_DATA[targetSede] || SEDES_DATA['jagua'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formatted = `*CONTACTO CHAKY MOTOS - SEDE ${activeSede.name.toUpperCase()}*
*Nombre:* ${name}
*Teléfono:* ${phone}
*Moto / Cilindrada:* ${motoModel || 'No especificada'}
*Tipo de consulta:* ${
      inquiryType === 'repuesto'
        ? 'Disponibilidad de repuesto'
        : inquiryType === 'mayorista'
        ? 'Cotización de precios al por mayor'
        : inquiryType === 'sistecredito'
        ? 'Crédito Sistecrédito'
        : 'Consulta general'
    }

*Mensaje:*
${message}`;

    window.open(`https://wa.me/${activeSede.whatsapp}?text=${encodeURIComponent(formatted)}`, '_blank');
  };

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <div className="flex flex-col w-full bg-background min-h-screen">
      {/* Breadcrumbs & Status Bar */}
      <section className="w-full bg-surface-container-low py-3 border-b border-surface-container">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between text-on-surface-variant font-label-md text-xs">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2">
            <button
              onClick={() => onNavigate('inicio')}
              className="hover:text-primary transition-colors flex items-center gap-1 cursor-pointer"
            >
              <span className="material-symbols-outlined text-[16px]">home</span>
              <span>Inicio</span>
            </button>
            <span className="text-outline">/</span>
            <span className="font-bold text-primary">Contacto</span>
          </nav>
          <div className="hidden sm:flex items-center gap-2 text-on-surface text-xs font-semibold">
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-emerald-600 animate-pulse" />
            <span className="text-on-surface-variant">Líneas de WhatsApp activas en mostrador</span>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative w-full bg-surface-container-lowest overflow-hidden py-10 md:py-14 border-b border-surface-container">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl flex flex-col gap-4">
            <div className="inline-flex items-center gap-2 self-start px-3 py-1 rounded-full bg-surface-container-high text-primary text-xs font-bold uppercase tracking-wider">
              <span className="material-symbols-outlined text-[16px] text-secondary">support_agent</span>
              <span>Canal de Atención Directa</span>
            </div>
            <h1 className="font-display-lg text-primary tracking-tight leading-tight">
              Hablemos de lo que tu moto necesita
            </h1>
            <p className="font-body-lg text-sm sm:text-base text-on-surface-variant leading-relaxed">
              Elige tu sede y consulta precios, referencias y disponibilidad por WhatsApp. Respuestas directas desde el mostrador del almacén sin intermediarios ni desvíos.
            </p>
          </div>
        </div>
      </section>

      {/* 3 Sedes Quick Contact Cards */}
      <section className="w-full py-10 bg-surface-container-low border-b border-surface-container">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-secondary">
              Atención Presencial y Virtual
            </span>
            <h2 className="font-headline-xl text-primary font-extrabold tracking-tight mt-1">
              Selecciona tu Sede de Contacto
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {(Object.values(SEDES_DATA) as SedeInfo[]).map((sede) => {
              const isSelected = targetSede === sede.id;
              return (
                <div
                  key={sede.id}
                  onClick={() => setTargetSede(sede.id)}
                  className={`p-6 rounded-3xl border-2 transition-all cursor-pointer flex flex-col justify-between space-y-4 ${
                    isSelected
                      ? 'bg-surface-container-lowest border-primary shadow-md'
                      : 'bg-surface-container-lowest border-surface-container hover:border-primary/40'
                  }`}
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="font-headline-sm font-bold text-primary text-base">
                          {sede.name.split('-')[0]}
                        </span>
                        {sede.isPrincipal && (
                          <span className="px-2 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed-variant text-[10px] font-bold uppercase">
                            Principal
                          </span>
                        )}
                      </div>
                      <div
                        className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                          isSelected ? 'border-primary bg-primary' : 'border-outline'
                        }`}
                      >
                        {isSelected && <div className="w-2 h-2 rounded-full bg-white" />}
                      </div>
                    </div>

                    <p className="text-xs text-on-surface-variant leading-relaxed">
                      {sede.address} — {sede.municipality}
                    </p>

                    <div className="pt-2 border-t border-surface-container space-y-1.5 text-xs">
                      <div className="flex items-center gap-2 text-on-surface-variant">
                        <span className="material-symbols-outlined text-[16px] text-secondary">schedule</span>
                        <span>{sede.hoursWeek}</span>
                      </div>
                      <div className="flex items-center gap-2 text-primary font-bold">
                        <span className="material-symbols-outlined text-[16px]">call</span>
                        <span>{sede.phone}</span>
                      </div>
                    </div>
                  </div>

                  <a
                    href={`https://wa.me/${sede.whatsapp}?text=${encodeURIComponent(
                      `Hola Chaky Motos (${sede.name}), quisiera consultar disponibilidad de un repuesto.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="w-full py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-label-md text-xs font-bold text-center transition-colors flex items-center justify-center gap-2 shadow-xs"
                  >
                    <span className="material-symbols-outlined text-[16px]">chat</span>
                    <span>Abrir Chat WhatsApp</span>
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Interactive Contact & Inquiry Form */}
      <section className="w-full py-12 bg-surface-container-lowest">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-6 sm:p-10 rounded-3xl bg-surface-container-low border border-surface-container shadow-xs space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-surface-container">
              <div>
                <h3 className="font-headline-lg text-primary font-bold">
                  Envíanos tu Consulta
                </h3>
                <p className="text-xs text-on-surface-variant mt-0.5">
                  Se dirigirá a: <strong>{activeSede.name}</strong>
                </p>
              </div>
              <span className="text-xs text-secondary font-bold">
                WhatsApp: {activeSede.whatsappDisplay}
              </span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-on-surface block mb-1">
                    Nombre o Nombre del Taller: *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Tu nombre completo"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full h-11 px-3.5 rounded-xl bg-white border border-surface-container text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-on-surface block mb-1">
                    Número de Celular / WhatsApp: *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="Ej. 315 123 4567"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full h-11 px-3.5 rounded-xl bg-white border border-surface-container text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-on-surface block mb-1">
                    Modelo de tu Moto o Cilindrada:
                  </label>
                  <input
                    type="text"
                    placeholder="Ej. Boxer CT 100, Pulsar NS 200, NKD 125..."
                    value={motoModel}
                    onChange={(e) => setMotoModel(e.target.value)}
                    className="w-full h-11 px-3.5 rounded-xl bg-white border border-surface-container text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-on-surface block mb-1">
                    Tipo de Consulta:
                  </label>
                  <select
                    value={inquiryType}
                    onChange={(e) => setInquiryType(e.target.value)}
                    className="w-full h-11 px-3.5 rounded-xl bg-white border border-surface-container text-xs sm:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary cursor-pointer"
                  >
                    <option value="repuesto">Consultar disponibilidad de repuesto</option>
                    <option value="mayorista">Cotización mayorista</option>
                    <option value="sistecredito">Información de crédito Sistecrédito</option>
                    <option value="despacho">Despacho intermunicipal en el Cesar</option>
                    <option value="otro">Otra consulta</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-on-surface block mb-1">
                  Detalle del Repuesto o Mensaje: *
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Describe qué repuesto necesitas, medidas o dudas técnicas..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full p-3.5 rounded-xl bg-white border border-surface-container text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-primary leading-relaxed"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 px-6 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-label-lg text-sm font-bold shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span className="material-symbols-outlined text-[22px]">chat</span>
                <span>Enviar Consulta a {activeSede.municipality.split(',')[0]} por WhatsApp</span>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Payment and Credit Options Strip */}
      <section className="w-full py-10 bg-surface-container-low border-t border-surface-container">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-secondary">
              Facilidades Comerciales
            </span>
            <h2 className="font-headline-xl text-primary font-extrabold tracking-tight mt-1">
              Medios de Pago Habilitados
            </h2>
            <p className="text-xs sm:text-sm text-on-surface-variant mt-1">
              Paga como te sea más cómodo en cualquiera de nuestras tres sedes
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 max-w-4xl mx-auto">
            <div className="p-4 rounded-2xl bg-surface-container-lowest border border-surface-container text-center space-y-1">
              <span className="material-symbols-outlined text-secondary text-[28px]">credit_card</span>
              <p className="font-bold text-xs text-primary">Sistecrédito</p>
              <p className="text-[10px] text-outline">Crédito en minutos</p>
            </div>

            <div className="p-4 rounded-2xl bg-surface-container-lowest border border-surface-container text-center space-y-1">
              <span className="material-symbols-outlined text-primary text-[28px]">account_balance</span>
              <p className="font-bold text-xs text-primary">Bancolombia</p>
              <p className="text-[10px] text-outline">Transferencias</p>
            </div>

            <div className="p-4 rounded-2xl bg-surface-container-lowest border border-surface-container text-center space-y-1">
              <span className="material-symbols-outlined text-purple-600 text-[28px]">smartphone</span>
              <p className="font-bold text-xs text-primary">Nequi</p>
              <p className="text-[10px] text-outline">Código QR o número</p>
            </div>

            <div className="p-4 rounded-2xl bg-surface-container-lowest border border-surface-container text-center space-y-1">
              <span className="material-symbols-outlined text-red-600 text-[28px]">payments</span>
              <p className="font-bold text-xs text-primary">Daviplata</p>
              <p className="text-[10px] text-outline">Giro inmediato</p>
            </div>

            <div className="p-4 rounded-2xl bg-surface-container-lowest border border-surface-container text-center space-y-1 col-span-2 sm:col-span-1">
              <span className="material-symbols-outlined text-emerald-600 text-[28px]">point_of_sale</span>
              <p className="font-bold text-xs text-primary">Efectivo</p>
              <p className="text-[10px] text-outline">Caja en mostrador</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact FAQ */}
      <section className="w-full py-12 bg-surface-container-lowest">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h3 className="font-headline-lg font-bold text-primary">
              Preguntas de Contacto y Envíos
            </h3>
          </div>

          <div className="space-y-3">
            {FAQ_LIST.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-xl border border-surface-container overflow-hidden transition-all"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
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
