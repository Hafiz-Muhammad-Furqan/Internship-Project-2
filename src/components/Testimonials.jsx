const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    text: "An unforgettable experience! The team made our honeymoon perfect.",
  },
  {
    id: 2,
    name: "Michael Chen",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    text: "Professional service and amazing destinations. Highly recommended!",
  },
  {
    id: 2,
    name: "Michael Chen",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    text: "Professional service and amazing destinations. Highly recommended!",
  },
  {
    id: 2,
    name: "Michael Chen",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    text: "Professional service and amazing destinations. Highly recommended!",
  },
];

function Testimonials() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          What Our <span className="text-accent">Clients Say</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="card">
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full mr-4"
                />
                <h3 className="text-xl font-semibold text-accent">
                  {testimonial.name}
                </h3>
              </div>
              <p className="text-gray-300 italic">"{testimonial.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
