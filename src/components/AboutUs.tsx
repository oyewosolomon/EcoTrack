import React from 'react';
import { motion } from "framer-motion";
import { Globe, BarChart3, Shield, Users, ThumbsUp } from "lucide-react";

export default function AboutUs() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-primary/90 to-black py-20 md:py-28 px-6 overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000,transparent)]" />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Hero Section */}
        <motion.div
          {...fadeInUp}
          className="text-center mb-24"
        >
          <h2 className="text-6xl md:text-7xl font-black bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80 leading-tight mb-6">
            About EcoTrack Systems
          </h2>
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto font-light">
            EcoTrack Systems is a leading environmental compliance and carbon tracking platform serving 300+ industrial clients worldwide.
          </p>
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          {...fadeInUp}
          className="text-center mb-24 bg-white/5 backdrop-blur-lg rounded-3xl p-12 border border-white/10"
        >
          <h3 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-white/90 bg-clip-text text-transparent">Our Mission</h3>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Empowering industries to achieve environmental sustainability through innovative technology and reliable data solutions.
          </p>
        </motion.div>

        {/* Core Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {[
            {
              icon: <Globe className="h-10 w-10" />,
              title: "Global Compliance",
              description: "Regulatory reporting for 40+ countries"
            },
            {
              icon: <BarChart3 className="h-10 w-10" />,
              title: "Data Accuracy",
              description: "Real-time monitoring and precise analytics"
            },
            {
              icon: <Shield className="h-10 w-10" />,
              title: "Security & Privacy",
              description: "Secure data handling and compliance"
            },
            {
              icon: <Users className="h-10 w-10" />,
              title: "Client-Centric",
              description: "Dedicated to client success and satisfaction"
            }
          ].map((value, index) => (
            <motion.div
              key={index}
              {...fadeInUp}
              transition={{ delay: index * 0.1 }}
              className="group p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300"
            >
              <div className="mb-6 text-white/80 group-hover:text-white transition-colors duration-300">{value.icon}</div>
              <h4 className="text-2xl font-bold mb-3 text-white group-hover:text-white transition-colors duration-300">{value.title}</h4>
              <p className="text-white/70 group-hover:text-white/90 transition-colors duration-300">{value.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Vision Section */}
        <motion.div
          {...fadeInUp}
          className="text-center mb-24 relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-white/5 to-primary/0 blur-3xl -z-10" />
          <h3 className="text-4xl font-bold mb-6 bg-gradient-to-r from-white to-white/90 bg-clip-text text-transparent">Our Vision</h3>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Leading the way towards a sustainable future by empowering organizations to achieve their environmental goals.
          </p>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          {...fadeInUp}
          className="text-center mt-24"
        >
          <div className="inline-block p-4 rounded-full bg-white/5 backdrop-blur-sm mb-8">
            <ThumbsUp className="h-8 w-8 text-white" />
          </div>
          <h3 className="text-4xl font-bold mb-6 bg-gradient-to-r from-white to-white/90 bg-clip-text text-transparent">Join Us on Our Journey</h3>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
            Become part of the movement for a cleaner and more sustainable planet.
          </p>
          <a 
            href="#contact" 
            className="inline-flex items-center px-8 py-4 text-lg font-semibold text-primary bg-white rounded-full hover:bg-white/90 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Get In Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
}