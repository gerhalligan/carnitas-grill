export interface MenuItem {
  id: string;
  name: string;
  description?: string;
  price: number;
  category: string;
  image_url?: string;
  available?: boolean;
  customization_options?: Record<string, any>;
  ingredients?: string[];
  orders_count?: number;
}