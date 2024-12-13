import { FC } from 'react';

const Logo: FC = () => {
  return (
    <div className="flex items-center h-full">
      <a href="/" className="flex items-center h-full py-2">
        <img 
          src="/lovable-uploads/0a953d59-1b40-4f36-b912-70a37e1e987b.png" 
          alt="Carnitas Mexican Fresh Grill" 
          className="h-full w-auto object-contain"
        />
      </a>
    </div>
  );
};

export default Logo;