import Hero from '@/components/Hero';
import SectionTitle from '@/components/SectionTitle';
import ProductCard from '@/components/ProductCard';
import productosData from '@/data/productos';
import Link from 'next/link';

export const metadata = {
  title: 'IKOMI PERÚ S.R.L. | Inicio',
  description: 'Empresa importadora y comercializadora de repuestos para todo tipo de vehículos.',
};

export default function HomePage() {
  const productosDestacados = productosData.slice(0, 3);

  return (
    <div>
      <Hero />

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Productos Destacados"
            subtitle="Ofrecemos componentes de alta precisión para embrague, frenos y transmisión."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            {productosDestacados.map((producto) => (
              <ProductCard key={producto.id} producto={producto} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/productos"
              className="inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition"
            >
              Ver Todos los Productos
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}