import React from 'react';

const testimonials = [
  {
    name: 'Logu',
    comment: 'Brew Bliss has become my daily ritual...',
    avatar: 'https://randomuser.me/api/portraits/men/77.jpg',
  },
  {
    name: 'Ruksaar',
    comment: 'Strong Coffee makes me more Stronger',
    avatar: 'https://randomuser.me/api/portraits/women/21.jpg',
  },
  {
    name: 'Priya',
    comment: 'Love the smell of the coffee',
    avatar: 'https://randomuser.me/api/portraits/women/50.jpg',
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-[#F5E9D3] dark:bg-gray-950">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-10">
          What Our Customers Say
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-[#EFE3C8] dark:bg-gray-900 p-6 rounded-lg shadow hover:shadow-md transition text-left"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                  {t.name}
                </h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                "{t.comment}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
