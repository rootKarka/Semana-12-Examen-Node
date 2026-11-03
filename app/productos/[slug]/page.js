import productosData from '@/data/productos';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const producto = productosData.find((p) => p.slug === slug);

  if (!producto) {
    return { title: 'Producto no encontrado | IKOMI PERÚ' };
  }

  return {
    title: `${producto.nombre} | IKOMI PERÚ`,
    description: producto.descripcion,
  };
}

export default async function ProductoDetallePage({ params }) {
  const { slug } = await params;
  const producto = productosData.find((p) => p.slug === slug);

  if (!producto) {
    notFound();
  }

  return (
    <div className="bg-gray-100 py-12 min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <Link
            href="/productos"
            className="text-sm font-semibold text-blue-600 hover:underline flex items-center gap-1"
          >
            &larr; Volver a todos los productos
          </Link>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-2 border border-gray-200">
          <div className="relative h-80 md:h-full bg-gray-50 min-h-[350px] p-6 flex items-center justify-center">
            <Image
              src={producto.imagen}
              alt={producto.nombre}
              fill
              className="object-contain p-6"
              priority
            />
          </div>

          <div className="p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-red-100 text-red-700 text-xs font-bold px-2.5 py-1 rounded-full uppercase">
                  {producto.categoria}
                </span>
                <span className="bg-blue-100 text-blue-800 text-xs font-bold px-2.5 py-1 rounded-full uppercase">
                  {producto.marca}
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-4">
                {producto.nombre}
              </h1>

              <p className="text-sm font-mono text-gray-500 mb-6">
                Código SKU: <span className="font-bold text-gray-800">{producto.codigo}</span>
              </p>

              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                {producto.descripcion}
              </p>
            </div>

            <div className="pt-6 border-t border-gray-100">
              <a
                href={`https://wa.me/51985068416?text=Hola,%20quisiera%20cotizar%20el%20producto%20${encodeURIComponent(
                  producto.nombre
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg text-center block shadow transition"
              >
                Cotizar por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}