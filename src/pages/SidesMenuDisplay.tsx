import { Card } from "@/components/ui/card";

const SidesMenuDisplay = () => {
  return (
    <div className="min-h-screen bg-carnitas-light p-8">
      <Card className="bg-white/90 backdrop-blur-sm border-2 border-carnitas-primary p-8 shadow-2xl">
        <div className="grid grid-cols-2 gap-12">
          <div>
            <h2 className="menu-title mb-6">Mexican Sides</h2>
            <p className="text-4xl text-carnitas-primary mb-6 font-display">€3.80</p>
            <div className="space-y-4">
              <p className="text-3xl text-carnitas-text font-display">Mex Nacho Chips</p>
              <p className="text-3xl text-carnitas-text font-display">Mex Flavoured Fries</p>
              <p className="text-3xl text-carnitas-text font-display">Mex Spicy Potatoes</p>
              <p className="text-3xl text-carnitas-text font-display">Mex Flavoured Rice</p>
              <p className="text-3xl text-carnitas-text font-display">Mex Refried Beans</p>
            </div>

            <div className="mt-12">
              <h2 className="menu-title mb-6">Kids Meal</h2>
              <p className="text-4xl text-carnitas-primary mb-6 font-display">€7.80</p>
              <div className="space-y-4">
                <p className="text-3xl text-carnitas-text font-display">chicken - pork - beef - mince - mushroom (v)</p>
                <p className="text-3xl text-carnitas-text font-display">2 Tacos</p>
                <p className="text-3xl text-carnitas-text font-display">1 small Burrito</p>
                <p className="text-3xl text-carnitas-text font-display">1 small Quesadillas</p>
                <p className="text-3xl text-carnitas-text font-display">1 small Nachos</p>
                <p className="text-2xl text-carnitas-primary italic mt-4 font-display">Includes free kids drink and kids side</p>
              </div>
            </div>
          </div>

          <div className="space-y-12">
            <div>
              <h2 className="menu-title mb-6">Regular Drinks</h2>
              <p className="text-4xl text-carnitas-primary mb-6 font-display">€2.00</p>
              <div className="space-y-4">
                <p className="text-3xl text-carnitas-text font-display">Coke Zero</p>
                <p className="text-3xl text-carnitas-text font-display">Fanta</p>
                <p className="text-3xl text-carnitas-text font-display">Sprite</p>
                <p className="text-3xl text-carnitas-text font-display">Fruit Shot</p>
              </div>
            </div>

            <div>
              <h2 className="menu-title mb-6">Healthy Drinks</h2>
              <p className="text-4xl text-carnitas-primary mb-6 font-display">€2.60</p>
              <p className="text-3xl text-carnitas-text font-display">Still Water (500ml)</p>
            </div>

            <div>
              <h2 className="menu-title mb-6">Mexican Drinks</h2>
              <p className="text-4xl text-carnitas-primary mb-6 font-display">€3.60</p>
              <p className="text-3xl text-carnitas-text font-display">Jarritos Guava / Mandarin / Mango (370ml)</p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-3xl text-carnitas-text font-bold font-display">If you have any allergies please notify a member of staff</p>
        </div>
      </Card>
    </div>
  );
};

export default SidesMenuDisplay;