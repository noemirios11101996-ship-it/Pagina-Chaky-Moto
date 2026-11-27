import React, { useState } from 'react';
import { CartItem, SEDES_DATA, INITIAL_CART_ITEMS } from '../data/mockData';

interface QuoteListViewProps {
  cart: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearCart: () => void;
  onLoadDemoCart: () => void;
  selectedSede: string;
  onOpenSedeModal: () => void;
  onNavigate: (view: string) => void;
}

export const QuoteListView: React.FC<QuoteListViewProps> = ({
  cart,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  onLoadDemoCart,
  selectedSede,
  onOpenSedeModal,
  onNavigate
}) => {
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerCity, setCustomerCity] = useState('');
  const [isFinancingSistecredito, setIsFinancingSistecredito] = useState(false);
  const [requestWholesaleQuote, setRequestWholesaleQuote] = useState(false);
  const [copied, setCopied] = useState(false);

  const activeSede = SEDES_DATA[selectedSede] || SEDES_DATA['jagua'];

  // Calculations
  const totalUnits = cart.reduce((sum, item) => sum + item.quantity, 0);

  const subtotalRegular = cart.reduce(
    (sum, item) => sum + item.product.priceDetal * item.quantity,
    0
  );

  const referenceTotal = subtotalRegular;

  // Generate WhatsApp formatted text
  const generateWhatsAppMessage = () => {
    const lines = [
      `*COTIZACIÓN CHAKY MOTOS - ${activeSede.name.toUpperCase()}*`,
      `*Fecha:* ${new Date().toLocaleDateString('es-CO')}`,
      customerName ? `*Cliente:* ${customerName}` : '',
      customerPhone ? `*Teléfono:* ${customerPhone}` : '',
      customerCity ? `*Ciudad/Municipio:* ${customerCity}` : '',
      `*Sede elegida:* ${activeSede.municipality}`,
      `*Modalidad de pago:* ${isFinancingSistecredito ? 'Deseo solicitar Sistecrédito' : 'Contado / Transferencia / Efectivo'}`,
      '',
      '*DETALLE DE REPUESTOS:*'
    ];

    cart.forEach((item, index) => {
      lines.push(
        `${index + 1}. ${item.product.name} (Cód: ${item.product.code})` +
        `\n   • Cantidad solicitada: ${item.quantity} unds` +
        `\n   • Precio al detal de referencia: $${item.product.priceDetal.toLocaleString('es-CO')}`
      );
    });

    lines.push('');
    lines.push(`*Subtotal al detal de referencia:* $${referenceTotal.toLocaleString('es-CO')}`);
    lines.push(
      requestWholesaleQuote
        ? '*También solicito cotización del precio mayorista para las referencias y cantidades indicadas.*'
        : '*Por favor confirmar precio al detal y disponibilidad para las referencias y cantidades indicadas.*'
    );
    lines.push('');
    lines.push('Por favor confirmar precio, disponibilidad y condiciones de entrega.');

    return lines.filter((l) => l !== '').join('\n');
  };

  const messageText = generateWhatsAppMessage();
  const whatsAppUrl = `https://wa.me/${activeSede.whatsapp}?text=${encodeURIComponent(messageText)}`;

  const handleCopyMessage = () => {
    navigator.clipboard.writeText(messageText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col w-full min-h-screen bg-background">
      {/* Breadcrumbs */}
      <section className="w-full bg-surface-container-low py-3 border-b border-surface-container">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between text-body-sm text-on-surface-variant gap-2">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2">
            <button
              onClick={() => onNavigate('inicio')}
              className="text-primary hover:underline font-label-md text-xs flex items-center gap-1 cursor-pointer"
            >
              <span className="material-symbols-outlined text-[16px]">home</span>
              Inicio
            </button>
            <span className="text-outline">/</span>
            <span className="text-on-surface font-label-md text-xs font-bold">
              Mi Pedido & Cotizador WhatsApp
            </span>
          </nav>

          {/* Demo toggle button */}
          <div className="flex items-center gap-2">
            {cart.length > 0 ? (
              <button
                onClick={onClearCart}
                className="px-3 py-1 rounded-lg bg-surface-container text-xs text-on-surface-variant hover:text-error transition-colors"
                title="Vaciar carrito para ver estado vacío"
              >
                Vaciar lista (Ver vacío)
              </button>
            ) : (
              <button
                onClick={onLoadDemoCart}
                className="px-3 py-1 rounded-lg bg-secondary text-white text-xs font-bold shadow-xs hover:bg-secondary-container transition-colors"
              >
                Cargar productos de ejemplo
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        {/* Title Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed-variant text-xs font-bold uppercase tracking-wider mb-2">
              <span className="material-symbols-outlined text-[16px]">receipt_long</span>
              Cotizador Transparente
            </div>
            <h1 className="font-headline-xl text-primary font-extrabold tracking-tight">
              Mi Pedido / Lista de Cotización
            </h1>
            <p className="text-sm text-on-surface-variant mt-1">
              Organiza tus repuestos con precios transparentes y envíalos directamente al WhatsApp de tu sede
            </p>
          </div>

          {/* Sede selector box */}
          <div className="p-3 bg-surface-container-lowest rounded-2xl border border-surface-container shadow-xs flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
              <span className="material-symbols-outlined text-[22px]">storefront</span>
            </div>
            <div>
              <p className="text-[10px] text-outline font-bold uppercase tracking-wider">Sede seleccionada:</p>
              <p className="text-xs font-bold text-primary">{activeSede.name}</p>
            </div>
            <button
              onClick={onOpenSedeModal}
              className="px-2.5 py-1.5 rounded-lg bg-surface-container text-xs font-bold text-secondary hover:underline cursor-pointer ml-2"
            >
              Cambiar
            </button>
          </div>
        </div>

        {/* Wholesale quote reminder */}
        <div className="mb-6 p-4 rounded-2xl bg-surface-container-low border border-surface-container flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-secondary text-white flex items-center justify-center flex-shrink-0">
              <span className="material-symbols-outlined text-[20px]">percent</span>
            </div>
            <div>
              <h4 className="text-xs font-bold text-on-surface">
                ¿Quieres incluir una cotización mayorista?
              </h4>
              <p className="text-xs text-on-surface-variant">
                El asesor confirma el precio por WhatsApp. No se activa un descuento automático por cantidad.
              </p>
            </div>
          </div>
          <label className="flex items-center gap-2 text-xs font-semibold text-primary cursor-pointer self-start sm:self-center">
            <input
              type="checkbox"
              checked={requestWholesaleQuote}
              onChange={(event) => setRequestWholesaleQuote(event.target.checked)}
              className="w-4 h-4 accent-primary"
            />
            Solicitar precio mayorista
          </label>
        </div>

        {/* Empty state */}
        {cart.length === 0 ? (
          <div className="bg-surface-container-lowest rounded-3xl p-12 text-center border border-surface-container max-w-lg mx-auto my-12 shadow-sm">
            <div className="w-20 h-20 rounded-3xl bg-surface-container flex items-center justify-center mx-auto mb-4 text-outline">
              <span className="material-symbols-outlined text-[42px]">remove_shopping_cart</span>
            </div>
            <h2 className="font-headline-lg font-bold text-primary">
              Tu lista de cotización está vacía
            </h2>
            <p className="text-sm text-on-surface-variant mt-2 leading-relaxed">
              Aún no has agregado repuestos. Navega por nuestro catálogo con más de 2.000 referencias para moto y añade lo que necesites.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-6">
              <button
                onClick={() => onNavigate('catalogo')}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-primary text-white text-xs font-bold hover:bg-primary-container transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm"
              >
                <span className="material-symbols-outlined text-[18px]">storefront</span>
                <span>Explorar Catálogo</span>
              </button>
              <button
                onClick={onLoadDemoCart}
                className="w-full sm:w-auto px-5 py-3 rounded-xl bg-surface-container text-primary text-xs font-bold hover:bg-surface-container-high transition-all cursor-pointer"
              >
                Cargar Demo con 3 Repuestos
              </button>
            </div>
          </div>
        ) : (
          /* Two Column Layout: Cart Items + Summary */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: Cart Items List */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-surface-container text-xs text-on-surface-variant font-medium">
                <span>Repuestos en tu lista ({cart.length})</span>
                <button
                  onClick={onClearCart}
                  className="text-error hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[15px]">delete_sweep</span>
                  Vaciar lista
                </button>
              </div>

              {cart.map((item) => {
                const unitPrice = item.product.priceDetal;
                const itemTotal = unitPrice * item.quantity;

                return (
                  <div
                    key={item.product.id}
                    className="p-4 sm:p-5 rounded-2xl bg-surface-container-lowest border border-surface-container shadow-xs hover:border-primary/40 transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
                  >
                    {/* Product visual & details */}
                    <div className="flex items-start gap-4">
                      <div className="w-18 h-18 sm:w-20 sm:h-20 rounded-xl overflow-hidden bg-surface-container flex-shrink-0 border border-surface-container">
                        <img
                          src={item.product.image}
                          alt={item.product.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="px-2 py-0.5 rounded bg-surface-container text-[10px] font-bold text-primary uppercase">
                            {item.product.brand}
                          </span>
                          <span className="text-[10px] text-outline">
                            Cód: {item.product.code}
                          </span>
                        </div>
                        <h3 className="font-headline-sm text-sm font-bold text-on-surface leading-snug">
                          {item.product.name}
                        </h3>

                        <div className="flex items-center gap-2 text-xs">
                          <span className="font-extrabold text-primary">
                            ${unitPrice.toLocaleString('es-CO')}
                          </span>
                          <span className="text-[11px] text-outline">c/u</span>
                        </div>
                      </div>
                    </div>

                    {/* Quantity controls and Item Subtotal */}
                    <div className="flex sm:flex-col items-center sm:items-end justify-between w-full sm:w-auto gap-3 pt-2 sm:pt-0 border-t sm:border-t-0 border-surface-container">
                      <div className="flex items-center rounded-xl border border-surface-container bg-surface-container-low overflow-hidden">
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, item.quantity - 1)}
                          className="w-8 h-8 flex items-center justify-center text-on-surface hover:bg-surface-container transition-colors"
                          aria-label="Disminuir"
                        >
                          <span className="material-symbols-outlined text-[16px]">remove</span>
                        </button>
                        <span className="w-10 text-center font-bold text-xs text-primary">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                          className="w-8 h-8 flex items-center justify-center text-on-surface hover:bg-surface-container transition-colors"
                          aria-label="Aumentar"
                        >
                          <span className="material-symbols-outlined text-[16px]">add</span>
                        </button>
                      </div>

                      <div className="text-right">
                        <span className="text-[10px] text-outline block">Subtotal:</span>
                        <span className="text-base font-extrabold text-primary">
                          ${itemTotal.toLocaleString('es-CO')}
                        </span>
                      </div>

                      <button
                        onClick={() => onRemoveItem(item.product.id)}
                        className="text-outline hover:text-error transition-colors p-1"
                        title="Eliminar de la lista"
                      >
                        <span className="material-symbols-outlined text-[18px]">delete</span>
                      </button>
                    </div>
                  </div>
                );
              })}

              <div className="pt-2">
                <button
                  onClick={() => onNavigate('catalogo')}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:underline cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[18px]">add_circle</span>
                  <span>Agregar más repuestos desde el catálogo</span>
                </button>
              </div>
            </div>

            {/* Right: Summary & WhatsApp Generator (Sticky) */}
            <div className="lg:col-span-5 space-y-4">
              <div className="p-6 rounded-3xl bg-surface-container-lowest border border-surface-container shadow-md space-y-5">
                <h3 className="font-headline-sm text-base font-bold text-primary flex items-center justify-between">
                  <span>Resumen de la Cotización</span>
                  <span className="text-xs font-medium text-outline">
                    {totalUnits} unidades en total
                  </span>
                </h3>

                {/* Optional Customer info inputs */}
                <div className="space-y-2 pt-2 border-t border-surface-container">
                  <p className="text-[11px] font-bold text-on-surface-variant uppercase tracking-wider">
                    Datos del solicitante (opcional):
                  </p>
                  <div className="grid grid-cols-1 gap-2 text-xs">
                    <input
                      type="text"
                      placeholder="Tu nombre o nombre del taller..."
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      className="w-full h-9 px-3 rounded-xl bg-surface-container-low border border-surface-container text-xs focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                    <div className="grid grid-cols-2 gap-2">
                      <input
                        type="text"
                        placeholder="Teléfono..."
                        value={customerPhone}
                        onChange={(e) => setCustomerPhone(e.target.value)}
                        className="w-full h-9 px-3 rounded-xl bg-surface-container-low border border-surface-container text-xs focus:outline-none focus:ring-1 focus:ring-primary"
                      />
                      <input
                        type="text"
                        placeholder="Municipio (ej. Becerril)..."
                        value={customerCity}
                        onChange={(e) => setCustomerCity(e.target.value)}
                        className="w-full h-9 px-3 rounded-xl bg-surface-container-low border border-surface-container text-xs focus:outline-none focus:ring-1 focus:ring-primary"
                      />
                    </div>
                  </div>
                </div>

                {/* Financing toggle */}
                <div className="p-3 rounded-xl bg-surface-container-low border border-surface-container flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-secondary text-[20px]">credit_card</span>
                    <div>
                      <p className="text-xs font-bold text-on-surface">Pagar con Sistecrédito</p>
                      <p className="text-[10px] text-on-surface-variant">Sin cuota inicial en nuestras sedes</p>
                    </div>
                  </div>
                  <input
                    type="checkbox"
                    checked={isFinancingSistecredito}
                    onChange={(e) => setIsFinancingSistecredito(e.target.checked)}
                    className="w-4 h-4 rounded text-secondary focus:ring-secondary cursor-pointer"
                  />
                </div>

                {/* Subtotals Breakdown */}
                <div className="space-y-2 pt-2 border-t border-surface-container text-xs">
                  <div className="flex items-center justify-between text-on-surface-variant">
                    <span>Subtotal al detal de referencia:</span>
                    <span>${subtotalRegular.toLocaleString('es-CO')}</span>
                  </div>

                  <div className="flex items-baseline justify-between pt-3 border-t border-surface-container">
                    <span className="font-bold text-sm text-primary">Referencia al detal:</span>
                    <span className="text-2xl font-black text-primary">
                      ${referenceTotal.toLocaleString('es-CO')}
                    </span>
                  </div>
                  <p className="text-[11px] text-on-surface-variant">
                    {requestWholesaleQuote
                      ? 'El precio mayorista se confirmará por WhatsApp; no está incluido en esta referencia al detal.'
                      : 'Puedes marcar la opción mayorista arriba para solicitar otra cotización por WhatsApp.'}
                  </p>
                </div>

                {/* Preformatted WhatsApp Preview */}
                <div className="space-y-1.5 pt-2">
                  <div className="flex items-center justify-between text-[11px] text-outline">
                    <span>Mensaje que se enviará por WhatsApp:</span>
                    <button
                      onClick={handleCopyMessage}
                      className="text-secondary font-bold hover:underline flex items-center gap-0.5"
                    >
                      <span className="material-symbols-outlined text-[13px]">
                        {copied ? 'check' : 'content_copy'}
                      </span>
                      {copied ? 'Copiado' : 'Copiar texto'}
                    </button>
                  </div>
                  <div className="p-3 rounded-xl bg-surface-container-low text-[11px] font-mono text-on-surface-variant max-h-36 overflow-y-auto whitespace-pre-wrap leading-tight border border-surface-container">
                    {messageText}
                  </div>
                </div>

                {/* Big WhatsApp CTA Button */}
                <a
                  href={whatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 px-6 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-label-lg font-bold shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer text-center"
                >
                  <span className="material-symbols-outlined text-[22px]">chat</span>
                  <span>Enviar Cotización a Sede {activeSede.municipality.split(',')[0]}</span>
                </a>

                <div className="text-center text-[11px] text-outline">
                  <p>Un asesor de Chaky Motos responderá de inmediato verificando existencias en mostrador.</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
