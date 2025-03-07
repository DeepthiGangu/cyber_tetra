import React from "react";
import {Link} from "react-scroll";

const Contact = () => {
  return (
    <section id='contact'>
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center text-gray-200 py-20"
        style={{ backgroundImage: "url('/bg.png')" }} // Ensure correct image path
      >
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <h3 className="text-2xl font-semibold -mt-6">The Right Solution For You</h3>
          <h2 className="text-3xl md:text-4xl font-semibold mt-4 ">
            Get started with our expert <br />security services today
          </h2>
        </div>
      </div>

  <footer className="bg-[#0B1225] text-white py-12">
  <div className="container mx-auto px-18 grid grid-cols-1 md:grid-cols-4 gap-6">
    {/* Logo & Description */}
    <div>
      <img src="/logo.png" alt="Cyber Tetra" className="w-60 mb-4" />
      <p className="text-xl text-gray-300 text-left">
        Revolutionizing Business Through Innovative Security Solutions
      </p>
    </div>

    <div className="flex flex-col md:flex-row justify-start md:justify-between text-white text-sm md:text-base gap-y-6 md:gap-x-42">
  {/* Quick Links */}
  <div className="w-full md:w-auto self-start">
    <h4 className="text-blue-400 font-semibold mb-2 text-xl whitespace-nowrap text-left">Quick Links</h4>
    <ul className="space-y-1 text-left">
            <li>
              <Link to="home" smooth={true} duration={500} className="hover:text-blue-300 cursor-pointer">
                Home
              </Link>
            </li>
            <li>
              <Link to="services" smooth={true} duration={500} className="hover:text-blue-300 cursor-pointer">
                Services
              </Link>
            </li>
            <li>
              <Link to="about" smooth={true} duration={500} className="hover:text-blue-300 cursor-pointer">
                About Us
              </Link>
            </li>
            <li>
              <Link to="contact" smooth={true} duration={500} className="hover:text-blue-300 cursor-pointer">
                Contact Us
              </Link>
            </li>
          </ul>
  </div>

  {/* Our Team */}
  <div className="w-full md:w-auto">
    <h3 className="text-blue-400 font-semibold mb-2 text-xl text-left">Our Team</h3>
    <ul className="space-y-1 text-left">
      <li className="whitespace-nowrap">Kucharlapati Prasanna</li>
      <li className="whitespace-nowrap">Raviteja Chanamalla</li>
      <li className="whitespace-nowrap">Jayanth Changala</li>
    </ul>
  </div>

  {/* Contact Us */}
  <div className="w-full md:w-auto text-left">
    <h3 className="text-blue-400 font-semibold mb-2 text-xl">Contact Us</h3>
    <p>📞 +91 9573893959</p>
    <p className="whitespace-nowrap">📧 cybertetra04@gmail.com</p>
  </div>
</div>
</div>

  {/* Divider */}
<div className="border-t border-gray-600 mt-8 "></div>

{/* Social Media Links */}
<div className="mt-8 text-left pl-16 md:pl-40">
  <h3 className="text-3xl font-semibold mb-2">Follow Us on</h3>
  <div className="flex space-x-6 mt-6">
    {/* LinkedIn */}
    <a href="#" className="transition-transform duration-300 hover:scale-125">
      <img src="/LinkedIn.png" alt="LinkedIn" className="w-8 h-8"/>
    </a>

    {/* Instagram */}
    <a href="#" className="transition-transform duration-300 hover:scale-125">
      <img src="/Instagram.png" alt="Instagram" className="w-8 h-8"/>
    </a>

    {/* WhatsApp */}
    <a href="#" className="transition-transform duration-300 hover:scale-125">
      <img src="/WhatsApp.svg" alt="WhatsApp" className="w-8 h-8"/>
    </a>
  </div>
</div>



{/* Footer Note */}
<div className="mt-8 text-left text-white text-lg pl-16 md:pl-40 "> {/* Moved to left */}
  Designed and Developed by <span className="text-blue-500 whitespace-nowrap"> Tanooj Kondu</span>
</div>

</footer>
</section>
  );
};

export default Contact;
