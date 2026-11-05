import React, { useState } from 'react';
import { SEDES_DATA, SedeInfo } from '../data/mockData';

interface BranchesViewProps {
  onNavigate: (view: string) => void;
  selectedSede: string;
  onSelectSede: (sedeId: 'jagua' | 'loma' | 'chiriguana') => void;
}

export const BranchesView: React.FC<BranchesViewProps> = ({
  onNavigate,
  selectedSede,
  onSelectSede
}) => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopyPhone = (id: string, phone: string) => {
    navigator.clipboard.writeText(phone);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="flex flex-col w-full bg-background min-h-screen">
      {/* Breadcrumbs */}
      <section className="w-full bg-surface-container-lowest border-b border-surface-container py-3">
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
            <span className="text-primary font-bold">Nuestras sedes</span>
          </nav>
          <div className="hidden sm:flex items-center gap-2 text-primary text-xs bg-primary-fixed/40 px-3 py-1 rounded-full font-semibold">
            <span className="material-symbols-outlined text-[15px]">location_on</span>
            <span>Departamento del Cesar · Colombia</span>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="w-full bg-surface-container-low py-10 md:py-14 border-b border-surface-container">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary-container text-[11px] font-bold uppercase tracking-wider mb-3">
              <span className="material-symbols-outlined text-[16px]">domain</span>
              <span>Presencia regional en el Cesar</span>
            </div>
            <h1 className="font-display-lg text-primary tracking-tight leading-tight">
              Estamos cerca de ti
            </h1>
            <p className="font-body-lg text-sm sm:text-base text-on-surface-variant mt-2 leading-relaxed">
              Comunícate con la sede de CHAKY MOTOS que prefieras y consulta tus repuestos por WhatsApp sin intermediarios.
            </p>
          </div>

          {/* Indicators Strip */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            <div className="bg-surface-container-lowest p-4 rounded-2xl shadow-xs border border-surface-container flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-primary shrink-0">
                <span className="material-symbols-outlined text-[26px]">hub</span>
              </div>
              <div>
                <span className="font-headline-sm text-sm font-bold text-primary block leading-snug">3 Sedes estratégicas</span>
                <span className="text-xs text-on-surface-variant">La Jagua, La Loma y Chiriguaná</span>
              </div>
            </div>

            <div className="bg-surface-container-lowest p-4 rounded-2xl shadow-xs border border-surface-container flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-primary shrink-0">
                <span className="material-symbols-outlined text-[26px]">calendar_today</span>
              </div>
              <div>
                <span className="font-headline-sm text-sm font-bold text-primary block leading-snug">Atención continua</span>
                <span className="text-xs text-on-surface-variant">Lunes a domingo sin interrupción</span>
              </div>
            </div>

            <div className="bg-surface-container-lowest p-4 rounded-2xl shadow-xs border border-surface-container flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-secondary shrink-0">
                <span className="material-symbols-outlined text-[26px]">chat_bubble_outline</span>
              </div>
              <div>
                <span className="font-headline-sm text-sm font-bold text-primary block leading-snug">Respuesta directa</span>
                <span className="text-xs text-on-surface-variant">Mostrador y despachos intermunicipales</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Headquarters Cards */}
      <section className="w-full py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {(Object.values(SEDES_DATA) as SedeInfo[]).map((sede) => {
            const isSelected = selectedSede === sede.id;
            return (
              <div
                key={sede.id}
                className={`rounded-3xl bg-surface-container-lowest border-2 overflow-hidden shadow-sm transition-all ${
                  isSelected ? 'border-primary ring-2 ring-primary/20' : 'border-surface-container hover:border-primary/50'
                }`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
                  {/* Photo & Badge */}
                  <div className="lg:col-span-5 relative bg-surface-container min-h-64 lg:min-h-full">
                    <img
                      src={sede.image}
                      alt={sede.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 flex flex-col gap-1.5">
                      {sede.isPrincipal && (
                        <span className="px-3 py-1 rounded-full bg-secondary text-white font-label-sm text-xs font-bold uppercase tracking-wider shadow-sm">
                          Sede Principal
                        </span>
                      )}
                      <span className="px-3 py-1 rounded-full bg-primary/90 text-white text-xs font-semibold backdrop-blur-xs">
                        {sede.municipality}
                      </span>
                    </div>

                    {isSelected && (
                      <div className="absolute bottom-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow-sm">
                        <span className="material-symbols-outlined text-[16px]">check_circle</span>
                        <span>Sede activa en la app</span>
                      </div>
                    )}
                  </div>

                  {/* Sede Info Content */}
                  <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                    <div className="space-y-4">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <div>
                          <h2 className="font-headline-lg text-primary font-bold">
                            {sede.name}
                          </h2>
                          <p className="text-xs sm:text-sm text-on-surface-variant mt-0.5">
                            {sede.subtitle}
                          </p>
                        </div>
                        {!isSelected && (
                          <button
                            onClick={() => onSelectSede(sede.id)}
                            className="px-3 py-1.5 rounded-xl bg-surface-container text-primary hover:bg-primary hover:text-white text-xs font-bold transition-colors cursor-pointer self-start sm:self-center shrink-0"
                          >
                            Seleccionar como mi sede
                          </button>
                        )}
                      </div>

                      {/* Detail points */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-surface-container text-xs text-on-surface-variant">
                        <div className="space-y-1">
                          <span className="font-bold text-on-surface flex items-center gap-1">
                            <span className="material-symbols-outlined text-primary text-[16px]">location_on</span>
                            Dirección física:
                          </span>
                          <p className="pl-5 text-on-surface">{sede.address}</p>
                          <p className="pl-5 text-outline">{sede.municipality}</p>
                        </div>

                        <div className="space-y-1">
                          <span className="font-bold text-on-surface flex items-center gap-1">
                            <span className="material-symbols-outlined text-secondary text-[16px]">schedule</span>
                            Horario de atención:
                          </span>
                          <p className="pl-5 text-on-surface">{sede.hoursWeek}</p>
                          <p className="pl-5 text-outline">{sede.hoursSunday}</p>
                        </div>

                        <div className="space-y-1">
                          <span className="font-bold text-on-surface flex items-center gap-1">
                            <span className="material-symbols-outlined text-primary text-[16px]">call</span>
                            Líneas telefónicas:
                          </span>
                          <p className="pl-5 text-on-surface font-semibold flex items-center gap-2">
                            <span>{sede.phone}</span>
                            <button
                              onClick={() => handleCopyPhone(sede.id, sede.phone)}
                              className="text-secondary hover:underline text-[10px]"
                            >
                              {copiedId === sede.id ? 'Copiado' : 'Copiar'}
                            </button>
                          </p>
                          {sede.altPhone && (
                            <p className="pl-5 text-outline">Alt: {sede.altPhone}</p>
                          )}
                        </div>

                        <div className="space-y-1">
                          <span className="font-bold text-on-surface flex items-center gap-1">
                            <span className="material-symbols-outlined text-emerald-600 text-[16px]">person</span>
                            Atención en mostrador:
                          </span>
                          <p className="pl-5 text-on-surface font-medium">Asesor asignado: {sede.manager}</p>
                          <p className="pl-5 text-outline">Crédito Sistecrédito disponible</p>
                        </div>
                      </div>

                      {/* Badges */}
                      <div className="flex flex-wrap gap-2 pt-2">
                        {sede.badges.map((b, idx) => (
                          <span
                            key={idx}
                            className="px-2.5 py-1 rounded-lg bg-surface-container text-primary text-xs font-semibold"
                          >
                            {b}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* CTAs */}
                    <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-surface-container">
                      <a
                        href={`https://wa.me/${sede.whatsapp}?text=${encodeURIComponent(
                          `Hola Chaky Motos (${sede.name}), quisiera consultar repuestos en mostrador.`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 py-3 px-5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-label-md text-xs sm:text-sm font-bold shadow-md transition-all flex items-center justify-center gap-2"
                      >
                        <span className="material-symbols-outlined text-[20px]">chat</span>
                        <span>Chat WhatsApp {sede.municipality.split(',')[0]}</span>
                      </a>

                      <a
                        href={sede.mapEmbedUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-3 px-4 rounded-xl bg-surface-container hover:bg-surface-container-high text-primary font-label-md text-xs sm:text-sm font-bold transition-colors inline-flex items-center gap-1.5"
                      >
                        <span className="material-symbols-outlined text-[18px]">map</span>
                        <span>Ver en Mapa</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Regional Intermunicipal Dispatch info */}
      <section className="w-full py-12 bg-surface-container-low border-t border-surface-container">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-surface-container-lowest p-8 border border-surface-container space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-primary text-white flex items-center justify-center">
                <span className="material-symbols-outlined text-[26px]">local_shipping</span>
              </div>
              <div>
                <h3 className="font-headline-sm text-base font-bold text-primary">
                  Domicilios según el pedido
                </h3>
                <p className="text-xs text-on-surface-variant">
                  Consulta las condiciones con tu sede
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
              Dentro del municipio, el domicilio depende del valor de compra. Para pedidos mayoristas fuera del municipio, el domicilio es gratis. Consulta con tu sede las condiciones antes de confirmar el pedido.
            </p>

            <div className="pt-2 flex flex-wrap gap-2 text-xs">
              <span className="px-3 py-1 rounded-full bg-surface-container text-primary font-semibold">
                ✓ Domicilio sujeto al valor de compra dentro del municipio
              </span>
              <span className="px-3 py-1 rounded-full bg-surface-container text-primary font-semibold">
                ✓ Domicilio gratis para pedidos mayoristas fuera del municipio
              </span>
              <span className="px-3 py-1 rounded-full bg-surface-container text-primary font-semibold">
                ✓ Confirma las condiciones con tu sede
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
