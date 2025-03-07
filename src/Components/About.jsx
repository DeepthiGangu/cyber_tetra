import React from "react";
import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "Kucharlapati Prasanna",
    role: "CEO",
    specialty: "VAPT Specialist",
    image: "/prasanna.jpg",
  },
  {
    name: "Raviteja Chanamalla",
    role: "COO",
    specialty: "VAPT Specialist",
    image: "/raviteja.jpg",
  },
  {
    name: "Jayanth Changala",
    role: "CTO",
    specialty: "VAPT Specialist",
    image: "/jayanth.jpg",
  },
];

// Animation Variants
const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

const About = () => (
  <motion.section
    id="about"
    className="py-12 bg-white text-center mb-0 "
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
  >
    <div className="max-w-4xl mx-auto px-6 mt-10 min-h-[500px]">
      {/* Title */}
      <motion.h2 className="text-5xl font-semibold mb-8 text-black" variants={fadeUp}>
        Our Core Team
      </motion.h2>

      {/* Subtitle */}
      <motion.p className="text-gray-600 mb-8" variants={fadeUp}>
        A dedicated team of security experts committed to safeguarding your digital assets.
      </motion.p>

      {/* Team Grid */}
      <motion.div className="grid md:grid-cols-3 gap-6" variants={staggerContainer} initial="hidden" whileInView="visible">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg"
            variants={fadeUp}
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-40 h-40 mx-auto rounded-full border-4 border-gray-300 object-cover"
            />
            <h3 className="text-xl font-semibold mt-4 text-black">{member.name}</h3>
            <p className="text-gray-800">{member.role}</p>
            <p className="text-gray-700">{member.specialty}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </motion.section>
);

export default About;
