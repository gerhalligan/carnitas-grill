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
        <CardTitle className="text-xl text-carnitas-text">{name}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-2xl font-bold text-carnitas-primary">
          €{price.toFixed(2)}
        </p>
      </CardContent>
    </>
  );
};

export default MenuItemDetails;