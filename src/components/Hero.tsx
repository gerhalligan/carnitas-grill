import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen flex items-center justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/lovable-uploads/b12de133-08f4-4567-83de-a8cd0c48552b.png')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      </div>

      <div className="relative z-10 text-center px-4 space-y-8">
        <h1 className="font-sketch text-5xl md:text-7xl font-bold text-white mb-6 animate-fadeIn">
          Authentic Carnitas
          <br />
          <span className="font-handwritten text-carnitas-primary">Made with Tradition</span>
        </h1>
        <p className="font-handwritten text-2xl text-white mb-8 animate-fadeIn">
          Savor our slow-cooked pork carnitas, handmade tortillas, and fresh salsas
        </p>
        <Button
          size="lg"
          className="sketch-button text-2xl animate-fadeIn hover:animate-wiggle"
          onClick={() => navigate('/menu')}
        >
          Order Now
        </Button>
      </div>
    </div>
  );
};

export default Hero;