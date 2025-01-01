import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { toast } from "sonner";
import MenuSection from "@/components/menu/MenuSection";
import { useMenu } from "@/hooks/use-menu";
import Navbar from "@/components/Navbar";

const Menu = () => {
  const { data: menu, isLoading } = useMenu();
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
      <div className="min-h-screen bg-carnitas-light">
        <Navbar />
        <div className="container mx-auto px-4 py-8">
          <h1 className="menu-title text-center mb-12">Our Menu</h1>
          <MenuSection.Loading />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-carnitas-light">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="menu-title text-center mb-12">Our Menu</h1>
        {menu?.map((section) => (
          <MenuSection key={section.name} section={section} />
        ))}
      </div>
    </div>
  );
};

export default Menu;