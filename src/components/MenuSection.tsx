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
      <section className="pt-24 pb-24 bg-mexican-pattern bg-fixed bg-cover bg-center min-h-screen relative before:content-[''] before:absolute before:inset-0 before:bg-white before:opacity-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
          <h2 className="text-4xl font-bold text-center text-white mb-8">
            Our Menu
          </h2>
          <MenuSectionLoading />
        </div>
      </section>
    );
  }

  return (
    <section className="pt-24 pb-24 bg-mexican-pattern bg-fixed bg-cover bg-center min-h-screen relative before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-b from-white/50 to-white/70">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-black/80 backdrop-blur-sm rounded-lg shadow-2xl relative z-10">
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