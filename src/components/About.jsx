import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-12 lg:mb-0 relative"
          >
            {/* Image block */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[500px]">
              <img
                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2940&auto=format&fit=crop"
                alt="Engineering Professional"
                className="w-full h-full object-cover"
              />
              {/* No gradient overlay as requested */}

              <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm p-4 rounded-xl border-l-4 border-brand-primary shadow-lg max-w-[80%]">
                <p className="text-gray-900 font-black text-xl leading-none">American Engineering</p>
                <p className="text-brand-primary font-bold text-sm mt-1 uppercase tracking-wider">Consultancy Services LLP</p>
              </div>
            </div>
            {/* Decorative block */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-red-50 rounded-2xl -z-10"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-brand-primary font-semibold tracking-wide uppercase">About Us</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Decades of Industry Experience
            </p>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              AECS - American Engineering Consultancy Services is a premier engineering consultancy firm specializing in comprehensive design solutions. With a rich history of partnering with dynamic industries worldwide, we bring standardized, scalable, and repeatable results to our clients.
            </p>

            <div className="mt-8 border-l-4 border-brand-primary pl-6 py-2 bg-slate-50 rounded-r-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Leadership Excellence</h3>
              <p className="text-gray-700 italic">
                Spearheaded by <strong className="text-brand-primary">Abraham Pannikottu</strong>, our team combines global expertise with local ingenuity. We are committed to translating complex engineering ideas into manufactured reality, optimizing both performance and cost.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-8">
              <div>
                <h4 className="text-4xl font-extrabold text-brand-primary">20+</h4>
                <p className="mt-2 text-sm font-medium text-gray-500 uppercase tracking-wide">Years Experience</p>
              </div>
              <div>
                <h4 className="text-4xl font-extrabold text-brand-primary">100%</h4>
                <p className="mt-2 text-sm font-medium text-gray-500 uppercase tracking-wide">Authorized Poling Partner</p>
              </div>
            </div>

            <div className="mt-10">
              <a href="#services" className="btn-primary group inline-flex items-center gap-2">
                Learn more about our capabilities
                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
