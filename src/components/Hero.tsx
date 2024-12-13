import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen flex items-center justify-center">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/lovable-uploads/48a433ce-f5a4-4639-8d6e-a495f29066b1.png')" }}
      ></div>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="relative z-10 text-center px-4 space-y-8 max-w-4xl mx-auto">
        <div className="w-full flex justify-center mb-6">
          <img 
            src="/lovable-uploads/f570ddc1-734b-4223-81bb-cd9b0c9e1d6a.png" 
            alt="Authentic Mexican Takeaway" 
            className="w-[100%] animate-fadeIn"
          />
        </div>
        <p className="font-handwritten text-3xl text-white mb-8 animate-fadeIn drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]">
          Experience the true flavors of Mexico with our handcrafted tacos, burritos, and more
        </p>
        <Button
          size="lg"
          className="sketch-button text-3xl animate-fadeIn hover:animate-wiggle bg-carnitas-yellow text-carnitas-text hover:bg-yellow-400"
          onClick={() => navigate('/menu')}
        >
          View Our Menu
        </Button>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-black/20 to-transparent"></div>
    </div>
  );
};

export default Hero;