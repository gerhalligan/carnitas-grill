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
      <h3 className="text-xl font-semibold text-[#10151b]">
        {itemCode && <span className="font-normal">{itemCode}. </span>}
        {name}
      </h3>
      <p className="text-gray-600 text-sm line-clamp-2">{description}</p>
      <div className="mt-4">
        <span className="text-xs text-gray-500 block">FROM</span>
        <span className="text-lg font-semibold">€{price.toFixed(2)}</span>
      </div>
    </div>
  );
};

export default MenuItemDetails;