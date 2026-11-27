# Estado del proyecto

- **Confirmado:** hay una página multipágina en React 19, TypeScript 7 y Vite 8, con vistas de inicio, catálogo, sedes, contacto, mayoristas y otras. Hay componentes de WhatsApp y selector de sede.
- **Confirmado:** scripts declarados: `npm run dev` (puerto 3000), `npm run build`, `npm run preview`, `npm run lint` (TypeScript).
- **Observado:** Node.js v24.22.1, npm 11.19.1 y Git 2.56.0.windows.2 disponibles.
- **Completado:** dependencias instaladas y `package-lock.json` generado. npm informó 0 vulnerabilidades. Para `esbuild`, se permitió su instalador oficial porque Vite lo necesita en Windows.
- **Comprobado:** `tsc --noEmit` terminó sin errores.
- **Publicado:** repositorio GitHub `noemirios11101996-ship-it/Pagina-Chaky-Moto`, rama `main`. El primer envío incluyó el sitio y la wiki; excluyó `Docs/`, dependencias y archivos `.env` privados.
- **Limitación del espacio local:** la carpeta original no permite escribir dentro de `.git`; se subió desde una copia Git temporal saneada. El contenido local sigue sin historial/remote Git propio.
- **Bloqueo de ejecución/compilación:** la carpeta UNC no resuelve `index.html`. El 2026-11-27 se comprobó que el puerto 3000 estaba libre y se intentó iniciar Vite desde la copia local, incluso con `DISABLE_HMR=true`; el proceso no abrió el puerto y no devolvió un error útil. No se confirmó la previsualización y no queda servidor activo.
- **Pendiente:** estado visual de publicación/despliegue no identificado; el README conserva instrucciones genéricas de AI Studio.
- **Siguiente paso:** diagnosticar por qué Vite termina sin escuchar desde la copia local; después iniciar `npm run dev`, confirmar respuesta HTTP y revisar visualmente la página.
- **Última actualización de contenido:** se aplicaron en `src/data/mockData.ts` las direcciones, WhatsApp 311 397 2905 y horario confirmado para las tres sedes; también se actualizaron los domicilios en `src/views/BranchesView.tsx` y las FAQ.
- **Comprobación más reciente:** TypeScript (`tsc --noEmit`) pasó con las direcciones, WhatsApp y horarios actualizados. La compilación de Vite en una copia local temporal no terminó ni produjo `dist`; desde la ruta UNC ya se había observado un 404. La página no está verificada visualmente.
- **Skills:** instaladas y verificadas las cinco indicadas en `Plan de mejora/12-chaky-motos/instalar-skills.md`, bajo `.agents/skills/`; no se ejecutó ningún script de esas skills.

