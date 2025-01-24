import { useState, useEffect } from 'react';
import StartersDisplay from '@/components/menu-displays/StartersDisplay';
import MainsDisplay from '@/components/menu-displays/MainsDisplay';
import SidesAndDrinksDisplay from '@/components/menu-displays/SidesAndDrinksDisplay';

const MenuDisplays = () => {
  const [currentDisplay, setCurrentDisplay] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDisplay((prev) => (prev + 1) % 3);
    }, 20000); // Change display every 20 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-screen">
      {currentDisplay === 0 && <StartersDisplay />}
      {currentDisplay === 1 && <MainsDisplay />}
      {currentDisplay === 2 && <SidesAndDrinksDisplay />}
    </div>
  );
};

export default MenuDisplays;