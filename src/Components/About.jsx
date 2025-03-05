import React from "react";
import bgImage from "../assets/bg.png"; // Import background image

const teamMembers = [
  {
    name: "Kucharlapati Prasanna",
    role: "CEO",
    specialty: "VAPT Specialist",
    image: "/src/assets/prasanna.jpg", // Replace with actual image path
  },
  {
    name: "Raviteja Chanamalla",
    role: "COO",
    specialty: "VAPT Specialist",
    image: "/src/assets/raviteja.jpg", // Replace with actual image path
  },
  {
    name: "Jayanth Changala",
    role: "CTO",
    specialty: "VAPT Specialist",
    image: "/src/assets/jayanth.jpg", // Replace with actual image path
  },
];

const About = () => (
  <section id="about" className="py-12 bg-gray-100 text-center mb-0">
    <div className="max-w-5xl mx-auto px-6">
      <h2 className="text-4xl font-bold mb-8 text-black">Our Core Team</h2>
      <p className="text-gray-600 mb-8">
        A dedicated team of security experts committed to safeguarding your digital assets.
      </p>

      {/* Team Grid */}
      <div className="grid md:grid-cols-3 gap-6">
        {teamMembers.map((member, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
            <img
              src={member.image}
              alt={member.name}
              className="w-40 h-40 mx-auto rounded-full border-4 border-gray-300 object-cover"
            />
            <h3 className="text-xl font-bold mt-4 text-black">{member.name}</h3>
            <p className="text-gray-500">{member.role}</p>
            <p className="text-gray-400">{member.specialty}</p>
          </div>
        ))}
      </div>
    </div>

    
  </section>
);

export default About;
