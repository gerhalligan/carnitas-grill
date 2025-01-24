import { Card } from "@/components/ui/card";

const MainsMenuDisplay = () => {
  return (
    <div className="min-h-screen bg-carnitas-light p-8">
      <Card className="bg-white/90 backdrop-blur-sm border-2 border-carnitas-primary p-8 shadow-2xl">
        <img 
          src="/lovable-uploads/fc3bbdbb-3866-4c14-ab0c-f85f7df73e1c.png" 
          alt="Carnitas Logo" 
          className="w-48 mx-auto mb-8"
        />
        
        <h1 className="menu-title text-center mb-4">Mexican Mains</h1>
        <p className="text-3xl text-center text-carnitas-text mb-8 font-display">(Inc salsa pot)</p>
        <p className="text-5xl text-center text-carnitas-primary mb-12 font-display">€12.80</p>

        <div className="space-y-12">
          <div>
            <h2 className="text-4xl font-bold text-carnitas-primary mb-6 font-display">Step 1 choose</h2>
            <p className="text-3xl text-carnitas-text font-display">chicken - pork - beef - mince - mushroom (v)</p>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-carnitas-primary mb-6 font-display">Step 2 choose</h2>
            <div className="space-y-4">
              <p className="text-3xl text-carnitas-text font-display">Tacos (4 tacos of your choice)</p>
              <p className="text-3xl text-carnitas-text font-display">Burrito</p>
              <p className="text-3xl text-carnitas-text font-display">Crispy Beef Rolls</p>
              <p className="text-3xl text-carnitas-text font-display">Burrito Bowl</p>
              <p className="text-3xl text-carnitas-text font-display">Quesadillas</p>
              <p className="text-3xl text-carnitas-text font-display">Large Nachos</p>
            </div>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-carnitas-primary mb-6 font-display">Step 3 choose</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-3xl text-carnitas-text font-display">Cheese Sauce Pot <span className="text-carnitas-primary">(mild)</span></p>
                <p className="text-3xl text-carnitas-text font-display">Sour Cream Pot <span className="text-carnitas-primary">(mild)</span></p>
                <p className="text-3xl text-carnitas-text font-display">Pico de Gallo Pot <span className="text-carnitas-primary">(mild)</span></p>
                <p className="text-3xl text-carnitas-text font-display">Guacamole Salsa Pot <span className="text-carnitas-primary">(mild)</span></p>
                <p className="text-3xl text-carnitas-text font-display">Chipotle Cream Pot <span className="text-carnitas-primary">(mild)</span></p>
                <p className="text-3xl text-carnitas-text font-display">Classic Salsa Pot <span className="text-carnitas-primary">(medium)</span></p>
              </div>
              <div>
                <p className="text-3xl text-carnitas-text font-display">Red Salsa Pot <span className="text-carnitas-primary">(medium)</span></p>
                <p className="text-3xl text-carnitas-text font-display">Green Salsa Pot <span className="text-carnitas-primary">(medium)</span></p>
                <p className="text-3xl text-carnitas-text font-display">Smokey Salsa Pot <span className="text-carnitas-primary">(hot)</span></p>
                <p className="text-3xl text-carnitas-text font-display">Mango Kick Salsa Pot <span className="text-carnitas-primary">(hot)</span></p>
                <p className="text-3xl text-carnitas-text font-display">Fireball Salsa Pot <span className="text-carnitas-primary">(Xtra hot)</span></p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-carnitas-primary mb-6 font-display">Step 4 choose</h2>
            <p className="text-3xl font-bold text-carnitas-text mb-4 font-display">Meal Deal - plus €6.00</p>
            <p className="text-2xl text-carnitas-primary italic font-display">Add any side + extra salsa + can soft drink</p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default MainsMenuDisplay;