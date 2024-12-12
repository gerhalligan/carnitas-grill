import { FC } from 'react';
import { Search, User, LogOut } from 'lucide-react';
import { Cart } from '../Cart';
import { Button } from '../ui/button';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/lib/supabase';
import { toast } from 'sonner';

interface NavActionsProps {
  onSearchClick: () => void;
  className?: string;
}

const NavActions: FC<NavActionsProps> = ({ onSearchClick, className = "" }) => {
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleAuthClick = () => {
    if (user) {
      supabase.auth.signOut().then(() => {
        toast.success("Logged out successfully");
        navigate("/");
      });
    } else {
      navigate("/auth");
    }
  };

  return (
    <div className={`flex items-center space-x-4 ${className}`}>
      <Search 
        className="w-5 h-5 text-carnitas-text hover:text-carnitas-primary cursor-pointer" 
        onClick={onSearchClick}
      />
      {user ? (
        <LogOut
          className="w-5 h-5 text-carnitas-text hover:text-carnitas-primary cursor-pointer"
          onClick={handleAuthClick}
        />
      ) : (
        <User
          className="w-5 h-5 text-carnitas-text hover:text-carnitas-primary cursor-pointer"
          onClick={handleAuthClick}
        />
      )}
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