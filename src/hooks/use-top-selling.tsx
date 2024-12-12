import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { MenuItem } from "@/types/menu.types";

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

      return data as MenuItem[];
    },
  });
}