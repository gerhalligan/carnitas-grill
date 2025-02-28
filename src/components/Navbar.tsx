import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { SearchCommand } from "./SearchCommand";
import Logo from "./nav/Logo";
import DesktopNav from "./nav/DesktopNav";
import MobileNav from "./nav/MobileNav";
import { useScroll } from "@/hooks/use-scroll";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const isVisible = useScroll();
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <nav 
      className={`${
        isHomePage 
          ? 'absolute top-0 left-0 right-0' 
          : 'fixed top-0 left-0 right-0'
      } w-full !bg-black/70 shadow-lg z-50 transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}
    >
      <SearchCommand open={isSearchOpen} onOpenChange={setIsSearchOpen} />
      <div className="container mx-auto px-4 relative">
        <div className="flex items-center justify-between h-16 md:h-32">
          <Logo />
          <DesktopNav onSearchClick={() => setIsSearchOpen(true)} />
          
          {/* Mobile Menu Button */}
          <div className="md:hidden ml-auto">
            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-transparent"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-6 w-6 text-white hover:text-carnitas-primary transition-colors" />
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