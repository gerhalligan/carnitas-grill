import Navbar from "@/components/Navbar";
import MenuSection from "@/components/MenuSection";
import { MenuManagement } from "@/components/MenuManagement";
import Footer from "@/components/Footer";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/lib/supabase";
import { useAuth } from "@/contexts/AuthContext";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import OrderHistory from "@/components/OrderHistory";
import { VouchersDisplay } from "@/components/menu/VouchersDisplay";

const Menu = () => {
  const { user } = useAuth();
  const { data: profile } = useQuery({
    queryKey: ["profile", user?.id],
    queryFn: async () => {
      if (!user?.id) return null;
      const { data, error } = await supabase
        .from("user_profiles")
        .select("*")
        .eq("user_id", user.id)
        .maybeSingle();
        
      if (error && error.code !== 'PGRST116') {
        console.error("Error fetching profile:", error);
        throw error;
      }
      
      return data;
    },
    enabled: !!user?.id,
  });

  const isStaff = profile?.role === 'admin' || profile?.role === 'manager';

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow">
        {user && isStaff ? (
          <Tabs defaultValue="menu" className="w-full pt-48">
            <div className="container mx-auto px-4">
              <TabsList className="mb-8">
                <TabsTrigger value="menu">Menu</TabsTrigger>
                <TabsTrigger value="management">Menu Management</TabsTrigger>
              </TabsList>
              <TabsContent value="menu">
                <MenuSection />
              </TabsContent>
              <TabsContent value="management">
                <MenuManagement />
              </TabsContent>
            </div>
          </Tabs>
        ) : user ? (
          <Tabs defaultValue="menu" className="w-full pt-48">
            <div className="container mx-auto px-4">
              <TabsList className="mb-8">
                <TabsTrigger value="menu">Menu</TabsTrigger>
                <TabsTrigger value="orders">Order History</TabsTrigger>
                <TabsTrigger value="rewards">Rewards</TabsTrigger>
              </TabsList>
              <TabsContent value="menu">
                <MenuSection />
              </TabsContent>
              <TabsContent value="orders">
                <OrderHistory />
              </TabsContent>
              <TabsContent value="rewards">
                <VouchersDisplay />
              </TabsContent>
            </div>
          </Tabs>
        ) : (
          <MenuSection />
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Menu;