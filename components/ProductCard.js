import Link from 'next/link';
import Image from 'next/image';

export default function ProductCard({ producto }) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col group border border-gray-100">
      <div className="relative h-56 w-full bg-gray-50 flex items-center justify-center p-4 overflow-hidden">
        <Image
          src={producto.imagen}
          alt={producto.nombre}
          fill
          className="object-contain p-4 group-hover:scale-110 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <span className="absolute top-3 left-3 bg-blue-900 text-white text-[10px] font-extrabold px-2 py-1 rounded uppercase tracking-wider">
          {producto.marca}
        </span>
      </div>

      <div className="p-5 flex flex-col flex-grow">
        <span className="text-xs text-red-600 font-semibold uppercase tracking-wider mb-1">
          {producto.categoria}
        </span>
        <h3 className="text-base font-bold text-gray-900 line-clamp-2 mb-2 group-hover:text-blue-600 transition-colors">
          {producto.nombre}
        </h3>
        <p className="text-xs text-gray-500 mb-4 line-clamp-2 flex-grow">
          {producto.descripcion}
        </p>

        <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
          <span className="text-xs font-mono text-gray-400">SKU: {producto.codigo}</span>
          <Link
            href={`/productos/${producto.slug}`}
            className="text-xs font-bold text-blue-600 hover:text-blue-800 flex items-center transition"
          >
            Ver Detalle &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}