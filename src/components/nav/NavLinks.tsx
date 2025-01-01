import { FC } from 'react';
import { Link } from 'react-router-dom';

interface NavLinksProps {
  className?: string;
}

const NavLinks: FC<NavLinksProps> = ({ className = "" }) => {
  return (
    <>
      <Link to="/" className={`font-handwritten text-lg text-white font-bold hover:text-carnitas-light transition-colors ${className}`}>
        Home
      </Link>
      <Link to="/menu" className={`font-handwritten text-lg text-white font-bold hover:text-carnitas-light transition-colors ${className}`}>
        Menu
      </Link>
    </>
  );
};

export default NavLinks;