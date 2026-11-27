import React, { useState } from 'react';
import { Product, SEDES_DATA, SedeInfo, PRODUCTS_DATA } from '../data/mockData';

interface ProductDetailViewProps {
  product: Product;
  onNavigate: (view: string) => void;
  onSelectProduct: (product: Product) => void;
  onAddToCart: (product: Product, quantity: number) => void;
  selectedSede: string;
  onOpenSedeModal: () => void;
}

export const ProductDetailView: React.FC<ProductDetailViewProps> = ({
  product,
  onNavigate,
  onSelectProduct,
  onAddToCart,
  selectedSede,
  onOpenSedeModal
}) => {
  const [selectedImage, setSelectedImage] = useState(product.galleryImages[0] || product.image);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<'desc' | 'compat' | 'specs'>('desc');
  const [addedNotice, setAddedNotice] = useState(false);

  const activeSede = SEDES_DATA[selectedSede] || SEDES_DATA['jagua'];
  const currentUnitPrice = product.priceDetal;
  const totalPrice = currentUnitPrice * quantity;

  const relatedProducts = PRODUCTS_DATA
    .filter((p) => p.id !== product.id && (p.category === product.category || p.brand === product.brand))
    .slice(0, 3);

  const handleAddToCart = () => {
    onAddToCart(product, quantity);
    setAddedNotice(true);
    setTimeout(() => setAddedNotice(false), 2500);
  };

  const whatsAppMessage = `Hola Chaky Motos (${activeSede.name}), me interesa el repuesto:
- Producto: ${product.name}
- Código: ${product.code}
- Marca: ${product.brand}
- Cantidad: ${quantity} unidad(es)
- Subtotal al detal de referencia: $${totalPrice.toLocaleString('es-CO')}
Por favor confirmen disponibilidad y el precio para esta cantidad. Si aplica tarifa mayorista, indíquenme la cotización. ¿Está disponible en ${activeSede.municipality.split(',')[0]} para despacho o recogida?`;

  return (
    <div className="flex flex-col w-full">
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
            <button
              onClick={() => onNavigate('catalogo')}
              className="text-primary hover:underline font-label-md text-xs cursor-pointer"
            >
              Catálogo
            </button>
            <span className="text-outline">/</span>
            <span className="text-on-surface font-label-md text-xs font-bold truncate max-w-xs">
              {product.name}
            </span>
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

      {/* Main Detail Section */}
      <section className="w-full py-8 md:py-12 bg-surface-container-lowest">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left: Gallery */}
            <div className="lg:col-span-6 space-y-4">
              <div className="relative rounded-3xl overflow-hidden bg-surface-container-low border border-surface-container aspect-4/3 flex items-center justify-center shadow-xs">
                <img
                  src={selectedImage}
                  alt={product.name}
                  className="w-full h-full object-cover object-center"
                />
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-primary text-white text-xs font-bold uppercase tracking-wider">
                  {product.brand}
                </span>
              </div>

              {/* Thumbnail selector */}
              {product.galleryImages.length > 1 && (
                <div className="flex items-center gap-3">
                  {product.galleryImages.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImage(img)}
                      className={`w-20 h-20 rounded-xl overflow-hidden border-2 transition-all cursor-pointer ${
                        selectedImage === img
                          ? 'border-primary ring-2 ring-primary/20 scale-105'
                          : 'border-surface-container opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt={`Vista ${idx + 1}`} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}

              {/* Sede Stock Snapshot Box */}
              <div className="p-4 rounded-2xl bg-surface-container-low border border-surface-container space-y-3">
                <h4 className="font-headline-sm text-xs font-bold text-primary uppercase tracking-wider flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[16px]">inventory</span>
                  Disponibilidad por Sede en el Cesar
                </h4>
                <div className="grid grid-cols-3 gap-2 text-center">
                  {(Object.values(SEDES_DATA) as SedeInfo[]).map((sede) => {
                    const isAvailable = product.sedeAvailability[sede.id];
                    return (
                      <div
                        key={sede.id}
                        className={`p-2.5 rounded-xl border flex flex-col items-center gap-1 ${
                          isAvailable
                            ? 'bg-emerald-50/60 border-emerald-300 text-emerald-950'
                            : 'bg-surface-container border-surface-variant text-outline'
                        }`}
                      >
                        <span className="text-[11px] font-bold">{sede.municipality.split(',')[0]}</span>
                        <div className="flex items-center gap-1 text-[10px]">
                          <span
                            className={`w-2 h-2 rounded-full ${
                              isAvailable ? 'bg-emerald-600' : 'bg-gray-400'
                            }`}
                          />
                          <span>{isAvailable ? 'Disponible' : 'Bajo Pedido'}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right: Info & Pricing & Order Actions */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-bold text-outline uppercase tracking-wider">
                    Código: {product.code}
                  </span>
                  <span className="text-outline">·</span>
                  <span className="text-xs font-bold text-secondary uppercase tracking-wider">
                    Categoría: {product.category}
                  </span>
                </div>
                <h1 className="font-headline-xl text-primary font-extrabold tracking-tight leading-tight">
                  {product.name}
                </h1>
                <p className="text-sm text-on-surface-variant mt-2 leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Pricing breakdown card */}
              <div className="p-5 rounded-2xl bg-surface-container-low border border-surface-container space-y-4">
                <div className="flex items-baseline justify-between">
                  <div>
                    <span className="text-xs font-bold text-outline uppercase tracking-wider block">
                      Precio Unitario
                    </span>
                    <div className="flex items-baseline gap-2 mt-0.5">
                      <span className="text-3xl font-extrabold text-primary">
                        ${currentUnitPrice.toLocaleString('es-CO')}
                      </span>
                    </div>
                  </div>

                  <div className="text-right">
                    <span className="text-xs text-on-surface-variant font-medium block">
                      Condición de tarifa:
                    </span>
                    <span
                      className="inline-block px-2.5 py-0.5 rounded-full text-xs font-bold mt-1 bg-primary text-white"
                    >
                      Precio al detal
                    </span>
                  </div>
                </div>

                {/* Wholesale notification */}
                <div className="p-3 rounded-xl bg-surface-container-lowest border border-surface-container flex items-start gap-3">
                  <span className="material-symbols-outlined text-secondary text-[20px] flex-shrink-0 mt-0.5">
                    info
                  </span>
                  <div className="text-xs">
                    <p className="font-bold text-on-surface">¿Necesitas precio mayorista?</p>
                    <p className="text-on-surface-variant mt-0.5 leading-relaxed">
                      Solicita una cotización por WhatsApp. Indica la cantidad y la sede; el equipo confirma el precio y la disponibilidad.
                    </p>
                  </div>
                </div>

                {/* Quantity selector */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold text-on-surface">Cantidad:</span>
                    <div className="flex items-center rounded-xl border border-surface-container bg-surface-container-lowest overflow-hidden">
                      <button
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="w-10 h-10 flex items-center justify-center text-on-surface hover:bg-surface-container transition-colors"
                        aria-label="Disminuir"
                      >
                        <span className="material-symbols-outlined text-[18px]">remove</span>
                      </button>
                      <input
                        type="number"
                        min="1"
                        value={quantity}
                        onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                        className="w-14 h-10 text-center font-bold text-sm text-primary focus:outline-none"
                      />
                      <button
                        onClick={() => setQuantity(quantity + 1)}
                        className="w-10 h-10 flex items-center justify-center text-on-surface hover:bg-surface-container transition-colors"
                        aria-label="Aumentar"
                      >
                        <span className="material-symbols-outlined text-[18px]">add</span>
                      </button>
                    </div>
                  </div>

                  <div className="text-right">
                    <span className="text-xs text-outline font-medium">Subtotal al detal de referencia:</span>
                    <p className="text-xl font-black text-primary">
                      ${totalPrice.toLocaleString('es-CO')}
                    </p>
                  </div>
                </div>

                {/* Notification when added */}
                {addedNotice && (
                  <div className="p-3 rounded-xl bg-emerald-100 text-emerald-900 border border-emerald-300 text-xs font-bold flex items-center gap-2 animate-fadeIn">
                    <span className="material-symbols-outlined text-[18px]">check_circle</span>
                    <span>¡Agregado exitosamente a tu cotización (&quot;Mi Pedido&quot;)!</span>
                  </div>
                )}

                {/* Actions */}
                <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                  <button
                    onClick={handleAddToCart}
                    className="w-full sm:flex-1 py-3.5 px-6 rounded-xl bg-primary hover:bg-primary-container text-white font-label-lg font-bold shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-[20px]">add_shopping_cart</span>
                    <span>Agregar a Mi Pedido ({quantity})</span>
                  </button>

                  <a
                    href={`https://wa.me/${activeSede.whatsapp}?text=${encodeURIComponent(whatsAppMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:flex-1 py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-label-lg font-bold shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
                  >
                    <span className="material-symbols-outlined text-[20px]">chat</span>
                    <span>Cotizar por WhatsApp</span>
                  </a>
                </div>
              </div>

              {/* Sede indicator & Guarantee note */}
              <div className="flex items-center justify-between text-xs text-on-surface-variant p-3 bg-surface-container-low rounded-xl">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-[18px]">verified_user</span>
                  <span>Garantía directa contra defectos de fabricación</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary text-[18px]">local_shipping</span>
                  <span>Despachos intermunicipales</span>
                </div>
              </div>
            </div>
          </div>

          {/* Product Details Tabs (Specs, Compatibility, Info) */}
          <div className="mt-12 border-t border-surface-container pt-8">
            <div className="flex items-center gap-3 border-b border-surface-container pb-3 overflow-x-auto">
              <button
                onClick={() => setActiveTab('desc')}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                  activeTab === 'desc'
                    ? 'bg-primary text-white'
                    : 'text-on-surface-variant hover:text-on-surface'
                }`}
              >
                <span className="material-symbols-outlined text-[18px]">description</span>
                <span>Descripción Técnica</span>
              </button>

              <button
                onClick={() => setActiveTab('compat')}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                  activeTab === 'compat'
                    ? 'bg-primary text-white'
                    : 'text-on-surface-variant hover:text-on-surface'
                }`}
              >
                <span className="material-symbols-outlined text-[18px]">two_wheeler</span>
                <span>Motos Compatibles ({product.compatibility.length})</span>
              </button>

              <button
                onClick={() => setActiveTab('specs')}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                  activeTab === 'specs'
                    ? 'bg-primary text-white'
                    : 'text-on-surface-variant hover:text-on-surface'
                }`}
              >
                <span className="material-symbols-outlined text-[18px]">settings</span>
                <span>Ficha Técnica</span>
              </button>
            </div>

            <div className="py-6">
              {activeTab === 'desc' && (
                <div className="space-y-4 max-w-3xl text-sm text-on-surface leading-relaxed">
                  <p>{product.description}</p>
                  <p>
                    Recomendado por mecánicos del departamento del Cesar para trabajo exigente en trochas, carreteras rurales y uso diario intensivo. Todos nuestros lotes cuentan con trazabilidad y procedencia de importadores oficiales.
                  </p>
                </div>
              )}

              {activeTab === 'compat' && (
                <div className="space-y-4 max-w-3xl">
                  <p className="text-xs text-on-surface-variant">
                    Verificado y compatible con los siguientes modelos y cilindradas:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {product.compatibility.map((model, idx) => (
                      <div
                        key={idx}
                        className="p-3 rounded-xl bg-surface-container-low border border-surface-container flex items-center gap-2 text-xs font-semibold text-primary"
                      >
                        <span className="material-symbols-outlined text-emerald-600 text-[18px]">
                          check_circle
                        </span>
                        <span>{model}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-[11px] text-outline italic">
                    * Si tu modelo no aparece en la lista, escríbenos a nuestro WhatsApp con una foto del repuesto para verificar la medida exacta.
                  </p>
                </div>
              )}

              {activeTab === 'specs' && (
                <div className="max-w-2xl">
                  <div className="rounded-2xl border border-surface-container overflow-hidden">
                    <table className="w-full text-left text-xs">
                      <tbody>
                        {Object.entries(product.specs).map(([specKey, specVal], i) => (
                          <tr
                            key={specKey}
                            className={i % 2 === 0 ? 'bg-surface-container-lowest' : 'bg-surface-container-low'}
                          >
                            <td className="p-3.5 font-bold text-on-surface w-1/3 border-r border-surface-container">
                              {specKey}
                            </td>
                            <td className="p-3.5 text-on-surface-variant">
                              {specVal}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div className="mt-12 border-t border-surface-container pt-8">
              <h3 className="font-headline-lg text-primary font-bold mb-6">
                Productos Relacionados
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {relatedProducts.map((rel) => (
                  <div
                    key={rel.id}
                    onClick={() => {
                      onSelectProduct(rel);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="p-4 rounded-2xl bg-surface-container-low border border-surface-container hover:shadow-md transition-all cursor-pointer flex items-center gap-4 group"
                  >
                    <div className="w-20 h-20 rounded-xl overflow-hidden bg-white flex-shrink-0">
                      <img src={rel.image} alt={rel.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                    </div>
                    <div>
                      <span className="text-[10px] text-secondary font-bold uppercase">{rel.brand}</span>
                      <h4 className="font-bold text-xs text-on-surface group-hover:text-primary transition-colors line-clamp-2">
                        {rel.name}
                      </h4>
                      <p className="text-sm font-black text-primary mt-1">
                        ${rel.priceDetal.toLocaleString('es-CO')}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};
