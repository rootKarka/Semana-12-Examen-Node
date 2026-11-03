import SectionTitle from '@/components/SectionTitle';
import Image from 'next/image';

export const metadata = {
  title: 'Nosotros | IKOMI PERÚ S.R.L.',
  description: 'Conoce más sobre nuestro equipo, almacén, tienda e infraestructura.',
};

export default function NosotrosPage() {
  const secciones = [
    {
      titulo: 'Equipo',
      imagen: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop',
    },
    {
      titulo: 'Almacen',
      imagen: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop',
    },
    {
      titulo: 'Tienda',
      imagen: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=800&auto=format&fit=crop',
    },
    {
      titulo: 'Empresa',
      imagen: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop',
    },
  ];

  return (
    <div className="py-12 bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="NOSOTROS"
          subtitle="Conoce las instalaciones y el equipo humano detrás de IKOMI PERÚ."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          {secciones.slice(0, 3).map((sec, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
              <div className="bg-gray-700 text-white text-center py-3 font-bold text-lg">
                {sec.titulo}
              </div>
              <div className="relative h-64 w-full">
                <Image src={sec.imagen} alt={sec.titulo} fill className="object-cover" />
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-md mx-auto mt-8">
          <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
            <div className="bg-gray-700 text-white text-center py-3 font-bold text-lg">
              {secciones[3].titulo}
            </div>
            <div className="relative h-64 w-full">
              <Image src={secciones[3].imagen} alt={secciones[3].titulo} fill className="object-cover" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}