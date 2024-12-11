import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MenuSection from "@/components/MenuSection";
import About from "@/components/About";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-32"> {/* Increased from pt-24 to pt-32 */}
        <Hero />
        <MenuSection />
        <About />
      </main>
      <Footer />
    </div>
  );
};

export default Index;