# Checklist de mejoras · Chaky Motos

Esta lista mantiene el trabajo pendiente visible y permite continuar desde la carpeta local `C:\Users\noemi.e\Documents\Pagina Chaky`. Para iniciar la previsualización en Windows, abre una terminal en esa carpeta y ejecuta `npm run dev`; Vite usa el puerto 3000.

## Ya realizado

- [x] Revisar la aplicación React, TypeScript y Vite existente.
- [x] Confirmar tres sedes: La Jagua de Ibirico, Chiriguaná y La Loma, Cesar.
- [x] Actualizar direcciones, WhatsApp compartido `311 397 2905` y horario lunes a sábado, 7:00 a. m. a 6:00 p. m.
- [x] Actualizar el texto de domicilios: dentro del municipio depende del valor de compra; los pedidos mayoristas fuera del municipio tienen domicilio gratis.
- [x] Instalar las cinco skills del proyecto en `.agents/skills/`.
- [x] Confirmar que `npm run lint` (TypeScript) pasó en la copia de trabajo.

## Pendiente, en orden de trabajo

- [x] **Arranque local:** confirmado desde `C:\Users\noemi.e\Documents\Pagina Chaky` con `npm run dev`; Vite sirve en `http://localhost:3000/` y respondió HTTP 200 el 2026-11-27. Si CMD abre en otra carpeta, primero ejecutar `cd /d "C:\Users\noemi.e\Documents\Pagina Chaky"`. Las dependencias y `package-lock.json` ya existen; no ejecutar `npm i` fuera de la carpeta del proyecto.
- [ ] **Previsualización y contactos:** abrir la página en el navegador; verificar las tres sedes, sus direcciones, horarios y botones de WhatsApp.
- [x] **Regla mayorista:** la usuaria confirmó que los precios se cotizan por WhatsApp. Se quitaron los cálculos automáticos y se configuraron las dos líneas mayoristas (+57 312 268 7726 y +57 310 500 9513) para todas las sedes; cada formulario permite elegir la línea.
- [ ] **Catálogo y marcas:** recibir y revisar catálogo, marcas y productos autorizados. `Docs/` está vacía; no presentar datos de muestra como información empresarial confirmada.
- [ ] **Domicilio local:** definir el valor mínimo de compra para ofrecer domicilio dentro del municipio, o mantener el mensaje de consultar según la compra.
- [ ] **Identidad visual:** incorporar logo y fotografías propias aprobadas, cuando estén disponibles.
- [ ] **Celular y navegación:** revisar legibilidad, botones, navegación y cotización desde un teléfono.
- [ ] **Privacidad:** verificar qué datos recoge el sitio y completar aviso/política con datos empresariales confirmados.
- [ ] **SEO local:** revisar títulos, descripciones, textos alternativos y datos locales para las tres sedes.
- [ ] **Revisión final y publicación:** ejecutar `npm run lint` y `npm run build`; probar enlaces y formularios/contactos; confirmar que el commit esté en `main` y que el despliegue programado refleje esa versión.

## Datos de operación para esta copia

- Carpeta: `C:\Users\noemi.e\Documents\Pagina Chaky`
- Desarrollo: `npm run dev`
- Puerto configurado: `3000`
- Remoto Git: `https://github.com/noemirios11101996-ship-it/Pagina-Chaky-Moto.git`
- Rama objetivo: `main`

> Mantener `Docs/`, `node_modules/`, archivos `.env` y secretos fuera de los commits.
