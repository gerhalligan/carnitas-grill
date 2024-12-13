import { FC } from 'react';

const Logo: FC = () => {
  return (
    <div className="flex items-center h-full">
      <a href="/" className="flex items-center h-full py-2">
        <img 
          src="/lovable-uploads/01931afb-b9ee-4af4-9198-bcf355268898.png" 
          alt="Carnitas Mexican Fresh Grill" 
          className="h-full w-auto object-contain"
        />
      </a>
    </div>
  );
};

export default Logo;