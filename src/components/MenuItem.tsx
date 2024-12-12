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
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { MenuCategory } from "@/types/database.types";
import { useCart } from "@/contexts/CartContext";
import { toast } from "sonner";
import CustomizeDialog from "./menu/CustomizeDialog";

interface MenuItemProps {
  name: string;
  description: string;
  price: number;
  image: string;
  category: MenuCategory;
  ingredients?: { id: string; name: string; }[];
}

const MenuItem = ({ name, description, price, image, category, ingredients = [] }: MenuItemProps) => {
  const [isCustomizing, setIsCustomizing] = useState(false);
  const { addItem } = useCart();
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>(
    ingredients.map(ing => ing.id)
  );
  const [notes, setNotes] = useState("");

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

    const customizations = {
      ...(removedIngredients.length > 0 && { removedIngredients }),
      ...(notes && { notes })
    };

    addItem({ 
      name, 
      price, 
      category,
      customizations: Object.keys(customizations).length > 0 ? customizations : undefined
    });

    if (removedIngredients.length > 0) {
      toast.success(`Added ${name} to cart without ${removedIngredients.join(', ')}`);
    } else {
      toast.success(`Added ${name} to cart`);
    }

    setNotes("");
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
          <CustomizeDialog
            isOpen={isCustomizing}
            onOpenChange={setIsCustomizing}
            itemName={name}
            ingredients={ingredients}
            selectedIngredients={selectedIngredients}
            onIngredientToggle={handleIngredientToggle}
            notes={notes}
            onNotesChange={setNotes}
            onComplete={handleCustomizationComplete}
          />
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