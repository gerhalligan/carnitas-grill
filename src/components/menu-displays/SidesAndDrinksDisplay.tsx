import { Card } from "@/components/ui/card";

const SidesAndDrinksDisplay = () => {
  return (
    <div className="min-h-screen bg-black p-8">
      <Card className="bg-black border-carnitas-turquoise border-2 p-8 shadow-2xl">
        <div className="grid grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl font-bold text-carnitas-turquoise mb-6">Mexican Sides</h2>
            <p className="text-3xl text-carnitas-turquoise mb-6">€3.80</p>
            <div className="space-y-4">
              <p className="text-2xl text-white">Mex Nacho Chips</p>
              <p className="text-2xl text-white">Mex Flavoured Fries</p>
              <p className="text-2xl text-white">Mex Spicy Potatoes</p>
              <p className="text-2xl text-white">Mex Flavoured Rice</p>
              <p className="text-2xl text-white">Mex Refried Beans</p>
            </div>

            <div className="mt-12">
              <h2 className="text-4xl font-bold text-carnitas-turquoise mb-6">Kids Meal</h2>
              <p className="text-3xl text-carnitas-turquoise mb-6">€7.80</p>
              <div className="space-y-4">
                <p className="text-2xl text-white">chicken - pork - beef - mince - mushroom (v)</p>
                <p className="text-2xl text-white">2 Tacos</p>
                <p className="text-2xl text-white">1 small Burrito</p>
                <p className="text-2xl text-white">1 small Quesadillas</p>
                <p className="text-2xl text-white">1 small Nachos</p>
                <p className="text-xl text-carnitas-turquoise italic mt-4">Includes free kids drink and kids side</p>
              </div>
            </div>
          </div>

          <div className="space-y-12">
            <div>
              <h2 className="text-4xl font-bold text-carnitas-turquoise mb-6">Regular Drinks</h2>
              <p className="text-3xl text-carnitas-turquoise mb-6">€2.00</p>
              <div className="space-y-4">
                <p className="text-2xl text-white">Coke Zero</p>
                <p className="text-2xl text-white">Fanta</p>
                <p className="text-2xl text-white">Sprite</p>
                <p className="text-2xl text-white">Fruit Shot</p>
              </div>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-carnitas-turquoise mb-6">Healthy Drinks</h2>
              <p className="text-3xl text-carnitas-turquoise mb-6">€2.60</p>
              <p className="text-2xl text-white">Still Water (500ml)</p>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-carnitas-turquoise mb-6">Mexican Drinks</h2>
              <p className="text-3xl text-carnitas-turquoise mb-6">€3.60</p>
              <p className="text-2xl text-white">Jarritos Guava / Mandarin / Mango (370ml)</p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-2xl text-white font-bold">If you have any allergies please notify a member of staff</p>
        </div>
      </Card>
    </div>
  );
};

export default SidesAndDrinksDisplay;