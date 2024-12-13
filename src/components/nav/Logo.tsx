import { FC } from 'react';

const Logo: FC = () => {
  return (
    <div className="flex items-center h-full">
      <a href="/" className="flex items-center h-full py-2">
        <img 
          src="/lovable-uploads/c92f18d3-e59e-4a5a-8c64-657d4fad9087.png" 
          alt="Carnitas Mexican Fresh Grill" 
          className="h-full w-auto object-contain"
        />
      </a>
    </div>
  );
};

export default Logo;