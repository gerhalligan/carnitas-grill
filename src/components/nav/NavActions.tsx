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
    <div className={`flex items-center gap-4 ${className}`}>
      <Search 
        className="w-6 h-6 text-carnitas-text hover:text-carnitas-primary cursor-pointer" 
        onClick={onSearchClick}
      />
      {user ? (
        <LogOut
          className="w-6 h-6 text-carnitas-text hover:text-carnitas-primary cursor-pointer"
          onClick={handleAuthClick}
        />
      ) : (
        <User
          className="w-6 h-6 text-carnitas-text hover:text-carnitas-primary cursor-pointer"
          onClick={handleAuthClick}
        />
      )}
      <Cart />
      <Button 
        className="sketch-button bg-carnitas-yellow text-carnitas-text hover:bg-yellow-400 font-handwritten"
        onClick={() => navigate('/menu')}
      >
        Order Now
      </Button>
    </div>
  );
};

export default NavActions;