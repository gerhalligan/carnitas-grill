import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { MenuCategory } from "@/types/database.types";
import { Button } from "./ui/button";
import { useCart } from "@/contexts/CartContext";

interface MenuItem {
  name: string;
  description: string;
  price: number;
  category: MenuCategory;
  image: string;
}

const menuItems = {
  Tacos: [
    {
      name: "Classic Carnitas Tacos",
      description: "Tender braised pork with cilantro, onions, and lime",
      price: 11.99,
      category: "Tacos" as MenuCategory,
      image: "https://images.unsplash.com/photo-1624300629298-e9de39c13be5?auto=format&fit=crop&q=80"
    },
    {
      name: "Al Pastor Tacos",
      description: "Marinated pork with pineapple, onions, and cilantro",
      price: 12.99,
      category: "Tacos" as MenuCategory,
      image: "https://images.unsplash.com/photo-1599974579688-8dbdd335c77f?auto=format&fit=crop&q=80"
    },
    {
      name: "Fish Tacos",
      description: "Battered fish with cabbage slaw and chipotle crema",
      price: 13.99,
      category: "Tacos" as MenuCategory,
      image: "https://images.unsplash.com/photo-1611250188496-e966043a0629?auto=format&fit=crop&q=80"
    },
  ],
  Bowls: [
    {
      name: "Carnitas Bowl",
      description: "Rice, beans, carnitas, pico de gallo, and guacamole",
      price: 14.99,
      category: "Bowls" as MenuCategory,
      image: "https://images.unsplash.com/photo-1543352634-a1c51d9f1fa7?auto=format&fit=crop&q=80"
    },
  ],
  Burritos: [
    {
      name: "Carnitas Burrito",
      description: "Large flour tortilla filled with carnitas, rice, beans, and salsa",
      price: 12.99,
      category: "Burritos" as MenuCategory,
      image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&q=80"
    },
  ],
  Sides: [
    {
      name: "Fresh Guacamole",
      description: "Fresh avocado dip with tomatoes, onions, and cilantro",
      price: 5.99,
      category: "Sides" as MenuCategory,
      image: "https://images.unsplash.com/photo-1615213612138-4d1195b1c0e9?auto=format&fit=crop&q=80"
    },
  ],
  Drinks: [
    {
      name: "Horchata",
      description: "Traditional Mexican rice drink with cinnamon",
      price: 3.99,
      category: "Drinks" as MenuCategory,
      image: "https://images.unsplash.com/photo-1541658016709-82535e94bc69?auto=format&fit=crop&q=80"
    },
  ],
};

const allItems = Object.values(menuItems).flat();

interface SearchCommandProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export function SearchCommand({ open, onOpenChange }: SearchCommandProps) {
  const navigate = useNavigate();
  const { addItem } = useCart();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        onOpenChange?.(!open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [open, onOpenChange]);

  const handleSelect = (item: MenuItem) => {
    onOpenChange?.(false);
    navigate("/menu");
    // Scroll to the item's category section
    const element = document.getElementById(item.category);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const handleAddToCart = (item: MenuItem, e: React.MouseEvent) => {
    e.stopPropagation();
    addItem({ name: item.name, price: item.price, category: item.category });
  };

  return (
    <CommandDialog 
      open={open} 
      onOpenChange={onOpenChange} 
      className="max-w-3xl md:w-full w-[90vw] mx-auto"
    >
      <CommandInput placeholder="Search menu items..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Menu Items">
          {allItems.map((item) => (
            <CommandItem
              key={item.name}
              value={item.name}
              onSelect={() => handleSelect(item)}
              className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-4 p-4"
            >
              <img 
                src={item.image} 
                alt={item.name} 
                className="w-full md:w-16 h-48 md:h-16 object-cover rounded-md"
              />
              <div className="flex-1 w-full">
                <div className="flex flex-col md:flex-row justify-between items-start w-full">
                  <div className="space-y-2 w-full md:w-auto">
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                    <div className="flex flex-col md:flex-row gap-2 mt-2">
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={(e) => handleSelect(item)}
                        className="text-carnitas-primary border-carnitas-primary hover:bg-carnitas-primary hover:text-white w-full md:w-auto"
                      >
                        View Item
                      </Button>
                      <Button 
                        size="sm"
                        onClick={(e) => handleAddToCart(item, e)}
                        className="bg-carnitas-yellow text-carnitas-text hover:bg-yellow-400 w-full md:w-auto"
                      >
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                  <span className="text-carnitas-primary font-bold mt-2 md:mt-0">€{item.price}</span>
                </div>
              </div>
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
}