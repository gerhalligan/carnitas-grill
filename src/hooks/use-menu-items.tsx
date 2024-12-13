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
  section: string;
  item_code?: string | null;
  ingredients?: { id: string; name: string; }[];
  orders_count?: number;
  customization_options?: Record<string, any> | null;
  created_at?: string;
}

export function useMenuItems() {
  return useQuery({
    queryKey: ["menuItems"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("menu_items")
        .select("*")
        .eq("available", true)
        .order("section")
        .order("category");

      if (error) {
        throw error;
      }

      // Transform the ingredients data to ensure correct typing
      return data.map(item => ({
        ...item,
        ingredients: Array.isArray(item.ingredients) 
          ? item.ingredients.map((ing: any) => ({
              id: ing.id || String(Math.random()),
              name: ing.name || ing
            }))
          : undefined
      })) as MenuItem[];
    },
  });
}