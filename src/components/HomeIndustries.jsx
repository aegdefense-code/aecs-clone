import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Car, 
  Shield, 
  Anchor, 
  HeartPulse, 
  Factory, 
  Activity, 
  ChevronRight 
} from 'lucide-react';

const industries = [
  {
    name: 'Automotive & Tires',
    desc: 'Tire engineering, run-flat inserts, dynamic uniformity testing, chassis FEA, and polymer damping.',
    path: '/industries/automotive',
    icon: <Car className="w-6 h-6 text-brand-primary" />,
    tag: 'Tier 1 & OEM'
  },
  {
    name: 'Defense & Mobility',
    desc: 'Zero-pressure run-flat wheel inserts, ballistic composite structures, blast deflection modeling.',
    path: '/industries/defense-mobility',
    icon: <Shield className="w-6 h-6 text-brand-primary" />,
    tag: 'Tactical Fleets'
  },
  {
    name: 'Marine Engineering',
    desc: 'ISO 17357 pneumatic floating fenders, heavy apple dock bumpers, hydrodynamics, and naval structures.',
    path: '/industries/marine',
    icon: <Anchor className="w-6 h-6 text-brand-primary" />,
    tag: 'Ports & Shipyards'
  },
  {
    name: 'Medical & Healthcare',
    desc: 'Biocompatible polymer devices, surgical mechanical assemblies, precision tolerance validation.',
    path: '/industries/medical',
    icon: <HeartPulse className="w-6 h-6 text-brand-primary" />,
    tag: 'Precision Devices'
  },
  {
    name: 'Industrial Equipment',
    desc: 'Poling Group tire testing machines, custom dynamometers, tooling jigs, and blast containment cages.',
    path: '/industries/industrial-equipment',
    icon: <Factory className="w-6 h-6 text-brand-primary" />,
    tag: 'Heavy Machinery'
  },
  {
    name: 'Sports & Consumer Products',
    desc: 'Impact-absorbing headgear, athletic footwear elastomers, composite gear, and rapid consumer DFM.',
    path: '/industries/consumer-sports',
    icon: <Activity className="w-6 h-6 text-brand-primary" />,
    tag: 'Impact Engineering'
  }
];

const HomeIndustries = () => {
  return (
    <section className="py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <span className="text-xs font-bold text-brand-primary uppercase tracking-widest block mb-2">
            Industry Verticals
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            Sectors We Engineer For
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base max-w-2xl leading-relaxed">
            Our specialized domain engineers understand the specific regulatory, environmental, and duty-cycle constraints of your industry.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {industries.map((ind, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
            >
              <Link
                to={ind.path}
                className="bg-white rounded-3xl p-7 border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-brand-primary/40 transition-all duration-300 flex flex-col justify-between h-full group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-red-50 flex items-center justify-center group-hover:bg-brand-primary group-hover:text-white transition-colors duration-300">
                      {ind.icon}
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-100 text-slate-600">
                      {ind.tag}
                    </span>
                  </div>
                  <h3 className="text-xl font-extrabold text-slate-900 mb-2.5 group-hover:text-brand-primary transition-colors">
                    {ind.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {ind.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center text-xs font-bold text-brand-primary">
                  <span>Explore Industry Solutions</span>
                  <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeIndustries;
