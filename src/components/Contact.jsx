import React, { useState } from 'react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setError('Please fill out all fields.');
      return;
    }
    setError('');
    alert('Message sent successfully!');
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="pt-20 pb-8 bg-[#F5E9D3] dark:bg-gray-950">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-start">
        <form
          onSubmit={handleSubmit}
          className="bg-[#EFE3C8] dark:bg-gray-900 p-6 rounded-lg shadow space-y-5"
        >
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
            Get in Touch
          </h2>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full p-3 border rounded-md bg-white dark:bg-gray-800 text-gray-800 dark:text-white"
          />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="w-full p-3 border rounded-md bg-white dark:bg-gray-800 text-gray-800 dark:text-white"
          />
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows="4"
            className="w-full p-3 border rounded-md bg-white dark:bg-gray-800 text-gray-800 dark:text-white"
          ></textarea>
          <button
            type="submit"
            className="bg-[#B58E62] hover:bg-[#A57C4C] text-white px-5 py-2 rounded-md font-semibold"
          >
            Send Message
          </button>
        </form>

        <div className="text-gray-700 dark:text-gray-300 space-y-4">
          <div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
              Visit Our Café
            </h3>
            <p>📍 123 Brew Street, Coffee City, India</p>
            <p>📞 +91 98765 43210</p>
            <p>✉️ hello@brewbliss.com</p>
          </div>

          <div className="rounded-lg overflow-hidden shadow">
            <iframe
              title="Brew Bliss Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7776.2655651975!2d79.13487777470681!3d12.963354087351197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bad476bfc8abd7b%3A0xd4f36af5e1b935dd!2sStrydo%20Technologies%20Pvt%20Ltd%20-%20Vellore!5e0!3m2!1sen!2sin!4v1753382358565!5m2!1sen!2sin"
              width="100%"
              height="310"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
