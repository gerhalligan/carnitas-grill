import { FC } from 'react';

const Logo: FC = () => {
  return (
    <div className="flex items-center h-full">
      <a href="/" className="flex items-center h-full py-2">
        <img 
          src="/lovable-uploads/0f38bd79-49bc-4af0-822e-8bb1f010f946.png" 
          alt="Carnitas Mexican Fresh Grill" 
          className="h-full w-auto object-contain"
        />
      </a>
    </div>
  );
};

export default Logo;