import SectionTitle from '@/components/SectionTitle';
import ProductCard from '@/components/ProductCard';
import productosData from '@/data/productos';

export const metadata = {
  title: 'Productos | IKOMI PERÚ S.R.L.',
  description: 'Catálogo completo de repuestos para embragues, frenos y transmisiones.',
};

export default function ProductosPage() {
  const categorias = [
    'TODAS LAS CATEGORIAS',
    'DISCO, PLATO Y COLLARÍN DE EMBRAGUE',
    'PASTILLA Y ZAPATA DE FRENO',
    'PIÑÓN Y PARTE DE CAJA',
  ];

  return (
    <div className="bg-gray-100 py-12 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="NUESTROS PRODUCTOS"
          subtitle="Los mejores productos y precios."
        />

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categorias.map((cat, idx) => (
            <button
              key={idx}
              className={`px-4 py-2 text-xs font-bold rounded-md transition ${
                idx === 0
                  ? 'bg-red-600 text-white shadow'
                  : 'bg-white text-gray-700 hover:bg-gray-200 border border-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {productosData.map((producto) => (
            <ProductCard key={producto.id} producto={producto} />
          ))}
        </div>
      </div>
    </div>
  );
}