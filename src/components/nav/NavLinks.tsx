import { FC } from 'react';

interface NavLinksProps {
  className?: string;
}

const NavLinks: FC<NavLinksProps> = ({ className = "" }) => {
  return (
    <>
      <a href="/" className={`text-carnitas-text hover:text-carnitas-primary transition-colors ${className}`}>
        Home
      </a>
      <a href="/menu" className={`text-carnitas-text hover:text-carnitas-primary transition-colors ${className}`}>
        Menu
      </a>
      <a href="/locations" className={`text-carnitas-text hover:text-carnitas-primary transition-colors ${className}`}>
        Locations
      </a>
      <a href="/about" className={`text-carnitas-text hover:text-carnitas-primary transition-colors ${className}`}>
        About
      </a>
    </>
  );
};

export default NavLinks;