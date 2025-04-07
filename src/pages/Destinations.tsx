
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Destinations = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-8 text-primary">Experiencias es nuestra prioridad</h1>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Nos estamos enfocando en brindarte las mejores experiencias en Colombia
            con guías locales y actividades auténticas.
          </p>
          
          <div className="mt-8">
            <Link to="/experiences">
              <Button className="bg-brand-primary hover:bg-brand-primary/90 px-8 py-3 text-base">
                Explorar experiencias
              </Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Destinations;
