import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Users, Award, Heart } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 pt-24 pb-16">
        <h1 className="text-4xl font-bold text-carnitas-text mb-8">About Carnitas</h1>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold text-carnitas-text">Our Story</h2>
            <p className="text-gray-600 leading-relaxed">
              Founded in 2010, Carnitas Mexican Fresh Grill began with a simple mission: to bring authentic Mexican flavors to the heart of San Francisco. Our journey started with our signature dish - tender, flavorful carnitas prepared using a generations-old family recipe.
            </p>
            <p className="text-gray-600 leading-relaxed">
              What began as a small family-owned taqueria has grown into a beloved local institution, serving thousands of satisfied customers while maintaining the same dedication to quality and authenticity that we started with.
            </p>
          </div>
          <div className="relative h-[400px]">
            <img
              src="https://images.unsplash.com/photo-1514852451047-f8e1d6c8e99a?auto=format&fit=crop&q=80"
              alt="Chef preparing carnitas"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card className="p-6 text-center">
            <Users className="w-12 h-12 text-carnitas-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-carnitas-text mb-3">Our Team</h3>
            <p className="text-gray-600">
              Our dedicated team of chefs and staff work tirelessly to ensure every meal is prepared with care and served with a smile.
            </p>
          </Card>

          <Card className="p-6 text-center">
            <Award className="w-12 h-12 text-carnitas-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-carnitas-text mb-3">Quality First</h3>
            <p className="text-gray-600">
              We use only the finest ingredients, sourcing locally whenever possible, to create authentic Mexican dishes that delight our customers.
            </p>
          </Card>

          <Card className="p-6 text-center">
            <Heart className="w-12 h-12 text-carnitas-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-carnitas-text mb-3">Community</h3>
            <p className="text-gray-600">
              We're proud to be part of the San Francisco community, supporting local events and giving back whenever we can.
            </p>
          </Card>
        </div>

        <div className="bg-carnitas-light rounded-lg p-8">
          <h2 className="text-3xl font-semibold text-carnitas-text mb-6 text-center">Our Values</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-carnitas-text mb-3">Authenticity</h3>
              <p className="text-gray-600">
                Every dish we serve stays true to traditional Mexican recipes while incorporating fresh, local ingredients.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-carnitas-text mb-3">Sustainability</h3>
              <p className="text-gray-600">
                We're committed to environmentally friendly practices, from our packaging to our food sourcing.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;