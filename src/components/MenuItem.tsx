import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { MenuCategory } from "@/types/database.types";

interface MenuItemProps {
  name: string;
  description: string;
  price: number;
  image: string;
  category: MenuCategory;
}

const MenuItem = ({ name, description, price, image, category }: MenuItemProps) => {
  const [isCustomizing, setIsCustomizing] = useState(false);

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="h-48 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <CardHeader>
        <CardTitle className="text-xl text-carnitas-text">{name}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-2xl font-bold text-carnitas-primary">
          ${price.toFixed(2)}
        </p>
      </CardContent>
      <CardFooter className="flex gap-2">
        <Dialog open={isCustomizing} onOpenChange={setIsCustomizing}>
          <DialogTrigger asChild>
            <Button 
              variant="outline" 
              className="flex-1 border-carnitas-primary text-carnitas-primary hover:bg-carnitas-primary hover:text-white"
            >
              Customize
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Customize Your {name}</DialogTitle>
              <DialogDescription>
                Make it your own! Choose your toppings and extras.
              </DialogDescription>
            </DialogHeader>
            {/* Customization options will be added here */}
          </DialogContent>
        </Dialog>
        <Button 
          className="flex-1 bg-carnitas-primary hover:bg-carnitas-secondary"
          onClick={() => {
            // Add to cart functionality will be implemented here
            console.log(`Added ${name} to cart`);
          }}
        >
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default MenuItem;