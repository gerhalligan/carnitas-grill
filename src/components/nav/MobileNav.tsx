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
    <div 
      className="md:hidden py-6 animate-fadeIn"
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}
    >
      <div className="flex flex-col space-y-6">
        <NavLinks className="block" />
        <NavActions 
          onSearchClick={onSearchClick} 
          className="flex-row items-center justify-start flex-wrap gap-4"
        />
      </div>
    </div>
  );
};

export default MobileNav;