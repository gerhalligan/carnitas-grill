import Navbar from "@/components/Navbar";
import MenuSection from "@/components/MenuSection";
import { MenuManagement } from "@/components/MenuManagement";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/lib/supabase";
import { useAuth } from "@/contexts/AuthContext";

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

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="mt-32">
        <MenuSection />
        {profile?.is_admin && <MenuManagement />}
      </div>
    </div>
  );
};

export default Menu;