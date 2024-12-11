import { FC } from 'react';

const Logo: FC = () => {
  return (
    <div className="flex items-center">
      <a href="/" className="flex items-center">
        <img 
          src="/lovable-uploads/0f38bd79-49bc-4af0-822e-8bb1f010f946.png" 
          alt="Carnitas Mexican Fresh Grill" 
          className="h-20 w-auto"
        />
      </a>
    </div>
  );
};

export default Logo;