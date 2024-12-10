import { Facebook, Instagram, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-carnitas-text text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Carnitas</h3>
            <p className="text-gray-300">
              Experience authentic Mexican cuisine with our signature carnitas dishes.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="/menu" className="text-gray-300 hover:text-white transition-colors">
                  Menu
                </a>
              </li>
              <li>
                <a href="/locations" className="text-gray-300 hover:text-white transition-colors">
                  Locations
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              <Facebook className="w-6 h-6 cursor-pointer hover:text-carnitas-primary transition-colors" />
              <Instagram className="w-6 h-6 cursor-pointer hover:text-carnitas-primary transition-colors" />
              <Twitter className="w-6 h-6 cursor-pointer hover:text-carnitas-primary transition-colors" />
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
            <div className="flex flex-col space-y-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
              />
              <Button className="bg-carnitas-primary hover:bg-carnitas-secondary">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2024 Carnitas. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;