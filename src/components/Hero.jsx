import React from 'react';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative h-screen w-full bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1500&q=80')`,
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="relative z-10 text-center px-4 text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          The Authentic Brew from the Coffee World...!
        </h1>
        <a
          href="#menu"
          className="bg-[#D7C4A3] text-gray-800 px-6 py-3 rounded hover:bg-[#e4d7be] transition font-semibold"
        >
          Explore Menu
        </a>
      </div>
    </section>
  );
};

export default Hero;
