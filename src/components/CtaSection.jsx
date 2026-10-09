import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const CtaSection = ({ 
  title = "Ready to Discuss Your Next Project?", 
  subtitle = "Our engineering team is ready to analyze your requirements and provide innovative, scalable solutions.", 
  buttonText = "Discuss Your Project", 
  buttonLink = "/contact" 
}) => {
  return (
    <section 
      className="py-20 relative overflow-hidden"
      style={{ background: 'radial-gradient(ellipse at center, #dc2626 0%, #b91c1c 40%, #7f1d1d 100%)' }}
    >
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-96 h-96 bg-red-600 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-72 h-72 bg-orange-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
      
      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6 tracking-tight">
            {title}
          </h2>
          <p className="text-xl text-red-50 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            {subtitle}
          </p>
          <Link 
            to={buttonLink} 
            className="inline-flex items-center justify-center gap-2.5 px-8 py-4 text-lg font-bold rounded-xl text-brand-primary bg-white hover:bg-gray-50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 group"
          >
            <span>{buttonText}</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;
