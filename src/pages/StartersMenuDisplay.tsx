import { Card } from "@/components/ui/card";

const StartersMenuDisplay = () => {
  return (
    <div className="min-h-screen bg-carnitas-light p-8">
      <Card className="bg-white/90 backdrop-blur-sm border-2 border-carnitas-primary p-8 shadow-2xl">
        <img 
          src="/lovable-uploads/fc3bbdbb-3866-4c14-ab0c-f85f7df73e1c.png" 
          alt="Carnitas Logo" 
          className="w-48 mx-auto mb-8"
        />
        
        <h1 className="menu-title text-center mb-12">Mexican Starters</h1>
        
        <div className="space-y-8">
          <div className="flex justify-between items-center border-b border-carnitas-primary/30 pb-4">
            <h2 className="text-4xl text-carnitas-text font-display">Crunchy Pork Bites</h2>
            <span className="text-4xl text-carnitas-primary font-display">€6.80</span>
          </div>
          
          <div className="flex justify-between items-center border-b border-carnitas-primary/30 pb-4">
            <h2 className="text-4xl text-carnitas-text font-display">Small Crispy Beef Rolls (2)</h2>
            <span className="text-4xl text-carnitas-primary font-display">€5.80</span>
          </div>
          
          <div className="flex justify-between items-center border-b border-carnitas-primary/30 pb-4">
            <h2 className="text-4xl text-carnitas-text font-display">Starter Loaded Fries</h2>
            <span className="text-4xl text-carnitas-primary font-display">€5.80</span>
          </div>
          
          <div className="flex justify-between items-center border-b border-carnitas-primary/30 pb-4">
            <h2 className="text-4xl text-carnitas-text font-display">Starter Loaded Nachos</h2>
            <span className="text-4xl text-carnitas-primary font-display">€5.80</span>
          </div>
          
          <div className="flex justify-between items-center border-b border-carnitas-primary/30 pb-4">
            <h2 className="text-4xl text-carnitas-text font-display">Mexican Corn Ribs</h2>
            <span className="text-4xl text-carnitas-primary font-display">€4.80</span>
          </div>
          
          <div className="flex justify-between items-center border-b border-carnitas-primary/30 pb-4">
            <h2 className="text-4xl text-carnitas-text font-display">Mexican Corn Hot Pot</h2>
            <span className="text-4xl text-carnitas-primary font-display">€4.80</span>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="menu-title mb-8">Mexican Dipping Broth</h2>
          <div className="space-y-6">
            <div className="flex justify-between items-center border-b border-carnitas-primary/30 pb-4">
              <h2 className="text-4xl text-carnitas-text font-display">Rich Beef Broth - Regular</h2>
              <span className="text-4xl text-carnitas-primary font-display">€3.80</span>
            </div>
            <div className="flex justify-between items-center border-b border-carnitas-primary/30 pb-4">
              <h2 className="text-4xl text-carnitas-text font-display">Rich Beef Broth - Sharing</h2>
              <span className="text-4xl text-carnitas-primary font-display">€5.80</span>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default StartersMenuDisplay;