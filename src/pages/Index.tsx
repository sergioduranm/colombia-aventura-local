
import Hero from "@/components/home/Hero";
import LocalExperts from "@/components/home/LocalExperts";
import Experiences from "@/components/home/Experiences";
import MissionStatement from "@/components/home/MissionStatement";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <LocalExperts />
        <Experiences />
        <MissionStatement />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
