
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import TravelPlanner from "@/components/travel/TravelPlanner";

const MyTrip = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-8">Mi Viaje</h1>
          <p className="text-xl text-gray-600 mb-12">
            Tu espacio personal para organizar y gestionar tus planes de viaje por Colombia.
          </p>
          
          <TravelPlanner />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MyTrip;
