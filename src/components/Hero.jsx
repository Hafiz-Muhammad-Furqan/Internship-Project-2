function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center">
      <div
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1682687220742-aba13b6e50ba')] 
                   bg-cover bg-center"
        style={{
          filter: "brightness(0.4)",
        }}
      />

      <div className="relative z-10 text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
          Explore the World with
          <span className="block text-accent glow-effect">
            Wanderlust Adventures
          </span>
        </h1>

        <p className="text-xl md:text-2xl mb-8 text-gray-300">
          Your journey begins here
        </p>

        <div className="max-w-xl mx-auto">
          <div className="relative">
            <input
              type="text"
              placeholder="Where do you want to go?"
              className="w-full px-2 lg:px-6 py-4 rounded-lg bg-secondary/80 
                       border-2 border-secondary-light focus:border-accent
                       outline-none transition-all duration-300"
            />
            <button className="absolute right-1 lg:right-2 top-2 btn-primary">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
