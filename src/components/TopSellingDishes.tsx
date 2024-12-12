import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useTopSelling } from "@/hooks/use-top-selling";
import { Skeleton } from "@/components/ui/skeleton";
import { useCart } from "@/contexts/CartContext";
import { toast } from "sonner";

const TopSellingDishes = () => {
  const { data: dishes, isLoading } = useTopSelling();
  const { addItem } = useCart();

  const handleAddToCart = (dish: any) => {
    addItem({
      name: dish.name,
      price: dish.price,
      category: dish.category,
    });
    toast.success(`Added ${dish.name} to cart`);
  };

  if (isLoading) {
    return (
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="menu-title mb-12">
            Most Popular Dishes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((i) => (
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
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="menu-title mb-4">
          Most Popular Dishes
        </h2>
        <p className="menu-description mb-12">
          Our customers' favorites, ordered time and time again
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {dishes?.map((dish) => (
            <Card key={dish.id} className="sketch-card">
              <div className="h-48 overflow-hidden">
                <img
                  src={dish.image_url || "/placeholder.svg"}
                  alt={dish.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-2xl font-handwritten text-carnitas-text">{dish.name}</CardTitle>
                <CardDescription className="text-lg">{dish.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-carnitas-primary font-handwritten">€{dish.price.toFixed(2)}</p>
                <p className="text-lg text-gray-500 mt-2 font-handwritten">Ordered {dish.orders_count} times</p>
              </CardContent>
              <CardFooter>
                <Button 
                  className="sketch-button w-full"
                  onClick={() => handleAddToCart(dish)}
                >
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

export default TopSellingDishes;