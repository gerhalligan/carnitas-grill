import { Facebook, Instagram, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-carnitas-text relative">
      <div className="absolute inset-0 mexican-pattern-bg"></div>
      <div className="container mx-auto px-4 py-12 relative">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-sketch text-white mb-4">Carnitas</h3>
            <p className="font-handwritten text-xl text-gray-300">
              Experience authentic Mexican cuisine with our signature carnitas dishes.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-sketch text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 font-handwritten text-xl">
              <li>
                <a href="/" className="text-gray-300 hover:text-carnitas-yellow transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/menu" className="text-gray-300 hover:text-carnitas-yellow transition-colors">
                  Menu
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-sketch text-white mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              <Facebook className="w-6 h-6 cursor-pointer text-gray-300 hover:text-carnitas-yellow transition-colors" />
              <Instagram className="w-6 h-6 cursor-pointer text-gray-300 hover:text-carnitas-yellow transition-colors" />
              <Twitter className="w-6 h-6 cursor-pointer text-gray-300 hover:text-carnitas-yellow transition-colors" />
            </div>
          </div>
          <div>
            <h4 className="text-xl font-sketch text-white mb-4">Newsletter</h4>
            <div className="flex flex-col space-y-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 font-handwritten text-xl"
              />
              <Button className="sketch-button bg-carnitas-yellow text-carnitas-text hover:bg-yellow-400 text-xl">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 mt-8 pt-8 text-center text-gray-300 font-handwritten text-xl">
          <p>&copy; 2024 Carnitas. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;