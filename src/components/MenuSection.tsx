import { useMenuItems } from "@/hooks/use-menu-items";
import MenuItem from "./MenuItem";
import { Skeleton } from "@/components/ui/skeleton";

const MenuSection = () => {
  const { data: menuItems, isLoading } = useMenuItems();

  // Group menu items by section and then by category
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
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-carnitas-text mb-8">
            Our Menu
          </h2>
          <div className="space-y-12">
            {[1, 2, 3].map((section) => (
              <div key={section} className="space-y-6">
                <Skeleton className="h-8 w-48" />
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
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="menu-title text-center mb-12">
          Our Menu
        </h2>
        
        <div className="space-y-16">
          {groupedMenuItems && Object.entries(groupedMenuItems).map(([section, categories]) => (
            <div key={section} className="space-y-8" id={section}>
              <h3 className="text-3xl font-bold text-carnitas-primary border-b-2 border-carnitas-primary pb-2">
                {section}
              </h3>
              
              {Object.entries(categories).map(([category, items]) => (
                <div key={category} className="space-y-6">
                  <h4 className="text-2xl font-semibold text-carnitas-text">
                    {category}
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {items.map((item) => (
                      <MenuItem
                        key={item.id}
                        name={item.name}
                        description={item.description || ""}
                        price={item.price}
                        image={item.image_url || "/placeholder.svg"}
                        category={item.category}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;