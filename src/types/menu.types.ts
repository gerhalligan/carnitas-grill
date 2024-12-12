export interface MenuItem {
  id: string;
  name: string;
  description?: string | null;
  price: number;
  category: string;
  image_url?: string | null;
  available: boolean;
  customization_options?: Record<string, any> | null;
  ingredients?: string[];
  orders_count?: number;
}

export interface MenuItemFormData {
  id?: string;
  name: string;
  description?: string | null;
  price: number;
  category: string;
  image_url?: string | null;
  available: boolean;
  customization_options?: Record<string, any> | null;
}

export interface CustomizationOption {
  name: string;
  options: string[];
  required: boolean;
  max_selections: number;
}