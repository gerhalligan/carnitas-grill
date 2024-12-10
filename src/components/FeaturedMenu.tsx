import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const menuItems = [
  {
    title: "Classic Carnitas Tacos",
    description: "Tender pulled pork with cilantro, onions, and lime",
    price: "$12.99",
    image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?auto=format&fit=crop&q=80",
  },
  {
    title: "Carnitas Bowl",
    description: "Rice, beans, carnitas, and all your favorite toppings",
    price: "$14.99",
    image: "https://images.unsplash.com/photo-1543352634-a1c51d9f1fa7?auto=format&fit=crop&q=80",
  },
  {
    title: "Family Feast",
    description: "Feeds 4-6: 2lbs carnitas, tortillas, sides, and salsas",
    price: "$49.99",
    image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&q=80",
  },
];

const FeaturedMenu = () => {
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
          {menuItems.map((item) => (
            <Card key={item.title} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl text-carnitas-text">{item.title}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-carnitas-primary">{item.price}</p>
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