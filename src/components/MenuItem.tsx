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
  DialogFooter,
} from "@/components/ui/dialog";
import { Checkbox } from "@/components/ui/checkbox";
import { MenuCategory } from "@/types/database.types";
import { useCart } from "@/contexts/CartContext";
import { toast } from "sonner";

interface MenuItemProps {
  name: string;
  description: string;
  price: number;
  image: string;
  category: MenuCategory;
}

interface Ingredient {
  id: string;
  name: string;
}

const MenuItem = ({ name, description, price, image, category }: MenuItemProps) => {
  const [isCustomizing, setIsCustomizing] = useState(false);
  const { addItem } = useCart();
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>([]);

  // This would ideally come from your database, but for now we'll hardcode some ingredients
  const getDefaultIngredients = (category: MenuCategory, itemName: string): Ingredient[] => {
    if (category === "Tacos") {
      return [
        { id: "tortilla", name: "Corn Tortilla" },
        { id: "meat", name: "Carnitas" },
        { id: "onion", name: "Diced Onions" },
        { id: "cilantro", name: "Fresh Cilantro" },
        { id: "lime", name: "Lime Wedges" },
        { id: "salsa", name: "Salsa Verde" },
      ];
    }
    // Add more categories as needed
    return [];
  };

  const ingredients = getDefaultIngredients(category, name);

  const handleIngredientToggle = (ingredientId: string) => {
    setSelectedIngredients(current =>
      current.includes(ingredientId)
        ? current.filter(id => id !== ingredientId)
        : [...current, ingredientId]
    );
  };

  const handleAddToCart = () => {
    const removedIngredients = ingredients
      .filter(ing => !selectedIngredients.includes(ing.id))
      .map(ing => ing.name);

    const customizations = removedIngredients.length > 0
      ? { removedIngredients }
      : undefined;

    addItem({ 
      name, 
      price, 
      category,
      customizations 
    });

    if (removedIngredients.length > 0) {
      toast.success(`Added ${name} to cart without ${removedIngredients.join(', ')}`);
    } else {
      toast.success(`Added ${name} to cart`);
    }
  };

  const handleCustomizationComplete = () => {
    handleAddToCart();
    setIsCustomizing(false);
  };

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
          €{price.toFixed(2)}
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
              <DialogTitle>Customize your {name}</DialogTitle>
              <DialogDescription>
                Select ingredients you'd like to remove from your {name}.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              {ingredients.map((ingredient) => (
                <div key={ingredient.id} className="flex items-center space-x-2">
                  <Checkbox
                    id={ingredient.id}
                    checked={!selectedIngredients.includes(ingredient.id)}
                    onCheckedChange={() => handleIngredientToggle(ingredient.id)}
                  />
                  <label
                    htmlFor={ingredient.id}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {ingredient.name}
                  </label>
                </div>
              ))}
            </div>
            <DialogFooter>
              <Button onClick={handleCustomizationComplete}>
                Add to Cart
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
        <Button 
          className="flex-1 bg-carnitas-primary hover:bg-carnitas-secondary"
          onClick={handleAddToCart}
        >
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default MenuItem;