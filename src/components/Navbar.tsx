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
    <nav className="fixed top-0 w-full bg-carnitas-light border-b-2 border-black shadow-[0_2px_0_0_theme(colors.carnitas.text)] z-50">
      <div className="absolute inset-0 mexican-pattern-bg"></div>
      <SearchCommand open={isSearchOpen} onOpenChange={setIsSearchOpen} />
      <div className="container mx-auto px-4 relative">
        <div className="flex items-center justify-between h-24">
          <Logo />
          <DesktopNav onSearchClick={() => setIsSearchOpen(true)} />
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-transparent"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-6 w-6 text-carnitas-text hover:text-carnitas-primary transition-colors" />
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