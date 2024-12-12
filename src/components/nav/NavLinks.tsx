import { FC } from 'react';

interface NavLinksProps {
  className?: string;
}

const NavLinks: FC<NavLinksProps> = ({ className = "" }) => {
  return (
    <>
      <a href="/" className={`font-handwritten text-lg text-carnitas-text hover:text-carnitas-primary transition-colors ${className}`}>
        Home
      </a>
      <a href="/menu" className={`font-handwritten text-lg text-carnitas-text hover:text-carnitas-primary transition-colors ${className}`}>
        Menu
      </a>
      <a href="/locations" className={`font-handwritten text-lg text-carnitas-text hover:text-carnitas-primary transition-colors ${className}`}>
        Locations
      </a>
      <a href="/about" className={`font-handwritten text-lg text-carnitas-text hover:text-carnitas-primary transition-colors ${className}`}>
        About
      </a>
    </>
  );
};

export default NavLinks;