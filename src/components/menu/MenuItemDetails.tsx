import { CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface MenuItemDetailsProps {
  name: string;
  description: string;
  price: number;
  itemCode?: string;
}

const MenuItemDetails = ({ name, description, price, itemCode }: MenuItemDetailsProps) => {
  return (
    <div className="space-y-2">
      <h3 className="text-xl font-semibold text-white group-hover:text-carnitas-primary transition-colors">
        {itemCode && <span className="font-normal text-carnitas-light">{itemCode}. </span>}
        {name}
      </h3>
      <p className="text-gray-300 text-sm line-clamp-2 group-hover:text-gray-200 transition-colors">{description}</p>
      <div className="mt-4">
        <span className="text-xs text-gray-400 block">FROM</span>
        <span className="text-lg font-semibold text-carnitas-primary">€{price.toFixed(2)}</span>
      </div>
    </div>
  );
};

export default MenuItemDetails;