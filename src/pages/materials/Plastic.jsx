import React from 'react';
import PageHero from '../../components/PageHero';
import CtaSection from '../../components/CtaSection';
import { motion } from 'framer-motion';

const Plastic = () => {
  return (
    <div>
      <PageHero 
        title="Precision Plastic Components" 
        subtitle="High-Quality Injection Molding and Industrial Polymer Solutions"
        backgroundImage="https://images.unsplash.com/photo-1623835694200-e22e96ebbe5c?q=80&w=2942&auto=format&fit=crop"
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6 italic">Specialized Plastics Engineering</h2>
              <div className="prose prose-lg text-gray-600 space-y-4">
                <p>
                  At AECS, we specialize in manufacturing precision plastic components designed for both automotive and industrial applications. Our extensive product line includes essential parts such as impellers, diffusers, pumps, and guide vanes, each crafted through high-quality injection molding processes.
                </p>
                <p>
                  We pride ourselves on offering plastic solutions that deliver on both durability and reliability without the premium price. Leveraging our deep experience in plastics engineering, AECS provides complete services from design to final production.
                </p>
                <p>
                  Our skilled team works closely with clients to meet specific project requirements, ensuring each product meets the highest standards of quality and performance. Whether you need custom solutions for challenging projects or standard plastic parts, AECS is equipped to support your efforts with efficiency and precision.
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
                  src="https://images.unsplash.com/photo-1565610222536-ef125c59da2e?q=80&w=2940&auto=format&fit=crop" 
                  alt="Plastic Injection Molding" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div 
                className="absolute -bottom-6 -right-6 text-white p-8 rounded-xl shadow-xl hidden md:block"
                style={{ background: 'radial-gradient(ellipse at center, #dc2626 0%, #b91c1c 50%, #7f1d1d 100%)' }}
              >
                <p className="text-2xl font-bold">15+</p>
                <p className="text-sm opacity-80 uppercase tracking-wider">Polymer Grades</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <CtaSection 
        title="Drive your innovation forward" 
        subtitle="Let’s talk about how we can partner to drive your innovation forward." 
      />
    </div>
  );
};

export default Plastic;
