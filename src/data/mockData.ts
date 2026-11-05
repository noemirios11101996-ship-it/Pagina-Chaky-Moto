export interface Product {
  id: string;
  name: string;
  category: string;
  brand: string;
  code: string;
  priceDetal: number;
  priceMayor: number;
  image: string;
  galleryImages: string[];
  compatibility: string[];
  description: string;
  specs: { [key: string]: string };
  inStock: boolean;
  featured?: boolean;
  sedeAvailability: {
    jagua: boolean;
    loma: boolean;
    chiriguana: boolean;
  };
}

export interface SedeInfo {
  id: 'jagua' | 'loma' | 'chiriguana';
  name: string;
  subtitle: string;
  municipality: string;
  address: string;
  phone: string;
  altPhone?: string;
  whatsapp: string; // international format without + for wa.me
  whatsappDisplay: string;
  hoursWeek: string;
  hoursSunday: string;
  isPrincipal: boolean;
  badges: string[];
  manager: string;
  image: string;
  mapEmbedUrl: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export const SEDES_DATA: Record<string, SedeInfo> = {
  jagua: {
    id: 'jagua',
    name: 'Sede Principal - La Jagua de Ibirico',
    subtitle: 'Almacén central, bodega mayorista y taller de soporte',
    municipality: 'La Jagua de Ibirico, Cesar',
    address: 'Carrera 4 #4-58, Barrio Centro, diagonal a los bomberos',
    phone: '+57 321 463 3702',
    altPhone: '+57 323 222 4529',
    whatsapp: '573214633702',
    whatsappDisplay: '+57 321 463 3702',
    hoursWeek: 'Lunes a Sábado: 7:00 a. m. – 6:00 p. m.',
    hoursSunday: 'Domingos y festivos: 8:00 a. m. – 1:00 p. m.',
    isPrincipal: true,
    badges: ['Sede Principal', 'Mayorista & Detal', 'Taller Especializado', 'Bodega Central'],
    manager: 'Carlos Quintero (Chaky)',
    image: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=800&q=80',
    mapEmbedUrl: 'https://maps.google.com/?q=La+Jagua+de+Ibirico+Cesar'
  },
  loma: {
    id: 'loma',
    name: 'Sede La Loma (El Paso, Cesar)',
    subtitle: 'Punto estratégico zona minera y corredor carbonífero',
    municipality: 'La Loma, El Paso, Cesar',
    address: 'Calle 10, cra. 16 37, frente a AO',
    phone: '+57 310 687 0934',
    whatsapp: '573106870934',
    whatsappDisplay: '+57 310 687 0934',
    hoursWeek: 'Lunes a Sábado: 7:00 a. m. – 6:00 p. m.',
    hoursSunday: 'Domingos: Cerrado',
    isPrincipal: false,
    badges: ['Zona Minera', 'Despacho Exprés', 'Venta Detal'],
    manager: 'Andrés Martínez',
    image: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=800&q=80',
    mapEmbedUrl: 'https://maps.google.com/?q=La+Loma+El+Paso+Cesar'
  },
  chiriguana: {
    id: 'chiriguana',
    name: 'Sede Chiriguaná',
    subtitle: 'Punto de atención centro del Cesar y municipios vecinos',
    municipality: 'Chiriguaná, Cesar',
    address: 'Calle 8 #7-99, Barrio El Carmen',
    phone: '+57 320 570 8521',
    whatsapp: '573205708521',
    whatsappDisplay: '+57 320 570 8521',
    hoursWeek: 'Lunes a Sábado: 7:30 a. m. – 6:00 p. m.',
    hoursSunday: 'Domingos: 8:00 a. m. – 12:00 m.',
    isPrincipal: false,
    badges: ['Atención Rápida', 'Surtido Garantizado', 'Crédito Sistecrédito'],
    manager: 'Mayerlis Gómez',
    image: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=800&q=80',
    mapEmbedUrl: 'https://maps.google.com/?q=Chiriguana+Cesar'
  }
};

export const CATEGORIES = [
  { id: 'todos', name: 'Todos los productos', icon: 'grid_view' },
  { id: 'arrastre', name: 'Kits de Arrastre & Cadenas', icon: 'settings' },
  { id: 'frenos', name: 'Frenos & Pastillas', icon: 'disc_full' },
  { id: 'motor', name: 'Motor & Cilindros', icon: 'construction' },
  { id: 'lubricantes', name: 'Lubricantes & Químicos', icon: 'opacity' },
  { id: 'llantas', name: 'Llantas & Neumáticos', icon: 'tire_repair' },
  { id: 'electrico', name: 'Sistema Eléctrico & Baterías', icon: 'bolt' },
  { id: 'suspension', name: 'Suspensión & Dirección', icon: 'swap_vertical_circle' },
  { id: 'accesorios', name: 'Accesorios & Lujos', icon: 'tune' },
  { id: 'proteccion', name: 'Cascos & Protección', icon: 'sports_motorsports' },
  { id: 'carroceria', name: 'Plásticos & Carenajes', icon: 'shield' },
  { id: 'luces', name: 'Farolas & Direccionales LED', icon: 'lightbulb' }
];

export const PRODUCTS_DATA: Product[] = [
  {
    id: 'kit-arrastre-428h',
    name: 'Kit de Arrastre Reforzado Choho 428H-128L',
    category: 'arrastre',
    brand: 'Choho Racing',
    code: 'CH-428H-128',
    priceDetal: 145000,
    priceMayor: 118000,
    image: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=800&q=80'
    ],
    compatibility: ['Bajaj Boxer CT 100', 'Bajaj Discover 125', 'Auteco Platino 110', 'AKT NKD 125', 'Honda CB 125F'],
    description: 'Kit de transmisión de alta resistencia con cadena 428H dorada ultra reforzada, piñón en acero al carbono 1045 y corona templada para mayor durabilidad en vías difíciles y trabajo pesado.',
    specs: {
      'Paso de cadena': '428H Heavy Duty',
      'Número de eslabones': '128 eslabones',
      'Piñón delantero': '14 dientes',
      'Corona catalina': '42 dientes',
      'Material': 'Acero al carbono tratado térmicamente 1045',
      'Vida útil estimada': '18.000 - 25.000 km con lubricación continua'
    },
    inStock: true,
    featured: true,
    sedeAvailability: {
      jagua: true,
      loma: true,
      chiriguana: true
    }
  },
  {
    id: 'pastillas-freno-sinterizadas',
    name: 'Pastillas de Freno Sinterizadas Delanteras Ichiban',
    category: 'frenos',
    brand: 'Ichiban Pro',
    code: 'ICH-PF-302',
    priceDetal: 35000,
    priceMayor: 26000,
    image: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=800&q=80'
    ],
    compatibility: ['Yamaha FZ 16 / 2.0', 'Yamaha SZ-R', 'Honda CB 160F', 'Suzuki Gixxer 150', 'Pulsar NS 200'],
    description: 'Pastillas sinterizadas diseñadas para frenadas progresivas y seguras bajo lluvia o altas temperaturas sin desgastar prematuramente el disco.',
    specs: {
      'Compuesto': 'Metálico sinterizado',
      'Posición': 'Delantera',
      'Temperatura máx': '650°C',
      'Resistencia al fading': 'Excelente'
    },
    inStock: true,
    featured: true,
    sedeAvailability: {
      jagua: true,
      loma: true,
      chiriguana: true
    }
  },
  {
    id: 'aceite-motul-7100',
    name: 'Aceite Motul 7100 4T 10W-40 100% Sintético 1L',
    category: 'lubricantes',
    brand: 'Motul',
    code: 'MOT-7100-10W40',
    priceDetal: 68000,
    priceMayor: 54000,
    image: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=800&q=80'
    ],
    compatibility: ['Universal motores 4 Tiempos', 'KTM Duke', 'Yamaha MT-03', 'Pulsar NS 200 / 160', 'Suzuki Gixxer'],
    description: 'Aceite de motor de alto rendimiento con tecnología Ester que protege contra el desgaste y reduce la fricción interna en altas revoluciones.',
    specs: {
      'Viscosidad': '10W-40',
      'Base': '100% Sintético con Éster',
      'Norma API': 'API SN / SM / SL',
      'Norma JASO': 'JASO MA2',
      'Volumen': '1 Litro'
    },
    inStock: true,
    featured: true,
    sedeAvailability: {
      jagua: true,
      loma: true,
      chiriguana: true
    }
  },
  {
    id: 'llanta-kenda-100-90-18',
    name: 'Llanta Trasera Kenda K671 100/90-18 Sellomatic',
    category: 'llantas',
    brand: 'Kenda Tires',
    code: 'KEN-100-90-18',
    priceDetal: 185000,
    priceMayor: 152000,
    image: 'https://images.unsplash.com/photo-1578844251758-2f71da64c96f?auto=format&fit=crop&w=600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1578844251758-2f71da64c96f?auto=format&fit=crop&w=800&q=80'
    ],
    compatibility: ['Bajaj Pulsar 180 / 220', 'TVS Apache 160/180', 'Yamaha RX 115', 'AKT CR4 125'],
    description: 'Labrado direccional para evacuación de agua óptima en carreteras lluviosas y curvas pronunciadas, con banda de rodamiento de compuesto medio.',
    specs: {
      'Medida': '100/90-18',
      'Tipo': 'Sellomatic (Tubeless)',
      'Índice de carga': '56 (224 kg)',
      'Índice de velocidad': 'H (210 km/h)',
      'Posición': 'Trasera'
    },
    inStock: true,
    featured: true,
    sedeAvailability: {
      jagua: true,
      loma: true,
      chiriguana: false
    }
  },
  {
    id: 'bateria-gel-12v-7ah',
    name: 'Batería de Gel Libre Mantenimiento Magna 12V 7Ah (YTX7A-BS)',
    category: 'electrico',
    brand: 'Magna Power',
    code: 'MAG-YTX7A-BS',
    priceDetal: 98000,
    priceMayor: 79000,
    image: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=800&q=80'
    ],
    compatibility: ['AKT NKD 125', 'Yamaha Crypton', 'Suzuki GN 125', 'Scooters GY6 125/150', 'Honda Wave 110'],
    description: 'Batería sellada activada de fábrica con electrolito en gel, garantizando máxima potencia de arranque en frío y sin riesgo de fugas ácidas.',
    specs: {
      'Voltaje': '12V',
      'Capacidad': '7 Amperios-hora',
      'CCA': '130 A',
      'Garantía': '6 meses directa en almacén',
      'Tecnología': 'Gel Nanogel sellado'
    },
    inStock: true,
    featured: false,
    sedeAvailability: {
      jagua: true,
      loma: true,
      chiriguana: true
    }
  },
  {
    id: 'kit-cilindro-nkd-125',
    name: 'Kit de Cilindro Completo AKT NKD 125 / SL 125 Revo',
    category: 'motor',
    brand: 'Revo Moto Parts',
    code: 'REV-CIL-NKD125',
    priceDetal: 175000,
    priceMayor: 142000,
    image: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=800&q=80'
    ],
    compatibility: ['AKT NKD 125', 'AKT SL 125', 'AKT Evo 125', 'AKT CR4 125'],
    description: 'Incluye cilindro encamisado estándar en hierro gris, pistón con falda antifricción de molibdeno, pasador, anillos y empaquetadura de culata y base.',
    specs: {
      'Diámetro pistón': '56.5 mm (Estándar STD)',
      'Cilindraje': '124 cc',
      'Contenido': 'Cilindro + Pistón + Anillos + Pasador + Pines + Empaquetadura',
      'Tratamiento': 'Bruñido cruzado de precisión'
    },
    inStock: true,
    featured: true,
    sedeAvailability: {
      jagua: true,
      loma: true,
      chiriguana: true
    }
  },
  {
    id: 'casco-integral-shaft-581',
    name: 'Casco Integral Shaft Pro 581 EVO Certificación ECE R22.06',
    category: 'proteccion',
    brand: 'Shaft Helmets',
    code: 'SH-581-PRO',
    priceDetal: 245000,
    priceMayor: 198000,
    image: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=800&q=80'
    ],
    compatibility: ['Universal todos los motociclistas', 'Tallas M, L, XL disponibles'],
    description: 'Casco integral con la última homologación europea ECE 22.06. Calota en termoplástico ABS inyectado, visor antirayones y tapizado interior desmontable y lavable.',
    specs: {
      'Certificación': 'ECE R22.06 y NTC 4533',
      'Calota': 'Termoplástico de alto impacto',
      'Cierre': 'Hebilla micrométrica metálica',
      'Ventilación': 'Entradas frontales y extractor posterior',
      'Peso': '1450g ± 50g'
    },
    inStock: true,
    featured: true,
    sedeAvailability: {
      jagua: true,
      loma: true,
      chiriguana: true
    }
  },
  {
    id: 'bujia-iridium-ngk-cpr8ea',
    name: 'Bujía Láser Iridium NGK CPR8EAIX-9',
    category: 'electrico',
    brand: 'NGK Japón',
    code: 'NGK-CPR8EA-IX',
    priceDetal: 48000,
    priceMayor: 37000,
    image: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=800&q=80'
    ],
    compatibility: ['Yamaha FZ 2.0', 'Honda CB 190R', 'Pulsar NS 200', 'Suzuki Gixxer 150', 'Hero Hunk 160R'],
    description: 'Punta ultrafina de iridio de 0.6 mm que garantiza una chispa potente y constante, mejorando la aceleración y la respuesta de acelerador.',
    specs: {
      'Electrodo': 'Iridio puro soldado por láser',
      'Grado térmico': '8',
      'Vida útil': 'Hasta 60.000 km',
      'Origen': 'Japón 100% Original'
    },
    inStock: true,
    featured: false,
    sedeAvailability: {
      jagua: true,
      loma: true,
      chiriguana: true
    }
  },
  {
    id: 'amortiguadores-reforzados-boxer',
    name: 'Juego de Amortiguadores Traseros Reforzados Bajaj Boxer CT 100',
    category: 'suspension',
    brand: 'Revo Heavy Duty',
    code: 'REV-AMORT-BOXER',
    priceDetal: 135000,
    priceMayor: 108000,
    image: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=800&q=80'
    ],
    compatibility: ['Bajaj Boxer CT 100', 'Bajaj Platino 100 / 125', 'Bajaj BM 150'],
    description: 'Par de amortiguadores dobles con resorte de paso progresivo regulable en 5 posiciones. Ideal para transporte de carga y trabajo en trochas del Cesar.',
    specs: {
      'Ajuste': 'Pre-carga de resorte de 5 pasos',
      'Longitud ojo a ojo': '330 mm',
      'Carga máxima recomendada': '240 kg por par',
      'Acabado': 'Cromado anticorrosivo'
    },
    inStock: true,
    featured: false,
    sedeAvailability: {
      jagua: true,
      loma: true,
      chiriguana: false
    }
  },
  {
    id: 'farola-led-proyector-h4',
    name: 'Bombillo LED H4 Turbo Proyector con Lupa Ojo de Ángel',
    category: 'luces',
    brand: 'NightHawk LED',
    code: 'LED-H4-PROY',
    priceDetal: 55000,
    priceMayor: 41000,
    image: 'https://images.unsplash.com/photo-1578844251758-2f71da64c96f?auto=format&fit=crop&w=600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1578844251758-2f71da64c96f?auto=format&fit=crop&w=800&q=80'
    ],
    compatibility: ['Universal zócalo H4', 'AKT NKD', 'Bajaj Pulsar', 'Yamaha Libero', 'Honda XR 150L'],
    description: 'Iluminación LED de corte limpio anti-encandilamiento con disipador de aluminio aeroespacial y ventilador silencioso a 12.000 RPM.',
    specs: {
      'Potencia': '35W Reales',
      'Lúmenes': '6000 Lúmenes por bombillo',
      'Color de luz': '6000K Blanco puro',
      'Voltaje': '12V - 24V DC Corriente Continua'
    },
    inStock: true,
    featured: false,
    sedeAvailability: {
      jagua: true,
      loma: true,
      chiriguana: true
    }
  },
  {
    id: 'disco-freno-ventilado-ns200',
    name: 'Disco de Freno Delantero Ventilado Flotante Pulsar NS 200',
    category: 'frenos',
    brand: 'Braking Casarella',
    code: 'CAS-DISC-NS200',
    priceDetal: 110000,
    priceMayor: 89000,
    image: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=800&q=80'
    ],
    compatibility: ['Bajaj Pulsar NS 200', 'Bajaj Pulsar RS 200', 'Bajaj Pulsar AS 200'],
    description: 'Disco lobulado con aleación inoxidable 410 tratada térmicamente para evitar deformaciones por calor en descensos o frenado prolongado.',
    specs: {
      'Diámetro exterior': '300 mm',
      'Espesor mínimo': '4.0 mm',
      'Patrón': 'Lobulado Wave para autolimpieza de pastilla',
      'Material': 'Acero inoxidable templado al carbón'
    },
    inStock: true,
    featured: false,
    sedeAvailability: {
      jagua: true,
      loma: true,
      chiriguana: true
    }
  },
  {
    id: 'lubricante-cadena-motul-c2',
    name: 'Grasa y Lubricante de Cadena Motul Chain Lube Road C2 400ml',
    category: 'lubricantes',
    brand: 'Motul',
    code: 'MOT-C2-400ML',
    priceDetal: 42000,
    priceMayor: 33000,
    image: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=800&q=80'
    ],
    compatibility: ['Todas las cadenas con o sin retenes O-Ring, X-Ring, Z-Ring'],
    description: 'Lubricante incoloro y muy adherente especialmente diseñado para engrasar todas las cadenas de motos de carretera y karts.',
    specs: {
      'Formato': 'Aerosol 400ml con cánula difusora',
      'Adherencia': 'Ultra alta velocidad sin salpicaduras',
      'Resistencia al agua': 'Impermeable total'
    },
    inStock: true,
    featured: false,
    sedeAvailability: {
      jagua: true,
      loma: true,
      chiriguana: true
    }
  }
];

export const INITIAL_CART_ITEMS: CartItem[] = [
  {
    product: PRODUCTS_DATA[0], // Kit de Arrastre Choho
    quantity: 6 // Mayorista threshold demo!
  },
  {
    product: PRODUCTS_DATA[1], // Pastillas freno Ichiban
    quantity: 2
  },
  {
    product: PRODUCTS_DATA[2], // Aceite Motul 7100
    quantity: 4
  }
];

export const WHOLESALE_BENEFITS = [
  {
    icon: 'percent',
    title: 'Tarifas especiales desde 6 unidades',
    description: 'Aplica a compras de 6 o más unidades de una misma referencia. Margen asegurado para talleres y almacenes aliados.'
  },
  {
    icon: 'local_shipping',
    title: 'Domicilio según el tipo de pedido',
    description: 'Dentro del municipio, el domicilio depende del valor de compra. Para pedidos mayoristas fuera del municipio, el domicilio es gratis.'
  },
  {
    icon: 'support_agent',
    title: 'Asesor técnico directo por WhatsApp',
    description: 'Cotizaciones en minutos con inventario en tiempo real y asesoría técnica para verificar referencias exactas.'
  },
  {
    icon: 'receipt_long',
    title: 'Facturación comercial y soporte de garantías',
    description: 'Garantía real contra defectos de fábrica respaldada por marcas aliadas como Choho, Motul, Casarella y Revo.'
  }
];

export const FAQ_LIST = [
  {
    q: '¿Cómo funciona el pedido o cotización por WhatsApp?',
    a: 'Seleccionas los repuestos o accesorios que necesitas en nuestro catálogo web, configuras las cantidades y tu sede más cercana (La Jagua, La Loma o Chiriguaná). Con un solo clic se genera tu lista organizada que abres en WhatsApp para confirmar stock y coordinar entrega.'
  },
  {
    q: '¿Cuál es el requisito para obtener precio de mayorista?',
    a: 'El precio mayorista aplica a partir de 6 unidades de la misma referencia de producto. Esto permite a talleres mecánicos y almacenes obtener márgenes competitivos de reventa.'
  },
  {
    q: '¿Hacen envíos a otros municipios o corregimientos del Cesar?',
    a: 'Dentro del municipio, el domicilio depende del valor de compra. Para pedidos mayoristas fuera del municipio, el domicilio es gratis. Consulta con la sede las condiciones de tu pedido.'
  },
  {
    q: '¿Qué medios de pago reciben en las sedes?',
    a: 'Aceptamos efectivo, transferencias Bancolombia, Nequi, Daviplata y crédito inmediato mediante Sistecrédito en nuestras 3 sedes.'
  },
  {
    q: '¿Los repuestos son originales o genéricos homologados?',
    a: 'Manejamos ambas líneas claramente identificadas: repuestos originales de ensamble y marcas homologadas de primer nivel (Choho, Casarella, Ichiban, Revo, Kenda, Motul) con garantía escrita.'
  }
];

export const TESTIMONIALS_DATA = [
  {
    name: 'Jhon Jairo Beleño',
    role: 'Taller Motores del Cesar (La Loma)',
    comment: 'Llevo 3 años surtiendo los kits de arrastre y pastillas en Chaky Motos. Los precios por mayor desde 6 unidades me permiten tener buen margen y nunca me han quedado mal con un repuesto.',
    rating: 5
  },
  {
    name: 'Yurleidis Paternina',
    role: 'Cliente Particular (La Jagua de Ibirico)',
    comment: 'Excelente atención en la sede del centro. Compré el casco certificado y el kit de cilindro para mi NKD, me asesoraron con la referencia exacta y pagué fácil con Sistecrédito.',
    rating: 5
  },
  {
    name: 'Everardo Pacheco',
    role: 'Mecánico Independiente (Chiriguaná)',
    comment: 'Lo mejor es la rapidez por WhatsApp. Pido la cotización en la mañana y al mediodía ya tengo los repuestos en el taller listos para instalar.',
    rating: 5
  }
];
