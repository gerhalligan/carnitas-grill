import { Card } from "@/components/ui/card";

const StartersDisplay = () => {
  return (
    <div className="min-h-screen bg-black p-8">
      <Card className="bg-black border-carnitas-primary border-2 p-8 shadow-2xl">
        <img 
          src="/lovable-uploads/fc3bbdbb-3866-4c14-ab0c-f85f7df73e1c.png" 
          alt="Carnitas Logo" 
          className="w-48 mx-auto mb-8"
        />
        
        <h1 className="text-5xl font-bold text-carnitas-primary mb-12 text-center">Mexican Starters</h1>
        
        <div className="space-y-8">
          <div className="flex justify-between items-center border-b border-carnitas-primary/30 pb-4">
            <h2 className="text-3xl text-white">Crunchy Pork Bites</h2>
            <span className="text-3xl text-carnitas-primary">€6.80</span>
          </div>
          
          <div className="flex justify-between items-center border-b border-carnitas-primary/30 pb-4">
            <h2 className="text-3xl text-white">Small Crispy Beef Rolls (2)</h2>
            <span className="text-3xl text-carnitas-primary">€5.80</span>
          </div>
          
          <div className="flex justify-between items-center border-b border-carnitas-primary/30 pb-4">
            <h2 className="text-3xl text-white">Starter Loaded Fries</h2>
            <span className="text-3xl text-carnitas-primary">€5.80</span>
          </div>
          
          <div className="flex justify-between items-center border-b border-carnitas-primary/30 pb-4">
            <h2 className="text-3xl text-white">Starter Loaded Nachos</h2>
            <span className="text-3xl text-carnitas-primary">€5.80</span>
          </div>
          
          <div className="flex justify-between items-center border-b border-carnitas-primary/30 pb-4">
            <h2 className="text-3xl text-white">Mexican Corn Ribs</h2>
            <span className="text-3xl text-carnitas-primary">€4.80</span>
          </div>
          
          <div className="flex justify-between items-center border-b border-carnitas-primary/30 pb-4">
            <h2 className="text-3xl text-white">Mexican Corn Hot Pot</h2>
            <span className="text-3xl text-carnitas-primary">€4.80</span>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-4xl font-bold text-carnitas-primary mb-8">Mexican Dipping Broth</h2>
          <div className="space-y-6">
            <div className="flex justify-between items-center border-b border-carnitas-primary/30 pb-4">
              <h2 className="text-3xl text-white">Rich Beef Broth - Regular</h2>
              <span className="text-3xl text-carnitas-primary">€3.80</span>
            </div>
            <div className="flex justify-between items-center border-b border-carnitas-primary/30 pb-4">
              <h2 className="text-3xl text-white">Rich Beef Broth - Sharing</h2>
              <span className="text-3xl text-carnitas-primary">€5.80</span>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default StartersDisplay;