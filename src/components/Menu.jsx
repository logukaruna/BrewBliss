import React from 'react';
import filterCoffee from '../images/Filter-Coffee.jpg';
import Coffee from '../images/Coffee.jpg';
const coffeeItems = [
  {
    name: 'Filter Coffee',
    desc: 'Rich and bold shot of pure coffee perfection.',
    price: '₹30',
    img: filterCoffee,
  },
  {
    name: 'Cappuccino',
    desc: 'A smooth blend of espresso, steamed milk & foam.',
    price: '₹160',
    img: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Latte',
    desc: 'Creamy and comforting with a touch of sweetness.',
    price: '₹150',
    img: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Authentic Brew',
    desc: 'Chilled, slow-steeped coffee with a smooth taste.',
    price: '₹20',
    img: Coffee,
  },
];

const Menu = () => {
  return (
    <section id="menu" className="py-20 bg-[#F5E9D3] dark:bg-gray-950">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-10">
          Our Menu
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {coffeeItems.map((item, index) => (
            <div
              key={index}
              className="bg-[#EFE3C8] dark:bg-gray-900 rounded-lg overflow-hidden shadow hover:shadow-md transition"
            >
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 text-left">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-1">
                  {item.name}
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                  {item.desc}
                </p>
                <p className="text-lg font-bold text-gray-800 dark:text-gray-100">
                  {item.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
