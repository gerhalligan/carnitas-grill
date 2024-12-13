import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { MenuItem } from "./use-menu-items";

export function useTopSelling() {
  return useQuery({
    queryKey: ["topSelling"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("menu_items")
        .select("*")
        .eq("available", true)
        .order("orders_count", { ascending: false })
        .limit(4);

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