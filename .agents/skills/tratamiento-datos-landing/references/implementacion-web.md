# Implementación en la landing

Trabaja sobre el proyecto existente: mismo framework, mismos estilos y misma estructura. No migres la página ni agregues librerías para esto. Guarda una versión recuperable antes de cambiar.

## 1. Página de la política

La política debe poder abrirse desde su **propia dirección**, para enlazarla desde formularios, WhatsApp y redes. Una ventana emergente sola no basta.

| Si el proyecto… | Haz esto |
|---|---|
| Ya usa rutas (React Router, Next.js, Astro, varias páginas HTML) | Crea la ruta `/politica-de-datos` con el mismo encabezado y pie |
| Es una sola página React/Vite sin rutas (típico de una exportación de AI Studio) | Crea `public/politica-de-datos.html` como página independiente, con las mismas fuentes, colores y logo. No instales un enrutador solo para esto |
| Es HTML estático | Crea `politica-de-datos.html` junto a `index.html` |

Requisitos de la página:

- Título visible, versión y fecha de vigencia.
- Índice con enlaces a las secciones, porque el texto es largo.
- Letra cómoda de leer en celular (mínimo 16 px en el cuerpo) y buen contraste.
- Un enlace claro para volver a la página principal.
- Si quedan `[COMPLETAR]`, no publiques la página: avisa al empresario.

## 2. Enlace en el pie de página

Agrega «Política de Tratamiento de Datos Personales» en el pie, visible en celular y computador, apuntando a la página anterior.

## 3. Formularios, cotizadores y reservas

Junto al botón de enviar, en este orden:

1. **Aviso corto** (una o dos líneas): qué se hará con los datos y enlace a la política.
2. **Casilla de autorización** obligatoria, sin marcar.
3. **Casilla de publicidad** aparte, opcional, sin marcar (solo si la empresa envía publicidad).

Ejemplo en HTML (adáptalo al framework y a los estilos del proyecto):

```html
<p class="aviso-datos">
  Usaremos tus datos solo para responder tu solicitud.
  <a href="/politica-de-datos">Política de Tratamiento de Datos</a>.
</p>

<label>
  <input type="checkbox" name="autorizacion_datos" required>
  Autorizo a [EMPRESA] a tratar mis datos personales según su
  <a href="/politica-de-datos" target="_blank" rel="noopener">Política de Tratamiento de Datos</a>.
</label>

<label>
  <input type="checkbox" name="autorizacion_publicidad">
  Quiero recibir promociones y novedades (opcional).
</label>
```

Reglas:

- Si la casilla obligatoria está sin marcar, el formulario no se envía y muestra un mensaje claro junto a la casilla, por ejemplo «Para enviar, debes aceptar el tratamiento de tus datos».
- Cada casilla tiene su texto dentro de `<label>` (o asociado con `for`/`id`) para que funcione al tocar el texto y con lector de pantalla.
- Área táctil cómoda en celular (al menos 44 × 44 px incluyendo el texto).
- Si el formulario envía datos a un webhook, n8n, Sheets o correo, incluye en el envío si se aceptó la autorización y la fecha y hora. Así la empresa conserva la prueba. Si solo se arma un mensaje de WhatsApp, no hace falta guardar nada más.
- **No pidas más datos de los necesarios.** Si un campo no se usa para atender la solicitud, propón quitarlo.

### Datos sensibles (salud, fotos de pacientes, discapacidad)

- Marca esas preguntas como **opcionales** y agrega: «Responder esta pregunta es voluntario».
- Si el servicio necesita un dato sensible, agrega una casilla específica: «Autorizo el tratamiento de mis datos de salud para [finalidad concreta]».
- Nunca muestres ni simules resultados médicos en la landing.

### Menores de edad

Si el formulario puede ser para un menor (rehabilitación infantil, educación), pide los datos del acudiente y que sea él quien autorice: «Soy el padre, madre o representante legal y autorizo…».

## 4. Botones que arman un mensaje de WhatsApp

Cuando la página arma un mensaje con datos (pedido, reserva, cotización, cita):

- Pon el aviso corto justo encima del botón: «Al enviar tu mensaje, [EMPRESA] tratará tus datos para atender tu solicitud, según su [Política de Tratamiento de Datos](/politica-de-datos).»
- Si el formulario previo pide documento, fecha de nacimiento o datos de salud, usa además la casilla obligatoria del punto 3.
- No agregues el enlace de la política dentro del texto del mensaje salvo que la empresa lo pida; el aviso va en la página.

Para botones de WhatsApp sin datos (solo «Escríbenos»), basta el enlace del pie.

## 5. Sistemas externos

Si la página solo redirige a un sistema externo (reservas de hotel, portal de resultados, plataforma de pago), no agregues casillas en la landing: el sistema externo pide sus propias autorizaciones. Menciónalo en la política como canal y deja el enlace del pie.

## 6. Comprobación

- [ ] El enlace del pie abre la política en celular y computador, y se puede volver.
- [ ] La política no tiene `[COMPLETAR]` en datos del responsable (si los tiene, no está publicada).
- [ ] Cada formulario muestra el aviso y la casilla obligatoria; sin marcarla, no se envía y explica por qué.
- [ ] Ninguna casilla viene marcada.
- [ ] La casilla de publicidad es independiente.
- [ ] Las casillas funcionan con teclado y al tocar su texto.
- [ ] Los botones de WhatsApp con datos tienen su aviso.
- [ ] El aviso no tapa botones ni descuadra el diseño en celular.

Reporta qué comprobaste de verdad. Si no pudiste probar algo (por ejemplo, el envío real a un webhook), dilo como pendiente.
