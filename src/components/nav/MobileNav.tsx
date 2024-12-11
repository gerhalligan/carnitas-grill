import { FC } from 'react';
import NavLinks from './NavLinks';
import NavActions from './NavActions';

interface MobileNavProps {
  isOpen: boolean;
  onSearchClick: () => void;
}

const MobileNav: FC<MobileNavProps> = ({ isOpen, onSearchClick }) => {
  if (!isOpen) return null;

  return (
    <div className="md:hidden py-4 animate-fadeIn">
      <div className="flex flex-col space-y-4">
        <NavLinks className="block" />
        <NavActions 
          onSearchClick={onSearchClick} 
          className="flex-col items-start space-y-4"
        />
      </div>
    </div>
  );
};

export default MobileNav;