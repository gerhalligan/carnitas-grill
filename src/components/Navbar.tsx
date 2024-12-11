import { Menu, Search, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Cart } from "./Cart";
import { useNavigate } from "react-router-dom";
import { SearchCommand } from "./SearchCommand";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="fixed top-0 w-full bg-white shadow-md z-50">
      <SearchCommand open={isSearchOpen} onOpenChange={setIsSearchOpen} />
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <img 
                src="/lovable-uploads/0f38bd79-49bc-4af0-822e-8bb1f010f946.png" 
                alt="Carnitas Mexican Fresh Grill" 
                className="h-12 w-auto"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-carnitas-text hover:text-carnitas-primary transition-colors">
              Home
            </a>
            <a href="/menu" className="text-carnitas-text hover:text-carnitas-primary transition-colors">
              Menu
            </a>
            <a href="/locations" className="text-carnitas-text hover:text-carnitas-primary transition-colors">
              Locations
            </a>
            <a href="/about" className="text-carnitas-text hover:text-carnitas-primary transition-colors">
              About
            </a>
            <div className="flex items-center space-x-4">
              <Search 
                className="w-5 h-5 text-carnitas-text hover:text-carnitas-primary cursor-pointer" 
                onClick={() => setIsSearchOpen(true)}
              />
              <User className="w-5 h-5 text-carnitas-text hover:text-carnitas-primary cursor-pointer" />
              <Cart />
            </div>
            <Button 
              className="bg-carnitas-primary hover:bg-carnitas-secondary text-white"
              onClick={() => navigate('/menu')}
            >
              Order Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 animate-fadeIn">
            <div className="flex flex-col space-y-4">
              <a href="/" className="text-carnitas-text hover:text-carnitas-primary transition-colors">
                Home
              </a>
              <a href="/menu" className="text-carnitas-text hover:text-carnitas-primary transition-colors">
                Menu
              </a>
              <a href="/locations" className="text-carnitas-text hover:text-carnitas-primary transition-colors">
                Locations
              </a>
              <a href="/about" className="text-carnitas-text hover:text-carnitas-primary transition-colors">
                About
              </a>
              <div className="flex items-center space-x-4">
                <Search 
                  className="w-5 h-5 text-carnitas-text cursor-pointer" 
                  onClick={() => setIsSearchOpen(true)}
                />
                <User className="w-5 h-5 text-carnitas-text" />
                <Cart />
              </div>
              <Button 
                className="bg-carnitas-primary hover:bg-carnitas-secondary text-white w-full"
                onClick={() => navigate('/menu')}
              >
                Order Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;