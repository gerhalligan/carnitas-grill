import { useState } from "react";
import { Card, CardFooter } from "@/components/ui/card";
import { MenuCategory } from "@/types/database.types";
import { useCart } from "@/contexts/CartContext";
import { toast } from "sonner";
import MenuItemDetails from "./menu/MenuItemDetails";
import MenuItemActions from "./menu/MenuItemActions";
import { Plus } from "lucide-react";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import CustomizeDialog from "./menu/CustomizeDialog";

interface MenuItemProps {
  name: string;
  description: string;
  price: number;
  image: string;
  category: MenuCategory;
  itemCode?: string;
  ingredients?: { id: string; name: string; }[];
}

const MenuItem = ({ 
  name, 
  description, 
  price, 
  image, 
  category,
  itemCode,
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
    <Card className="relative border border-gray-200 rounded-lg overflow-hidden bg-white">
      <div className="flex justify-between p-6">
        <div className="flex-1">
          <MenuItemDetails
            name={name}
            description={description}
            price={price}
            itemCode={itemCode}
          />
        </div>
        <div className="w-24 h-24 relative ml-4">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-lg"
          />
          <Dialog open={isCustomizing} onOpenChange={setIsCustomizing}>
            <DialogTrigger asChild>
              <button
                className="absolute -bottom-3 -right-3 w-10 h-10 bg-[#10151b] rounded-full flex items-center justify-center text-white hover:bg-gray-800 transition-colors"
              >
                <Plus className="w-5 h-5" />
              </button>
            </DialogTrigger>
            <CustomizeDialog
              itemName={name}
              ingredients={ingredients}
              selectedIngredients={selectedIngredients}
              onIngredientToggle={handleIngredientToggle}
              notes={notes}
              onNotesChange={setNotes}
              onComplete={handleAddToCart}
            />
          </Dialog>
        </div>
      </div>
    </Card>
  );
};

export default MenuItem;