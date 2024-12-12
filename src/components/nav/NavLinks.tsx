import { FC } from 'react';

interface NavLinksProps {
  className?: string;
}

const NavLinks: FC<NavLinksProps> = ({ className = "" }) => {
  return (
    <>
      <a href="/" className={`font-sans text-2xl text-white font-bold hover:text-carnitas-light transition-colors ${className}`}>
        Home
      </a>
      <a href="/menu" className={`font-sans text-2xl text-white font-bold hover:text-carnitas-light transition-colors ${className}`}>
        Menu
      </a>
    </>
  );
};

export default NavLinks;