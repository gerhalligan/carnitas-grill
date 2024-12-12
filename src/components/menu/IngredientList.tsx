import { Checkbox } from "@/components/ui/checkbox";

interface IngredientListProps {
  ingredients: { id: string; name: string; }[];
  selectedIngredients: string[];
  onIngredientToggle: (id: string) => void;
}

const IngredientList = ({ 
  ingredients, 
  selectedIngredients, 
  onIngredientToggle 
}: IngredientListProps) => {
  return (
    <>
      {ingredients.map((ingredient) => (
        <div key={ingredient.id} className="flex items-center space-x-2">
          <Checkbox
            id={ingredient.id}
            checked={selectedIngredients.includes(ingredient.id)}
            onCheckedChange={() => onIngredientToggle(ingredient.id)}
          />
          <label
            htmlFor={ingredient.id}
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            {ingredient.name}
          </label>
        </div>
      ))}
    </>
  );
};

export default IngredientList;