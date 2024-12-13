import { FC } from 'react';

const Logo: FC = () => {
  return (
    <div className="hidden md:flex items-center">
      <a href="/" className="flex items-center">
        <img 
          src="/lovable-uploads/01931afb-b9ee-4af4-9198-bcf355268898.png" 
          alt="Carnitas Mexican Fresh Grill" 
          className="w-[110px] h-auto"
        />
      </a>
    </div>
  );
};

export default Logo;