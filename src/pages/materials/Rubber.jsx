import React from 'react';
import PageHero from '../../components/PageHero';
import CtaSection from '../../components/CtaSection';
import { motion } from 'framer-motion';

const Rubber = () => {
  return (
    <div>
      <PageHero 
        title="Industrial Rubber Solutions" 
        subtitle="High-Performance Elastomers & Custom Molded Components"
        backgroundImage="https://images.unsplash.com/photo-1549468057-5426b38c03e8?q=80&w=2960&auto=format&fit=crop"
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6 italic">Excellence in Rubber Engineering</h2>
              <div className="prose prose-lg text-gray-600 space-y-4">
                <p>
                  At AECS, we take immense pride in providing high-quality rubber solutions tailored for various applications. Our rubber manufacturing capabilities range from anti-vibration parts to intricate automotive components.
                </p>
                <p>
                  With a wide selection of rubber products, including belts, bellows, bushes, couplers, and dampers, we cater to diverse industry needs. Our expertise in custom molded rubber components ensures parts are designed for optimum performance and durability.
                </p>
                <p>
                  Clients benefit from our precise engineering processes, including compression, injection, and transfer molding, which guarantee reliability and consistency. Dedicated to addressing customer challenges such as vibration control and sealing, our products also offer superior shock absorption and longevity.
                </p>
                <p>
                  Partner with AECS to experience fast and reliable production, high-volume scalability, and competitive pricing for all your specific rubber requirements.
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
                  src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=2940&auto=format&fit=crop" 
                  alt="Rubber Manufacturing" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div 
                className="absolute -bottom-6 -right-6 text-white p-8 rounded-xl shadow-xl hidden md:block"
                style={{ background: 'radial-gradient(ellipse at center, #dc2626 0%, #b91c1c 50%, #7f1d1d 100%)' }}
              >
                <p className="text-2xl font-bold">100%</p>
                <p className="text-sm opacity-80 uppercase tracking-wider">Quality Inspected</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <CtaSection 
        title="Ready to meet your project demands?" 
        subtitle="Let’s talk about how AECS can meet your project demands efficiently and effectively." 
      />
    </div>
  );
};

export default Rubber;
