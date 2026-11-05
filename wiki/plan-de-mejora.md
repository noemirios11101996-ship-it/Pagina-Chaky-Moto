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
- **Confirmado por la usuaria:** las sedes vigentes son La Jagua de Ibirico, Chiriguaná y La Loma, Cesar. Se resolvió la diferencia con el plan antiguo, que mencionaba Valledupar.
- **Confirmado por la usuaria:** oferta general de repuestos y lujos para todo tipo de motos, incluyendo repuestos originales y genéricos de marcas de alta calidad.
- **Confirmado por la usuaria:** la venta mayorista continúa y sí se hacen domicilios dependiendo de la compra.
- **Pendiente:** direcciones completas, WhatsApp y horarios de cada sede; nombres de marcas; criterios de mayorista y domicilios; el catálogo empresarial detallado.
- **Confirmado:** `Docs/` está vacía. No hay catálogo empresarial, logo ni fotos propias autorizadas allí.
- **Comprobado parcialmente:** TypeScript pasa. Vite no pudo resolver la página desde la ruta de red compartida; falta una ejecución local verificable en escritorio y celular.
- **Sin cambios al sitio:** las respuestas de negocio se registraron; todavía no cambié la web.

### 0. Preparar las skills previstas
Seguir `Plan de mejora/12-chaky-motos/instalar-skills.md` antes de las tareas de diseño, SEO y privacidad. Los ZIP de SEO y tratamiento de datos están presentes pero no instalados; las skills de diseño/móvil indicadas en el archivo también están pendientes. Revisar que no se sobrescriban skills existentes y comprobar la lista al terminar.

**Listo cuando:** están disponibles las skills que se van a usar, sin cambios al sitio durante la instalación.

## Pasos

### 1. Cerrar los datos empresariales
Ya están confirmadas las sedes, la oferta general, la continuidad de la venta mayorista y la existencia de domicilios condicionados a la compra. Completar direcciones, WhatsApp, horarios, marcas, condiciones mayoristas, criterios de domicilios y catálogo. Poner originales y activos aprobados en `Docs/`.

**Listo cuando:** los datos que se mostrarán tienen fuente y autorización; las contradicciones con `mockData.ts` están resueltas.

### 2. Habilitar una revisión local fiable
Resolver el bloqueo de Vite en la ruta UNC usando una copia de trabajo en ruta local o una configuración que funcione desde la carpeta compartida. Levantar la página y revisar escritorio y móvil.

**Listo cuando:** inicio, rutas principales y recursos cargan; compilación y TypeScript pasan.

### 3. Corregir sedes y contacto
Mantener las tres sedes confirmadas, sustituyendo cualquier dirección, horario o contacto del demo que no coincida. Cada botón de WhatsApp debe abrir el número correcto.

**Depende de:** pasos 1 y 2.

### 4. Ordenar catálogo, productos y servicios
Organizar categorías con el catálogo real. Revisar títulos, imágenes y disponibilidad; corregir elementos de demostración. Nombrar marcas como texto y afirmar representación u originalidad solo en los términos que la usuaria confirme.

**Depende de:** paso 1.

### 5. Dejar clara la venta mayorista y el proceso de compra
Explicar que existe atención mayorista sin publicar mínimo por cantidad. Añadir condiciones de acceso cuando se confirmen. Explicar domicilios solo con sus criterios y cobertura, y enlazar al canal de compra real.

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
- Dirección completa, WhatsApp y horario de cada una de las tres sedes.
- Regla para cotizar al por mayor: la página actual aplica automáticamente el precio y el ahorro al llegar a seis unidades. La usuaria confirmó que la venta mayorista sigue, pero no se maneja por cantidades; falta definir qué debe activar ese precio. No cambiar totales ni tarifas hasta aclararlo.
- Cobertura y condición que determina si una compra recibe domicilio.

## Preguntas para continuar
1. ¿Cuál es la dirección completa, WhatsApp y horario de La Jagua de Ibirico, Chiriguaná y La Loma, respectivamente?
2. Si el precio mayorista no depende de cantidad, ¿cómo se determina: por tipo de cliente, cotización individual u otra regla?
3. ¿En qué zonas hacen domicilios y qué condición de la compra los habilita?

## Forma de avanzar
Trabajar un paso a la vez, preservando originales y haciendo cambios pequeños. No marcar un paso como terminado hasta comprobar su criterio. El inventario del punto de partida está revisado; el paso 1 está iniciado con las confirmaciones de la usuaria. No cambiar la lógica de precio mayorista hasta aclarar el criterio comercial.
