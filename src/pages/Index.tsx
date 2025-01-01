import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TopSellingDishes from "@/components/TopSellingDishes";
import About from "@/components/About";
import Footer from "@/components/Footer";
import LocationMap from "@/components/LocationMap";
import { Card } from "@/components/ui/card";
import { MapPin, Phone, Clock } from "lucide-react";
import { useEffect } from "react";
import { supabase } from "@/lib/supabase";

const Index = () => {
  useEffect(() => {
    // Initialize Supabase client and handle any potential connection issues
    const initializeSupabase = async () => {
      try {
        const { data, error } = await supabase.from('locations').select('*');
        if (error) {
          console.error('Error fetching locations:', error.message);
        }
      } catch (error) {
        console.error('Supabase initialization error:', error);
      }
    };

    initializeSupabase();
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-carnitas-light">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <TopSellingDishes />
        <About />
        
        {/* Locations Section */}
        <section id="locations" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="menu-title text-center mb-12">Our Location</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <Card className="p-6">
                  <h3 className="text-2xl font-semibold text-carnitas-text mb-4 font-handwritten">Contact Information</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <MapPin className="w-5 h-5 text-carnitas-primary mt-1" />
                      <div>
                        <p className="font-medium font-handwritten text-xl">Address</p>
                        <p className="text-gray-600 font-handwritten text-lg">
                          Main Street<br />
                          Swords, Co. Dublin
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <Phone className="w-5 h-5 text-carnitas-primary mt-1" />
                      <div>
                        <p className="font-medium font-handwritten text-xl">Phone</p>
                        <p className="text-gray-600 font-handwritten text-lg">(415) 555-0123</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <Clock className="w-5 h-5 text-carnitas-primary mt-1" />
                      <div>
                        <p className="font-medium font-handwritten text-xl">Hours</p>
                        <div className="text-gray-600 font-handwritten text-lg">
                          <p>Monday - Thursday: 5:00 PM - 11:00 PM</p>
                          <p>Friday - Saturday: 5:00 PM - 12:00 PM</p>
                          <p>Sunday: 5:00 PM - 11:00 PM</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <h3 className="text-2xl font-semibold text-carnitas-text mb-4 font-handwritten">Additional Information</h3>
                  <p className="text-gray-600 font-handwritten text-lg">
                    We offer takeout services. For large orders or catering inquiries, 
                    please call us at least 24 hours in advance. We're located in the heart of Swords, 
                    with street parking available and public transportation nearby.
                  </p>
                </Card>
              </div>

              <div className="space-y-6">
                <LocationMap />
                <Card className="p-6">
                  <h3 className="text-2xl font-semibold text-carnitas-text mb-4 font-handwritten">Parking & Transportation</h3>
                  <p className="text-gray-600 font-handwritten text-lg">
                    Street parking is available on Swords Main Street and surrounding areas. We're also accessible 
                    via numerous bus lines.
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;