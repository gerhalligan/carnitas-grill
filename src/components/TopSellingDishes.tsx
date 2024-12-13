import { Card } from "@/components/ui/card";
import { useTopSelling } from "@/hooks/use-top-selling";
import { Skeleton } from "@/components/ui/skeleton";
import { useCart } from "@/contexts/CartContext";
import { toast } from "sonner";
import { useState } from "react";
import { Plus } from "lucide-react";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import CustomizeDialog from "./menu/CustomizeDialog";
import MenuItemDetails from "./menu/MenuItemDetails";

const TopSellingDishes = () => {
  const { data: dishes, isLoading } = useTopSelling();
  const { addItem } = useCart();
  const [isCustomizing, setIsCustomizing] = useState(false);
  const [currentDish, setCurrentDish] = useState<any>(null);
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>([]);
  const [notes, setNotes] = useState("");

  const handleIngredientToggle = (ingredientId: string) => {
    setSelectedIngredients(current =>
      current.includes(ingredientId)
        ? current.filter(id => id !== ingredientId)
        : [...current, ingredientId]
    );
  };

  const handleAddToCart = () => {
    if (!currentDish) return;

    const removedIngredients = currentDish.ingredients
      ?.filter((ing: any) => !selectedIngredients.includes(ing.id))
      .map((ing: any) => ing.name);

    const customizations = {
      ...(removedIngredients?.length > 0 && { removedIngredients }),
      ...(notes && { notes })
    };

    addItem({
      name: currentDish.name,
      price: currentDish.price,
      category: currentDish.category,
      customizations: Object.keys(customizations).length > 0 ? customizations : undefined,
      ingredients: currentDish.ingredients
    });

    if (removedIngredients?.length > 0) {
      toast.success(`Added ${currentDish.name} to cart without ${removedIngredients.join(', ')}`);
    } else {
      toast.success(`Added ${currentDish.name} to cart`);
    }

    setNotes("");
    setIsCustomizing(false);
    setCurrentDish(null);
  };

  if (isLoading) {
    return (
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="menu-title mb-12">
            Most Popular Dishes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <Card key={i} className="overflow-hidden">
                <div className="h-48">
                  <Skeleton className="w-full h-full" />
                </div>
                <div className="p-6">
                  <Skeleton className="h-6 w-3/4 mb-2" />
                  <Skeleton className="h-4 w-full" />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="menu-title mb-4">
          Most Popular Dishes
        </h2>
        <p className="menu-description mb-12">
          Our customers' favorites, ordered time and time again
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {dishes?.map((dish) => (
            <Card key={dish.id} className="relative border border-gray-200 rounded-lg overflow-hidden bg-white">
              <div className="flex justify-between p-6">
                <div className="flex-1">
                  <MenuItemDetails
                    name={dish.name}
                    description={dish.description || ""}
                    price={dish.price}
                    itemCode={dish.item_code}
                  />
                </div>
                <div className="w-24 h-24 relative ml-4">
                  <img
                    src={dish.image_url || "/placeholder.svg"}
                    alt={dish.name}
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <Dialog 
                    open={isCustomizing && currentDish?.id === dish.id} 
                    onOpenChange={(open) => {
                      setIsCustomizing(open);
                      if (open) {
                        setCurrentDish(dish);
                        setSelectedIngredients(dish.ingredients?.map((ing: any) => ing.id) || []);
                      }
                    }}
                  >
                    <DialogTrigger asChild>
                      <button
                        className="absolute -bottom-3 -right-3 w-10 h-10 bg-[#10151b] rounded-full flex items-center justify-center text-white hover:bg-gray-800 transition-colors"
                      >
                        <Plus className="w-5 h-5" />
                      </button>
                    </DialogTrigger>
                    <CustomizeDialog
                      itemName={dish.name}
                      ingredients={dish.ingredients || []}
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopSellingDishes;