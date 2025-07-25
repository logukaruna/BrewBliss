import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-[#F5E9D3] dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2">
          <img
            src="https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=800&q=80"
            alt="Brew Bliss Café"
            className="rounded-lg shadow-lg"
          />
        </div>

        <div className="md:w-1/2 text-gray-800 dark:text-gray-200">
          <h2 className="text-3xl font-bold mb-4">Our Story</h2>
          <p className="text-lg leading-relaxed">
            At Brew Bliss, we believe that every cup tells a story. Born from a passion for hand-crafted coffee and warm conversations, our café is a haven for those seeking comfort, creativity, and connection. Whether you're starting your day or catching up with a friend, Brew Bliss is where your coffee journey begins.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
