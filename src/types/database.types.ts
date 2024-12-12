export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image_url: string;
  available: boolean;
  customization_options?: CustomizationOption[];
  created_at: string;
}

export interface CustomizationOption {
  id: string;
  name: string;
  options: string[];
  required: boolean;
  max_selections: number;
}

export interface Order {
  id: string;
  user_id: string;
  items: OrderItem[];
  total: number;
  status: 'pending' | 'preparing' | 'ready' | 'completed' | 'cancelled';
  pickup_time?: string;
  created_at: string;
}

export interface OrderItem {
  menu_item_id: string;
  quantity: number;
  customizations: Record<string, string[]>;
  subtotal: number;
}

export interface Location {
  id: string;
  name: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  phone: string;
  hours: BusinessHours;
  coordinates: {
    latitude: number;
    longitude: number;
  };
}

export interface BusinessHours {
  monday: string;
  tuesday: string;
  wednesday: string;
  thursday: string;
  friday: string;
  saturday: string;
  sunday: string;
}

export interface UserProfile {
  id: string;
  user_id: string;
  first_name: string;
  last_name: string;
  phone: string;
  favorite_location_id?: string;
  dietary_preferences?: string[];
  created_at: string;
}

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  category: MenuCategory;
  customizations?: {
    removedIngredients?: string[];
    notes?: string;
  };
  ingredients?: { id: string; name: string; }[];
}

export type MenuCategory = "Tacos" | "Bowls" | "Burritos" | "Sides" | "Drinks";
