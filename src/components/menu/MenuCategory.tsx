import MenuItem from "@/components/MenuItem";
import { MenuCategory as MenuCategoryType } from "@/types/database.types";

interface MenuCategoryProps {
  category: string;
  items: Array<{
    id: string;
    name: string;
    description: string | null;
    price: number;
    image_url: string | null;
    category: MenuCategoryType;
    item_code?: string | null;
  }>;
}

const MenuCategory = ({ category, items }: MenuCategoryProps) => {
  return (
    <div className="space-y-6">
      <h4 className="text-2xl font-bold text-white mb-6 border-b border-white/20 pb-2">
        {category}
      </h4>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 auto-rows-fr">
        {items.map((item) => (
          <MenuItem
            key={item.id}
            name={item.name}
            description={item.description || ""}
            price={item.price}
            image={item.image_url || "/placeholder.svg"}
            category={item.category}
            itemCode={item.item_code}
          />
        ))}
      </div>
    </div>
  );
};

export default MenuCategory;