import React from 'react';
import { SEDES_DATA, SedeInfo } from '../data/mockData';

interface SedeSelectorModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedSede: string;
  onSelectSede: (sedeId: 'jagua' | 'loma' | 'chiriguana') => void;
}

export const SedeSelectorModal: React.FC<SedeSelectorModalProps> = ({
  isOpen,
  onClose,
  selectedSede,
  onSelectSede
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn">
      <div className="bg-surface-container-lowest rounded-2xl max-w-xl w-full p-6 shadow-2xl border border-surface-container relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-on-surface-variant hover:text-on-surface p-1 rounded-full hover:bg-surface-container transition-colors"
          aria-label="Cerrar modal"
        >
          <span className="material-symbols-outlined text-2xl">close</span>
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
            <span className="material-symbols-outlined text-[24px]">storefront</span>
          </div>
          <div>
            <h2 className="font-headline-sm text-headline-sm text-primary font-bold">
              Selecciona tu Sede de Atención
            </h2>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Tus consultas de inventario y pedidos por WhatsApp se canalizarán a la sede elegida
            </p>
          </div>
        </div>

        <div className="space-y-3 mt-4">
          {(Object.values(SEDES_DATA) as SedeInfo[]).map((sede) => {
            const isSelected = selectedSede === sede.id;
            return (
              <div
                key={sede.id}
                onClick={() => {
                  onSelectSede(sede.id);
                  onClose();
                }}
                className={`p-4 rounded-xl border-2 transition-all cursor-pointer flex flex-col gap-2 ${
                  isSelected
                    ? 'border-primary bg-surface-container-low shadow-sm'
                    : 'border-outline-variant/40 hover:border-primary/50 hover:bg-surface-container-lowest'
                }`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2">
                    <span className="font-headline-sm font-bold text-on-surface text-base">
                      {sede.name}
                    </span>
                    {sede.isPrincipal && (
                      <span className="px-2 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed-variant text-[10px] font-bold uppercase tracking-wider">
                        Principal
                      </span>
                    )}
                  </div>
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                    isSelected ? 'border-primary bg-primary' : 'border-outline'
                  }`}>
                    {isSelected && (
                      <div className="w-2 h-2 rounded-full bg-white" />
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-body-sm text-on-surface-variant">
                  <span className="material-symbols-outlined text-[16px] text-primary">location_on</span>
                  <span>{sede.address} — {sede.municipality}</span>
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-1 text-label-md">
                  <span className="flex items-center gap-1 text-on-surface-variant">
                    <span className="material-symbols-outlined text-[15px] text-secondary">schedule</span>
                    {sede.hoursWeek}
                  </span>
                  <span className="flex items-center gap-1 text-primary font-semibold">
                    <span className="material-symbols-outlined text-[15px]">chat</span>
                    {sede.whatsappDisplay}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-6 pt-4 border-t border-surface-container flex items-center justify-between">
          <p className="text-label-sm text-outline">
            Puedes cambiar de sede en cualquier momento desde el menú superior.
          </p>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-primary text-on-primary font-label-md text-label-md hover:bg-primary-container transition-all"
          >
            Aceptar
          </button>
        </div>
      </div>
    </div>
  );
};
