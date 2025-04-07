
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const Locals = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-8">Conoce Locales</h1>
          <p className="text-xl text-gray-600 mb-12">
            Conecta con colombianos apasionados que te mostrarán lo mejor de su región y cultura.
          </p>
          
          <div className="text-center py-12">
            <p className="text-lg text-gray-500">
              Próximamente: Perfiles detallados de anfitriones locales, sistema de búsqueda y filtrado por región, especialidad y disponibilidad.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Locals;
