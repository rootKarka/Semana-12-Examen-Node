export const metadata = {
  title: 'Servicios | IKOMI PERÚ S.R.L.',
  description: 'Servicios de ventas, asesoría, delivery y productos garantizados.',
};

export default function ServiciosPage() {
  const servicios = [
    {
      titulo: 'Ventas',
      descripcion:
        'Venta de los mejores repuestos de partes de motor, cajas, transmisiones, piñones, coronas y trenes fijos de las marcas de Korea y Japón. A los mejores precios del mercado.',
      icono: (
        <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      ),
    },
    {
      titulo: 'Asesoría',
      descripcion:
        'Le brindamos una asesoría personalizada acerca de nuestros productos, a elegir el mejor repuesto para su movilidad.',
      icono: (
        <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      ),
    },
    {
      titulo: 'Delivery',
      descripcion:
        'Compras sin salir de casa, realizamos entregas a domicilio en el menor tiempo posible.',
      icono: (
        <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
    },
    {
      titulo: 'Productos',
      descripcion:
        'Contamos con las mejores marcas y calidad de productos del mercado.',
      icono: (
        <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
    },
  ];

  return (
    <div className="bg-[#181818] text-white py-16 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold tracking-wide uppercase">SERVICIOS</h1>
          <div className="w-16 h-1 bg-red-600 mx-auto my-3 rounded"></div>
          <p className="text-gray-300 text-lg">Estamos listos para atenderte.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {servicios.map((serv, index) => (
            <div
              key={index}
              className="bg-[#242424] p-8 rounded-xl border border-gray-800 shadow-lg flex items-start space-x-5 transition hover:border-red-600"
            >
              <div className="p-3 bg-red-950/40 rounded-lg flex-shrink-0">{serv.icono}</div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2 underline decoration-red-600 underline-offset-4">
                  {serv.titulo}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">{serv.descripcion}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}