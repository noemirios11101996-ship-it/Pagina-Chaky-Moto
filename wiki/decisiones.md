# Decisiones

- **2026-11-05 — Continuar sobre el sitio presente.** Existe un proyecto React/TypeScript/Vite en la carpeta y no se encontró un ZIP. Motivo: conservar el avance real y no reconstruirlo. Estado: confirmado. Fuente: inventario del proyecto.
- **2026-11-05 — Tratar el contenido de negocio codificado como provisional.** Hay un archivo llamado `mockData.ts` con datos y testimonios. Motivo: evitar publicar como ciertos datos no validados. Estado: provisional. Fuente: `src/data/mockData.ts`.
- **2026-11-05 — Resolver la raíz de Vite desde `process.cwd()`.** El proyecto vive en una ruta UNC; se actualizó `vite.config.ts` para usar la carpeta de ejecución y el alias deja de depender de `__dirname`. El fallo de Vite persiste en esta ruta; la solución aún no está validada. Fuente: compilación local.
- **2026-11-05 — Alinear esbuild con Vite 8.** `package.json` declara esbuild ^0.28.0 porque Vite 8.3 requiere ^0.27 o ^0.28; se generó lockfile al instalar.
- **2026-11-05 — Publicar el sitio y la wiki en el remoto indicado.** El remoto no tenía ramas; se creó `main` y se subieron 54 archivos en el commit inicial. `Docs/`, `node_modules/` y secretos quedaron fuera. Debido a que la carpeta original no permite escribir en `.git`, se usó una copia temporal saneada. Estado: publicado. Fuente: `git push` a GitHub.
