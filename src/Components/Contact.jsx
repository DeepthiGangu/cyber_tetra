import React from "react";

const Contact = () => {
  return (
    <section>
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center text-white py-20"
        style={{ backgroundImage: "url('/src/assets/bg.png')" }} // Ensure correct image path
      >
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <h3 className="text-xl font-semibold">The Right Solution For You</h3>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Get started with our expert security services today
          </h2>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-[#0B1225] text-white py-12">
        <div className="container mx-auto px-6 grid md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div>
            <img src="/src/assets/logo.png" alt="Cyber Tetra" className="w-32 mb-4" />
            <p className="text-gray-300">
              Revolutionizing Business Through Innovative Security Solutions
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-blue-400 font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-blue-300">Home</a></li>
              <li><a href="/services" className="hover:text-blue-300">Services</a></li>
              <li><a href="/about" className="hover:text-blue-300">About Us</a></li>
              <li><a href="/contact" className="hover:text-blue-300">Contact Us</a></li>
            </ul>
          </div>

          {/* Our Team */}
          <div>
            <h3 className="text-blue-400 font-semibold mb-4">Our Team</h3>
            <ul className="space-y-2">
              <li>Kucharlapati Prasanna</li>
              <li>Raviteja Chanamalla</li>
              <li>Jayanth Changala</li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-blue-400 font-semibold mb-4">Contact Us</h3>
            <p>📞 +91 9573893959</p>
            <p>📧 cybertetra04@gmail.com</p>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="mt-8 text-center">
          <h3 className="text-lg font-semibold">Follow Us on</h3>
          <div className="flex justify-center space-x-4 mt-2">
            <a href="#" className="text-white hover:text-blue-400 text-2xl">🔗</a>
            <a href="#" className="text-white hover:text-blue-400 text-2xl">📷</a>
            <a href="#" className="text-white hover:text-blue-400 text-2xl">💬</a>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-8 text-center text-gray-400 text-sm">
          Designed and Developed by <a href="#" className="text-white underline">Tanooj Kondu</a>
        </div>
      </footer>
    </section>
  );
};

export default Contact;
