export const productos = [
  {
    id: '1',
    slug: 'disco-de-embrague-valeo',
    nombre: 'Disco de Embrague PHC Valeo',
    categoria: 'DISCO, PLATO Y COLLARÍN DE EMBRAGUE',
    marca: 'PHC Valeo',
    imagen: 'https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=600&q=80',
    descripcion: 'Disco de embrague reforzado de alta durabilidad para camiones y buses de carga pesada. Fabricación coreana con fricción de alta resistencia al calor.',
    precio: 'S/ 280.00',
    compatibilidad: 'Hyundai HD78, Kia Hyundai County'
  },
  {
    id: '2',
    slug: 'pastillas-de-freno-sangsin-hi-q',
    nombre: 'Pastillas de Freno Sangsin Hi-Q',
    categoria: 'PASTILLA Y ZAPATA DE FRENO',
    marca: 'Sangsin Brake',
    imagen: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=600&q=80',
    descripcion: 'Pastillas de freno cerámicas ecológicas que garantizan un frenado silencioso y sin emisión de polvo metálico en las ruedas.',
    precio: 'S/ 120.00',
    compatibilidad: 'Hyundai Tucson, Kia Sportage'
  },
  {
    id: '3',
    slug: 'pinon-y-corona-hansang',
    nombre: 'Juego de Piñón y Corona Hansang',
    categoria: 'PIÑON Y PARTE DE CAJA',
    marca: 'Hansang',
    imagen: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80',
    descripcion: 'Conjunto de piñón y corona para transmisión diferencial con mecanizado de alta precisión para transmisión suave de torque.',
    precio: 'S/ 650.00',
    compatibilidad: 'Mitsubishi Fuso Canter, Isuzu NPR'
  }
];

export function getProductoBySlug(slug) {
  return productos.find((p) => p.slug === slug);
}