import { Card } from "@/components/ui/card";

const MainsDisplay = () => {
  return (
    <div className="min-h-screen bg-black p-8">
      <Card className="bg-black border-carnitas-yellow border-2 p-8 shadow-2xl">
        <h1 className="text-5xl font-bold text-carnitas-yellow mb-4 text-center">Mexican Mains</h1>
        <p className="text-2xl text-center text-white mb-8">(Inc salsa pot)</p>
        <p className="text-4xl text-center text-carnitas-yellow mb-12">€12.80</p>

        <div className="space-y-12">
          <div>
            <h2 className="text-3xl font-bold text-carnitas-yellow mb-6">Step 1 choose</h2>
            <p className="text-2xl text-white">chicken - pork - beef - mince - mushroom (v)</p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-carnitas-yellow mb-6">Step 2 choose</h2>
            <div className="space-y-4">
              <p className="text-2xl text-white">Tacos (4 tacos of your choice)</p>
              <p className="text-2xl text-white">Burrito</p>
              <p className="text-2xl text-white">Crispy Beef Rolls</p>
              <p className="text-2xl text-white">Burrito Bowl</p>
              <p className="text-2xl text-white">Quesadillas</p>
              <p className="text-2xl text-white">Large Nachos</p>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-carnitas-yellow mb-6">Step 3 choose</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-2xl text-white">Cheese Sauce Pot <span className="text-carnitas-yellow">(mild)</span></p>
                <p className="text-2xl text-white">Sour Cream Pot <span className="text-carnitas-yellow">(mild)</span></p>
                <p className="text-2xl text-white">Pico de Gallo Pot <span className="text-carnitas-yellow">(mild)</span></p>
                <p className="text-2xl text-white">Guacamole Salsa Pot <span className="text-carnitas-yellow">(mild)</span></p>
                <p className="text-2xl text-white">Chipotle Cream Pot <span className="text-carnitas-yellow">(mild)</span></p>
                <p className="text-2xl text-white">Classic Salsa Pot <span className="text-carnitas-yellow">(medium)</span></p>
              </div>
              <div>
                <p className="text-2xl text-white">Red Salsa Pot <span className="text-carnitas-yellow">(medium)</span></p>
                <p className="text-2xl text-white">Green Salsa Pot <span className="text-carnitas-yellow">(medium)</span></p>
                <p className="text-2xl text-white">Smokey Salsa Pot <span className="text-carnitas-yellow">(hot)</span></p>
                <p className="text-2xl text-white">Mango Kick Salsa Pot <span className="text-carnitas-yellow">(hot)</span></p>
                <p className="text-2xl text-white">Fireball Salsa Pot <span className="text-carnitas-yellow">(Xtra hot)</span></p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-carnitas-yellow mb-6">Step 4 choose</h2>
            <p className="text-2xl font-bold text-white mb-4">Meal Deal - plus €6.00</p>
            <p className="text-xl text-white italic">Add any side + extra salsa + can soft drink</p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default MainsDisplay;