import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image Setup */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2940&auto=format&fit=crop")', // Clear modern engineering background
        }}
      >
        <div className="absolute inset-0 bg-brand-dark/50"></div> {/* Dark overlay for text readability */}
      </div>

      <div className="relative z-10 section-padding text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Where Engineering Ideas <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400">
              Become Manufactured Products
            </span>
          </h1>
          <p className="mt-4 text-xl text-gray-200 max-w-3xl mx-auto mb-10 font-light">
            We bridge the gap between design and production to cut time, cost, and technical risk.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#services" className="btn-primary text-lg">
              Explore Our Services
            </a>
            <a href="#contact" className="btn-outline text-lg border-white text-white hover:bg-white hover:text-brand-primary">
              Contact Us Today
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <svg className="w-6 h-6 animate-bounce" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </motion.div>
    </section>
  );
};

export default Hero;
