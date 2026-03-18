import React from 'react';
import PageHero from '../../components/PageHero';
import CtaSection from '../../components/CtaSection';
import { motion } from 'framer-motion';

const Composite = () => {
  return (
    <div>
      <PageHero 
        title="Advanced Composite Solutions" 
        subtitle="Lightweight, High-Performance Materials for Structural Integrity"
        backgroundImage="https://images.unsplash.com/photo-1555448259-c29eb24874c7?q=80&w=2938&auto=format&fit=crop"
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6 italic">High-Performance Composites</h2>
              <div className="prose prose-lg text-gray-600 space-y-4">
                <p>
                  AECS offers advanced composite solutions ideal for demanding applications. We provide lightweight and high-performance composite materials, such as honeycomb cores and automotive parts, designed to improve structural integrity and reduce weight.
                </p>
                <p>
                  You can count on our comprehensive capabilities that cover the full spectrum of composite manufacturing. From carbon fiber to fiberglass components, each product is precisely engineered to meet individual client requirements.
                </p>
                <p>
                  Our experienced team delivers end-to-end services, including design, analysis, prototyping, and scalable production, ensuring that each project benefits from our technical expertise. AECS stands out with our efficient use of materials, reducing both cost and environmental impact.
                </p>
                <p>
                  We invite you to discuss your project’s specific needs and explore how our tailored composite solutions can help you achieve your goals.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1542744095-231a1532f41c?q=80&w=2940&auto=format&fit=crop" 
                  alt="Composite Materials" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div 
                className="absolute -bottom-6 -right-6 text-white p-8 rounded-xl shadow-xl hidden md:block"
                style={{ background: 'radial-gradient(ellipse at center, #dc2626 0%, #b91c1c 50%, #7f1d1d 100%)' }}
              >
                <p className="text-2xl font-bold">40%</p>
                <p className="text-sm opacity-80 uppercase tracking-wider">Weight Reduction</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <CtaSection 
        title="Innovate together with AECS" 
        subtitle="Reach out today and let’s innovate together." 
      />
    </div>
  );
};

export default Composite;
