import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";


const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);

return (
<div className="w-full min-h-screen overflow-hidden px-0 mx-0 pt-10">
  <div className="relative w-full min-h-screen bg-gray-100 text-black overflow-x-hidden">
  <header className="fixed top-0 left-0 w-full bg-gray-900 text-white z-50 flex justify-between items-center px-6 md:px-12 py-4 shadow-md">
  {/* Logo Section */}
  <div className="flex items-center">
    <img src="/logo.png" alt="Cyber Tetra Logo" className="h-12 md:h-14 w-auto" />
  </div>

  {/* Navigation */}
  <nav>
    {/* Mobile Menu Button */}
    <div className="md:hidden">
      <button onClick={() => setMenuOpen(!menuOpen)} className="text-white focus:outline-none text-2xl">
        ☰
      </button>
    </div>

    {/* Navigation Links */}
    <ul
      className={`md:flex md:space-x-6 absolute md:static top-16 left-0 w-full bg-black md:bg-transparent md:w-auto transition-all duration-300 ${
        menuOpen ? "block" : "hidden"
      }`}
    >
      <li>
        <Link
          to="hero"
          smooth={true}
          duration={500}
          onClick={() => setMenuOpen(false)} // Closes menu after click
          className="block py-2 px-4 md:inline text-xl font-bold hover:text-gray-300 cursor-pointer"
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          to="services"
          smooth={true}
          duration={500}
          onClick={() => setMenuOpen(false)}
          className="block py-2 px-4 md:inline text-xl font-bold hover:text-gray-300 cursor-pointer"
        >
          Services
        </Link>
      </li>
      <li>
        <Link
          to="about"
          smooth={true}
          duration={500}
          onClick={() => setMenuOpen(false)}
          className="block py-2 px-4 md:inline text-xl font-bold hover:text-gray-300 cursor-pointer"
        >
          About Us
        </Link>
      </li>
      <li>
        <Link
          to="contact"
          smooth={true}
          duration={500}
          onClick={() => setMenuOpen(false)}
          className="block py-2 px-4 md:inline text-xl font-bold hover:text-gray-300 cursor-pointer"
        >
          Contact Us
        </Link>
      </li>
    </ul>
  </nav>
</header>

  
  {/* Hero Section */}
  
  <motion.section 
  id="hero"
  className="flex flex-col items-center md:items-start justify-center min-h-screen pt-20 text-white px-10 bg-cover bg-center"
  style={{ backgroundImage: "url('/Hero-background.png')" }}
  initial={{ scale: 1.1, opacity: 0 }}
  animate={{ scale: 1, opacity: 1 }}
  transition={{ duration: 3, ease: "easeInOut" }}
>
  <motion.h2 
    className="text-5xl md:text-6xl font-bold text-center md:text-left leading-snug mb-4"
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: -70 }}
    transition={{ duration: 1 }}
  >
    Secure Your System, <br />Power Your Business
  </motion.h2>
  <motion.p 
    className="text-lg md:text-xl text-center md:text-left leading-snug space-y-8 mb-4"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: -70 }}
    transition={{ duration: 1, delay: 0.5 }}
  >
    Empower your business with unmatched security solutions.<br />
    Protect your online assets from evolving threats with confidence.<br />
    Unlock the full potential of the internet—securely and seamlessly.
  </motion.p>
</motion.section>

{/* Security Features + Mission & Vision in One Section */}
<section className="py-16 px-6 bg-white-300 text-center">

  <h2 className="text-5xl font-semibold mb-8 mt-16">Everything You Need To Stay Secure</h2>
  
  {/* Security Features Grid */}
  <div className="grid md:grid-cols-3 gap-6 w-full max-w-screen-xl mx-auto px-6 mt-16 justify-center ">
        {[ 
          { img: "/threat.png", title: "Enhanced Threat Detection", desc: "Identify and neutralize potential cyber threats in real-time with cutting-edge web monitoring tools." },
          { img: "/security.png", title: "Streamlined Security Management", desc: "Automate routine security tasks and optimize protection with tools designed for seamless security operations." },
          { img: "/risk.png", title: "Comprehensive Risk Analysis", desc: "Leverage in-depth analytics to uncover vulnerabilities and develop robust strategies to fortify your online presence." }
        ].map((feature, index) => (
          <motion.div 
            key={index} 
            className="p-14 bg-white rounded-2xl shadow-lg flex flex-col items-center text-center transition-all duration-300 hover:bg-gray-100 hover:shadow-2xl hover:-translate-y-2 w-[380px] h-[410px]"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <motion.img 
              src={feature.img} 
              alt={feature.title} 
              className="w-20 h-20 object-cover rounded-md mb-6" 
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            />
            <h3 className="text-3xl font-semibold text-gray-900">{feature.title}</h3>
            <p className="mt-4 text-lg text-gray-600">{feature.desc}</p>
          </motion.div>
        ))}
      </div>
  {/* Mission & Vision - Same Wrapper */}
  <div className="max-w-5xl mx-auto space-y-16 mt-16">
  {/* Mission */}
  <motion.div
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    viewport={{ once: true }}
    className="flex flex-col md:flex-row items-center md:items-start gap-8"
  >
    <motion.img
      src="/mission.png"
      alt="Our Mission"
      className="w-18 h-18 rounded-md mt-4"
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.3 }}
    />
    <div className="text-center md:text-left">
      <motion.h3
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="text-2xl font-semibold text-gray-900"
      >
        Our Mission
      </motion.h3>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        viewport={{ once: true }}
        className="mt-2 text-lg text-gray-700 duration-300 hover:-translate-y-2"
      >
        To empower businesses with cutting-edge security solutions that safeguard online assets, foster continuous innovation, and enable seamless digital operations with confidence and trust. We are committed to building a safer, more resilient digital future for all.
      </motion.p>
    </div>
  </motion.div>

  {/* Vision */}
  <motion.div
    initial={{ opacity: 0, x: 50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    viewport={{ once: true }}
    className="flex flex-col md:flex-row-reverse items-center md:items-start gap-8"
  >
    <motion.img
      src="/vision.png"
      alt="Our Vision"
      className="w-18 h-18 rounded-md mt-6"
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.3 }}
    />
    <div className="text-center md:text-left">
      <motion.h3
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="text-2xl font-semibold text-gray-900"

      >
        Our Vision
      </motion.h3>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        viewport={{ once: true }}
        className="mt-4 text-lg text-gray-700 duration-300 hover:-translate-y-2 "
      >
        We aim to become the global leader in security by setting the standard for trust, innovation, and excellence. In the future, we plan to initiate cutting-edge development in cybersecurity, ensuring every business can thrive in a secure, compliant, and resilient online environment.
      </motion.p>
    </div>
  </motion.div>
</div>;

<div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center mt-16 gap-12 md:gap-20">
  {/* Left Side - Image */}
  <motion.div
    className="relative text-lg font-semibold mb-4 text-left whitespace-pre-line"
    animate={{ opacity: 1, y: 0 }}
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.3, ease: "easeOut" }}
  >
    <img
      src="/why-choose-us.png"
      alt="Why Choose Us"
      className="w-full max-w-xs md:max-w-md lg:max-w-lg max-h-[800px] object-cover rounded-lg shadow-lg"
    />
    <div className="absolute inset-x-0 bottom-4 flex flex-col items-center justify-center p-4">
      <div className="text-white text-center max-w-lg">
        <p className="text-lg font-semibold mb-4">
          Cyber Tetra is committed to empowering organizations to embrace the digital landscape confidently, 
          knowing their critical data and operations are secure. 
          Let us help you unlock the full potential of your online presence!
        </p>
        <img src="/logo.png" alt="Company Logo" className="w-40 h-auto" />
      </div>
    </div>
  </motion.div>

  {/* Right Side - Text */}
  <div className="w-full md:w-1/2 text-left pt-12 md:pt-0">
    <motion.h4
      className="text-5xl font-bold text-gray-900 mb-20"
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      Why Choose <span className="text-blue-600">CyberTetra</span>
    </motion.h4>

    <div className="space-y-8">
      {[
        { number: "1", title: "Unparalleled Expertise", text: "Our team of security specialists has a strong understanding of the latest threats and best practices to protect your business." },
        { number: "2", title: "Tailored Solutions", text: "We collaborate with you to develop customized security strategies that address your unique needs and challenges." },
        { number: "3", title: "Innovative Approach", text: "As a fresh and dynamic startup, we bring a modern, forward-thinking approach to security, leveraging the latest technologies to safeguard your online presence." }
      ].map((item, index) => (
        <motion.div
          key={index}
          className="flex items-start gap-6 duration-300 hover:-translate-y-2"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 + index * 0.2, ease: "easeOut" }}
        >
          <motion.div
            className="w-10 h-10 bg-blue-600 text-white flex items-center justify-center rounded-md text-lg font-bold flex-shrink-0 mt-4"
            whileHover={{ scale: 1.1 }}
          >
            {item.number}
          </motion.div>
          <motion.div
            whileHover={{ x: 5, scale: 1.02, transition: { duration: 0.2 } }}
          >
            <h4 className="text-4xl font-semibold text-gray-900 mb-4">{item.title}</h4>
            <p className="text-xl mb-2">{item.text}</p>
          </motion.div>
        </motion.div>
      ))}
    </div>
  </div>
</div>


  
</section>

{/* Concave Curve */}
<div className="relative w-full bg-white-300">
  <svg
    className="w-full -mt-20"
    viewBox="0 0 1440 150"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill="#0A1931"// Adjust color to match your design
      d="M0,50 Q720,150 1440,50 L1440,150 L0,150 Z"
    ></path>
  </svg>
</div>

{/* Core Values Section - Now a Rectangle */}
<section
  className="bg-[#0A1931] text-white py-16 px-6 text-center"
>
  <motion.h2
    className="text-5xl font-bold mb-6 -mt-12"
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
  >
    Core Values
  </motion.h2>

  <motion.p
    className="max-w-3xl mx-auto text-lg mb-12"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
  >
    Built on a foundation of trust, integrity, and innovation. Our security-first approach ensures your success in today's competitive digital era.
  </motion.p>

  <motion.div
    className="grid md:grid-cols-3 gap-16 max-w-7xl mx-auto"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
  >
    {[
      {
        img: "/sec_icon.png",
        title: "Security-First Approach",
        text: "We prioritize security in everything we do, embedding robust protective measures into every layer of our web security solutions.",
      },
      {
        img: "/innovation.png",
        title: "Innovation and Adaptability",
        text: "We embrace innovation and continuously evolve our technologies to stay ahead of emerging cyber threats and industry trends.",
      },
      {
        img: "/client.png",
        title: "Client-Centric Focus",
        text: "We are committed to understanding our clients' unique challenges and delivering tailored security solutions that meet their specific needs.",
      },
    ].map((value, index) => (
      <motion.div
        key={index}
        className="flex flex-col items-center p-4 rounded-lg"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.3 }}
        whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
      >
        {/* Animated Icon */}
        <motion.img
          src={value.img}
          alt={value.title}
          className="w-10 h-10 mb-4"
          whileHover={{ scale: 1.2, rotate: 5 }} 
        />
        <h3 className="text-xl font-semibold">{value.title}</h3>
        <p className="mt-2 text-center max-w-lg mx-auto text-gray-300 leading-relaxed">{value.text}</p>
      </motion.div>
    ))}
  </motion.div>
</section>


 </div>
 </div>
 
  );
};

export default Home;
