import Navbar from "@/components/Navbar";
import MenuSection from "@/components/MenuSection";
import { MenuManagement } from "@/components/MenuManagement";
import Footer from "@/components/Footer";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/lib/supabase";
import { useAuth } from "@/contexts/AuthContext";

const OurMenu = () => {
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

  return (
    <div className="flex flex-col min-h-screen bg-mexican-pattern bg-repeat">
      <Navbar />
      <main className="flex-grow pt-32">
        <div className="container mx-auto px-4">
          <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg py-8">
            <MenuSection />
            {profile?.is_admin && <MenuManagement />}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default OurMenu;