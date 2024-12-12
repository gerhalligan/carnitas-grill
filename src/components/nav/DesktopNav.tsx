import { FC } from 'react';
import NavLinks from './NavLinks';
import NavActions from './NavActions';

interface DesktopNavProps {
  onSearchClick: () => void;
}

const DesktopNav: FC<DesktopNavProps> = ({ onSearchClick }) => {
  return (
    <div className="hidden md:flex items-center space-x-12">
      <NavLinks />
      <NavActions onSearchClick={onSearchClick} />
    </div>
  );
};

export default DesktopNav;