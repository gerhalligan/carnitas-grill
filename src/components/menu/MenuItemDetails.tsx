import { CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface MenuItemDetailsProps {
  name: string;
  description: string;
  price: number;
}

const MenuItemDetails = ({ name, description, price }: MenuItemDetailsProps) => {
  return (
    <>
      <CardHeader>
        <CardTitle className="font-sketch text-xl text-carnitas-text">{name}</CardTitle>
        <CardDescription className="font-handwritten text-lg">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="font-handwritten text-2xl font-bold text-carnitas-primary">
          €{price.toFixed(2)}
        </p>
      </CardContent>
    </>
  );
};

export default MenuItemDetails;