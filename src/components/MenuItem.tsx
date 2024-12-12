import { useState } from "react";
import { Card, CardFooter } from "@/components/ui/card";
import { MenuCategory } from "@/types/database.types";
import { useCart } from "@/contexts/CartContext";
import { toast } from "sonner";
import MenuItemDetails from "./menu/MenuItemDetails";
import MenuItemActions from "./menu/MenuItemActions";

interface MenuItemProps {
  name: string;
  description: string;
  price: number;
  image: string;
  category: MenuCategory;
  ingredients?: { id: string; name: string; }[];
}

const MenuItem = ({ 
  name, 
  description, 
  price, 
  image, 
  category,
  ingredients = [
    { id: "1", name: "Lettuce" },
    { id: "2", name: "Tomatoes" },
    { id: "3", name: "Onions" },
    { id: "4", name: "Cilantro" },
  ]
}: MenuItemProps) => {
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
      customizations: Object.keys(customizations).length > 0 ? customizations : undefined,
      ingredients
    });

    if (removedIngredients.length > 0) {
      toast.success(`Added ${name} to cart without ${removedIngredients.join(', ')}`);
    } else {
      toast.success(`Added ${name} to cart`);
    }

    setNotes("");
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
      <MenuItemDetails
        name={name}
        description={description}
        price={price}
      />
      <CardFooter>
        <MenuItemActions
          name={name}
          ingredients={ingredients}
          isCustomizing={isCustomizing}
          selectedIngredients={selectedIngredients}
          notes={notes}
          onCustomizeClick={() => setIsCustomizing(true)}
          onCustomizeClose={() => setIsCustomizing(false)}
          onIngredientToggle={handleIngredientToggle}
          onNotesChange={setNotes}
          onAddToCart={handleAddToCart}
        />
      </CardFooter>
    </Card>
  );
};

export default MenuItem;