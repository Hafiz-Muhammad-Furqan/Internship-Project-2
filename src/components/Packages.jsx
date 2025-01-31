const packages = [
  {
    id: 1,
    name: "Honeymoon Getaway",
    price: "$2,499",
    description:
      "A romantic escape for newlyweds! Enjoy luxury resorts, private dinners, scenic views, boat rides, and spa sessions for a dreamy honeymoon.",
  },
  {
    id: 2,
    name: "Adventure Trails",
    price: "$1,899",
    description:
      "Thrill-seekers' dream! Experience hiking, trekking, zip-lining, river rafting, jungle safaris, and mountain camping for an adventurous trip.",
  },
  {
    id: 3,
    name: "Family Trip",
    price: "$3,299",
    description:
      "A fun-filled vacation for families! Enjoy sightseeing, amusement parks, historical landmarks, nature reserves, and kid-friendly activities.",
  },
  {
    id: 4,
    name: "Beach Paradise",
    price: "$4,299",
    description:
      "Relax by the ocean! Stay in beachfront resorts, enjoy water sports, island hopping, sunset cruises, and the beauty of tropical beaches.",
  },
  {
    id: 5,
    name: "Cultural Heritage Tour",
    price: "$5,299",
    description:
      "Explore history and traditions! Visit ancient cities, landmarks, museums, enjoy cultural shows, traditional food, and guided heritage tours.",
  },
  {
    id: 6,
    name: "Winter Wonderland Escape",
    price: "$7,299",
    description:
      "A magical snowy getaway! Enjoy skiing, snowboarding, snowmobile rides, cozy cabins, scenic mountains, and hot cocoa by the fireplace.",
  },
];

function Packages() {
  return (
    <section id="packages" className="py-20 px-4 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          Special <span className="text-accent">Packages</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <div key={pkg.id} className="card min-h-62">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-semibold text-accent">
                  {pkg.name}
                </h3>
                <span className="text-2xl font-bold text-accent">
                  {pkg.price}
                </span>
              </div>
              <p className="text-gray-300 mb-6">{pkg.description}</p>
              <button className="btn-primary w-full">Book Now</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Packages;
