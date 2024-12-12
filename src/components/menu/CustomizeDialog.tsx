import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import IngredientList from "./IngredientList";

interface CustomizeDialogProps {
  itemName: string;
  ingredients: { id: string; name: string; }[];
  selectedIngredients: string[];
  onIngredientToggle: (id: string) => void;
  notes: string;
  onNotesChange: (notes: string) => void;
  onComplete: () => void;
}

const CustomizeDialog = ({
  itemName,
  ingredients,
  selectedIngredients,
  onIngredientToggle,
  notes,
  onNotesChange,
  onComplete,
}: CustomizeDialogProps) => {
  return (
    <DialogContent className="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle>Customize your {itemName}</DialogTitle>
        <DialogDescription>
          Select ingredients you'd like to include in your {itemName}.
        </DialogDescription>
      </DialogHeader>
      <div className="grid gap-4 py-4">
        <IngredientList
          ingredients={ingredients}
          selectedIngredients={selectedIngredients}
          onIngredientToggle={onIngredientToggle}
        />
        <div className="space-y-2">
          <label
            htmlFor="notes"
            className="text-sm font-medium leading-none"
          >
            Special Instructions
          </label>
          <Textarea
            id="notes"
            placeholder="Add any special instructions here..."
            value={notes}
            onChange={(e) => onNotesChange(e.target.value)}
            className="resize-none"
          />
        </div>
      </div>
      <DialogFooter>
        <Button onClick={onComplete}>
          Add to Cart
        </Button>
      </DialogFooter>
    </DialogContent>
  );
};

export default CustomizeDialog;