# Estado del proyecto

- **Confirmado:** hay una página multipágina en React 19, TypeScript 7 y Vite 8, con vistas de inicio, catálogo, sedes, contacto, mayoristas y otras. Hay componentes de WhatsApp y selector de sede.
- **Confirmado:** scripts declarados: `npm run dev` (puerto 3000), `npm run build`, `npm run preview`, `npm run lint` (TypeScript).
- **Observado:** Node.js v24.22.1, npm 11.19.1 y Git 2.56.0.windows.2 disponibles.
- **Completado:** dependencias instaladas y `package-lock.json` generado. npm informó 0 vulnerabilidades. Para `esbuild`, se permitió su instalador oficial porque Vite lo necesita en Windows.
- **Comprobado:** `tsc --noEmit` terminó sin errores.
- **Bloqueo de ejecución/compilación:** Vite 8 desde esta carpeta UNC no resuelve `index.html`; el servidor levantó en el puerto 3000 pero devolvió 404. La unidad temporal de Windows también terminó convertida por Vite/Rolldown a una ruta inválida `../../SRVWORD/...`. No queda servidor activo. Ejecutar desde una ruta local podría evitar este caso; no se ha probado.
- **Pendiente:** estado de publicación/despliegue no identificado; el README conserva instrucciones genéricas de AI Studio.
- **Siguiente paso:** abrir/copiar el proyecto a una ruta local y probar `npm run dev`/`npm run build`; después revisar la página visualmente y distinguir datos de demostración de los aprobados por la empresa.
