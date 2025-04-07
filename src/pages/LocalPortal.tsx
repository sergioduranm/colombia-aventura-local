
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const LocalPortal = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-8">Portal para Locales</h1>
          <p className="text-xl text-gray-600 mb-12">
            Espacio exclusivo para anfitriones y guías locales que quieren compartir su Colombia.
          </p>
          
          <div className="text-center py-12">
            <p className="text-lg text-gray-500">
              Próximamente: Sistema de registro, creación de perfiles, gestión de experiencias y reservas.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LocalPortal;
