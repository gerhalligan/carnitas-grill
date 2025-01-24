import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-carnitas-light flex items-center justify-center p-4">
      <Card className="w-full max-w-lg bg-white/90 backdrop-blur-sm border-2 border-carnitas-primary p-8 shadow-2xl text-center">
        <img 
          src="/lovable-uploads/fc3bbdbb-3866-4c14-ab0c-f85f7df73e1c.png" 
          alt="Carnitas Logo" 
          className="w-48 mx-auto mb-8"
        />
        
        <h1 className="text-4xl font-bold text-carnitas-primary mb-4">Page Not Found</h1>
        <p className="text-xl text-carnitas-text mb-8">
          Sorry, we couldn't find the page you're looking for.
        </p>
        
        <Link to="/">
          <Button className="bg-carnitas-primary hover:bg-carnitas-secondary text-white">
            <Home className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>
      </Card>
    </div>
  );
};

export default NotFound;