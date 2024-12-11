import Navbar from "@/components/Navbar";
import MenuSection from "@/components/MenuSection";
import { MenuManagement } from "@/components/MenuManagement";

const Menu = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="mt-24">
        <MenuSection />
        <MenuManagement />
      </div>
    </div>
  );
};

export default Menu;