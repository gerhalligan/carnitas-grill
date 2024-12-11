import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { MenuCategory } from "@/types/database.types";

interface MenuItem {
  name: string;
  description: string;
  price: number;
  category: MenuCategory;
}

const menuItems = {
  Tacos: [
    {
      name: "Classic Carnitas Tacos",
      description: "Tender braised pork with cilantro, onions, and lime",
      price: 11.99,
      category: "Tacos" as MenuCategory,
    },
    {
      name: "Al Pastor Tacos",
      description: "Marinated pork with pineapple, onions, and cilantro",
      price: 12.99,
      category: "Tacos" as MenuCategory,
    },
    {
      name: "Fish Tacos",
      description: "Battered fish with cabbage slaw and chipotle crema",
      price: 13.99,
      category: "Tacos" as MenuCategory,
    },
  ],
  Bowls: [
    {
      name: "Carnitas Bowl",
      description: "Rice, beans, carnitas, pico de gallo, and guacamole",
      price: 14.99,
      category: "Bowls" as MenuCategory,
    },
  ],
  Burritos: [
    {
      name: "Carnitas Burrito",
      description: "Large flour tortilla filled with carnitas, rice, beans, and salsa",
      price: 12.99,
      category: "Burritos" as MenuCategory,
    },
  ],
  Sides: [
    {
      name: "Fresh Guacamole",
      description: "Fresh avocado dip with tomatoes, onions, and cilantro",
      price: 5.99,
      category: "Sides" as MenuCategory,
    },
  ],
  Drinks: [
    {
      name: "Horchata",
      description: "Traditional Mexican rice drink with cinnamon",
      price: 3.99,
      category: "Drinks" as MenuCategory,
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

  return (
    <CommandDialog open={open} onOpenChange={onOpenChange}>
      <CommandInput placeholder="Search menu items..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Menu Items">
          {allItems.map((item) => (
            <CommandItem
              key={item.name}
              value={item.name}
              onSelect={() => handleSelect(item)}
            >
              <div className="flex justify-between w-full">
                <span>{item.name}</span>
                <span className="text-muted-foreground">€{item.price}</span>
              </div>
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
}