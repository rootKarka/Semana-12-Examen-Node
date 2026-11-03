import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center bg-gray-900 text-white px-6 text-center py-16">
      <h1 className="text-8xl font-black text-red-600 mb-2">404</h1>
      <h2 className="text-3xl font-bold mb-4">Página No Encontrada</h2>
      <p className="text-gray-400 max-w-md mb-8 text-sm">
        Lo sentimos, la ruta que estás buscando no existe o ha sido movida temporalmente.
      </p>
      <Link
        href="/"
        className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition"
      >
        Volver a la Página Principal
      </Link>
    </div>
  );
}