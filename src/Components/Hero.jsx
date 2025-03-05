import React, { useState } from "react";
import { motion } from "framer-motion";


const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative w-full bg-gray-100 text-black overflow-x-hidden">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full bg-black bg-opacity-50 text-white z-50 flex justify-between items-center px-6 py-4 shadow-md">
        <h1 className="text-2xl font-bold">Cyber Tetra</h1>
        <nav>
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)} className="text-white focus:outline-none">
              ☰
            </button>
          </div>
          <ul className={`md:flex space-x-6 absolute md:static top-16 left-0 w-full bg-black bg-opacity-90 md:bg-transparent md:w-auto md:flex-row ${menuOpen ? "block" : "hidden"}`}>
            <li><a href="#" className="block py-2 px-4 md:inline hover:text-gray-300">Home</a></li>
            <li><a href="#" className="block py-2 px-4 md:inline hover:text-gray-300">Services</a></li>
            <li><a href="#" className="block py-2 px-4 md:inline hover:text-gray-300">About Us</a></li>
            <li><a href="#" className="block py-2 px-4 md:inline hover:text-gray-300">Contact Us</a></li>
          </ul>
        </nav>
      </header>
      
      {/* Hero Section */}
      <motion.section 
        className="flex flex-col items-center justify-center h-screen text-center text-white px-6 bg-cover bg-center mt-0"
        style={{ backgroundImage: "url('/src/assets/Hero-background.png')" }}
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 3, ease: "easeInOut" }}
      >
        <motion.h2 
          className="text-5xl font-bold"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Secure Your System, Power Your Business
        </motion.h2>
        <motion.p 
          className="mt-4 text-lg max-w-2xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Empower your business with unmatched security solutions. Protect your online assets from evolving threats with confidence.
        </motion.p>
      </motion.section>
      
      {/* Security Features + Mission & Vision in One Section */}
<section className="py-16 px-6 bg-white text-center">
  <h2 className="text-3xl font-bold mb-8">Everything You Need To Stay Secure</h2>
  
  {/* Security Features Grid */}
  <div className="grid md:grid-cols-3 gap-8 w-full max-w-6xl mx-auto px-6 mt-12">


        {[
          { img: "/src/assets/threat.png", title: "Enhanced Threat Detection", desc: "Identify and neutralize potential cyber threats in real-time with cutting-edge web monitoring tools." },
          { img: "/src/assets/security.png", title: "Streamlined Security Management", desc: "Automate routine security tasks and optimize protection with tools designed for seamless security operations." },
          { img: "/src/assets/risk.png", title: "Comprehensive Risk Analysis", desc: "Leverage in-depth analytics to uncover vulnerabilities and develop robust strategies to fortify your online presence." }
        ].map((feature, index) => (
          <motion.div 
            key={index} 
            className="p-8 bg-white rounded-2xl shadow-lg flex flex-col items-center text-center transition-all duration-300 hover:bg-gray-100 hover:shadow-2xl hover:-translate-y-2"

            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <motion.img 
              src={feature.img} 
              alt={feature.title} 
              className="w-24 h-24 object-cover rounded-md mb-4" 
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            />
            <h3 className="text-2xl font-semibold">{feature.title}</h3>
            <p className="mt-3 text-md text-gray-600">{feature.desc}</p>
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
      src="/src/assets/mission.png"
      alt="Our Mission"
      className="w-36 h-36 rounded-md"
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
        className="mt-2 text-lg text-gray-700"
      >
        To empower businesses with cutting-edge security solutions that safeguard online assets, foster continuous innovation, and enable seamless digital operations with confidence and trust.
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
      src="/src/assets/vision.png"
      alt="Our Vision"
      className="w-36 h-36 rounded-md"
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
        className="mt-2 text-lg text-gray-700"
      >
        We aim to become the global leader in security by setting the standard for trust, innovation, and excellence.
      </motion.p>
    </div>
  </motion.div>
</div>;

<div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center mt-16 gap-12">
  {/* Left Side - Image */}
  <motion.div
    className="w-full md:w-1/2 flex justify-center relative"
    initial={{ x: -100, opacity: 0 }} // Slide in from left
    animate={{ x: 0, opacity: 1 }} // Fade in
    transition={{ duration: 0.8, ease: "easeOut" }}
    whileHover={{ y: -5, boxShadow: "0px 10px 20px rgba(0,0,0,0.2)" }} // Hover Effect
  >
    <img
      src="/src/assets/why-choose-us.png"
      alt="Why Choose Us"
      className="w-full max-h-[600px] object-cover rounded-lg shadow-lg"
    />
    <div className="absolute inset-0 flex flex-col items-center justify-end p-6">
      <div className="text-white text-center">
        <p className="text-base font-medium mb-4" style={{ wordBreak: "break-word" }}>
          Cyber Tetra is committed to empowering organizations to embrace the digital landscape confidently, knowing their critical data and operations are secure. Let us help you unlock the full potential of your online presence!
        </p>
        <img src="/src/assets/logo.png" alt="Company Logo" className="w-24 h-auto" />
      </div>
    </div>
  </motion.div>

  <div className="w-full md:w-1/2 text-left -mt-15">
  <motion.h4
    className="text-4xl font-bold text-gray-900 mb-10"
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
        className="flex items-start gap-4"
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 + index * 0.2, ease: "easeOut" }}
        whileHover={{ x: 10, boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.2)" }} // Hover effect
      >
        {/* Animated Number Box */}
        <motion.div
          className="w-10 h-10 bg-blue-600 text-white flex items-center justify-center rounded-md text-lg font-bold flex-shrink-0"
          whileHover={{ scale: 1.1 }}
        >
          {item.number}
        </motion.div>
        {/* Text Content */}
        <motion.div
          whileHover={{ x: 5, scale: 1.02, transition: { duration: 0.2 } }} // Text hover effect
        >
          <h4 className="text-2xl font-semibold text-gray-900 mb-2">{item.title}</h4>
          <p className="text-gray-800">{item.text}</p>
        </motion.div>
      </motion.div>
    ))}
  </div>
</div>

  </div>
</section>

{/* Core Values Section */}
<section
  className="bg-gradient-to-r from-blue-900 via-blue-900 to-blue-900 text-white py-16 px-6 text-center rounded-t-[20%]"
>
  <motion.h2
    className="text-3xl font-bold mb-6"
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
    className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
  >
    {[
      {
        img: "/src/assets/sec_icon.png",
        title: "Security-First Approach",
        text: "We prioritize security in everything we do, embedding robust protective measures into every layer of our web security solutions.",
      },
      {
        img: "/src/assets/innovation.png",
        title: "Innovation and Adaptability",
        text: "We embrace innovation and continuously evolve our technologies to stay ahead of emerging cyber threats and industry trends.",
      },
      {
        img: "/src/assets/client.png",
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
        whileHover={{ scale: 1.05, transition: { duration: 0.3 } }} // Scale effect on hover
      >
        {/* Animated Icon */}
        <motion.img
          src={value.img}
          alt={value.title}
          className="w-16 h-16 mb-4"
          whileHover={{ scale: 1.2, rotate: 5 }} // Bounce effect on hover
        />
        <h3 className="text-xl font-semibold">{value.title}</h3>
        <p className="mt-2 text-center">{value.text}</p>
      </motion.div>
    ))}
  </motion.div>
</section>
 </div>
  );
};

export default Home;
