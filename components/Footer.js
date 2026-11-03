'use client';

import Link from 'next/link';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#121212] text-white relative pt-12 pb-8 border-t border-gray-800">
      
      {/* 1. Tarjetas de Contacto Destacadas en el Pie de Página */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Tarjeta Dirección */}
          <div className="bg-white text-gray-900 rounded-xl p-6 shadow-xl text-center transition duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 mx-auto mb-3 bg-red-50 text-red-600 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
            </div>
            <h4 className="text-lg font-bold text-gray-800 mb-2">Dirección</h4>
            <p className="text-xs text-gray-600 font-medium">Avenida Nicolás Ayllón 3384</p>
            <p className="text-xs text-gray-600">Carretera Central - Paradero Rayovac</p>
            <p className="text-xs text-gray-600">Lima - Ate</p>
          </div>

          {/* Tarjeta Correo */}
          <div className="bg-white text-gray-900 rounded-xl p-6 shadow-xl text-center transition duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 mx-auto mb-3 bg-red-50 text-red-600 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
            </div>
            <h4 className="text-lg font-bold text-gray-800 mb-2">Correo</h4>
            <p className="text-xs text-gray-600 font-medium">ventas@ikomiperu.com</p>
            <p className="text-xs text-gray-600">ventas@ikomiperu.com</p>
          </div>

          {/* Tarjeta Teléfonos */}
          <div className="bg-white text-gray-900 rounded-xl p-6 shadow-xl text-center transition duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 mx-auto mb-3 bg-red-50 text-red-600 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
              </svg>
            </div>
            <h4 className="text-lg font-bold text-gray-800 mb-2">Teléfonos</h4>
            <p className="text-xs text-gray-600 font-medium">985 068 416</p>
            <p className="text-xs text-gray-600">981 453 306</p>
          </div>

        </div>
      </div>

      {/* 2. Sección Principal de Información y Enlaces */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 border-t border-gray-800 pt-8">
        
        {/* Columna Izquierda: Información Corporativa */}
        <div className="space-y-4">
          <h3 className="text-xl font-black text-white tracking-wide">IKOMI PERU</h3>
          <p className="text-sm text-gray-400 leading-relaxed max-w-md">
            Empresa importadora y comercializadora de repuestos para todo tipo de vehículos con calidad y a precios de mercado.
          </p>

          {/* Redes Sociales */}
          <div className="flex space-x-3 pt-2">
            {['twitter', 'facebook', 'instagram', 'skype', 'linkedin'].map((social) => (
              <a
                key={social}
                href="#"
                aria-label={social}
                className="w-8 h-8 rounded bg-gray-800 hover:bg-blue-600 flex items-center justify-center text-gray-300 hover:text-white transition duration-200"
              >
                <span className="capitalize text-xs font-bold">{social[0].toUpperCase()}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Columna Derecha: Links Rápidos */}
        <div className="md:justify-self-end">
          <h4 className="text-lg font-bold text-white mb-4 border-b border-red-600 inline-block pb-1">
            Links
          </h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <Link href="/" className="hover:text-yellow-400 transition flex items-center">
                <span className="mr-2 text-xs">🏠</span> Inicio
              </Link>
            </li>
            <li>
              <Link href="/nosotros" className="hover:text-yellow-400 transition flex items-center">
                <span className="mr-2 text-xs">🏢</span> Nosotros
              </Link>
            </li>
            <li>
              <Link href="/servicios" className="hover:text-yellow-400 transition flex items-center">
                <span className="mr-2 text-xs">💼</span> Servicios
              </Link>
            </li>
            <li>
              <Link href="/productos" className="hover:text-yellow-400 transition flex items-center">
                <span className="mr-2 text-xs">🔧</span> Producto
              </Link>
            </li>
            <li>
              <Link href="/marcas" className="hover:text-yellow-400 transition flex items-center">
                <span className="mr-2 text-xs">🛡️</span> Marcas
              </Link>
            </li>
            <li>
              <Link href="/contacto" className="hover:text-yellow-400 transition flex items-center">
                <span className="mr-2 text-xs">👤</span> Contáctenos
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* 3. Barra Inferior de Copyright */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-gray-800 pt-6 text-xs text-gray-400 text-center sm:text-left">
        <p>Copyright © 2026 <span className="text-blue-400 underline cursor-pointer">Grupo IKOMI PERU</span></p>
      </div>

      {/* 4. Botones Flotantes (WhatsApp + Ir Arriba) */}
      <div className="fixed bottom-6 right-6 flex flex-col space-y-3 z-50">
        <a
          href="https://wa.me/51985068416"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center shadow-2xl transition duration-300 transform hover:scale-110"
          aria-label="Contactar por WhatsApp"
        >
          <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
          </svg>
        </a>

        <button
          onClick={scrollToTop}
          className="w-10 h-10 bg-red-600 hover:bg-red-700 text-white rounded flex items-center justify-center shadow-xl transition duration-300 hover:scale-105"
          aria-label="Ir arriba"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 15l7-7 7 7" />
          </svg>
        </button>
      </div>
    </footer>
  );
}