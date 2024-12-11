import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LocationMap from "@/components/LocationMap";
import { Card } from "@/components/ui/card";
import { MapPin, Phone, Clock } from "lucide-react";

const Locations = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 mt-24">
        <h1 className="text-4xl font-bold text-carnitas-text mb-8">Our Location</h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <Card className="p-6">
              <h2 className="text-2xl font-semibold text-carnitas-text mb-4">Contact Information</h2>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-carnitas-primary mt-1" />
                  <div>
                    <p className="font-medium">Address</p>
                    <p className="text-gray-600">
                      Main Street<br />
                      Swords, Co. Dublin
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-carnitas-primary mt-1" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-gray-600">(415) 555-0123</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-carnitas-primary mt-1" />
                  <div>
                    <p className="font-medium">Hours</p>
                    <div className="text-gray-600">
                      <p>Monday - Thursday: 5:00 PM - 11:00 PM</p>
                      <p>Friday - Saturday: 5:00 PM - 12:00 PM</p>
                      <p>Sunday: 5:00 PM - 11:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h2 className="text-2xl font-semibold text-carnitas-text mb-4">Additional Information</h2>
              <p className="text-gray-600">
                We offer takeout services. For large orders or catering inquiries, 
                please call us at least 24 hours in advance. We're located in the heart of Swords, 
                with street parking available and public transportation nearby.
              </p>
            </Card>
          </div>

          <div className="space-y-6">
            <LocationMap />
            <Card className="p-6">
              <h2 className="text-2xl font-semibold text-carnitas-text mb-4">Parking & Transportation</h2>
              <p className="text-gray-600">
                Street parking is available onSwords Main Street and surrounding areas. We're also accessible 
                via numerous bus lines.
              </p>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Locations;