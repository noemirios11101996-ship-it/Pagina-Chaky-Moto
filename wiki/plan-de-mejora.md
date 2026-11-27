---
tipo: plan-de-mejora
estado: activo
creado: 2026-11-05
actualizado: 2026-11-05
tags: [plan, mejoras, chaky-motos]
fuentes: ["../Plan de mejora/12-chaky-motos/plan-mejoras.md", "../Plan de mejora/12-chaky-motos/validacion-con-cliente.md", "../package.json", "../src/", "conversación con la usuaria, 2026-11-05"]
---
# Plan de mejora · Chaky Motos

## Objetivo
Tener una página rápida y clara para que las personas encuentren productos o servicios y contacten la sede correcta. Mantener el sitio actual; no publicar datos de muestra como si fueran reales.

## Punto de partida revisado
- **Confirmado:** ya existe una página React/TypeScript/Vite, con inicio, catálogo, sedes, promociones, contacto, venta mayorista y lista de cotización.
- **Confirmado por la usuaria:** las sedes vigentes son La Jagua de Ibirico, Chiriguaná y La Loma, Cesar. También proporcionó las direcciones; la propuesta antigua de Valledupar queda superada.
- **Confirmado por la usuaria:** oferta general de repuestos y lujos para todo tipo de motos, incluyendo repuestos originales y genéricos de marcas de alta calidad.
- **Confirmado por la usuaria:** la venta mayorista sigue y no se determina por valor ni cantidad. Los domicilios dentro del municipio dependen del valor de compra; fuera del municipio son gratis para pedidos mayoristas.
- **Confirmado:** WhatsApp 311 397 2905 y horario de lunes a sábado, 7:00 a. m.–6:00 p. m., para las tres sedes; también las condiciones generales de domicilio. La usuaria confirmó que el precio mayorista se cotiza por WhatsApp, sin cálculo automático por cantidad. **Pendiente:** nombres de marcas y catálogo detallado.
- **Confirmado:** `Docs/` está vacía. No hay catálogo empresarial, logo ni fotos propias autorizadas allí.
- **Comprobado parcialmente:** TypeScript y compilación pasan desde la copia local de Documentos; la página respondió HTTP 200. Falta revisión visual en escritorio y teléfono.
- **Actualizado en el sitio:** direcciones de tres sedes, WhatsApp compartido, horario confirmado y texto de domicilios. La interfaz aún no está verificada visualmente.

### 0. Preparar las skills previstas — completado
Instaladas y verificadas en `.agents/skills`: `emil-design-eng`, `mobile-native`, `impeccable`, `seo-organico-ia` y `tratamiento-datos-landing`. Se conservaron licencias y archivos de referencia; no se ejecutaron scripts de las skills.

**Listo cuando:** están disponibles las skills que se van a usar, sin cambios al sitio durante la instalación.

## Pasos

### 1. Encontrar el punto de partida — completado
Se confirmó que existe la web y se revisaron su estructura y materiales. `Docs/` está vacía. La revisión de datos empresariales sigue parcialmente abierta: faltan marcas, catálogo detallado y decisión sobre el precio mayorista.

### 1a. Cerrar los datos empresariales
Ya están confirmadas las sedes, la oferta general, la continuidad de la venta mayorista y la existencia de domicilios condicionados a la compra. Completar direcciones, WhatsApp, horarios, marcas, condiciones mayoristas, criterios de domicilios y catálogo. Poner originales y activos aprobados en `Docs/`.

**Listo cuando:** los datos que se mostrarán tienen fuente y autorización; las contradicciones con `mockData.ts` están resueltas.

### 2. Habilitar una revisión local fiable
Ejecutar Vite desde `C:\Users\noemi.e\Documents\Pagina Chaky` (no desde la ruta UNC) y revisar escritorio y móvil.

**Listo cuando:** inicio, rutas principales y recursos cargan; compilación y TypeScript pasan.

### 3. Corregir sedes y contacto
Ya se actualizaron las direcciones de La Jagua de Ibirico, Chiriguaná y La Loma, el WhatsApp compartido y el horario confirmado de lunes a sábado. Verificar los tres botones antes de marcar el paso como terminado. Se corrigió el plan fuente para reemplazar la referencia antigua a Valledupar por las tres sedes vigentes.

**Depende de:** pasos 1 y 2.

### 4. Ordenar catálogo, productos y servicios
Organizar categorías con el catálogo real. Revisar títulos, imágenes y disponibilidad; corregir elementos de demostración. Nombrar marcas como texto y afirmar representación u originalidad solo en los términos que la usuaria confirme.

**Depende de:** paso 1.

### 5. Dejar clara la venta mayorista y el proceso de compra
Explicar que los precios mayoristas se cotizan por WhatsApp, sin activar descuentos por cantidad. Indicar que el domicilio local depende del valor de compra y que el mayorista fuera del municipio tiene domicilio gratis. **La regla fue implementada; queda validar visualmente.**

**Depende de:** paso 1.

### 6. Aplicar identidad visual y material propio
Usar el logo aprobado y fotos del negocio. Sustituir imágenes genéricas cuando existan equivalentes autorizados; optimizarlas y conservar carga rápida.

**Depende de:** paso 1.

### 7. Mejorar recorrido y uso en celular
Simplificar navegación, hacer visibles los contactos, revisar tamaño de botones, catálogo y selector de sede. Mantener identidad y contenido aprobados.

**Depende de:** pasos 2–6. Se puede trabajar navegación mientras llegan algunos activos.

### 8. Añadir información de privacidad
Revisar primero qué datos recoge realmente la página. Preparar una página y enlace en el pie solo después de recibir datos empresariales y contacto responsable; no inventar datos legales.

**Depende de:** datos de empresa y del formulario/contactos efectivamente usados.

### 9. Mejorar SEO local
Ajustar título, descripciones, textos alternativos y datos locales a las sedes confirmadas. No añadir direcciones ni horarios sin fuente.

**Depende de:** pasos 1 y 3.

### 10. Revisar y entregar
Probar en escritorio y celular, navegación, sedes, WhatsApp y cotización; comprobar compilación. Guardar los cambios y resumir qué se verificó. Las transiciones son opcionales y solo se agregan si ayudan sin afectar accesibilidad ni velocidad.

**Listo cuando:** cada dato y contacto comprobado coincide con lo aprobado y la página funciona en ambas vistas.

## Pendiente para continuar
- Revisar visualmente el nuevo flujo de cotización mayorista por WhatsApp y confirmar que el mensaje incluye referencias, cantidades y sede.
- Confirmar las marcas y el catálogo detallado al recibir material en `Docs/`.
- Dentro del municipio, el domicilio depende del valor de compra y aún no hay umbral definido; el texto invita a consultar. Para pedidos mayoristas fuera del municipio, la usuaria confirmó domicilio gratis.

## Decisión mayorista
El precio mayorista se cotiza por WhatsApp; el sitio ya no aplica el cálculo automático desde seis unidades.

## Forma de avanzar
Trabajar un paso a la vez y no marcarlo como terminado hasta comprobarlo. Direcciones, WhatsApp compartido, horario, domicilio y cotización mayorista por WhatsApp ya se actualizaron en el sitio. La revisión visual de los botones y del flujo mayorista sigue pendiente.
