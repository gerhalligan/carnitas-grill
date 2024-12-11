import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { SearchCommand } from "./SearchCommand";
import Logo from "./nav/Logo";
import DesktopNav from "./nav/DesktopNav";
import MobileNav from "./nav/MobileNav";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white shadow-md z-50">
      <SearchCommand open={isSearchOpen} onOpenChange={setIsSearchOpen} />
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-24">
          <Logo />
          <DesktopNav onSearchClick={() => setIsSearchOpen(true)} />
          
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

        <MobileNav 
          isOpen={isMenuOpen}
          onSearchClick={() => setIsSearchOpen(true)}
        />
      </div>
    </nav>
  );
};

export default Navbar;