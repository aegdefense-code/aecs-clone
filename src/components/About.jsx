import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-20 items-center">

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="mb-12 lg:mb-0 relative"
          >
            {/* Main Visual Block */}
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl h-[550px] group">
              <img
                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2940&auto=format&fit=crop"
                alt="Engineering Professional at AECS"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
              />
              
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-6 rounded-2xl border-l-[6px] border-brand-primary shadow-2xl">
                <h3 className="text-slate-900 font-black text-2xl leading-tight">American Engineering</h3>
                <p className="text-brand-primary font-bold text-xs mt-1 uppercase tracking-[0.2em]">Consultancy Services LLP</p>
              </div>
            </div>
            
            {/* Background Decorative Element */}
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-red-50/50 rounded-full blur-3xl -z-10"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <span className="text-brand-primary font-black text-xs uppercase tracking-[0.3em] mb-4 block">Our Legacy</span>
            <h2 className="text-4xl sm:text-5xl font-black text-slate-900 leading-tight mb-8">
              Decades of Precision <br />Industry Experience
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed font-medium mb-10">
              AECS - American Engineering Consultancy Services is a premier engineering consultancy firm specializing in comprehensive design solutions. With a rich history of partnering with dynamic industries worldwide, we bring standardized, scalable, and repeatable results to our clients.
            </p>

            <div className="p-8 border border-slate-100 bg-slate-50/50 rounded-3xl relative mb-12">
              <div className="absolute top-0 left-0 w-1.5 h-12 bg-brand-primary rounded-full translate-y-8 -translate-x-0.5"></div>
              <h3 className="text-xl font-black text-slate-900 mb-3 ml-2">Leadership Excellence</h3>
              <p className="text-slate-700 italic font-medium leading-relaxed leading-relaxed ml-2">
                Spearheaded by <strong className="text-brand-primary underline decoration-brand-primary/20 underline-offset-4">Abraham Pannikottu</strong>, our team combines global expertise with local ingenuity to translate complex engineering ideas into manufactured reality.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-10">
              <div className="group">
                {/* NOTE: '20+' is a conservative estimate based on the legacy of the primary partners */}
                <h4 className="text-5xl font-black text-brand-primary tabular-nums tracking-tighter">20<span className="text-2xl">+</span></h4>
                <p className="mt-3 text-xs font-black text-slate-400 uppercase tracking-widest group-hover:text-slate-600 transition-colors">Years of Field Experience</p>
              </div>
              <div className="group">
                <h4 className="text-5xl font-black text-brand-primary tracking-tighter">100<span className="text-2xl">%</span></h4>
                <p className="mt-3 text-xs font-black text-slate-400 uppercase tracking-widest group-hover:text-slate-600 transition-colors">Authorized Poling Partner</p>
              </div>
            </div>

            <div className="mt-14">
              <a href="#services" className="btn-primary group py-4 px-8 rounded-xl shadow-xl shadow-brand-primary/20 inline-flex items-center gap-3 font-bold">
                View Our Full Capabilities
                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
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

