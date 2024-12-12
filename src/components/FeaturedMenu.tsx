import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useMenuItems } from "@/hooks/use-menu-items";
import { Skeleton } from "@/components/ui/skeleton";

const FeaturedMenu = () => {
  const { data: menuItems, isLoading } = useMenuItems();

  const featuredItems = menuItems?.slice(0, 3) || [];

  if (isLoading) {
    return (
      <section className="py-20 bg-carnitas-light">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-carnitas-text mb-4">
            Featured Menu
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Discover our most popular dishes
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="overflow-hidden">
                <div className="h-48">
                  <Skeleton className="w-full h-full" />
                </div>
                <CardHeader>
                  <Skeleton className="h-6 w-3/4" />
                  <Skeleton className="h-4 w-full mt-2" />
                </CardHeader>
                <CardContent>
                  <Skeleton className="h-8 w-24" />
                </CardContent>
                <CardFooter>
                  <Skeleton className="h-10 w-full" />
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-carnitas-light">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-carnitas-text mb-4">
          Featured Menu
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Discover our most popular dishes
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredItems.map((item) => (
            <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 overflow-hidden">
                <img
                  src={item.image_url || "/placeholder.svg"}
                  alt={item.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl text-carnitas-text">{item.name}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-carnitas-primary">€{item.price.toFixed(2)}</p>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-carnitas-primary hover:bg-carnitas-secondary">
                  Add to Order
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedMenu;