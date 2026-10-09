import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';

// Image imports matching previous design
import npdImg from '../assets/images/services/npd.jfif';
import feaImg from '../assets/images/services/fea.jfif';
import testingImg from '../assets/images/services/testing.jfif';
import prodManImg from '../assets/images/services/product-manufacturing.jpg';

const platforms = [
  {
    id: 'product-development',
    title: 'Advanced Product Engineering',
    tagline: 'Concept → Requirements → Design → Prototype → Validation → Production',
    image: npdImg,
    description: 'Guiding complex electromechanical, mobility, and industrial hardware from early conceptual trade studies to production-ready DFM and tooling.',
    capabilities: [
      'Requirements engineering & feasibility trade studies',
      '3D parametric solid & surface CAD modeling',
      'Tolerance stack-up analysis & kinematic simulation',
      'Design for Manufacturing (DFM) & Assembly (DFA)'
    ],
    link: '/services/npd',
    linkText: 'Explore Product Development',
    delay: 0.1
  },
  {
    id: 'simulation-digital',
    title: 'Simulation & Digital Engineering',
    tagline: 'FEA | CFD | Nonlinear Analysis | Optimization | Digital Twins',
    image: feaImg,
    description: 'Eliminating guesswork with high-fidelity finite element mechanics, transient computational fluid flow, and real-time predictive digital twins.',
    capabilities: [
      'Structural linear & nonlinear FEA (Abaqus & ANSYS)',
      'Hyperelastic rubber & composite failure modeling',
      'Aerodynamic drag, conjugate heat transfer & CFD',
      'Sensor-coupled digital twin telemetry & fatigue forecasting'
    ],
    link: '/services/fea',
    linkText: 'Explore Simulation & FEA',
    delay: 0.2
  },
  {
    id: 'materials-testing',
    title: 'Materials & Dynamic Testing',
    tagline: 'Composites | Elastomers | Rubber | Carbon Fiber | Testing & Validation',
    image: testingImg,
    description: 'Decades of scientific mastery in hyperelastic polymers, carbon fiber architectures, and automated testing rig commissioning.',
    capabilities: [
      'Elastomer compound characterization & strain-energy fitting',
      'Carbon-fiber & lightweight composite structural design',
      'High-speed tire uniformity & endurance dynamometers (Poling Group)',
      'Product certification & regulatory compliance (ISO, ASTM, OSHA)'
    ],
    link: '/materials',
    linkText: 'Explore Materials & Testing',
    delay: 0.3
  },
  {
    id: 'prototype-manufacturing',
    title: 'Prototype-to-Manufacturing',
    tagline: 'Rapid Prototypes | Tooling | Process Development | Supplier Integration',
    image: prodManImg,
    description: 'Physical manifestation of engineered designs through rapid additive prototyping, precision CNC tooling, and batch manufacturing.',
    capabilities: [
      'Functional 3D printed & urethane cast proof-of-concept parts',
      'Custom tooling, mold design & vulcanization fixtures',
      'Pilot-batch manufacturing & supplier quality auditing',
      'End-to-end technical production supervision'
    ],
    link: '/services/product-manufacturing',
    linkText: 'Explore Manufacturing',
    delay: 0.4
  }
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="section-padding text-center max-w-3xl mx-auto mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-brand-primary font-bold tracking-wider uppercase text-sm mb-3">
            Core Disciplines
          </h2>
          <p className="text-4xl leading-tight font-black tracking-tighter text-gray-900 sm:text-5xl mb-6">
            Engineering & Strategic Services
          </p>
          <div className="w-20 h-1.5 bg-brand-primary mx-auto mb-8 rounded-full"></div>
          <p className="max-w-2xl text-lg text-gray-600 mx-auto font-medium leading-relaxed">
            Our multi-disciplinary team delivers integrated engineering solutions, from concept visualization to comprehensive testing and manufacturing.
          </p>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {platforms.map((service) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: service.delay }}
              className="engineering-tile group"
            >
              <div className="bg-white border-2 border-gray-100 rounded-lg overflow-hidden h-full flex flex-col transition-all duration-300 hover:border-brand-primary hover:shadow-xl">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 via-gray-900/10 to-transparent"></div>
                </div>

                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-brand-primary transition-colors duration-300">
                    {service.title}
                  </h3>

                  <p className="text-[11px] font-bold text-brand-primary uppercase tracking-wider mb-3 leading-snug">
                    {service.tagline}
                  </p>

                  <p className="text-sm text-gray-600 leading-relaxed mb-4 font-medium">
                    {service.description}
                  </p>

                  <div className="space-y-2 pt-3 border-t border-gray-100 mb-6 flex-grow">
                    {service.capabilities.map((cap, cIdx) => (
                      <div key={cIdx} className="flex items-start gap-2 text-xs text-gray-700 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-auto pt-2">
                    <Link
                      to={service.link}
                      className="inline-flex items-center gap-2 text-brand-primary font-bold text-sm uppercase tracking-wider group/link hover:text-red-700 transition-colors"
                    >
                      <span>{service.linkText}</span>
                      <svg className="w-4 h-4 transition-transform group-hover/link:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <Link
            to="/services"
            className="btn-primary py-3.5 px-8 rounded-xl font-bold text-sm sm:text-base inline-flex items-center gap-2 shadow-lg"
          >
            <span>Explore All Engineering Services</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
