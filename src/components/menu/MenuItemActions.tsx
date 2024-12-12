import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { MenuCategory } from "@/types/database.types";
import CustomizeDialog from "./CustomizeDialog";

interface MenuItemActionsProps {
  name: string;
  ingredients: { id: string; name: string; }[];
  isCustomizing: boolean;
  selectedIngredients: string[];
  notes: string;
  onCustomizeClick: () => void;
  onCustomizeClose: () => void;
  onIngredientToggle: (id: string) => void;
  onNotesChange: (notes: string) => void;
  onAddToCart: () => void;
}

const MenuItemActions = ({
  name,
  ingredients,
  isCustomizing,
  selectedIngredients,
  notes,
  onCustomizeClick,
  onCustomizeClose,
  onIngredientToggle,
  onNotesChange,
  onAddToCart,
}: MenuItemActionsProps) => {
  return (
    <div className="flex gap-2 w-full">
      <Dialog open={isCustomizing} onOpenChange={(open) => open ? onCustomizeClick() : onCustomizeClose()}>
        <DialogTrigger asChild>
          <Button 
            variant="outline" 
            className="flex-1 sketch-button bg-white text-carnitas-primary hover:bg-white"
          >
            Customize
          </Button>
        </DialogTrigger>
        <CustomizeDialog
          itemName={name}
          ingredients={ingredients}
          selectedIngredients={selectedIngredients}
          onIngredientToggle={onIngredientToggle}
          notes={notes}
          onNotesChange={onNotesChange}
          onComplete={onAddToCart}
        />
      </Dialog>
      <Button 
        className="flex-1 sketch-button"
        onClick={onAddToCart}
      >
        Add to Cart
      </Button>
    </div>
  );
};

export default MenuItemActions;