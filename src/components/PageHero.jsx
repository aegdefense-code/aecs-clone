import React from 'react';
import { motion } from 'framer-motion';

const PageHero = ({ title, subtitle, children, backgroundImage = 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2940&auto=format&fit=crop' }) => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-brand-dark">
      {/* Background Image Setup */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-40"
        style={{ backgroundImage: `url("${backgroundImage}")` }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-300">
              {subtitle}
            </p>
          )}
          {children && (
            <div className="mt-8">
              {children}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default PageHero;
