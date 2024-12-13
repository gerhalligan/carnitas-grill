import { useMenuItems } from "@/hooks/use-menu-items";
import { VouchersDisplay } from "./menu/VouchersDisplay";
import { useAuth } from "@/contexts/AuthContext";
import MenuSectionLoading from "./menu/MenuSectionLoading";
import MenuSectionHeader from "./menu/MenuSectionHeader";
import MenuCategory from "./menu/MenuCategory";

const MenuSection = () => {
  const { data: menuItems, isLoading } = useMenuItems();
  const { user } = useAuth();

  const groupedMenuItems = menuItems?.reduce((acc, item) => {
    if (!acc[item.section]) {
      acc[item.section] = {};
    }
    if (!acc[item.section][item.category]) {
      acc[item.section][item.category] = [];
    }
    acc[item.section][item.category].push(item);
    return acc;
  }, {} as Record<string, Record<string, typeof menuItems>>);

  if (isLoading) {
    return (
      <section className="pt-48 pb-16 bg-mexican-pattern bg-repeat min-h-screen relative">
        <img 
          src="/lovable-uploads/01931afb-b9ee-4af4-9198-bcf355268898.png"
          alt="Carnitas Mexican Fresh Grill"
          className="absolute top-34 left-1/2 transform -translate-x-1/2 w-[40%] h-auto"
        />
        <div className="container mx-auto px-8 py-12 bg-carnitas-blackTransparent rounded-lg shadow-lg relative z-10">
          <h2 className="text-4xl font-bold text-center text-white mb-8">
            Our Menu
          </h2>
          <MenuSectionLoading />
        </div>
      </section>
    );
  }

  return (
    <section className="pt-48 pb-16 bg-mexican-pattern bg-repeat min-h-screen relative">
      <img 
        src="/lovable-uploads/01931afb-b9ee-4af4-9198-bcf355268898.png"
        alt="Carnitas Mexican Fresh Grill"
        className="absolute top-34 left-1/2 transform -translate-x-1/2 w-[40%] h-auto"
      />
      <div className="container mx-auto px-8 py-12 bg-carnitas-blackTransparent rounded-lg shadow-lg relative z-10">
        {user && <VouchersDisplay />}
        <h2 className="menu-title text-center mb-12 text-white">
          Our Menu
        </h2>
        
        <div className="space-y-16">
          {groupedMenuItems && Object.entries(groupedMenuItems).map(([section, categories]) => (
            <div key={section} className="space-y-8" id={section}>
              <MenuSectionHeader section={section} />
              {Object.entries(categories).map(([category, items]) => (
                <MenuCategory 
                  key={category}
                  category={category}
                  items={items}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;