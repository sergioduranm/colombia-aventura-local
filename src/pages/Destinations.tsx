
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const Destinations = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-8">Explorar Destinos</h1>
          <p className="text-xl text-gray-600 mb-12">
            Descubre lugares mágicos en Colombia, desde playas paradisíacas hasta montañas imponentes y ciudades históricas.
          </p>
          
          <div className="text-center py-12">
            <p className="text-lg text-gray-500">
              Próximamente: Catálogo completo de destinos de Colombia con filtros y búsqueda avanzada.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Destinations;
