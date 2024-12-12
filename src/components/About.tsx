const About = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 mexican-pattern-bg"></div>
      <div className="container mx-auto px-4 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="menu-title text-5xl">
              Our Story
            </h2>
            <p className="menu-description text-2xl">
              For over three generations, we've been perfecting the art of making authentic Mexican carnitas. Our recipe, passed down through family traditions, combines the finest ingredients with time-honored cooking techniques.
            </p>
            <p className="menu-description text-2xl">
              Every day, our skilled chefs prepare fresh carnitas using locally sourced ingredients and traditional copper pots, ensuring that each bite delivers the authentic taste of Mexico.
            </p>
          </div>
          <div className="relative">
            <div className="sketch-card overflow-hidden h-[400px]">
              <img
                src="/lovable-uploads/d9f2d4a7-5914-4e36-8494-181ec54f4a89.png"
                alt="Delicious carnitas burrito with fresh vegetables"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;