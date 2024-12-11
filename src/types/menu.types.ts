export interface MenuItem {
  id: string;
  name: string;
  description: string | null;
  price: number;
  category: string;
  image_url: string | null;
  available: boolean;
  customization_options: CustomizationOption[] | null;
  created_at: string;
}

export interface CustomizationOption {
  name: string;
  options: string[];
  required: boolean;
  max_selections: number;
}

export interface MenuItemFormData {
  name: string;
  description: string;
  price: number;
  category: string;
  image_url: string;
  available: boolean;
  customization_options?: CustomizationOption[];
}