---
tipo: plan-de-mejora
estado: activo
creado: 2026-11-05
actualizado: 2026-11-05
tags: [plan, mejoras, chaky-motos]
fuentes: ["../Plan de mejora/12-chaky-motos/plan-mejoras.md", "../Plan de mejora/12-chaky-motos/validacion-con-cliente.md", "../package.json", "../src/"]
---
# Plan de mejora · Chaky Motos

## Objetivo
Tener una página rápida y clara para que las personas encuentren productos o servicios y contacten la sede correcta. Mantener el sitio actual; no publicar datos de muestra como si fueran reales.

## Punto de partida revisado
- **Confirmado:** ya existe una página React/TypeScript/Vite, con inicio, catálogo, sedes, promociones, contacto, venta mayorista y lista de cotización.
- **Confirmado:** el código contiene tres sedes (La Jagua de Ibirico, La Loma y Chiriguaná) y muchos datos de negocio en `src/data/mockData.ts`.
- **Por confirmar:** el plan entregado menciona Valledupar y Chiriguaná, con dos sedes. Esa lista no coincide con el sitio actual.
- **Confirmado:** `Docs/` está vacía. No hay catálogo empresarial, logo, fotos propias ni comprobantes de datos de negocio allí.
- **Comprobado parcialmente:** TypeScript pasa. Vite no pudo resolver la página desde la ruta de red compartida; falta una ejecución local verificable en escritorio y celular.
- **Sin cambios de contenido:** la revisión no modificó el sitio ni los archivos originales de `Plan de mejora/`.

## Pasos

### 1. Confirmar el negocio y completar fuentes
Acordar sedes vigentes, contactos, horarios, catálogo, marcas, condiciones mayoristas, entregas y medios de pago. Poner documentos, logo y fotos autorizadas en `Docs/`; mantener originales intactos.

**Listo cuando:** los datos que se mostrarán tienen fuente y autorización; las contradicciones con `mockData.ts` están resueltas.

### 2. Habilitar una revisión local fiable
Resolver el bloqueo de Vite en la ruta UNC usando una copia de trabajo en ruta local o una configuración que funcione desde la carpeta compartida. Levantar la página y guardar una referencia visual para escritorio y móvil.

**Listo cuando:** inicio, rutas principales y recursos cargan; compilación y TypeScript pasan.

### 3. Corregir sedes y contacto
Mostrar solo las sedes confirmadas, con dirección, horario y botón de WhatsApp propios. Verificar que cada botón abre el número correcto.

**Depende de:** paso 1.

### 4. Ordenar catálogo, productos y servicios
Organizar categorías con el catálogo real. Revisar títulos, imágenes y disponibilidad; eliminar o corregir elementos de demostración. Nombrar marcas como texto y afirmar representación u originalidad solo con respaldo.

**Depende de:** paso 1.

### 5. Dejar clara la venta mayorista y el proceso de compra
Aplicar el mínimo de unidades únicamente a los productos confirmados. Aclarar cómo se cotiza, si hay entrega y qué medios de pago se aceptan; enlazar al canal real.

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

## Preguntas para afinarlo
1. ¿Cuáles sedes deben quedar: Valledupar y Chiriguaná, o las tres que aparecen hoy (La Jagua, La Loma y Chiriguaná)? ¿Dirección, WhatsApp y horario vigente de cada una?
2. ¿Qué categorías, servicios y marcas deben priorizarse? ¿Hay autorización para llamarse distribuidor oficial o anunciar repuestos originales?
3. ¿La venta desde seis unidades sigue vigente? ¿Para qué productos y con qué condiciones?
4. ¿Ofrecen domicilios y qué medios de pago o proceso de cotización debe explicar la página?
5. ¿Qué acción quieres priorizar (WhatsApp, llamada, cotización)? ¿Puedes dejar en `Docs/` el catálogo, logo, fotos propias y datos que falten para privacidad (NIT/RUT y correo responsable)?

## Forma de avanzar
Trabajar un paso a la vez, preservando originales y haciendo cambios pequeños. No marcar un paso como terminado hasta comprobar su criterio. El inventario del punto de partida ya está revisado; los cambios de contenido comienzan después de confirmar los datos que afectan a la página.
