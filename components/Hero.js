import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative bg-gray-900 text-white min-h-[480px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-gray-900/80 to-black/90 z-10" />
      
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-40 scale-105"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1586191582056-a15cd3de3d34?q=80&w=1600&auto=format&fit=crop')"
        }}
      />

      <div className="relative z-20 max-w-5xl mx-auto px-6 text-center space-y-6 py-16">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight leading-tight">
          REPUESTOS EN GENERAL <br />
          <span className="text-blue-400">para camiones</span> de todas las marcas.
        </h1>
        
        <p className="text-lg sm:text-xl text-gray-300 font-medium max-w-3xl mx-auto">
          Somos una empresa importadora de repuestos originales y alternativos de alta calidad de Korea y Japón.
        </p>

        <div className="flex flex-wrap justify-center gap-4 pt-4">
          <Link
            href="/productos"
            className="px-8 py-3.5 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg shadow-lg transition duration-300 transform hover:-translate-y-0.5"
          >
            Ver Catálogo de Productos
          </Link>
          <Link
            href="/contacto"
            className="px-8 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg shadow-lg transition duration-300 transform hover:-translate-y-0.5"
          >
            Contáctenos
          </Link>
        </div>
      </div>
    </section>
  );
}