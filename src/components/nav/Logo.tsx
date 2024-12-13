import { FC } from 'react';

const Logo: FC = () => {
  return (
    <div className="flex items-center">
      <a href="/" className="flex items-center">
        <img 
          src="/lovable-uploads/4f490a3f-d418-4f3e-9e23-d3f6223a0871.png" 
          alt="Carnitas Mexican Fresh Grill" 
          className="h-26 w-auto max-w-[150px]"
        />
      </a>
    </div>
  );
};

export default Logo;