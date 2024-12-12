import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { MenuCategory } from "@/types/database.types";

export interface MenuItem {
  id: string;
  name: string;
  description: string | null;
  price: number;
  category: MenuCategory;
  image_url: string | null;
  available: boolean;
}

export function useMenuItems() {
  return useQuery({
    queryKey: ["menuItems"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("menu_items")
        .select("*")
        .eq("available", true)
        .order("category");

      if (error) {
        throw error;
      }

      return data as MenuItem[];
    },
  });
}