import Navbar from "@/components/Navbar";
import MenuSection from "@/components/MenuSection";

const Menu = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-16">
        <MenuSection />
      </div>
    </div>
  );
};

export default Menu;