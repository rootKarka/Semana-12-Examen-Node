import SectionTitle from '@/components/SectionTitle';
import ContactForm from '@/components/ContactForm';

export const metadata = {
  title: 'Contáctenos | IKOMI PERÚ S.R.L.',
  description: 'Comunícate con nuestros asesores de ventas o visítanos en Ate.',
};

export default function ContactoPage() {
  return (
    <div className="bg-gray-100 py-12 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="CONTÁCTENOS"
          subtitle="Llene el formulario y un asesor se pondrá en contacto lo más pronto posible."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10 items-start">
          <div className="bg-white p-4 rounded-2xl shadow-lg border border-gray-200">
            <h3 className="text-lg font-bold text-gray-800 mb-3 px-2">Ubicación de nuestra Sede</h3>
            <div className="w-full h-[400px] rounded-xl overflow-hidden relative">
              <iframe
                title="Mapa de IKOMI PERU"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.8847051052697!2d-76.9535!3d-12.0515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDAzJzA1LjQiUyA3NsKwNTcnMTI2LjAiVw!5e0!3m2!1ses-419!2spe!4v1620000000000!5m2!1ses-419!2spe"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}