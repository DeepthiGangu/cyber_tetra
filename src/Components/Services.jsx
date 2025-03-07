import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Web App Penetration Testing",
    description:
      "A detailed assessment of your web applications to uncover security flaws like injection attacks, authentication vulnerabilities, and misconfigurations. We provide actionable insights to safeguard your applications.",
    image: "/penetrate1.png",
  },
  {
    title: "API Penetration Testing",
    description:
      "Comprehensive analysis of APIs to uncover potential security flaws, including improper authentication, insecure data handling, and unauthorized access risks. Ensure your APIs are robust and secure against exploitation.",
    image: "/penetrate2.png",
  },
  {
    title: "Android Penetration Testing",
    description:
      "An in-depth analysis of your Application to uncover vulnerabilities, including unauthorized access points, misconfigured security settings, and outdated protocols. Strengthen your defenses with our comprehensive testing.",
    image: "/penetrate3.png",
  },
];

const Services = () => (
  <section id="services" className="py-16 bg-gray-100">
    <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-[88rem]">
      {/* Animated Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-[2.5rem] font-bold text-center mb-12 text-black mt-12"
      >
        Services We Offer
      </motion.h2>

      {/* Animated Paragraph */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-xl mb-12 text-black text-center -mt-8"
      >
        Comprehensive security tailored to your needs. Protect, detect, and
        thrive with our expert solutions.
      </motion.p>

      {/* Services List */}
      <div className="flex flex-wrap -mx-4">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="w-full md:w-1/3 px-4 mb-8"
          >
            {/* Card Animation */}
            <motion.div
              whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0,0,0,0.2)" }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden min-h-[500px]"
            >
              {/* Image Zoom on Hover */}
              <motion.img
                src={service.image}
                alt={service.title}
                className="w-full h-64 object-cover"
                style={{ objectPosition: "top" }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              />
              <div className="p-6 text-left">
                <h3 className="text-2xl font-bold mb-2 text-black">
                  {service.title}
                </h3>
                <p className="text-gray-900 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
