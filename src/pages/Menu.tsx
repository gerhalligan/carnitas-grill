import Navbar from "@/components/Navbar";
import MenuSection from "@/components/MenuSection";
import { MenuManagement } from "@/components/MenuManagement";

const Menu = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-16">
        <MenuSection />
        <MenuManagement />
      </div>
    </div>
  );
};

export default Menu;