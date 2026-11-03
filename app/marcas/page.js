export const metadata = {
  title: 'Marcas | IKOMI PERÚ S.R.L.',
  description: 'Marcas reconocidas especializadas en repuestos para vehículos.',
};

export default function MarcasPage() {
  const marcas = [
    {
      nombre: 'SB SANGSIN BRAKE',
      descripcion:
        'Fabricante líder en la industria Coreana de piezas y partes para frenos de fricción. Cuenta con más de 6 plantas a nivel mundial.',
    },
    {
      nombre: 'HANSANG',
      descripcion:
        'La marca HANSANG maneja una amplia gama de repuestos de parte de caja como piñón, corona, deslizantes, planetarios y bronces.',
    },
    {
      nombre: 'Mando',
      descripcion:
        'Mando Corporation pertenece al grupo Halla Holding y cuenta con 20 fábricas en el mundo y 16 centros de investigación.',
    },
    {
      nombre: 'TCIC',
      descripcion:
        'Tae Chul Industrial Co. fabricante de bombas y bombines de freno y embrague con más de 70 años de experiencia.',
    },
    {
      nombre: 'PHC Valeo',
      descripcion:
        'Valeo Pyeong Hwa International es una compañía con más de 90 años de creación socio de los principales fabricantes.',
    },
    {
      nombre: 'YULIM',
      descripcion:
        'Establecida en 1998, Yulim High-Tech produce y exporta piezas para sistemas de suspensión y dirección.',
    },
  ];

  return (
    <div className="bg-[#181818] text-white py-16 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold tracking-wide uppercase">MARCAS</h1>
          <div className="w-16 h-1 bg-red-600 mx-auto my-3 rounded"></div>
          <p className="text-gray-300 max-w-3xl mx-auto text-sm sm:text-base">
            Contamos con las marcas más reconocidas en el mercado nacional e internacional.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {marcas.map((marca, idx) => (
            <div
              key={idx}
              className="bg-white text-gray-900 rounded-xl p-6 shadow-xl border border-gray-200 flex flex-col justify-between transition hover:-translate-y-1"
            >
              <div>
                <h3 className="text-xl font-black text-blue-900 mb-4 border-b pb-2">
                  {marca.nombre}
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {marca.descripcion}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}