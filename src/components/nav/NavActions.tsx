import { FC } from 'react';
import { Search, User } from 'lucide-react';
import { Cart } from '../Cart';
import { Button } from '../ui/button';
import { useNavigate } from 'react-router-dom';

interface NavActionsProps {
  onSearchClick: () => void;
  className?: string;
}

const NavActions: FC<NavActionsProps> = ({ onSearchClick, className = "" }) => {
  const navigate = useNavigate();

  return (
    <div className={`flex items-center space-x-4 ${className}`}>
      <Search 
        className="w-5 h-5 text-carnitas-text hover:text-carnitas-primary cursor-pointer" 
        onClick={onSearchClick}
      />
      <User className="w-5 h-5 text-carnitas-text hover:text-carnitas-primary cursor-pointer" />
      <Cart />
      <Button 
        className="bg-carnitas-primary hover:bg-carnitas-secondary text-white"
        onClick={() => navigate('/menu')}
      >
        Order Now
      </Button>
    </div>
  );
};

export default NavActions;