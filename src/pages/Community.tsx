
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const Community = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-8">Comunidad y Blog</h1>
          <p className="text-xl text-gray-600 mb-12">
            Historias, consejos prácticos y experiencias compartidas por viajeros y locales.
          </p>
          
          <div className="text-center py-12">
            <p className="text-lg text-gray-500">
              Próximamente: Blog colaborativo con historias de viaje, recomendaciones de seguridad y consejos prácticos.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Community;
