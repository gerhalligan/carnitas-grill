import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MenuItem from "./MenuItem";
import { MenuCategory } from "@/types/database.types";
import { useMenuItems } from "@/hooks/use-menu-items";
import { Skeleton } from "@/components/ui/skeleton";

const categories: MenuCategory[] = [
  "Tacos",
  "Bowls",
  "Burritos",
  "Sides",
  "Drinks",
];

const MenuSection = () => {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>("Tacos");
  const { data: menuItems, isLoading } = useMenuItems();

  const groupedMenuItems = menuItems?.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {} as Record<string, typeof menuItems>);

  if (isLoading) {
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-carnitas-text mb-8">
            Our Menu
          </h2>
          
          <Tabs defaultValue="Tacos" className="w-full">
            <TabsList className="w-full justify-start mb-8">
              {categories.map((category) => (
                <TabsTrigger
                  key={category}
                  value={category}
                  className="px-6 py-3 text-lg"
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="space-y-4">
                  <Skeleton className="h-48 w-full" />
                  <Skeleton className="h-6 w-3/4" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-10 w-full" />
                </div>
              ))}
            </div>
          </Tabs>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-carnitas-text mb-8">
          Our Menu
        </h2>
        
        <Tabs defaultValue="Tacos" className="w-full">
          <TabsList className="w-full justify-start mb-8">
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
            <TabsContent key={category} value={category} className="mt-6" id={category}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {groupedMenuItems?.[category]?.map((item) => (
                  <MenuItem
                    key={item.id}
                    name={item.name}
                    description={item.description || ""}
                    price={item.price}
                    image={item.image_url || "/placeholder.svg"}
                    category={category}
                  />
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default MenuSection;