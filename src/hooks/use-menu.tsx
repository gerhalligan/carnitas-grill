import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { MenuItem, MenuItemFormData } from "@/types/menu.types";
import { toast } from "sonner";

export function useMenu() {
  const queryClient = useQueryClient();

  const { data: menuItems, isLoading } = useQuery({
    queryKey: ["menuItems"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("menu_items")
        .select("*")
        .order("category", { ascending: true });

      if (error) {
        toast.error("Failed to fetch menu items");
        throw error;
      }

      return data as MenuItem[];
    },
  });

  const createMenuItem = useMutation({
    mutationFn: async (newItem: MenuItemFormData) => {
      const { data, error } = await supabase
        .from("menu_items")
        .insert([newItem])
        .select()
        .single();

      if (error) {
        toast.error("Failed to create menu item");
        throw error;
      }

      toast.success("Menu item created successfully");
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["menuItems"] });
    },
  });

  const updateMenuItem = useMutation({
    mutationFn: async ({ id, ...updateData }: MenuItemFormData & { id: string }) => {
      const { data, error } = await supabase
        .from("menu_items")
        .update(updateData)
        .eq("id", id)
        .select()
        .single();

      if (error) {
        toast.error("Failed to update menu item");
        throw error;
      }

      toast.success("Menu item updated successfully");
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["menuItems"] });
    },
  });

  const deleteMenuItem = useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase
        .from("menu_items")
        .delete()
        .eq("id", id);

      if (error) {
        toast.error("Failed to delete menu item");
        throw error;
      }

      toast.success("Menu item deleted successfully");
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["menuItems"] });
    },
  });

  return {
    menuItems,
    isLoading,
    createMenuItem,
    updateMenuItem,
    deleteMenuItem,
  };
}