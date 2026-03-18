import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

// Image imports
import prodManImg from '../assets/images/services/product-manufacturing.jpg';
import npdImg from '../assets/images/services/npd.jfif';
import feaImg from '../assets/images/services/fea.jfif';
import designImg from '../assets/images/services/design.jfif';
import prototypingImg from '../assets/images/services/prototyping.jfif';
import testingImg from '../assets/images/services/testing.jfif';
import tyreTestingImg from '../assets/images/services/tyre-testing.jpeg';

const services = [
  {
    title: 'Product Manufacturing',
    description: 'End-to-end development from conceptualization to mass production focusing on structural integrity and efficiency.',
    image: prodManImg,
    path: '/services/product-manufacturing',
    delay: 0.1
  },
  {
    title: 'New Product Development (NPD)',
    description: 'Accelerated innovation strategies utilizing a 7-step timeline to bring concepts successfully to the market.',
    image: npdImg,
    path: '/services/npd',
    delay: 0.2
  },
  {
    title: 'Finite Element Analysis (FEA)',
    description: 'Advanced virtual validation and stress simulation to refine designs before physical prototyping.',
    image: feaImg,
    path: '/services/fea',
    delay: 0.3
  },
  {
    title: 'Mechanical Engineering Design',
    description: 'Rigorous CAD modeling, material specification, and comprehensive mechanical engineering solutions.',
    image: designImg,
    path: '/services/design',
    delay: 0.4
  },
  {
    title: 'Manufacturing & Rapid Prototyping',
    description: 'Creating highly functional physical models using cutting-edge 3D printing and CNC machining.',
    image: prototypingImg,
    path: '/services/prototyping',
    delay: 0.5
  },
  {
    title: 'Testing, Inspection & Certification',
    description: 'Rigorous quality assurance, material testing, and compliance verification ensuring industry standards.',
    image: testingImg,
    path: '/services/testing',
    delay: 0.6
  },
  {
    title: 'Tyre Testing Machines',
    description: 'Specialized testing equipment and comprehensive lifecycle support for the tire industry.',
    image: tyreTestingImg,
    path: '/services/tyre-testing',
    delay: 0.7
  }
];

const EngineeringCarousel = () => {
  const [index, setIndex] = useState(0);
  const items = [
    { title: "Precision Driven", sub: "Industry Standard Excellence" },
    { title: "ISO Certified", sub: "Global Engineering Standards" },
    { title: "Innovation Led", sub: "Future-Ready Methodology" },
    { title: "Proven Expertise", sub: "20+ Years of Excellence" },
    { title: "Strategic Vision", sub: "Integrated Global Services" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % items.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [items.length]);

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center text-center">
      <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
      
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.5 }}
          className="relative px-4"
        >
          <h4 className="text-2xl font-black mb-2 uppercase tracking-tighter leading-tight">
            {items[index].title}
          </h4>
          <p className="text-white/80 text-sm font-semibold uppercase tracking-widest leading-snug">
            {items[index].sub}
          </p>
        </motion.div>
      </AnimatePresence>

      <div className="mt-8 flex justify-center gap-1.5 relative z-10">
        {items.map((_, i) => (
          <div 
            key={i} 
            className={`h-1.5 rounded-full transition-all duration-500 ${
              i === index ? 'w-6 bg-white' : 'w-1.5 bg-white/30'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

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
          <h2 className="text-brand-primary font-bold tracking-wider uppercase text-sm mb-3">Core Disciplines</h2>
          <p className="text-4xl leading-tight font-black tracking-tighter text-gray-900 sm:text-5xl mb-6">
            Engineering & Strategic Services
          </p>
          <div className="w-20 h-1.5 bg-brand-primary mx-auto mb-8 rounded-full"></div>
          <p className="max-w-2xl text-lg text-gray-600 mx-auto font-medium leading-relaxed">
            Our multi-disciplinary team delivers integrated engineering solutions, from concept visualization to comprehensive testing and manufacturing.
          </p>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: service.delay }}
              className="engineering-tile group"
            >
              <div className="bg-white border-2 border-gray-100 rounded-lg overflow-hidden h-full flex flex-col transition-all duration-300 hover:border-brand-primary hover:shadow-xl">
                <div className="relative h-48 overflow-hidden">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent"></div>
                </div>
                
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-brand-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-6 flex-grow font-medium">
                    {service.description}
                  </p>
                  
                  <div className="mt-auto">
                    <Link 
                      to={service.path} 
                      className="inline-flex items-center gap-2 text-brand-primary font-bold text-sm uppercase tracking-wider group/link"
                    >
                      Process Details
                      <svg className="w-4 h-4 transition-transform group-hover/link:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
          
          {/* Engineering Efficiency Mini-Carousel Tile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: 0.8 }}
            className="hidden xl:flex items-center justify-center p-8 bg-brand-primary rounded-lg text-white shadow-lg overflow-hidden relative group"
          >
            <EngineeringCarousel />
          </motion.div>
        </div>
      </div>
      
      {/* Strategic Vision Section */}
      <div className="bg-white border-y border-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-400 font-bold uppercase tracking-[0.2em] text-xs">AECS Engineering Standards • ISO Certified Methodology • Global Strategic Services</p>
        </div>
      </div>
    </section>
  );
};

export default Services;
