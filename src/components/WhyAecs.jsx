import React from 'react';
import { motion } from 'framer-motion';
import { 
  Globe2, 
  Layers, 
  Cpu, 
  FlaskConical, 
  Factory, 
  CheckCircle2, 
  ShieldCheck 
} from 'lucide-react';

const differentiators = [
  {
    title: "USA–India Engineering Bridge",
    desc: "Combining American Engineering Group (AEG Akron, Ohio) US-linked research, IP, and commercialization with AECS's agile, cost-effective Indian engineering and testing hub.",
    icon: <Globe2 className="w-6 h-6 text-brand-primary" />
  },
  {
    title: "Multidisciplinary Engineering",
    desc: "Integrated domain expertise spanning finite element mechanics, non-pneumatic tire science, maritime hydrodynamics, and custom industrial automation under one roof.",
    icon: <Layers className="w-6 h-6 text-brand-primary" />
  },
  {
    title: "Simulation Coupled with Physical Testing",
    desc: "We don't stop at computer simulations. Virtual ABAQUS and ANSYS predictions are continuously calibrated against physical dynamometers and destructive testing rigs.",
    icon: <Cpu className="w-6 h-6 text-brand-primary" />
  },
  {
    title: "Advanced Materials Specialization",
    desc: "Over 25 years of specialized material science experience in hyperelastic elastomers, synthetic rubber compounds, and high-strength carbon-fiber composite laminates.",
    icon: <FlaskConical className="w-6 h-6 text-brand-primary" />
  },
  {
    title: "Concept-to-Manufacturing Reality",
    desc: "We bridge the risky gap between CAD design and physical factory production, providing tooling design, DFM optimization, and full manufacturing support.",
    icon: <Factory className="w-6 h-6 text-brand-primary" />
  },
  {
    title: "ISO 9001 Quality & Authorized Rig Partner",
    desc: "Royal Impact ISO 9001:2015 certified workflows and official authorization as Poling Group's testing machine representative in India.",
    icon: <ShieldCheck className="w-6 h-6 text-brand-primary" />
  }
];

const WhyAecs = () => {
  return (
    <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Subtle ambient lighting */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-primary/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block mb-3">
            Why Choose AECS
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
            One Engineering Team. <br className="hidden sm:inline" />From Problem to Product.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Engineering buyers choose AECS because we eliminate the costly friction between pure design consultancies and manufacturing shops.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {differentiators.map((diff, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="bg-slate-800/80 rounded-3xl p-8 border border-slate-700/80 hover:border-brand-primary/60 transition-all duration-300 flex flex-col group"
            >
              <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-700 flex items-center justify-center mb-6 group-hover:bg-brand-primary group-hover:text-white transition-colors duration-300">
                {diff.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-3 group-hover:text-amber-300 transition-colors">
                {diff.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {diff.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyAecs;
