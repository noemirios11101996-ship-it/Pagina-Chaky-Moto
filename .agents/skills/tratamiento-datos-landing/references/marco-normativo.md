# Marco normativo y notas por rubro

Fuente: skill `politica-tratamiento-datos-co`. Si tienes búsqueda web, verifica antes de entregar que no haya cambios recientes en estas normas o en los umbrales del RNBD, y menciónalo si los hay. No cites artículos que no hayas verificado; ante la duda, cita solo la ley o el decreto.

## Normas

- **Ley Estatutaria 1581 de 2012**: régimen general de protección de datos personales (habeas data).
- **Decreto 1377 de 2013**, compilado en el **Decreto Único 1074 de 2015** (Parte 2, Título 2, Capítulo 25): autorización, políticas, avisos de privacidad y transferencias.
- **Decreto 886 de 2014** (también compilado en el 1074 de 2015) y **Decreto 090 de 2018**: Registro Nacional de Bases de Datos (RNBD).
- **Ley 1266 de 2008**: solo si la empresa reporta a centrales de riesgo (habeas data financiero). Se menciona aparte y no reemplaza a la 1581.
- **Ley 2300 de 2023**: horarios y canales de contacto para cobranza y publicidad. Inclúyela si la empresa hace cobranza o mercadeo directo.
- Normas sectoriales, según el rubro (ver abajo).

## Contenido mínimo de la política (art. 13, Decreto 1377 de 2013)

1. Nombre o razón social, domicilio, dirección, correo electrónico y teléfono del responsable.
2. Tratamiento al que se someterán los datos y su finalidad, si no se informó mediante aviso de privacidad.
3. Derechos que asisten al titular.
4. Persona o área responsable de atender peticiones, consultas y reclamos.
5. Procedimiento para que el titular ejerza sus derechos (conocer, actualizar, rectificar, suprimir y revocar la autorización).
6. Fecha de entrada en vigencia de la política y período de vigencia de la base de datos.

## Contenido mínimo del aviso de privacidad (art. 15, Decreto 1377 de 2013)

1. Nombre o razón social y datos de contacto del responsable.
2. Tratamiento y finalidad de los datos.
3. Derechos del titular.
4. Mecanismos para conocer la política y sus cambios (normalmente el enlace web).
5. Si se recogen datos sensibles: que responder esas preguntas es **facultativo**.

## Reglas de fondo que el texto debe reflejar

- **Derechos del titular** (art. 8, Ley 1581): conocer, actualizar y rectificar sus datos; pedir prueba de la autorización; ser informado del uso dado a sus datos; presentar quejas ante la SIC; revocar la autorización o pedir la supresión cuando no haya deber legal o contractual de conservarlos; acceder gratis a sus datos.
- **Consultas**: respuesta en máximo **10 días hábiles**, prorrogables **5 días hábiles** más, informando el motivo (art. 14).
- **Reclamos**: respuesta en máximo **15 días hábiles**, prorrogables **8 días hábiles** más. Si el reclamo está incompleto, se pide subsanarlo dentro de los **5 días** siguientes; si pasan **2 meses** sin respuesta, se entiende que desistió. Mientras se tramita, se marca la base con la leyenda «reclamo en trámite» (art. 15).
- **Requisito de procedibilidad**: el titular solo puede quejarse ante la SIC después de agotar el trámite de consulta o reclamo con la empresa (art. 16).
- **Datos sensibles** (salud, biometría, huellas, imagen o voz con fines de identificación, origen étnico, orientación política, religión, sindicatos, vida sexual): autorización explícita; informar que no está obligado a darlos y cuáles son y para qué (art. 6, Ley 1581; art. 6, Decreto 1377).
- **Niños, niñas y adolescentes**: solo con respeto a su interés superior y sus derechos fundamentales, con autorización del representante legal y valorando la opinión del menor (art. 7, Ley 1581; art. 12, Decreto 1377).
- **Transferencia internacional** (a un responsable en otro país): solo a países con nivel adecuado de protección o con alguna excepción del art. 26 de la Ley 1581 (por ejemplo, autorización expresa del titular).
- **Transmisión** (a un encargado que procesa por cuenta de la empresa, como nube, software o *call center*): requiere contrato de transmisión o cláusulas equivalentes (art. 25, Decreto 1377). Usar servicios en la nube con servidores fuera de Colombia (Google, Microsoft, AWS, etc.) normalmente es transmisión internacional y debe mencionarse.
- **Sanciones** (art. 23, Ley 1581): multas de hasta 2.000 SMMLV, suspensión, cierre temporal o cierre definitivo. Menciónalo solo en la lista de implementación, no en la política.

## Lo que suele aparecer en una landing del programa

- **WhatsApp**: si la página arma un mensaje con datos y lo abre en WhatsApp, los datos los recibe la empresa por WhatsApp (Meta). Es un canal de recolección y normalmente implica transmisión internacional.
- **Webhooks, n8n, Google Sheets, correo**: si un formulario envía datos a estos servicios, la empresa almacena datos y debe describirlo, con el proveedor como encargado.
- **Sistemas externos** (reservas de hotel, portal de resultados, software contable): la página solo enlaza; el sistema externo tiene su propio tratamiento. Menciónalo como canal, sin describir lo que no conoces.
- **Hosting, Google Fonts, Maps, videos incrustados, analítica**: pueden recoger IP o cookies. Si existen en el código, inclúyelos en la sección de navegación o cookies.

## Notas por rubro

- **Salud** (clínicas, odontología, radiología, laboratorios, IPS, rehabilitación): la historia clínica y las imágenes diagnósticas son datos sensibles con reserva legal (Ley 23 de 1981; Resolución 1995 de 1999; Ley 2015 de 2020 sobre historia clínica electrónica interoperable; Resolución 839 de 2017 sobre conservación). Diferencia la autorización de datos personales del consentimiento informado clínico, que es otro documento. Acceso de profesionales remitentes y portales de resultados: con usuario y contraseña, y como finalidad explícita. Fotos de antes y después de pacientes: datos sensibles, autorización explícita.
- **Educación**: datos de menores, acudientes y salud escolar; publicación de fotos de estudiantes solo con autorización.
- **Comercio electrónico y apps**: *cookies* y analítica (incluir política de *cookies* o una sección), pasarelas de pago, envíos, publicidad con aceptación separada.
- **Financiero, crédito, seguros y cobranza**: Ley 1266 de 2008 para reportes a centrales; Ley 2300 de 2023 para horarios y canales de contacto.
- **Construcción e inmobiliario**: datos de compradores, arrendatarios, codeudores y fiadores; estudios de crédito.
- **Cualquier empresa con empleados**: hojas de vida, exámenes médicos ocupacionales (sensibles), afiliaciones a seguridad social, nómina.
- **Sedes con control de acceso**: registro de visitantes, biometría y cámaras.
- **Marketing, eventos y bases de datos compradas**: verificar que la base tenga autorización válida de origen; no usar bases sin prueba de autorización.
