import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'IKOMI PERÚ S.R.L. | Repuestos de Korea y Japón',
  description: 'Empresa importadora y comercializadora de repuestos para todo tipo de vehículos con calidad y a precios de mercado.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="flex flex-col min-h-screen bg-gray-100 font-sans antialiased text-gray-900">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}