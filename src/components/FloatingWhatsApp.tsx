import React, { useState } from 'react';
import { SEDES_DATA, SedeInfo } from '../data/mockData';

interface FloatingWhatsAppProps {
  selectedSede: string;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ selectedSede }) => {
  const [isOpen, setIsOpen] = useState(false);
  const activeSede = SEDES_DATA[selectedSede] || SEDES_DATA['jagua'];

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {isOpen && (
        <div className="mb-3 bg-surface-container-lowest rounded-2xl p-4 shadow-2xl border border-surface-container w-72 sm:w-80 animate-fadeIn">
          <div className="flex items-center justify-between pb-3 border-b border-surface-container">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold">
                <span className="material-symbols-outlined text-[18px]">chat</span>
              </div>
              <div>
                <h4 className="font-headline-sm text-xs font-bold text-on-surface">Asesoría Chaky Motos</h4>
                <p className="text-[10px] text-emerald-600 font-medium">● Líneas disponibles</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-outline hover:text-on-surface p-1 rounded-full"
            >
              <span className="material-symbols-outlined text-[18px]">close</span>
            </button>
          </div>

          <p className="text-xs text-on-surface-variant my-2.5">
            Selecciona la sede con la que deseas comunicarte por WhatsApp:
          </p>

          <div className="space-y-2">
            {(Object.values(SEDES_DATA) as SedeInfo[]).map((sede) => {
              const isCurrent = sede.id === selectedSede;
              return (
                <a
                  key={sede.id}
                  href={`https://wa.me/${sede.whatsapp}?text=${encodeURIComponent(
                    `Hola Chaky Motos (${sede.name}), quisiera consultar disponibilidad y precios de repuestos.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-between p-2.5 rounded-xl border text-xs transition-all ${
                    isCurrent
                      ? 'border-emerald-500 bg-emerald-50/60 text-emerald-950 font-semibold'
                      : 'border-surface-container hover:bg-surface-container-low text-on-surface'
                  }`}
                >
                  <div className="flex flex-col">
                    <span className="font-bold">{sede.name.split('-')[0]}</span>
                    <span className="text-[11px] text-outline">{sede.whatsappDisplay}</span>
                  </div>
                  <span className="material-symbols-outlined text-emerald-600 text-[18px]">
                    arrow_forward
                  </span>
                </a>
              );
            })}
          </div>

          <p className="text-[10px] text-outline text-center mt-3">
            Horario: Lun–Sáb 7:00 am a 6:00 pm
          </p>
        </div>
      )}

      {/* Main Trigger Button */}
      <div className="flex items-center gap-2">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 h-13 px-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all font-label-md text-sm cursor-pointer group"
          aria-label="Abrir WhatsApp Chaky Motos"
        >
          <span className="material-symbols-outlined text-[26px]">chat</span>
          <span className="hidden sm:inline font-bold">
            WhatsApp {activeSede.municipality.split(',')[0]}
          </span>
          <span className="material-symbols-outlined text-[18px] group-hover:rotate-180 transition-transform">
            {isOpen ? 'expand_more' : 'expand_less'}
          </span>
        </button>
      </div>
    </div>
  );
};
