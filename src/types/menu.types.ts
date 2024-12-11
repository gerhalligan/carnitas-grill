import { Json } from "@/integrations/supabase/types";

export interface MenuItem {
  id: string;
  name: string;
  description: string | null;
  price: number;
  category: string;
  image_url: string | null;
  available: boolean;
  customization_options: Json | null;
  created_at: string;
}

export interface MenuItemFormData {
  id?: string;
  name: string;
  description: string | null;
  price: number;
  category: string;
  image_url: string | null;
  available: boolean;
  customization_options?: Json | null;
}

export interface CustomizationOption {
  name: string;
  options: string[];
  required: boolean;
  max_selections: number;
}