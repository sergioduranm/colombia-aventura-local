
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const Help = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-8">Ayuda y Soporte</h1>
          <p className="text-xl text-gray-600 mb-12">
            Encuentra respuestas a tus dudas o contacta con nuestro equipo de soporte.
          </p>
          
          <div className="text-center py-12">
            <p className="text-lg text-gray-500">
              Próximamente: FAQs, sistema de tickets de soporte y contacto directo con el equipo.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Help;
