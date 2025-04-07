
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-8">Nuestra Misión</h1>
          <p className="text-xl text-gray-600 mb-12">
            Conoce nuestro propósito y cómo buscamos transformar la forma de viajar por Colombia.
          </p>
          
          <div className="text-center py-12">
            <p className="text-lg text-gray-500">
              Próximamente: Historia completa del proyecto, equipo, valores y visión para el futuro.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
