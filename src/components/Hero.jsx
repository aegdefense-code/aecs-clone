import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown } from 'lucide-react';
import heroFeaImg from '../assets/images/hero-fea.webp';

const Hero = () => {
  const capabilityTags = [
    'Product Engineering',
    'FEA & Simulation',
    'Advanced Materials',
    'Testing',
    'Prototyping',
    'Manufacturing'
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Whole FEA Image with no background color overlays or added tints */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={heroFeaImg}
          alt="AECS Finite Element Analysis FEA Stress Simulation"
          className="w-full h-full object-cover object-center"
        />
        {/* Clean subtle dark scrim only to ensure text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-28 sm:py-36 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          {/* Engineering Category Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/60 border border-white/20 text-amber-400 text-xs font-bold uppercase tracking-widest mb-8 backdrop-blur-md shadow-lg">
            <span className="w-2 h-2 rounded-full bg-brand-primary animate-pulse"></span>
            AECS Global Engineering Platform
          </div>

          {/* 1. H1 Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-[1.1] tracking-tight drop-shadow-md">
            Engineering Innovation from{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-400 to-amber-300">
              Concept to Manufacturing
            </span>
          </h1>

          {/* 2. Subheadline copy */}
          <p className="mt-6 text-base sm:text-lg md:text-xl text-slate-100 max-w-3xl mx-auto leading-relaxed font-normal drop-shadow-sm">
            AECS provides advanced product development, simulation, materials engineering, prototyping, testing and manufacturing solutions for customers in India, the United States and global markets.
          </p>

          {/* 3. Horizontal badge/tag list */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 my-8 sm:my-10 max-w-4xl mx-auto">
            {capabilityTags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center text-xs sm:text-sm font-semibold tracking-wide text-white bg-black/60 border border-white/20 px-3.5 py-1.5 rounded-xl shadow-md backdrop-blur-md hover:border-brand-primary/80 transition-all"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* 4. Targeted CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5">
            {/* Primary CTA */}
            <Link
              to="/contact"
              className="btn-primary py-3.5 px-8 text-sm sm:text-base font-bold rounded-xl shadow-xl shadow-brand-primary/40 w-full sm:w-auto inline-flex items-center justify-center gap-2.5"
            >
              <span>Discuss Your Project</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            {/* Secondary CTA */}
            <a
              href="#featured-projects"
              className="py-3.5 px-7 text-sm sm:text-base font-bold rounded-xl border-2 border-white/80 hover:border-white text-white bg-black/40 hover:bg-black/60 shadow-md transition-all w-full sm:w-auto inline-flex items-center justify-center gap-2 backdrop-blur-sm"
            >
              <span>Explore Our Engineering Work</span>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div 
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 hover:text-white transition-colors cursor-pointer hidden sm:block"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <a href="#featured-projects" aria-label="Scroll to featured projects">
          <ChevronDown className="w-6 h-6" />
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
