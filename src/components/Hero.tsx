import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen flex items-center justify-center">
      {/* Background Image - fajitas and tacos */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/lovable-uploads/b12de133-08f4-4567-83de-a8cd0c48552b.png')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fadeIn">
          Authentic Carnitas
          <br />
          Made with Tradition
        </h1>
        <p className="text-xl text-white mb-8 animate-fadeIn">
          Savor our slow-cooked pork carnitas, handmade tortillas, and fresh salsas
        </p>
        <Button
          size="lg"
          className="bg-carnitas-primary hover:bg-carnitas-secondary text-white text-lg px-8 py-6 animate-fadeIn"
          onClick={() => navigate('/menu')}
        >
          Order Now
        </Button>
      </div>
    </div>
  );
};

export default Hero;