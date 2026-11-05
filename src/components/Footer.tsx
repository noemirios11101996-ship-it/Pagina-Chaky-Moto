import React from 'react';
import { SEDES_DATA } from '../data/mockData';

interface FooterProps {
  onNavigate: (view: string) => void;
  onOpenSedeModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenSedeModal }) => {
  return (
    <footer className="w-full bg-primary text-white border-t border-primary-container">
      {/* Upper Footer Benefits */}
      <div className="bg-primary-container/40 py-8 border-b border-primary-container">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                <span className="material-symbols-outlined text-[28px] text-primary-fixed">local_shipping</span>
              </div>
              <div>
                <h4 className="font-headline-sm text-sm font-bold text-white">Despachos Departamentales</h4>
                <p className="text-body-sm text-primary-fixed-dim text-xs">Envíos rápidos a municipios y zonas mineras del Cesar</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                <span className="material-symbols-outlined text-[28px] text-secondary-fixed">credit_card</span>
              </div>
              <div>
                <h4 className="font-headline-sm text-sm font-bold text-white">Crédito Fácil con Sistecrédito</h4>
                <p className="text-body-sm text-primary-fixed-dim text-xs">Lleva tus repuestos, llantas y cascos al instante</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                <span className="material-symbols-outlined text-[28px] text-primary-fixed">storefront</span>
              </div>
              <div>
                <h4 className="font-headline-sm text-sm font-bold text-white">3 Sedes a tu Servicio</h4>
                <p className="text-body-sm text-primary-fixed-dim text-xs">La Jagua de Ibirico · La Loma · Chiriguaná</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Col */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-white/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-white text-[24px]">two_wheeler</span>
              </div>
              <div>
                <span className="font-headline-sm font-extrabold text-white text-lg tracking-tight block">
                  CHAKY MOTOS
                </span>
                <span className="text-[10px] text-secondary uppercase font-bold tracking-wider">
                  Un Mundo de Servicios
                </span>
              </div>
            </div>
            <p className="text-xs text-primary-fixed-dim leading-relaxed">
              Distribuidora líder en repuestos originales y genéricos, lubricantes, llantas y accesorios para motocicletas en el departamento del Cesar. Compra al detal o al por mayor para talleres mecánicos.
            </p>
            <div className="pt-2">
              <span className="inline-block px-3 py-1 rounded-md bg-secondary text-white font-label-sm text-[11px] font-bold">
                Mayoristas desde 6 unds por referencia
              </span>
            </div>
          </div>

          {/* Sedes Col */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-headline-sm text-sm font-bold uppercase tracking-wider text-primary-fixed">
                Nuestras Sedes
              </h3>
              <button
                onClick={onOpenSedeModal}
                className="text-[11px] text-secondary hover:underline cursor-pointer"
              >
                Cambiar sede
              </button>
            </div>
            <ul className="space-y-3 text-xs text-primary-fixed-dim">
              <li className="p-2.5 rounded-lg bg-white/5 border border-white/5 hover:border-white/20 transition-all">
                <p className="font-bold text-white text-xs">La Jagua de Ibirico (Principal)</p>
                <p className="text-[11px] text-primary-fixed-dim">{SEDES_DATA.jagua.address}</p>
                <a
                  href={`https://wa.me/${SEDES_DATA.jagua.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[11px] text-secondary hover:text-white mt-1 font-semibold"
                >
                  <span className="material-symbols-outlined text-[13px]">chat</span>
                  {SEDES_DATA.jagua.whatsappDisplay}
                </a>
              </li>

              <li className="p-2.5 rounded-lg bg-white/5 border border-white/5 hover:border-white/20 transition-all">
                <p className="font-bold text-white text-xs">La Loma (El Paso)</p>
                <p className="text-[11px] text-primary-fixed-dim">{SEDES_DATA.loma.address}</p>
                <a
                  href={`https://wa.me/${SEDES_DATA.loma.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[11px] text-secondary hover:text-white mt-1 font-semibold"
                >
                  <span className="material-symbols-outlined text-[13px]">chat</span>
                  {SEDES_DATA.loma.whatsappDisplay}
                </a>
              </li>

              <li className="p-2.5 rounded-lg bg-white/5 border border-white/5 hover:border-white/20 transition-all">
                <p className="font-bold text-white text-xs">Chiriguaná</p>
                <p className="text-[11px] text-primary-fixed-dim">{SEDES_DATA.chiriguana.address}</p>
                <a
                  href={`https://wa.me/${SEDES_DATA.chiriguana.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[11px] text-secondary hover:text-white mt-1 font-semibold"
                >
                  <span className="material-symbols-outlined text-[13px]">chat</span>
                  {SEDES_DATA.chiriguana.whatsappDisplay}
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links Col */}
          <div className="space-y-4">
            <h3 className="font-headline-sm text-sm font-bold uppercase tracking-wider text-primary-fixed">
              Navegación Rápida
            </h3>
            <ul className="space-y-2 text-xs text-primary-fixed-dim">
              <li>
                <button
                  onClick={() => onNavigate('inicio')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Inicio
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('catalogo')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Catálogo de repuestos
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('promociones')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Promociones del mes
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('mayoristas')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Canal Mayoristas & Talleres
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('sedes')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Ubicación de sedes
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('nosotros')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Sobre Nosotros
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contacto')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Canales de contacto
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('mi-pedido')}
                  className="hover:text-white transition-colors cursor-pointer font-bold text-secondary-fixed"
                >
                  Mi Pedido / Cotizador
                </button>
              </li>
            </ul>
          </div>

          {/* Payment & Security Col */}
          <div className="space-y-4">
            <h3 className="font-headline-sm text-sm font-bold uppercase tracking-wider text-primary-fixed">
              Medios de Pago
            </h3>
            <p className="text-xs text-primary-fixed-dim leading-relaxed">
              Facilidades de pago en todas nuestras sedes o contra entrega según zona:
            </p>
            <div className="flex flex-wrap gap-2 pt-1">
              <span className="px-2.5 py-1 rounded bg-white/10 text-white text-[11px] font-semibold border border-white/10">
                Sistecrédito
              </span>
              <span className="px-2.5 py-1 rounded bg-white/10 text-white text-[11px] font-semibold border border-white/10">
                Bancolombia
              </span>
              <span className="px-2.5 py-1 rounded bg-white/10 text-white text-[11px] font-semibold border border-white/10">
                Nequi
              </span>
              <span className="px-2.5 py-1 rounded bg-white/10 text-white text-[11px] font-semibold border border-white/10">
                Daviplata
              </span>
              <span className="px-2.5 py-1 rounded bg-white/10 text-white text-[11px] font-semibold border border-white/10">
                Efectivo
              </span>
            </div>

            <div className="pt-2">
              <h4 className="text-xs font-bold text-primary-fixed mb-1">Horario General:</h4>
              <p className="text-xs text-primary-fixed-dim">
                Lunes a Sábado: 7:00 a. m. – 6:00 p. m.
              </p>
              <p className="text-xs text-primary-fixed-dim">
                Domingos: Atención en sedes La Jagua y Chiriguaná
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-primary-container/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-primary-fixed-dim">
          <p>
            © {new Date().getFullYear()} CHAKY MOTOS · Un Mundo de Servicios. Todos los derechos reservados. Cesar, Colombia.
          </p>
          <div className="flex items-center gap-4 text-xs">
            <span>La Jagua de Ibirico</span>
            <span>·</span>
            <span>La Loma</span>
            <span>·</span>
            <span>Chiriguaná</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
