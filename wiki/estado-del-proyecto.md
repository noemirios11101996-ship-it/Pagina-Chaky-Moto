# Estado del proyecto

- **Confirmado:** hay una página multipágina en React 19, TypeScript 7 y Vite 8, con vistas de inicio, catálogo, sedes, contacto, mayoristas y otras. Hay componentes de WhatsApp y selector de sede.
- **Confirmado:** scripts declarados: `npm run dev` (puerto 3000), `npm run build`, `npm run preview`, `npm run lint` (TypeScript).
- **Observado:** Node.js v24.22.1, npm 11.19.1 y Git 2.56.0.windows.2 disponibles.
- **Completado:** dependencias instaladas y `package-lock.json` generado. npm informó 0 vulnerabilidades. Para `esbuild`, se permitió su instalador oficial porque Vite lo necesita en Windows.
- **Comprobado:** `tsc --noEmit` terminó sin errores.
- **Publicado:** repositorio GitHub `noemirios11101996-ship-it/Pagina-Chaky-Moto`, rama `main`. El primer envío incluyó el sitio y la wiki; excluyó `Docs/`, dependencias y archivos `.env` privados.
- **Carpeta local conectada:** `C:\Users\noemi.e\Documents\Pagina Chaky` está vinculada a `origin/main`. Ejecutar npm desde esa ruta; CMD puede cambiar a `C:\Windows` si se intenta iniciar desde una ruta UNC.
- **Ejecución local:** Vite sirvió la página en `http://localhost:3000/` con respuesta HTTP 200 el 2026-11-27.
- **Pendiente:** estado visual de publicación/despliegue no identificado; el README conserva instrucciones genéricas de AI Studio.
- **Siguiente paso:** revisar visualmente la página y probar los tres botones de WhatsApp; después continuar con catálogo y activos empresariales.
- **Última actualización de contenido:** se aplicaron en `src/data/mockData.ts` las direcciones, WhatsApp 311 397 2905 y horario confirmado para las tres sedes; también se actualizaron los domicilios en `src/views/BranchesView.tsx` y las FAQ.
- **Comprobación más reciente:** `npm run lint` pasó; `npm run build` terminó correctamente y generó `dist/`. Aún falta revisión visual y prueba manual de enlaces.
- **Skills:** instaladas y verificadas las cinco indicadas en `Plan de mejora/12-chaky-motos/instalar-skills.md`, bajo `.agents/skills/`; no se ejecutó ningún script de esas skills.
- **Mayorista:** cotización por WhatsApp confirmada. Se eliminaron los precios y descuentos automáticos por seis unidades del catálogo, detalle, cotizador, inicio y textos empresariales.

