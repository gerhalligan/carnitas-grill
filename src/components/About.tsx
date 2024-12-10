const About = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-carnitas-text">
              Our Story
            </h2>
            <p className="text-gray-600 leading-relaxed">
              For over three generations, we've been perfecting the art of making authentic Mexican carnitas. Our recipe, passed down through family traditions, combines the finest ingredients with time-honored cooking techniques.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Every day, our skilled chefs prepare fresh carnitas using locally sourced ingredients and traditional copper pots, ensuring that each bite delivers the authentic taste of Mexico.
            </p>
          </div>
          <div className="relative h-[400px]">
            <img
              src="https://images.unsplash.com/photo-1514852451047-f8e1d6c8e99a?auto=format&fit=crop&q=80"
              alt="Chef preparing carnitas"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;