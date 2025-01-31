const destinations = [
  {
    id: 1,
    name: "Paris",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
    description: "The city of love and lights awaits your arrival.",
  },
  {
    id: 2,
    name: "Maldives",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8",
    description: "Paradise on Earth with crystal clear waters.",
  },
  {
    id: 3,
    name: "Skardu",
    image:
      "https://plus.unsplash.com/premium_photo-1697730198247-ed3c72ecf932?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2thcmR1fGVufDB8fDB8fHww",
    description: "Experience the majestic beauty of the Karakoram.",
  },
];

function Destinations() {
  return (
    <section id="destinations" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          Popular <span className="text-accent">Destinations</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((dest) => (
            <div key={dest.id} className="card group">
              <div className="relative h-64 mb-4 overflow-hidden rounded-lg">
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-2xl font-semibold mb-2 text-accent">
                {dest.name}
              </h3>
              <p className="text-gray-300 mb-4">{dest.description}</p>
              <button className="btn-primary w-full">View More</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Destinations;
