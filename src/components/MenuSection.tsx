import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MenuItem from "./MenuItem";
import { MenuCategory } from "@/types/database.types";

const categories: MenuCategory[] = [
  "Tacos",
  "Bowls",
  "Burritos",
  "Sides",
  "Drinks",
];

const MenuSection = () => {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>("Tacos");

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-carnitas-text mb-8">
          Our Menu
        </h2>
        
        <Tabs defaultValue="Tacos" className="w-full">
          <TabsList className="w-full justify-start mb-8 overflow-x-auto">
            {categories.map((category) => (
              <TabsTrigger
                key={category}
                value={category}
                onClick={() => setActiveCategory(category)}
                className="px-6 py-3 text-lg"
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>

          {categories.map((category) => (
            <TabsContent key={category} value={category} className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <MenuItem
                  name="Classic Carnitas"
                  description="Tender braised pork with cilantro, onions, and lime"
                  price={12.99}
                  image="/lovable-uploads/9a0ec54d-860d-4799-9591-a0a3e6bc660f.png"
                  category={category}
                />
                {/* More MenuItems will be added dynamically from the database */}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default MenuSection;