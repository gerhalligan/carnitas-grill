import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { toast } from "sonner";
import MenuSection from "@/components/MenuSection";
import { useMenuItems } from "@/hooks/use-menu-items";
import Navbar from "@/components/Navbar";
import MenuSectionLoading from "@/components/menu/MenuSectionLoading";

const Menu = () => {
  const { data: menuItems, isLoading } = useMenuItems();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const payment = searchParams.get('payment');
    if (payment === 'success') {
      toast.success('Payment successful! Your order has been placed.');
    } else if (payment === 'cancelled') {
      toast.error('Payment was cancelled.');
    }
  }, [searchParams]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black">
        <Navbar />
        <div className="container mx-auto px-4 py-8 pt-32">
          <h1 className="menu-title text-center mb-12 text-white">Our Menu</h1>
          <MenuSectionLoading />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <div className="container mx-auto px-4 py-8 pt-32">
        <MenuSection />
      </div>
    </div>
  );
};

export default Menu;