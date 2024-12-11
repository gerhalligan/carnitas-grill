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

  const menuItems = {
    Tacos: [
      {
        name: "Classic Carnitas Tacos",
        description: "Tender braised pork with cilantro, onions, and lime",
        price: 11.99,
        image: "https://images.unsplash.com/photo-1624300629298-e9de39c13be5?auto=format&fit=crop&q=80"
      },
      {
        name: "Al Pastor Tacos",
        description: "Marinated pork with pineapple, onions, and cilantro",
        price: 12.99,
        image: "https://images.unsplash.com/photo-1599974579688-8dbdd335c77f?auto=format&fit=crop&q=80"
      },
      {
        name: "Fish Tacos",
        description: "Battered fish with cabbage slaw and chipotle crema",
        price: 13.99,
        image: "https://images.unsplash.com/photo-1611250188496-e966043a0629?auto=format&fit=crop&q=80"
      }
    ],
    Bowls: [
      {
        name: "Carnitas Bowl",
        description: "Rice, beans, carnitas, pico de gallo, and guacamole",
        price: 14.99,
        image: "https://images.unsplash.com/photo-1543352634-a1c51d9f1fa7?auto=format&fit=crop&q=80"
      }
    ],
    Burritos: [
      {
        name: "Carnitas Burrito",
        description: "Large flour tortilla filled with carnitas, rice, beans, and salsa",
        price: 12.99,
        image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&q=80"
      }
    ],
    Sides: [
      {
        name: "Fresh Guacamole",
        description: "Fresh avocado dip with tomatoes, onions, and cilantro",
        price: 5.99,
        image: "https://images.unsplash.com/photo-1615213612138-4d1195b1c0e9?auto=format&fit=crop&q=80"
      }
    ],
    Drinks: [
      {
        name: "Horchata",
        description: "Traditional Mexican rice drink with cinnamon",
        price: 3.99,
        image: "https://images.unsplash.com/photo-1541658016709-82535e94bc69?auto=format&fit=crop&q=80"
      }
    ]
  };

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
                {menuItems[category].map((item, index) => (
                  <MenuItem
                    key={index}
                    name={item.name}
                    description={item.description}
                    price={item.price}
                    image={item.image}
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